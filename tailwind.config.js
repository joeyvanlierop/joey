const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./things/**/*.mdx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text-color)",
        border: "var(--mono5)",
        mono: {
          1: "var(--mono1)",
          2: "var(--mono2)",
          3: "var(--mono3)",
          4: "var(--mono4)",
          5: "var(--mono5)",
          6: "var(--mono6)",
          7: "var(--mono7)",
          8: "var(--mono8)",
          9: "var(--mono9)",
          10: "var(--mono10)",
          11: "var(--mono11)",
          12: "var(--mono12)",
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
        mono: "0 0 20px 0px var(--shadow-color)",
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
