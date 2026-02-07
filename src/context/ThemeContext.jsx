import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (dark) {
      root.classList.add("dark");
      root.style.backgroundColor = "#1c1a17";
      root.style.colorScheme = "dark";
      body.style.backgroundColor = "#1c1a17";
      body.style.color = "#e8e2d6";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f6f1e7";
      root.style.colorScheme = "light";
      body.style.backgroundColor = "#f6f1e7";
      body.style.color = "#1b1b1b";
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
