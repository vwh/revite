import { useTheme } from "@/hooks/useTheme";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="relative flex items-center justify-center p-2 transition-transform duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "dark" ? (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </Button>
  );
}
