<script setup lang="ts">
import { 
  Building2, 
  Scale, 
  Briefcase, 
  FileText, 
  Users2, 
  ScrollText,
  X
} from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Add interface for expertise type
interface Expertise {
  icon: any
  title: string
  description: string
  details: string[]
}

const selectedExpertise = ref<Expertise | null>(null)
const isModalOpen = ref(false)
const hasAnimated = ref(localStorage.getItem('expertiseAnimated') === 'true')

const expertiseAreas = [
  {
    icon: Building2,
    title: 'Şirketler Hukuku',
    description: 'Şirket kuruluşu, birleşme, devralma ve ticari sözleşmeler konularında kapsamlı hukuki danışmanlık hizmetleri sunuyorum.',
    details: [
      'Şirket kuruluş işlemleri ve danışmanlığı',
      'Şirket birleşme ve devralma süreçleri',
      'Ticari sözleşmelerin hazırlanması ve müzakeresi',
      'Şirket yönetim ve organizasyon danışmanlığı',
      'Ortaklık anlaşmazlıklarının çözümü',
      'Due diligence süreçleri',
      'Yabancı yatırım danışmanlığı'
    ]
  },
  {
    icon: Scale,
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında savunma ve hukuki danışmanlık hizmetleri kapsamında profesyonel destek sağlıyorum.',
    details: [
      'Ceza davalarında savunma',
      'Soruşturma aşamasında hukuki destek',
      'İtiraz ve temyiz süreçleri',
      'Uzlaşma görüşmeleri',
      'Adli sicil kayıtları',
      'Hukuki mütalaa hazırlanması'
    ]
  },
  {
    icon: Briefcase,
    title: 'İş Hukuku',
    description: 'İşçi-işveren ilişkileri, iş sözleşmeleri ve işe iade davaları konularında uzman hukuki danışmanlık veriyorum.',
    details: [
      'İş sözleşmelerinin hazırlanması',
      'İşe iade davaları',
      'Tazminat hesaplamaları',
      'Toplu iş hukuku uyuşmazlıkları',
      'İş kazası davaları',
      'Çalışma izinleri',
      'Sosyal güvenlik uyuşmazlıkları'
    ]
  },
  {
    icon: FileText,
    title: 'Sözleşmeler Hukuku',
    description: 'Her türlü sözleşmenin hazırlanması, incelenmesi ve müzakeresi konularında profesyonel hukuki danışmanlık sağlıyorum.',
    details: [
      'Ticari sözleşmeler',
      'Kira sözleşmeleri',
      'Franchise sözleşmeleri',
      'Lisans sözleşmeleri',
      'Distribütörlük sözleşmeleri',
      'Ortaklık sözleşmeleri',
      'Sözleşme müzakereleri'
    ]
  },
  {
    icon: Users2,
    title: 'Aile Hukuku',
    description: 'Boşanma, nafaka, velayet ve miras davaları konularında uzman hukuki destek ve danışmanlık hizmetleri sunuyorum.',
    details: [
      'Boşanma davaları',
      'Nafaka hesaplamaları',
      'Velayet davaları',
      'Mal paylaşımı',
      'Miras davaları',
      'Aile içi şiddet davaları',
      'Evlat edinme süreçleri'
    ]
  },
  {
    icon: ScrollText,
    title: 'Arabuluculuk',
    description: 'Uyuşmazlıkların alternatif çözüm yolları kapsamında profesyonel arabuluculuk hizmetleri sağlıyorum.',
    details: [
      'İş hukuku arabuluculuğu',
      'Ticari uyuşmazlık arabuluculuğu',
      'Tüketici uyuşmazlıkları',
      'Kira uyuşmazlıkları',
      'Aile hukuku arabuluculuğu',
      'Online arabuluculuk hizmetleri'
    ]
  }
]

