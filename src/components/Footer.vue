<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 dark:bg-[#111827] text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Hakkımızda</h3>
          <p class="text-gray-400">
            Hukuki danışmanlık ve avukatlık hizmetlerinde güvenilir çözüm ortağınız.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul class="space-y-2">
            <li>
              <a href="#about" class="text-gray-400 hover:text-white transition duration-300">Hakkımızda</a>
            </li>
            <li>
              <a href="#expertise" class="text-gray-400 hover:text-white transition duration-300">Uzmanlık Alanları</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white transition duration-300">İletişim</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">İletişim</h3>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +90 XXX XXX XX XX
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@example.com
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
</template> 