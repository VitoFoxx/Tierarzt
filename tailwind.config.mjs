/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f5",
          100: "#d6ebe6",
          200: "#aed7cd",
          300: "#7fbdae",
          400: "#4f9d8b",
          500: "#347e6e",
          600: "#26645a",
          700: "#215049",
          800: "#1e413c",
          900: "#1a3733",
        },
        accent: {
          50: "#fff8ed",
          100: "#ffefd1",
          200: "#ffdba3",
          300: "#ffc06a",
          400: "#ff9f33",
          500: "#fa800e",
          600: "#e06207",
          700: "#b9480a",
          800: "#95390f",
          900: "#7a3010",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
