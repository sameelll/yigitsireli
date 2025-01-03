<script setup lang="ts">
import { Award, Scale, Users } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    }
  })

  tl.from('.about-title', {
    y: 30,
    opacity: 0,
    duration: 0.8
  })
  .from('.about-description', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.about-image', {
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.feature-card', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  }, '-=0.5')
})
</script>

<template>
  <section id="about" class="about-section relative py-12 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Header with Image -->
      <div class="flex flex-col items-center mb-8">
        <div class="about-image relative w-48 h-48 mb-8">
          <div class="relative rounded-full overflow-hidden shadow-lg">
            <img 
              src="../assets/images/download.webp" 
              alt="Av. Yiğit Şireli" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-blue-900/10 dark:bg-blue-900/20"></div>
          </div>
        </div>
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <h2 class="about-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Hukuki Uzmanlık ve Güvenilirlik
          </h2>
          <p class="about-description text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            20 yılı aşkın deneyimimle, müvekkillerimin haklarını korumak ve en iyi hukuki çözümleri sunmak için çalışıyorum. Her davaya özel yaklaşım ve profesyonel hizmet anlayışıyla yanınızdayım.
          </p>
        </div>
      </div>

      <!-- Compact Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <!-- Experience Card -->
        <div class="feature-card group p-4 rounded-lg bg-gray-50 dark:bg-[#1a365d]/20 border border-gray-100 dark:border-[#1a365d]/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-[#1a365d]/30 transition-all duration-300">
          <div class="flex items-center gap-3 mb-2">
            <Award class="h-6 w-6 text-[#1a365d] dark:text-blue-400 flex-shrink-0" />
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">20+ Yıl Deneyim</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">Uzun yıllara dayanan tecrübemle hukuki süreçlerinizde güvenilir çözümler sunuyorum.</p>
        </div>

        <!-- Expertise Card -->
        <div class="feature-card group p-4 rounded-lg bg-gray-50 dark:bg-[#1a365d]/20 border border-gray-100 dark:border-[#1a365d]/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-[#1a365d]/30 transition-all duration-300">
          <div class="flex items-center gap-3 mb-2">
            <Scale class="h-6 w-6 text-[#1a365d] dark:text-blue-400 flex-shrink-0" />
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Uzman Hukuki Danışmanlık</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">Geniş uzmanlık alanlarımla her türlü hukuki sorununuza profesyonel çözümler üretiyorum.</p>
        </div>

        <!-- Client Focus Card -->
        <div class="feature-card group p-4 rounded-lg bg-gray-50 dark:bg-[#1a365d]/20 border border-gray-100 dark:border-[#1a365d]/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-[#1a365d]/30 transition-all duration-300">
          <div class="flex items-center gap-3 mb-2">
            <Users class="h-6 w-6 text-[#1a365d] dark:text-blue-400 flex-shrink-0" />
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Müvekkil Odaklı Yaklaşım</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">Her müvekkilimin ihtiyaçlarını özenle dinliyor ve kişiselleştirilmiş hizmet sunuyorum.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  transition: transform 0.3s ease-out;
}

.feature-card:hover {
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .feature-card {
    transition: none;
    transform: none !important;
  }
}
</style> 