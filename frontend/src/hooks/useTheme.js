import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "gaurav_portfolio_theme";
const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("light", theme === "light");
        root.classList.toggle("dark", theme === "dark");
        root.style.colorScheme = theme;
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            /* storage unavailable */
        }
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        }),
        [theme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
