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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
