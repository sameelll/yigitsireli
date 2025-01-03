<script setup lang="ts">
import { 
  Building2, 
  Scale, 
  Briefcase, 
  FileText, 
  Users2, 
  ScrollText,
  ArrowRight
} from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const expertiseAreas = [
  {
    icon: Building2,
    title: 'Şirketler Hukuku',
    description: 'Şirket kuruluşu, birleşme, devralma ve ticari sözleşmeler konularında danışmanlık.',
  },
  {
    icon: Scale,
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında savunma ve hukuki danışmanlık hizmetleri.',
  },
  {
    icon: Briefcase,
    title: 'İş Hukuku',
    description: 'İşçi-işveren ilişkileri, iş sözleşmeleri ve işe iade davaları.',
  },
  {
    icon: FileText,
    title: 'Sözleşmeler Hukuku',
    description: 'Her türlü sözleşme hazırlanması ve hukuki danışmanlık.',
  },
  {
    icon: Users2,
    title: 'Aile Hukuku',
    description: 'Boşanma, nafaka, velayet ve miras davaları konularında destek.',
  },
  {
    icon: ScrollText,
    title: 'Arabuluculuk',
    description: 'Uyuşmazlıkların çözümünde arabuluculuk hizmetleri.',
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.expertise-section',
      start: 'top center+=100',
      toggleActions: 'play none none none'
    }
  })

  gsap.set(['.expertise-title', '.expertise-description', '.expertise-card'], {
    opacity: 0,
    y: 30
  })

  tl.to('.expertise-title', {
    y: 0,
    opacity: 1,
    duration: 0.8
  })
  .to('.expertise-description', {
    y: 0,
    opacity: 1,
    duration: 0.8
  }, '-=0.5')
  .to('.expertise-card', {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.5')
})
</script>

<template>
  <section id="expertise" class="expertise-section relative py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="expertise-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Uzmanlık Alanları
        </h2>
        <p class="expertise-description text-base md:text-lg text-gray-600 dark:text-gray-300">
          Geniş kapsamlı hukuki hizmetler sunarak, müvekkillerimin her türlü hukuki ihtiyacında yanlarında oluyorum.
        </p>
      </div>

      <!-- Expertise Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="(area, index) in expertiseAreas" 
          :key="index"
          class="expertise-card group relative p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-start gap-3 sm:gap-4 pr-8">
            <div class="p-2 rounded-lg bg-white dark:bg-gray-700">
              <component 
                :is="area.icon" 
                class="h-6 w-6 text-[#1a365d] dark:text-blue-400"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {{ area.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ area.description }}
              </p>
            </div>
          </div>
          
          <!-- Hover Arrow -->
          <div class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight class="h-5 w-5 text-[#1a365d] dark:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-card {
  border: 1px solid transparent;
}

.expertise-card:hover {
  border-color: #e2e8f0;
}

:root.dark .expertise-card:hover {
  border-color: #2d3748;
}

@media (prefers-reduced-motion: reduce) {
  .expertise-card {
    transition: none;
  }
  
  .expertise-card:hover .absolute {
    transition: none;
    transform: none;
  }
}
</style> 