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
        header: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-kaisei)", fontFamily.serif],
        sans: ["var(--font-sohne)", fontFamily.sans],
      },
      transitionDuration: {
        DEFAULT: "275ms",
      },
      boxShadow: {
        dot: "0 0 5px 0px rgba(0, 0, 0, 0.3)",
        dark: "0 0 20px 0px rgba(0, 0, 0, 0.5)",
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
      animation: {
        "tooltip-in": "tooltipIn 100ms forwards",
        "tooltip-out": "tooltipOut 100ms forwards",
      },
      keyframes: {
        tooltipIn: {
          from: { opacity: 0, transform: "scale(0.9)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        tooltipOut: {
          from: { opacity: 1, transform: "scale(1)" },
          to: { opacity: 0, transform: "scale(0.9)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
