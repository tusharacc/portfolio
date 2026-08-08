<script lang="ts">
  import '../app.css';
  import '$lib/stores/theme';

  let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
  {@render children?.()}
</div>
