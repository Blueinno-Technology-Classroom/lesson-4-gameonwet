module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "aqua", "dracula", "luxury", "winter", "lemonade"],
  },
  plugins: [require("daisyui")],
};
