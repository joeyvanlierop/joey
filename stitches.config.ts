import { createStitches } from "@stitches/react";
import { gray, grayDark } from "@radix-ui/colors";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      ...gray,
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
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
