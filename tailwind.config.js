/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        accent: '#AB8BFF',
        light: {
          '100': '#D6C6FF',
          '200': '#A8B5DB',
          '300': '9CA4AB',
        },
        dark: {
          '100': '#221F3D',
          '200': '#0F0D23',
          '300': '9CA4AB',
        },
      }
    },
  },
  plugins: [],
}