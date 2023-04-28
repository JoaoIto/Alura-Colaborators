/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-400': "#6278F7",
        'aqua': "#ffffff91"
      },
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        popping: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
