<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

defineProps<{
  isDarkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-dark-mode'): void
}>()

const isMenuOpen = ref(false)

const handleScroll = (e: Event, href: string) => {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const targetElement = document.getElementById(targetId)
  
  if (targetElement) {
    const navbarHeight = 64 // This is h-16 in pixels
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
  
  // Close mobile menu if open
  isMenuOpen.value = false
}

const navItems = [
  { name: 'Hakkımda', href: '#about' },
  { name: 'Uzmanlık Alanları', href: '#expertise' },
  { name: 'Müvekkil Görüşleri', href: '#testimonials' },
  { name: 'İletişim', href: '#contact' },
]
</script>

<template>
  <nav class="fixed w-full bg-gray-200 dark:bg-gray-900 shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a @click="(e) => handleScroll(e, '#home')" href="#home" class="flex-shrink-0 flex items-center">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Av. Yiğit Şireli
            </h1>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="flex space-x-6">
            <a v-for="item in navItems" 
               :key="item.name" 
               :href="item.href"
               @click="(e) => handleScroll(e, item.href)"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
              {{ item.name }}
            </a>
          </div>
          <button @click="emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-white/95 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <Sun v-if="isDarkMode" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button @click="emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-white/95 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 mr-2">
            <Sun v-if="isDarkMode" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>
          <button @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white/95 dark:hover:bg-gray-800 transition-colors duration-200">
            <Menu v-if="!isMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="md:hidden bg-gray-200 dark:bg-gray-900">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navItems" 
           :key="item.name" 
           :href="item.href"
           @click="(e) => handleScroll(e, item.href)"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/95 dark:hover:bg-gray-800 transition-colors duration-200">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template> 