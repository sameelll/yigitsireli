/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'section-light-primary': '#ffffff',
        'section-light-secondary': '#f3f4f6',
        // Dark mode colors
        'section-dark-primary': '#0f172a',
        'section-dark-secondary': '#1e293b',
      },
    },
  },
  plugins: [],
}

