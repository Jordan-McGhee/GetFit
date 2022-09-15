/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1c1c1c',
        'gray-1': '#daddd8',
        'gray-2': '#ecebe4',
        'gray-3': '#eef0f2',
        'white-2': '#fafaff'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
