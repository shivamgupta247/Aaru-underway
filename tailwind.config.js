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
          deep: '#1a0f0a',
          mid: '#F25900',
          bright: '#FF7020',
        },
        foam: '#FFF5D2',
        sand: '#FFF5D2',
        rust: '#F25900',
        coral: '#F25900',
        anchor: '#D84800',
        primary: '#F25900',
        cream: '#FFF5D2',
        'slate-900': '#1a0f0a',
        'slate-800': '#2d1810',
        'slate-700': '#3d2315',
        'blue-500': '#F25900',
        'blue-600': '#D84800',
        'cyan-500': '#FFF5D2',
        'orange-500': '#F25900',
        'orange-400': '#FF7020',
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
