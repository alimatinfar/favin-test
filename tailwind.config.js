/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#FAFAFA',
        'custom-gray-2': '#F5F5F5',
        'primary': '#00B17C',
      }
    },
  },
  plugins: [],
}
