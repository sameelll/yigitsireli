<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  // After scrolling, update the URL to root
  setTimeout(() => {
    window.history.pushState({}, '', '/')
  }, 500) // Wait for scroll animation to complete
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-2"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 rounded-xl bg-[#1a365d] dark:bg-blue-600/20 shadow-lg hover:shadow-xl backdrop-blur-sm border border-transparent dark:border-blue-500/20 text-white dark:text-blue-400 hover:bg-[#2c5282] dark:hover:bg-blue-600/30 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 z-50"
      aria-label="Yukarı Çık"
    >
      <ArrowUp class="h-5 w-5" />
    </button>
  </Transition>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  button {
    transform: none !important;
    transition: none !important;
  }
}
</style> 