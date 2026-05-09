<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { darkMode } from '$lib/stores/theme';

	function toggleDarkMode() {
		darkMode.update(n => !n);
	}
</script>

<nav class="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50">
	<div class="max-w-[600px] mx-auto px-4 flex items-center justify-between h-12">
		<a href="#home" class="font-mono text-sm font-semibold text-gray-900 dark:text-white">
			ts
		</a>
		<div class="flex items-center gap-6">
			<a href="#tech" class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">tech</a>
			<a href="#projects" class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">projects</a>
			<button
				onclick={toggleDarkMode}
				class="text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
				aria-label="Toggle dark mode"
			>
				{#if $darkMode}
					<Sun size={15} />
				{:else}
					<Moon size={15} />
				{/if}
			</button>
		</div>
	</div>
</nav>