const showDetails = (expertise: Expertise) => {
  selectedExpertise.value = expertise
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  if (hasAnimated.value) return

  // Batch all GSAP operations
  gsap.config({ force3D: true }) // Enable hardware acceleration

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.expertise-section',
      start: 'top center+=100',
      toggleActions: 'play none none none',
      fastScrollEnd: true,
      preventOverlaps: true,
      markers: false,
      once: true
    },
    onComplete: () => {
      hasAnimated.value = true
      localStorage.setItem('expertiseAnimated', 'true')
    }
  })

  // Batch all initial states
  const elements = {
    title: document.querySelector('.expertise-title'),
    description: document.querySelector('.expertise-description'),
    cards: gsap.utils.toArray('.expertise-card')
  }

  // Set initial states in one batch
  gsap.set([elements.title, elements.description], { 
    opacity: 0,
    y: 15,
    force3D: true
  })
  
  gsap.set(elements.cards, { 
    opacity: 0,
    y: 15,
    force3D: true
  })

  // Animate with optimized timeline
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
  .to(elements.cards, {
    y: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.03,
    ease: 'power2.out',
    force3D: true,
    clearProps: 'transform' // Clear transforms after animation
  }, '-=0.1')
})
</script>

<template>
  <section 
    id="expertise" 
    class="expertise-section relative py-16 bg-white dark:bg-gray-900"
  >
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 
          class="expertise-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          style="will-change: transform, opacity"
        >
          Uzmanlık Alanları
        </h2>
        <p 
          class="expertise-description text-base md:text-lg text-gray-600 dark:text-gray-300"
          style="will-change: transform, opacity"
        >
          Geniş kapsamlı hukuki hizmetler sunarak, müvekkillerimin her türlü hukuki ihtiyacında yanlarında oluyorum.
        </p>
      </div>

      <!-- Expertise Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        style="contain: content"
      >
        <div 
          v-for="(area, index) in expertiseAreas" 
          :key="index"
          class="expertise-card group relative bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          style="will-change: transform, opacity"
        >
          <div class="p-4 sm:p-6 h-full flex flex-col">
            <div class="flex gap-3 sm:gap-4 mb-4">
              <div 
                class="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 flex-shrink-0"
                style="contain: strict; content-visibility: auto"
              >
                <component 
                  :is="area.icon" 
                  class="h-5 w-5 text-[#1a365d] dark:text-blue-400"
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
            <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
              <button
                @click="showDetails(area)"
                class="text-sm font-medium text-[#1a365d] dark:text-blue-400 hover:text-[#2c5282] dark:hover:text-blue-300 transition-colors duration-200"
              >
                Detayları Göster →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click="closeModal"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm"></div>

      <!-- Modal Content -->
      <div
        @click.stop
        class="relative w-full max-w-lg mx-4 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-10"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
        >
          <X class="h-5 w-5" />
        </button>

        <div v-if="selectedExpertise" class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a365d]/10 dark:bg-blue-500/10">
              <component 
                :is="selectedExpertise.icon"
                class="h-6 w-6 text-[#1a365d] dark:text-blue-400"
              />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {{ selectedExpertise.title }}
            </h3>
          </div>

          <p class="text-base text-gray-600 dark:text-gray-300">
            {{ selectedExpertise.description }}
          </p>

          <div class="space-y-3">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              Sunulan Hizmetler
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(detail, index) in selectedExpertise.details"
                :key="index"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <div class="h-1.5 w-1.5 rounded-full bg-[#1a365d] dark:bg-blue-400"></div>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-card {
  border: 1px solid transparent;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden;
  perspective: 1000px;
  contain: content;
}

.expertise-card:hover {
  border-color: #e2e8f0;
}

:root.dark .expertise-card:hover {
  border-color: #2d3748;
}

@media (prefers-reduced-motion: reduce) {
  .expertise-card {
    transition: none !important;
    transform: none !important;
  }
  
  .expertise-card:hover {
    transform: none !important;
  }
}
</style> 