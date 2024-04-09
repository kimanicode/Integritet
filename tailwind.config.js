/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lagoon1':'#0295A9',
        'lagoon2':'#12ADC1',
        'lagoon3':'#FDD037',
        
      }
    },
  },
  plugins: [],
}

