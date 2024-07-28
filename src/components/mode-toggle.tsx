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
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
