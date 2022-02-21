import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      gray900: "hsl(205,5%,7%)",
      gray700: "hsl(205,5%,25%)",
      gray500: "hsl(205,5%,35%)",
      gray50: "hsl(205,5%,95%)",
      blue500: "hsl(205,90%,45%)",

      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$blue500",
      background: "$gray50",
      border: "$gray900",
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: "$gray100",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$blue500",
    background: "$gray900",
    border: "$gray100",
  },
});

// export const globalStyles = globalCss({
//   "@dark": {
//     ":root:not(.light)": {
//       ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
//         const currentColor = darkTheme.colors[currentColorKey];
//         const currentColorValue =
//           currentColor.value.substring(0, 1) === "$"
//             ? `$colors${currentColor.value}`
//             : currentColor.value;

//         return {
//           [currentColor.variable]: currentColorValue,
//           ...varSet,
//         };
//       }, {}),
//     },
//   },
// });
