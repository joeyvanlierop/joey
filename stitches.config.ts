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
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
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

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...grayDark,
    ...slateDark,
    loContrast: mauveDark.mauve1,
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
    // transition: "all 250ms",
  },
  // "*::before, *::after": {
  //   transition: "all 250ms",
  // },

  h4: {
    fontSize: "16px",
    fontWeight: "normal",
  },

  // https://github.com/modulz/stitches-site/blob/0852969e0361d16f853c70979367cece2d5b65df/pages/_app.tsx#L11-L35
  // "@font-face": [
  //   {
  //     fontFamily: "Inter var",
  //     fontStyle: "normal",
  //     fontWeight: "100 900",
  //     fontDisplay: "swap",
  //     src: "url(/fonts/Inter-roman.latin.var.woff2) format('woff2')",
  //   },
  //   {
  //     fontFamily: "Inter var",
  //     fontStyle: "italic",
  //     fontWeight: "100 900",
  //     fontDisplay: "swap",
  //     src: "url(/fonts/Inter-italic.latin.var.woff2) format('woff2')",
  //     // fontNamedInstance: "Italic",
  //   },
  // ],
});
