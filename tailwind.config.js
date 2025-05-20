/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tripp: {
          dark: '#0c0a1e',
          neon: '#d742f5',
          mystic: '#00ffd5',
          glitch: '#f72e77',
        },
      },
      fontFamily: {
        tripp: ['"Orbitron"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
