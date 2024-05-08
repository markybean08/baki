/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      width: {
        '960': '960px',
        '1200': '1200px',
      },
      colors: {
        'custom-red': '#FC0101',
        'header-black': '#211414'
      }
      
      
    }
  },
  // ...
}