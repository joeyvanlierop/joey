/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "275ms",
      },
      boxShadow: {
        dot: "0 0 5px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
