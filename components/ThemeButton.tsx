import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { styled } from "../stitches.config";

export const ThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  console.log("THEME:", resolvedTheme);

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <StyledIcon
      as={resolvedTheme === "light" ? SunIcon : MoonIcon}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    />
  );
};

const StyledIcon = styled("svg", {
  width: "20px",
  height: "20px",
  cursor: "pointer",
});
