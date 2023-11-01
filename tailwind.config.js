/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-yellow': '#F6C927',
        'midnight-blue': '#21213E',
        'deep-indigo' : '#121231',
        'dark-midnight-navy-blue': '#0A0A1B',
      },
    },
  },
  plugins: [],
}