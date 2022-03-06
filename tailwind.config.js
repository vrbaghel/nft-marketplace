module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'promo-banner': "url('/assets/images/promo.png')",
        'promo-with-frame': "url('/assets/images/promo-frame.png')",
        'ellipse-svg': "url('/assets/svgs/ellipse.svg')"
      }
    },
  },
  plugins: [],
}
