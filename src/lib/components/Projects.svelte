<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import type { Project } from '$lib/server/github';

	let { projects }: { projects: Project[] } = $props();

	const LANG_COLOR: Record<string, { bg: string; fg: string }> = {
		Python:      { bg: '#0a1929', fg: '#60a5fa' },
		JavaScript:  { bg: '#1a1400', fg: '#fbbf24' },
		TypeScript:  { bg: '#091225', fg: '#93c5fd' },
		Ruby:        { bg: '#1a0505', fg: '#f87171' },
		Shell:       { bg: '#011408', fg: '#34d399' },
		Swift:       { bg: '#1a0800', fg: '#fb923c' },
		'C#':        { bg: '#100818', fg: '#c084fc' },
		CSS:         { bg: '#1a0311', fg: '#f472b6' },
		HTML:        { bg: '#180c00', fg: '#fdba74' },
		Go:          { bg: '#001a1f', fg: '#22d3ee' },
		'C++':       { bg: '#0c0e14', fg: '#94a3b8' },
		Svelte:      { bg: '#1a0600', fg: '#ff7043' },
	};

	function chipStyle(lang: string): string {
		const p = LANG_COLOR[lang] ?? { bg: '#0c0e14', fg: '#94a3b8' };
		return `background:${p.bg};color:${p.fg};border-color:${p.fg}40`;
	}

	function formatDate(iso: string): string {
		return new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
	}
</script>

<section class="py-14 px-4">
	<div class="max-w-[600px] mx-auto">
		<div class="mb-8 flex items-center gap-3">
			<span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/50">02</span>
			<span class="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">Recent Projects</span>
			<span class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span>
		</div>

		<ul class="space-y-3">
			{#each projects as project}
				<li>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="project-card group flex items-start justify-between gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 bg-white/80 dark:bg-slate-950/60 transition-all duration-200"
					>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2 mb-1">
								<span class="font-mono text-sm font-semibold text-gray-900 dark:text-white truncate">
									{project.name}
								</span>
								{#if project.language}
									<span
										class="shrink-0 font-mono text-[9px] px-1.5 py-0.5 rounded border"
										style={chipStyle(project.language)}
									>
										{project.language}
									</span>
								{/if}
							</div>
							{#if project.description}
								<p class="text-sm text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
									{project.description}
								</p>
							{/if}
						</div>
						<div class="shrink-0 flex flex-col items-end gap-2 pt-0.5">
							<ExternalLink size={14} class="text-slate-400 group-hover:text-amber-500 transition-colors" />
							<span class="font-mono text-[10px] text-slate-400">{formatDate(project.updatedAt)}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
