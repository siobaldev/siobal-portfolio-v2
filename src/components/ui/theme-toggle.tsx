"use client";

import { useTheme } from "next-themes";
import MoonIcon from "@/assets/moon-icon.svg";
import SunIcon from "@/assets/sun-icon.svg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group"
    >
      <MoonIcon
        aria-hidden="true"
        className="hidden cursor-pointer text-inactive-foreground transition-colors duration-300 hover:text-[#E6DFB8] dark:block"
      />
      <SunIcon
        aria-hidden="true"
        className="cursor-pointer text-inactive-foreground transition-colors duration-300 hover:text-[#FFC83D] dark:hidden"
      />
    </button>
  );
}
