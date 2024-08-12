// app/components/DarkModeToggle.tsx
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default DarkModeToggle;
