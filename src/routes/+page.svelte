<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import TechTimeline from '$lib/components/TechTimeline.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Tushar Saurabh — SRE</title>
	<meta name="description" content="Site Reliability Engineer specialising in DevOps, Cloud Infrastructure, and System Automation." />
	<meta property="og:title" content="Tushar Saurabh — SRE" />
	<meta property="og:description" content="Site Reliability Engineer at Chubb. DevOps · Cloud · Automation." />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Navigation />

<main class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
	<Hero />

	<div id="tech" class="scroll-mt-12">
		<TechTimeline data={data.timeline} />
	</div>

	<div id="projects" class="scroll-mt-12">
		<Projects projects={data.projects} />
	</div>

	<footer class="py-8 px-4 border-t border-slate-200 dark:border-slate-800">
		<div class="max-w-[600px] mx-auto flex items-center justify-between">
			<span class="font-mono text-xs text-slate-400">Tushar Saurabh</span>
			<div class="flex items-center gap-4 font-mono text-xs text-slate-400">
				<a href="https://github.com/tusharacc" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
				<a href="https://linkedin.com/in/tushar-saurabh-49ba8a63" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
				<a href="https://blogs.tusharsaurabh.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a>
			</div>
		</div>
	</footer>
</main>
