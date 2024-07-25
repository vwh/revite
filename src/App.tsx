import ModeToggle from "@/components/mode-toggle";
import { Button } from "./components/ui/button";

import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

import { Github } from "lucide-react";

function App() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <section className="flex gap-4">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 hover:animate-pulse hover:opacity-85"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 hover:animate-spin hover:opacity-85"
            alt="React logo"
          />
        </a>
      </section>
      <section className="flex flex-col items-center gap-1 rounded border p-4">
        <h1>ReVite</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section>
      <section className="flex gap-2">
        <ModeToggle />
        <Button variant="outline" size="icon">
          <Github className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </section>
    </div>
  );
}

export default App;
