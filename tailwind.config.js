/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'magic-potion' : '#002049',
        'toddy-gold' : '#c6880a',
        'tulip-yellow' : '#e4b434',
        'energy-yellow' : '#fad155',
        'satin-linen' : '#e0d9cc',
        'alabaster' : '#fafafa'

      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)",
        "hero-image": "url(../public/hotel-bed-room.jpg)",
        "gradient-blue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)"
      }),
      fontFamily : {
        montserrat: ["Montserrat", "serif"]
      },
    },
  },
  plugins: [],
}
