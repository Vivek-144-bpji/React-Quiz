// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat for specific use
      },
    },
  },
  plugins: [],
};
