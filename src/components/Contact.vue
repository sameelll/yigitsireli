<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Here you would integrate with your email service
    // For example, using EmailJS or a backend API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    submitSuccess.value = true
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    submitError.value = 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-12 bg-gray-50 dark:bg-[#1f2937]">
    <div class="container mx-auto px-4 max-w-5xl">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">İletişim</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="space-y-4">
          <div class="bg-white dark:bg-[#2d3748] p-5 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">İletişim Bilgileri</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">Telefon</p>
                  <p class="text-gray-600 dark:text-gray-300">+90 XXX XXX XX XX</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">E-posta</p>
                  <p class="text-gray-600 dark:text-gray-300">info@example.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">Çalışma Saatleri</p>
                  <p class="text-gray-600 dark:text-gray-300">Hafta içi: 09:00 - 17:00</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">Ofis Adresi</p>
                  <p class="text-gray-600 dark:text-gray-300">[Adres bilgisi buraya gelecek]</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="bg-white dark:bg-[#2d3748] p-4 rounded-lg shadow-md h-56">
            <iframe
              class="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900120027!2d28.97206661541928!3d41.02757507929921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Tower!5e0!3m2!1sen!2str!4v1620831095297!5m2!1sen!2str"
              :frameBorder="0"
              style="border:0"
              :allowFullscreen="true"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-[#2d3748] p-5 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Bize Ulaşın</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ad Soyad</label>
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-posta</label>
              <input
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Konu</label>
              <input
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mesaj</label>
              <textarea
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
            >
              {{ isSubmitting ? 'Gönderiliyor...' : 'Gönder' }}
            </button>

            <div v-if="submitSuccess" class="text-green-600 dark:text-green-400 text-sm mt-2">
              Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
            </div>

            <div v-if="submitError" class="text-red-600 dark:text-red-400 text-sm mt-2">
              {{ submitError }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template> 