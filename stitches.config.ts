import { createStitches } from "@stitches/react";
import { gray, slate, slateDark, grayDark, mauveDark } from "@radix-ui/colors";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...slate,
      loContrast: "white",
      hiContrast: "$slate12",
    },
    shadows: {
      ...gray,
    },
    fonts: {
      inter: "Inter, sans-serif",
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...slateDark,
    loContrast: mauveDark.mauve1,
  },
  shadows: {
    ...grayDark,
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: "inter",
    backgroundColor: "$loContrast",
    color: "$hiContrast",
  },

  h4: {
    fontSize: "16px",
    fontWeight: "normal",
  },
});
