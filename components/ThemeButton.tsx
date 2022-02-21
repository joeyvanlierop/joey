import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { styled } from "../stitches.config";

interface ThemeButtonProps {
  onClick: (string) => void;
}

export const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  console.log("THEME:", theme);

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <StyledIcon
      as={theme === "light" ? SunIcon : MoonIcon}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
};

const StyledIcon = styled("svg", {
  width: "20px",
  height: "20px",
  cursor: "pointer",
});
