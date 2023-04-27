/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sims': "url('/src/images/sims8.png')"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}