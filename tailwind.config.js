/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f1e8",
          100: "#e8dcc4",
          200: "#d4c3a0",
          300: "#c0aa7c",
          400: "#ac9158",
          500: "#987834",
          600: "#7a602a",
          700: "#5c4820",
          800: "#3e3015",
          900: "#20180b",
        },
        accent: {
          50: "#e6f4f1",
          100: "#b3dfd4",
          200: "#80cab7",
          300: "#4db59a",
          400: "#1aa07d",
          500: "#158b63",
          600: "#116c4d",
          700: "#0d4d37",
          800: "#092e21",
          900: "#050f0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};
