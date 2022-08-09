/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        "2xl": "1500px",
      },

      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
      fontFamily: {
        editorial: ['PP Editorial New', 'serif'],
        neue: ['PP Neue Montreal Medium', 'sans-serif'],
        neueItalic: ['PP Neue Montreal Italic', 'sans-serif'],
        neueBold: ['PP Neue Montreal SemiBolditalic', 'sans-serif'],
        neueThin: ['PP Neue Montreal Thin', 'sans-serif'],
    },
  },
  varients: {
    extend: {},
    scrollbar: ['rounded'],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
}
