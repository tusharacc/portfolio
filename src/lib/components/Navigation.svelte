<script lang="ts">
  import { Menu, X, Moon, Sun, Github, Linkedin, FileText, Mail } from 'lucide-svelte';
  import { darkMode } from '$lib/stores/theme';

  let mobileMenuOpen = false;

  function toggleDarkMode() {
    darkMode.update(n => !n);
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
</script>

<nav class="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
  <div class="container">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#home" class="font-bold text-xl text-gray-900 dark:text-white">
        Tushar Saurabh
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a 
            href={item.href} 
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {item.name}
          </a>
        {/each}
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center space-x-4">
        <a 
          href="https://github.com/tusharacc" 
          target="_blank" 
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com/in/tushar-saurabh-49ba8a63" 
          target="_blank" 
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://tusharacc.github.io/what-i-learnt" 
          target="_blank" 
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Technical Blog"
        >
          <FileText size={20} />
        </a>
        <button 
          onclick={toggleDarkMode}
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {#if $darkMode}
            <Sun size={20} />
          {:else}
            <Moon size={20} />
          {/if}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        onclick={toggleMobileMenu}
        class="md:hidden text-gray-700 dark:text-gray-300"
        aria-label="Toggle Mobile Menu"
      >
        {#if mobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        {#each navItems as item}
          <a 
            href={item.href} 
            onclick={toggleMobileMenu}
            class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {item.name}
          </a>
        {/each}
        
        <div class="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
          <a 
            href="https://github.com/tusharacc" 
            target="_blank" 
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/tushar-saurabh-49ba8a63" 
            target="_blank" 
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://tusharacc.github.io/what-i-learnt" 
            target="_blank" 
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Technical Blog"
          >
            <FileText size={20} />
          </a>
          <button 
            onclick={toggleDarkMode}
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {#if $darkMode}
              <Sun size={20} />
            {:else}
              <Moon size={20} />
            {/if}
          </button>
        </div>
      </div>
    {/if}
  </div>
</nav>