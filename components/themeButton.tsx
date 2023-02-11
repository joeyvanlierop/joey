import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  const isDark = theme.resolvedTheme === "dark";

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="[&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-slate-900 dark:[&_svg]:text-slate-100"
      onClick={() => theme.setTheme(isDark ? "light" : "dark")}
      tabIndex={0}
    >
      <Expand duration={750} toggled={isDark} />
    </div>
  );
};
