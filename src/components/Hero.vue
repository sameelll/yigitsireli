<script setup lang="ts">
import { Phone, BookOpen } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'

const scrollToSection = (e: Event, sectionId: string) => {
  e.preventDefault()
  const element = document.getElementById(sectionId)
  if (element) {
    const navbarHeight = 64
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  // Enable hardware acceleration
  gsap.config({ force3D: true })
  
  const tl = gsap.timeline({ 
    defaults: { 
      ease: 'power2.out',
      force3D: true,
      duration: 0.4
    }
  })
  
  // Cache elements for better performance
  const elements = {
    badge: document.querySelector('.hero-badge'),
    title: document.querySelector('.hero-title'),
    description: document.querySelector('.hero-description'),
    buttons: document.querySelector('.hero-buttons')
  }

  // Set initial states in one batch
  gsap.set([elements.badge, elements.title, elements.description, elements.buttons], {
    opacity: 0,
    y: 20,
    force3D: true
  })
  
  // Optimized animation timeline
  tl.to(elements.badge, {
    y: 0,
    opacity: 1,
  })
  .to(elements.title, {
    y: 0,
    opacity: 1,
  }, '-=0.2')
  .to(elements.description, {
    y: 0,
    opacity: 1,
  }, '-=0.2')
  .to(elements.buttons, {
    y: 0,
    opacity: 1,
    clearProps: 'transform'
  }, '-=0.2')
})
</script>

<template>
  <section 
    id="home" 
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    style="contain: content"
  >
    <!-- Background Image with Overlay -->
    <div 
      class="absolute inset-0"
      style="contain: strict"
    >
      <img 
        src="../assets/images/law-background.webp"
        alt="Turkish Law Background" 
        class="w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
      <div 
        class="absolute inset-0 bg-gray-900/70 dark:bg-gray-900/80"
        style="will-change: opacity"
      ></div>
    </div>
    
    <!-- Content -->
    <div 
      class="container relative mx-auto px-4 py-8 sm:py-12 md:py-16"
      style="contain: layout style"
    >
      <div class="flex flex-col gap-8 md:gap-12 max-w-xl">
        <!-- Top Content -->
        <div class="space-y-6 text-center md:text-left">
          <div 
            class="hero-badge inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 mx-auto md:mx-0 border border-blue-100/20 dark:border-gray-700/20 backdrop-blur-sm"
            style="will-change: transform, opacity"
          >
            <span class="text-xs sm:text-sm font-medium whitespace-nowrap">İstanbul Barosu Üyesi</span>
          </div>
          
          <h1 
            class="hero-title text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style="will-change: transform, opacity"
          >
            <span class="inline-block">Av. Yiğit</span> <span class="inline-block">Şireli</span>
          </h1>
          
          <p 
            class="hero-description text-pretty text-lg sm:text-xl text-gray-200 leading-relaxed mx-auto md:mx-0"
            style="will-change: transform, opacity"
          >
            20 yılı aşkın tecrübemle, hukuki haklarınızı korumak ve en iyi sonuçları elde etmek için yanınızdayım.
          </p>
        </div>
        
        <!-- Buttons -->
        <div 
          class="hero-buttons flex flex-col gap-3 sm:gap-4 max-w-xs mx-auto md:max-w-none md:mx-0 md:flex-row"
          style="will-change: transform, opacity"
        >
          <a 
            href="#contact" 
            @click="(e) => scrollToSection(e, 'contact')"
            class="group relative w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base sm:text-lg font-semibold text-white bg-[#1a365d] rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-gray-900 transform-gpu transition-all duration-200 ease-out"
            aria-label="İletişime Geçin"
          >
            <span 
              class="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-[#1a365d] to-[#2c5282] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
              style="will-change: opacity"
            ></span>
            <Phone class="h-5 w-5 flex-shrink-0 relative" aria-hidden="true" />
            <span class="relative whitespace-nowrap">İletişime Geçin</span>
          </a>
          <a 
            href="#expertise" 
            @click="(e) => scrollToSection(e, 'expertise')"
            class="group relative w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base sm:text-lg font-semibold text-white bg-[#8B7355]/20 rounded-xl border border-[#8B7355]/30 backdrop-blur-sm hover:bg-[#8B7355]/30 focus:outline-none focus:ring-2 focus:ring-[#8B7355]/50 focus:ring-offset-2 focus:ring-offset-gray-900 transform-gpu transition-all duration-200 ease-out"
            aria-label="Uzmanlık Alanları"
          >
            <BookOpen class="h-5 w-5 flex-shrink-0 relative" aria-hidden="true" />
            <span class="relative whitespace-nowrap">Uzmanlık Alanları</span>
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
  transform: translateZ(0);
}

/* Performance optimizations for buttons */
.hero-buttons a {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000px;
  contain: content;
}

/* Active state for buttons */
.hero-buttons a:active {
  transform: translateY(1px) scale(0.99);
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .hero-buttons a {
    transition: none !important;
    transform: none !important;
  }
  
  .hero-buttons a:active {
    transform: none !important;
  }
  
  .group:hover .absolute {
    transition: none !important;
  }
}
</style> 