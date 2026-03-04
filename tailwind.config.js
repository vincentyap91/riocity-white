/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          light: '#00AEEF',
          dark: '#0072BC'
        }
      },
      borderRadius: {
        'xl': '15px'
      }
    },
  },
  plugins: [],
}
