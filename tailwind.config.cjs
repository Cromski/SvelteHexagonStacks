
module.exports = {
  content: ['./src/**/*.{html,ts,svelte,css,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['pastel'],
  },

  plugins: [require("daisyui")],
}

