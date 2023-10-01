const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./writing/**/*.mdx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          100: "#ededed",
          200: "#a0a0a0",
          300: "#7e7e7e",
          400: "#707070",
          500: "#3e3e3e",
          600: "#343434",
          700: "#2e2e2e",
          800: "#1c1c1c",
          900: "#1a1a1a",
        },
      },
      height: {
        screen: ["100vh", "100svh"],
      },
      fontFamily: {
        header: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-newsreader)", fontFamily.serif],
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
        enter: "enter 600ms both",
        fade: "fade 1500ms both",
        "tooltip-in": "tooltipIn 100ms forwards",
        "tooltip-out": "tooltipOut 100ms forwards",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        enter: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "none" },
        },
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
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
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animate-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
