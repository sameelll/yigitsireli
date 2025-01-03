<script setup lang="ts">
import { Award, Scale, Users } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Enable hardware acceleration
  gsap.config({ force3D: true })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top center+=100',
      toggleActions: 'play none none none',
      fastScrollEnd: true,
      preventOverlaps: true,
      markers: false,
      once: true // Only play animation once
    }
  })

  // Cache elements for better performance
  const elements = {
    title: document.querySelector('.about-title'),
    description: document.querySelector('.about-description'),
    image: document.querySelector('.about-image'),
    cards: gsap.utils.toArray('.feature-card')
  }

  // Set initial states in one batch
  gsap.set([elements.title, elements.description], {
    opacity: 0,
    y: 15,
    force3D: true
  })

  gsap.set(elements.image, {
    opacity: 0,
    scale: 0.95,
    force3D: true
  })

  gsap.set(elements.cards, {
    opacity: 0,
    y: 15,
    force3D: true
  })

  // Optimized animation timeline
  tl.to(elements.title, {
    y: 0,
    opacity: 1,
    duration: 0.3,
    ease: 'power2.out',
    force3D: true
  })
  .to(elements.description, {
    y: 0,
    opacity: 1,
    duration: 0.3,
    ease: 'power2.out',
    force3D: true
  }, '-=0.1')
  .to(elements.image, {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
    force3D: true,
    clearProps: 'transform'
  }, '-=0.2')
  .to(elements.cards, {
    y: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.05,
    ease: 'power2.out',
    force3D: true,
    clearProps: 'transform'
  }, '-=0.1')
})
</script>

<template>
  <section 
    id="about" 
    class="about-section relative py-12 bg-white dark:bg-gray-900"
    style="contain: content"
  >
    <div 
      class="container mx-auto px-4"
      style="contain: layout style"
    >
      <!-- Header with Image -->
      <div class="flex flex-col items-center mb-8">
        <div 
          class="about-image relative w-48 h-48 mb-8"
          style="will-change: transform, opacity"
        >
          <div class="relative rounded-full overflow-hidden shadow-lg">
            <img 
              src="../assets/images/download.webp" 
              alt="Av. Yiğit Şireli" 
              class="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div 
              class="absolute inset-0 bg-blue-900/10 dark:bg-blue-900/20"
              style="will-change: opacity"
            ></div>
          </div>
        </div>
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <h2 
            class="about-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            style="will-change: transform, opacity"
          >
            Hukuki Uzmanlık ve Güvenilirlik
          </h2>
          <p 
            class="about-description text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            style="will-change: transform, opacity"
          >
            20 yılı aşkın deneyimimle, müvekkillerimin haklarını korumak ve en iyi hukuki çözümleri sunmak için çalışıyorum. Her davaya özel yaklaşım ve profesyonel hizmet anlayışıyla yanınızdayım.
          </p>
        </div>
      </div>

      <!-- Compact Feature Cards -->
      <div 
        class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        style="contain: layout"
      >
        <!-- Experience Card -->
        <div 
          v-for="(feature, index) in [
            {
              icon: Award,
              title: '20+ Yıl Deneyim',
              description: 'Uzun yıllara dayanan tecrübemle hukuki süreçlerinizde güvenilir çözümler sunuyorum.'
            },
            {
              icon: Scale,
              title: 'Uzman Hukuki Danışmanlık',
              description: 'Geniş uzmanlık alanlarımla her türlü hukuki sorununuza profesyonel çözümler üretiyorum.'
            },
            {
              icon: Users,
              title: 'Müvekkil Odaklı Yaklaşım',
              description: 'Her müvekkilimin ihtiyaçlarını özenle dinliyor ve kişiselleştirilmiş hizmet sunuyorum.'
            }
          ]"
          :key="index"
          class="feature-card group p-4 rounded-lg bg-gray-50 dark:bg-[#1a365d]/20 border border-gray-100 dark:border-[#1a365d]/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-[#1a365d]/30 transition-all duration-300"
          style="will-change: transform; transform: translateZ(0); contain: content"
        >
          <div class="flex items-center gap-3 mb-2">
            <component 
              :is="feature.icon" 
              class="h-6 w-6 text-[#1a365d] dark:text-blue-400 flex-shrink-0"
            />
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">{{ feature.title }}</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  backface-visibility: hidden;
  perspective: 1000px;
}

.feature-card:hover {
  transform: translateY(-3px) translateZ(0);
}

@media (prefers-reduced-motion: reduce) {
  .feature-card {
    transition: none !important;
    transform: none !important;
  }
  
  .feature-card:hover {
    transform: none !important;
  }
}
</style> 