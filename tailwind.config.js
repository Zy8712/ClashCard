/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'theme-orbitron': ['Orbitron', 'sans-serif'],
        'theme-oxanium': ['Oxanium', 'sans-serif'],
        'theme-clash': ['Clash Regular', 'sans-serif'],
      },
      backgroundImage: {
        'custom-background' : "url('/backgrounds/hall_of_heros/desktop/1270391_default_ai_upscaled_400.jpg')",
      },
    },
  },
  plugins: [],
}

