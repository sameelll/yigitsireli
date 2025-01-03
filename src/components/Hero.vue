<script setup lang="ts">
import { Phone, BookOpen } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  
  tl.from('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.8
  })
  .from('.hero-title', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.hero-description', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.hero-buttons', {
    y: 20,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
})
</script>

<template>
  <section class="relative min-h-screen flex items-center">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
        alt="Turkish Law Background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gray-900/70 dark:bg-gray-900/80"></div>
    </div>
    
    <!-- Content -->
    <div class="container relative mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div class="flex flex-col gap-8 md:gap-12 max-w-xl">
        <!-- Top Content -->
        <div class="space-y-6 text-center md:text-left">
          <div class="hero-badge inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 mx-auto md:mx-0 border border-blue-100/20 dark:border-gray-700/20 backdrop-blur-sm">
            <span class="text-xs sm:text-sm font-medium whitespace-nowrap">İstanbul Barosu Üyesi</span>
          </div>
          
          <h1 class="hero-title text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span class="inline-block">Av. Yiğit</span> <span class="inline-block">Şireli</span>
          </h1>
          
          <p class="hero-description text-pretty text-lg sm:text-xl text-gray-200 leading-relaxed mx-auto md:mx-0">
            20 yılı aşkın tecrübemle, hukuki haklarınızı korumak ve en iyi sonuçları elde etmek için yanınızdayım.
          </p>
        </div>
        
        <!-- Buttons -->
        <div class="hero-buttons flex flex-col gap-3 sm:gap-4 max-w-xs mx-auto md:max-w-none md:mx-0 md:flex-row">
          <a href="#contact" class="will-change-transform w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base sm:text-lg font-semibold text-white bg-blue-600/90 hover:bg-blue-600 rounded-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm">
            <Phone class="h-5 w-5 flex-shrink-0" />
            <span class="whitespace-nowrap">İletişime Geçin</span>
          </a>
          <a href="#expertise" class="will-change-transform w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base sm:text-lg font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <BookOpen class="h-5 w-5 flex-shrink-0" />
            <span class="whitespace-nowrap">Uzmanlık Alanları</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optimize performance */
.hero-title,
.hero-description {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Prevent layout shifts */
.hero-buttons a {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  .hero-buttons a {
    transition: none;
    transform: none !important;
  }
}
</style> 