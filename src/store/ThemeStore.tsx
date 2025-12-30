import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = "light" | "dark";

interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            // Initial state: defaults to light, but onRehydrateStorage will fix this on load
            theme: "light", 
            
            toggleTheme: () => {
                const newTheme: Theme = get().theme === "light" ? "dark" : "light";
                
                // Sync the class on the HTML element
                if (typeof document !== "undefined") {
                    document.documentElement.classList.toggle("dark", newTheme === "dark");
                }

                set({ theme: newTheme });
            },
        }),
        {
            name: "theme-storage", // Unique name for localStorage
            onRehydrateStorage: () => (state) => {
                // This runs as soon as the data is loaded from localStorage
                if (state) {
                    const isDark = state.theme === "dark";
                    document.documentElement.classList.toggle("dark", isDark);
                }
            },
        }
    )
);