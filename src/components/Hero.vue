<script setup lang="ts">
import { Scale } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.from('.hero-icon', {
    y: -50,
    opacity: 0,
    duration: 1
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
  .from('.hero-buttons > *', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  }, '-=0.5')
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-white dark:bg-[#1a1f2d]">
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    
    <div class="relative pt-32 lg:pt-40 pb-20 lg:pb-32">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="flex items-center space-x-4 mb-8">
            <Scale class="hero-icon h-12 w-12 text-[#4d9fff]" strokeWidth={1.5} />
            <h1 class="hero-title text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Av. Yiğit Şireli
            </h1>
          </div>
          
          <div class="space-y-8">
            <p class="hero-description text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hukuki haklarınızı korumak ve en iyi sonuçları elde etmek için profesyonel hukuk hizmetleri sunuyorum.
            </p>
            
            <p class="text-xl lg:text-2xl text-[#4d9fff]">
              20 yılı aşkın tecrübemle yanınızdayım.
            </p>

            <div class="hero-buttons flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-[#4d9fff] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#3d8fee]">
                <span class="relative z-10">İletişime Geçin</span>
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#3d8fee] transition-transform duration-300"></div>
              </a>
              <a href="#expertise"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:text-[#4d9fff] border-2 border-gray-200 dark:border-gray-700">
                <span class="relative z-10">Uzmanlık Alanları</span>
                <div class="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gray-100 dark:bg-gray-700 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(128,128,128,.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(128,128,128,.1) 1px, transparent 1px);
  background-size: 24px 24px;
}
</style> 