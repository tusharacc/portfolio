const GITHUB_USER = 'tusharacc';
const EXCLUDED_REPOS = new Set(['portfolio', 'tusharacc.github.io', 'what-i-learnt']);

export interface YearEntry {
	year: number;
	langs: string[];
}

export interface Project {
	name: string;
	description: string | null;
	language: string | null;
	url: string;
	updatedAt: string;
}

interface GithubRepo {
	name: string;
	description: string | null;
	language: string | null;
	html_url: string;
	updated_at: string;
	created_at: string;
	fork: boolean;
}

async function fetchRepos(): Promise<GithubRepo[]> {
	const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
	const token = process.env.GITHUB_TOKEN;
	if (token) headers['Authorization'] = `Bearer ${token}`;

	const res = await fetch(
		`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
		{ headers }
	);

	if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
	return res.json();
}

export async function getPortfolioData(): Promise<{ timeline: YearEntry[]; projects: Project[] }> {
	const allRepos = await fetchRepos();

	// Non-fork, non-excluded repos only
	const ownRepos = allRepos.filter(r => !r.fork && !EXCLUDED_REPOS.has(r.name));

	// Top 5 by updated_at (already sorted by API)
	const projects: Project[] = ownRepos.slice(0, 5).map(r => ({
		name: r.name,
		description: r.description,
		language: r.language,
		url: r.html_url,
		updatedAt: r.updated_at
	}));

	// Group primary language by created_at year
	const byYear = new Map<number, Set<string>>();
	for (const repo of ownRepos) {
		if (!repo.language) continue;
		const year = new Date(repo.created_at).getFullYear();
		if (!byYear.has(year)) byYear.set(year, new Set());
		byYear.get(year)!.add(repo.language);
	}

	const timeline: YearEntry[] = Array.from(byYear.entries())
		.sort(([a], [b]) => a - b)
		.map(([year, langs]) => ({ year, langs: Array.from(langs) }));

	return { timeline, projects };
}
