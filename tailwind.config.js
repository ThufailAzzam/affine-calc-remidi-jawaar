// tailwind.config.js

module.exports = {
  mode: 'jit', // Just-In-Time compiler mode untuk build yang lebih cepat
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // Atur ke 'media' atau 'class' jika ingin menggunakan dark mode
  theme: {
    extend: {}, // Menambahkan konfigurasi tema tambahan di sini
  },
  variants: {
    extend: {}, // Menambahkan varian tambahan di sini
  },
  plugins: [], // Aktifkan plugin tambahan jika diperlukan
};
