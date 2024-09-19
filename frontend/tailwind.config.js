/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"]
    },
    extend: {},
  },
  daisyui: {
    themes: ["night"]
  },
  plugins: [
    require("daisyui")
  ],
}

