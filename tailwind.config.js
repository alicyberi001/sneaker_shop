/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./**/*.{js,ts,jsx,tsx}", "./components/*.html"],
  theme: {
    extend: {
      colors: {
        'xblack': '#000000',
        'xbrown': '#3a1d01',
        'xwhite': '#ffffff',
        'xblue': '#007aae',
        'xred': '#ae0000',
      },
      screens: {
        'fold': {'max': '350px'},
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
