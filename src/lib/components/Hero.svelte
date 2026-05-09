<script lang="ts">
	import { Github, Linkedin, FileText } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<section id="home" class="min-h-[60vh] flex items-center justify-center pt-16 px-4">
	<div class="max-w-2xl w-full">
		<div
			class="space-y-3 transition-all duration-700"
			class:opacity-0={!mounted}
			class:translate-y-4={!mounted}
		>
			<p class="font-mono text-xs tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">
				Site Reliability Engineer
			</p>
			<h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
				Tushar Saurabh
			</h1>
			<p class="text-lg text-slate-500 dark:text-slate-400 font-mono">
				Chubb · DevOps · Cloud · Automation
			</p>

			<div class="flex items-center gap-5 pt-4">
				<a
					href="https://github.com/tusharacc"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					aria-label="GitHub"
				>
					<Github size={18} />
					<span>GitHub</span>
				</a>
				<a
					href="https://linkedin.com/in/tushar-saurabh-49ba8a63"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					aria-label="LinkedIn"
				>
					<Linkedin size={18} />
					<span>LinkedIn</span>
				</a>
				<a
					href="https://blogs.tusharsaurabh.com"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					aria-label="Blog"
				>
					<FileText size={18} />
					<span>Blog</span>
				</a>
			</div>
		</div>
	</div>
</section>
