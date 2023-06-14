/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#FAEFDC",
          200: "#F6DDBB",
          300: "#E3BC92",
          400: "#C9986F",
          500: "#A56A43",
          600: "#8D5030",
          700: "#763921",
          800: "#5F2515",
          900: "#4F170C",
        },
        "secondary": {
          100: "#FEEFD4",
          200: "#FEDBAA",
          300: "#FEC17F",
          400: "#FEA95F",
          500: "#FE802B",
          600: "#DA5F1F",
          700: "#B64315",
          800: "#932C0D",
          900: "#791B08",
        }
      },
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
          primary: "#A56A43",
          "primary-focus": "#8D5030",
          "secondary": "#FE802B",
          "secondary-focus": "#DA5F1F",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
}
