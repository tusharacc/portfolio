<script lang="ts">
  import '../app.css';
  import '$lib/stores/theme';

  let { children } = $props();
</script>

<svelte:head>
  <title>Tushar Saurabh - Site Reliability Engineer</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
  {@render children?.()}
</div>
