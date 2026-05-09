import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const darkMode = writable(false);

if (browser) {
  const stored = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? JSON.parse(stored) : prefersDark;
  
  darkMode.set(isDark);
  if (isDark) {
    document.documentElement.classList.add('dark');
  }

  darkMode.subscribe((value) => {
    localStorage.setItem('darkMode', JSON.stringify(value));
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}