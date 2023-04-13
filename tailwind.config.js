/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        pwa: { raw: '(display-mode: standalone)' },
        browser: { raw: '(display-mode: browser)' },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#A9907E",
          "primary-focus": "#916F5C",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
}
