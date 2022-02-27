import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { styled } from "../stitches.config";

export const ThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <StyledIcon
      as={theme.resolvedTheme === "light" ? SunIcon : MoonIcon}
      onClick={() =>
        theme.setTheme(theme.resolvedTheme === "light" ? "dark" : "light")
      }
      tabIndex={2}
    />
  );
};

const StyledIcon = styled("svg", {
  width: "20px",
  height: "20px",
  cursor: "pointer",
});
