/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./**/*.{js,ts,jsx,tsx}", "./components/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
