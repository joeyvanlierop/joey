import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { styled } from "../stitches.config";

export const ThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  const isDark = theme.resolvedTheme === "dark";

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <IconContainer
      onClick={() => theme.setTheme(isDark ? "light" : "dark")}
      tabIndex={0}
    >
      <Expand duration={750} toggled={isDark} />
    </IconContainer>
  );
};

const IconContainer = styled("div", {
  transform: "scale(1.5)",
  svg: {
    fill: "$hiContrast",
  },
});
