/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#001219',
          mid: '#005f73',
          bright: '#0a9396',
        },
        foam: '#94d2bd',
        sand: '#e9d8a6',
        rust: '#ee9b00',
        coral: '#ca6702',
        anchor: '#bb3e03',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        pathway: ['Pathway Gothic One', 'sans-serif'],
        oxygen: ['Oxygen', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 20s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 30px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
