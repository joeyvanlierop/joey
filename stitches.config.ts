import { createStitches } from "@stitches/react";
import { gray, slate, slateDark, grayDark, mauveDark } from "@radix-ui/colors";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    fonts: {
      inter: "Inter, sans-serif",
    },
  },
});

export const lightTheme = createTheme({
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
    fontFamily: "$inter",
    backgroundColor: "$loContrast",
    color: "$hiContrast",
  },

  h4: {
    fontSize: "16px",
    fontWeight: "normal",
  },

  // https://rude.im/blog/dark-theme-with-stitches-and-next-js
  // "@dark": {
  //   ":root:not(.light)": {
  //     ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
  //       const currentColor = darkTheme.colors[currentColorKey];
  //       const currentColorValue =
  //         currentColor.value.substring(0, 1) === "$"
  //           ? `$colors${currentColor.value}`
  //           : currentColor.value;

  //       return {
  //         [currentColor.variable]: currentColorValue,
  //         ...varSet,
  //       };
  //     }, {}),
  //   },
  // },
});
