<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Expertise from './components/Expertise.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const isDarkMode = ref(false)

// Check system preference and localStorage on mount
onMounted(() => {
  // Check localStorage first
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    // If no saved preference, check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply initial theme
  updateTheme()

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only update if user hasn't manually set a preference
      isDarkMode.value = e.matches
    }
  })
})

// Watch for changes and update theme
watch(isDarkMode, () => {
  updateTheme()
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
})

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#1a1f2d] transition-colors duration-300">
    <Navbar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
    <Hero />
    <About />
    <Expertise />
    <ScrollToTop />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 64px; /* This matches the navbar height (h-16) */
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
