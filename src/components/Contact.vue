<script setup lang="ts">
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rules = {
  name: { required },
  email: { 
    required,
    email: email
  },
  subject: { required },
  message: { 
    required, 
    minLength: minLength(20),
    maxLength: maxLength(500)
  }
}

const v$ = useVuelidate(rules, formData)

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const messageCharacterCount = computed(() => formData.value.message.length)

const getEmailErrorMessage = computed(() => {
  if (!v$.value.email.required.$response) {
    return 'E-posta alanı zorunludur'
  }
  if (!v$.value.email.email.$response) {
    return 'Geçerli bir e-posta adresi giriniz (örn: ad@domain.com)'
  }
  return ''
})

const getMessageErrorMessage = computed(() => {
  if (!v$.value.message.required.$response) {
    return 'Mesaj alanı zorunludur'
  }
  if (!v$.value.message.minLength.$response) {
    return 'Mesaj en az 20 karakter olmalıdır'
  }
  if (!v$.value.message.maxLength.$response) {
    return 'Mesaj en fazla 500 karakter olabilir'
  }
  return ''
})

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = ''

  try {
    // Here you would integrate with your email service
    // For example, using EmailJS or a backend API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    submitSuccess.value = true
    formData.value = { name: '', email: '', subject: '', message: '' }
    v$.value.$reset()
  } catch (error) {
    submitError.value = 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-12 bg-gray-50 dark:bg-[#1f2937]">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">İletişim</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Contact Information -->
        <div class="flex flex-col h-full">
          <div class="bg-white dark:bg-[#2d3748] p-4 rounded-lg shadow-md mb-3">
            <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">İletişim Bilgileri</h3>
            <div class="space-y-2.5">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">Telefon</p>
                  <p class="text-gray-600 dark:text-gray-300">+90 XXX XXX XX XX</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">E-posta</p>
                  <p class="text-gray-600 dark:text-gray-300">info@example.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">Çalışma Saatleri</p>
                  <p class="text-gray-600 dark:text-gray-300">Hafta içi: 09:00 - 17:00</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div class="bg-white dark:bg-[#2d3748] p-3 rounded-lg shadow-md">
            <iframe
              class="w-full h-[200px] rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900120027!2d28.97206661541928!3d41.02757507929921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Tower!5e0!3m2!1sen!2str!4v1620831095297!5m2!1sen!2str"
              :frameBorder="0"
              style="border:0"
              :allowFullscreen="true"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-[#2d3748] p-4 rounded-lg shadow-md h-full">
          <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Bize Ulaşın</h3>
          <form @submit.prevent="handleSubmit" class="flex flex-col h-[calc(100%-2rem)]">
            <div class="space-y-3 flex-1 flex flex-col">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ad Soyad <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  :class="{'border-red-500 focus:border-red-500 focus:ring-red-500': v$.name.$error, 
                           'focus:border-blue-500 focus:ring-blue-500': !v$.name.$error}"
                  class="w-full px-3 py-1.5 border rounded-md focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                >
                <span v-if="v$.name.$error" class="text-red-500 text-xs mt-0.5">
                  Ad Soyad alanı zorunludur
                </span>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-posta <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  :class="{'border-red-500 focus:border-red-500 focus:ring-red-500': v$.email.$error,
                           'focus:border-blue-500 focus:ring-blue-500': !v$.email.$error}"
                  class="w-full px-3 py-1.5 border rounded-md focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                >
                <span v-if="v$.email.$error" class="text-red-500 text-xs mt-0.5">
                  {{ getEmailErrorMessage }}
                </span>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Konu <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.subject"
                  type="text"
                  :class="{'border-red-500 focus:border-red-500 focus:ring-red-500': v$.subject.$error,
                           'focus:border-blue-500 focus:ring-blue-500': !v$.subject.$error}"
                  class="w-full px-3 py-1.5 border rounded-md focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                >
                <span v-if="v$.subject.$error" class="text-red-500 text-xs mt-0.5">
                  Konu alanı zorunludur
                </span>
              </div>

              <div class="flex-1 flex flex-col min-h-[100px]">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mesaj <span class="text-red-500">*</span>
                  <span class="text-xs text-gray-500 ml-1">(20-500 karakter)</span>
                </label>
                <textarea
                  v-model="formData.message"
                  :class="{'border-red-500 focus:border-red-500 focus:ring-red-500': v$.message.$error,
                           'focus:border-blue-500 focus:ring-blue-500': !v$.message.$error}"
                  class="w-full px-3 py-1.5 border rounded-md focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200 flex-1 resize-none"
                  maxlength="500"
                ></textarea>
                <div class="flex justify-between mt-0.5 mb-6">
                  <span v-if="v$.message.$error" class="text-red-500 text-xs">
                    {{ getMessageErrorMessage }}
                  </span>
                  <span class="text-xs text-gray-500">{{ messageCharacterCount }}/500</span>
                </div>
              </div>
            </div>

            <div class="mt-auto pb-1">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="group relative w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform-gpu transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span 
                  class="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
                  style="will-change: opacity"
                ></span>
                <span :class="{ 'opacity-0': isSubmitting }" class="relative whitespace-nowrap">
                  {{ isSubmitting ? 'Gönderiliyor...' : 'Gönder' }}
                </span>
                <div v-if="isSubmitting" 
                     class="absolute inset-0 flex items-center justify-center">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </button>

              <div v-if="submitSuccess" 
                   class="bg-green-100 dark:bg-green-800/30 border border-green-400 text-green-700 dark:text-green-200 px-4 py-3 rounded-md relative mt-4 animate-fadeIn" 
                   role="alert">
                <strong class="font-bold">Başarılı! </strong>
                <span class="block sm:inline">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</span>
              </div>

              <div v-if="submitError" 
                   class="bg-red-100 dark:bg-red-800/30 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded-md relative mt-4 animate-fadeIn" 
                   role="alert">
                <strong class="font-bold">Hata! </strong>
                <span class="block sm:inline">{{ submitError }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Focus styles */
input:focus, textarea:focus {
  outline: none;
}

/* Hover effect for form fields */
input:hover, textarea:hover {
  border-color: #93C5FD;
}

/* Button hover animation */
button:not(:disabled):hover {
  transform: translateY(-1px);
}

button:not(:disabled):active {
  transform: translateY(0);
}
</style> 