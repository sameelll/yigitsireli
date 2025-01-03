<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next'

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    position: "İşletme Sahibi",
    content: "Av. Yiğit Şireli'nin hukuki danışmanlığı sayesinde şirketimiz karmaşık bir ticari anlaşmazlığı başarıyla çözdü. Profesyonel yaklaşımı ve derin hukuki bilgisi ile bize güven verdi."
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    position: "Yönetici",
    content: "Hukuki süreçlerdeki titiz çalışması ve stratejik yaklaşımı ile sorunlarımıza etkili çözümler üretti. Kendisiyle çalışmak bir ayrıcalıktı."
  },
  {
    id: 3,
    name: "Mehmet Demir",
    position: "Girişimci",
    content: "Start-up şirketimizin hukuki altyapısının oluşturulmasında verdiği destekle işimizi güvenle büyütmemizi sağladı. Her zaman ulaşılabilir ve çözüm odaklı bir yaklaşım sergiledi."
  }
]

const currentIndex = ref(0)
const isAnimating = ref(false)

const next = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const prev = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

// Auto-advance testimonials
let autoplayInterval: number
onMounted(() => {
  autoplayInterval = setInterval(next, 5000)
})

const stopAutoplay = () => clearInterval(autoplayInterval)
const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = setInterval(next, 5000)
}
</script>

<template>
  <section id="testimonials" class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Müvekkil Görüşleri
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Müvekkillerimizin deneyimleri ve yorumları
        </p>
      </div>

      <div class="relative max-w-3xl mx-auto"
           @mouseenter="stopAutoplay"
           @mouseleave="startAutoplay">
        <div class="overflow-hidden rounded-xl">
          <div class="relative">
            <transition
              name="slide"
              mode="out-in">
              <div :key="currentIndex" 
                   class="h-[300px] w-full flex flex-col items-center justify-between p-8 bg-white dark:bg-gray-900 shadow-xl">
                <Quote class="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <div class="flex-1 flex items-center justify-center px-4">
                  <p class="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center italic">
                    "{{ testimonials[currentIndex].content }}"
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="font-semibold text-gray-900 dark:text-white text-base">
                    {{ testimonials[currentIndex].name }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                    {{ testimonials[currentIndex].position }}
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Navigation buttons -->
        <button @click="prev"
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <ChevronLeft class="w-6 h-6" />
        </button>
        <button @click="next"
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <ChevronRight class="w-6 h-6" />
        </button>

        <!-- Dots indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button v-for="(_, index) in testimonials"
                  :key="index"
                  @click="currentIndex = index"
                  class="w-2 h-2 rounded-full transition-all duration-200"
                  :class="index === currentIndex ? 'bg-blue-600 dark:bg-blue-400 w-4' : 'bg-gray-300 dark:bg-gray-600'">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style> 