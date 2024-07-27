/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["business"]
  },
  plugins: [
    require("daisyui")
  ],
}

