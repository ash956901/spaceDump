/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto':['Roboto','sans-serif'],
      },
      colors:{
        'bg-dark':'#22092C',
        'sec-pink':'#872341',
        'sec-light':'#BE3144',
        'sec-orange':'F05941',
      },
      backgroundImage: {
        'space': "url('/src/bg.png')",
        'burger':"url('/src/bg-burger.jpg')",
      },
      animation: {
        mars: 'rot 3s linear infinite',
      },
      keyframes: {
        rot: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
};
