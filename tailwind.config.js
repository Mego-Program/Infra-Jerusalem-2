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
      width:{
        '91.1':'91.1%',
        '100':'100%',
      },
      height:{
        '5':'5%',
        '100':'100%',
      },
      spacing: {
        '15': '15%',
        '138.5':'138.5px',
      },

    },
  },
  plugins: [],
}

