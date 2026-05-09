<script lang="ts">
  import { ChevronDown, Download, Mail, ExternalLink } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });

  function scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section id="home" class="min-h-screen flex items-center justify-center pt-16">
  <div class="container">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Main Content -->
      <div class="space-y-8">
        <!-- Greeting -->
        <div class="space-y-4" class:opacity-0={!mounted} class:translate-y-8={!mounted} class:transition-all={mounted} class:duration-1000={mounted}>
          <div class="text-primary-600 dark:text-primary-400 font-medium text-lg">
            👋 Hello, I'm
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Tushar Saurabh
          </h1>
        </div>

        <!-- Title & Description -->
        <div class="space-y-6" class:opacity-0={!mounted} class:translate-y-8={!mounted} class:transition-all={mounted} class:duration-1000={mounted} class:delay-300={mounted}>
          <h2 class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
            Site Reliability Engineer at Chubb
          </h2>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Specializing in DevOps, Cloud Infrastructure, and System Automation<br/>
            <span class="text-primary-600 dark:text-primary-400 font-medium">6+ years</span> of experience building resilient, scalable systems
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" class:opacity-0={!mounted} class:translate-y-8={!mounted} class:transition-all={mounted} class:duration-1000={mounted} class:delay-600={mounted}>
          <a 
            href="#projects" 
            class="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            <ExternalLink size={18} />
            View My Work
          </a>
          <a 
            href="#contact" 
            class="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <button 
            type="button"
            class="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>

        <!-- Scroll Indicator -->
        <div class="pt-12" class:opacity-0={!mounted} class:translate-y-8={!mounted} class:transition-all={mounted} class:duration-1000={mounted} class:delay-900={mounted}>
          <button 
            onclick={scrollToAbout}
            class="mx-auto block text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      <!-- Background Decoration -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .transition-all {
    transition-property: opacity, transform;
  }
</style>