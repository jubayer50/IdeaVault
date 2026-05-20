"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Sun className="w-6 h-6"></Sun>
      ) : (
        <Moon className="w-6 h-6"></Moon>
      )}
    </button>
  );
};

export default ThemeSwitch;
