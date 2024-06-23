/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "readex-pro": ["Readex Pro", "sans-serif"],
        "hammersmith-one": ["Hammersmith One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
