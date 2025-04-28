/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitchblack: '#080808',
        vividred: '#ED254E',
        lightblue: '#8DA9C4',
      },
    },
  },
  plugins: [],
}
