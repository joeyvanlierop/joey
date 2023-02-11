import { gray, grayDark, mauveDark, slate, slateDark } from "@radix-ui/colors";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    opacity: "opacity",
  },
  theme: {
    fonts: {
      inter: "Inter var, sans-serif",
    },
    opacity: {
      faded: "0.3",
    },
  },
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    ...gray,
    ...slate,
    loContrast: "white",
    hiContrast: "$slate12",
  },
  shadows: {
    ...gray,
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    ...grayDark,
    ...slateDark,
    loContrast: "#111010",
    hiContrast: "$slate12",
  },
  shadows: {
    ...grayDark,
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: "$inter",
    backgroundColor: "$loContrast",
    color: "$hiContrast",
  },

  h4: {
    fontSize: "16px",
    fontWeight: "normal",
  },
});
