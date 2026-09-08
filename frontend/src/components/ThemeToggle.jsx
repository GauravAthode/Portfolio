import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            data-testid="theme-toggle-button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15 bg-panel/60 text-sub transition-[border-color,color,transform] duration-300 hover:rotate-12 hover:border-sky-400/50 hover:text-ink"
        >
            {isDark ? <Sun className="h-[18px] w-[18px]" strokeWidth={1.8} /> : <Moon className="h-[18px] w-[18px]" strokeWidth={1.8} />}
        </button>
    );
};

export default ThemeToggle;
