import { createContext, useContext, useEffect, useState } from "react";

const themes = {
  gameboy: {
    name: "GameBoy",
    background: "bg-black",
    text: "text-green-400",
    border: "border-green-500",
  },
  nes: {
    name: "NES",
    background: "bg-gray-100",
    text: "text-red-600",
    border: "border-black",
  },
  snes: {
    name: "SNES",
    background: "bg-purple-900",
    text: "text-yellow-300",
    border: "border-purple-400",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState("gameboy");

  useEffect(() => {
    const stored = localStorage.getItem("retro-theme");
    if (stored && themes[stored]) setThemeKey(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("retro-theme", themeKey);
  }, [themeKey]);

  const value = {
    theme: themes[themeKey],
    themeKey,
    setThemeKey,
    availableThemes: Object.keys(themes),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
