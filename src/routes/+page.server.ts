import { getPortfolioData } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	try {
		return await getPortfolioData();
	} catch (err) {
		console.error('GitHub API fetch failed at build time:', err);
		return { timeline: [], projects: [] };
	}
};
