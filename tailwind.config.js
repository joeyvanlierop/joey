const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./posts/**/*.mdx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100svh"],
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        title: ["var(--font-kaisei)", fontFamily.serif],
      },
      transitionDuration: {
        DEFAULT: "275ms",
      },
      boxShadow: {
        dot: "0 0 5px 0px rgba(0, 0, 0, 0.3)",
      },
      typography: {
        DEFAULT: {
          css: {
            "ul.contains-task-list": {
              margin: 0,
              padding: 0,
            },
            "li.task-list-item": {
              listStyleType: "none",
            },
            "input[type='checkbox']": {
              margin: 0,
              marginRight: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
