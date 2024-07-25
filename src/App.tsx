import Image from "@/components/image";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "./components/ui/button";

import { Github } from "lucide-react";

const IMAGES = [
  { src: "vite.webp", href: "https://vitejs.dev" },
  { src: "react.webp", href: "https://react.dev" },
  { src: "tailwind.webp", href: "https://tailwindcss.com" },
  { src: "shadcn.webp", href: "https://ui.shadcn.com" },
  { src: "lucide.webp", href: "https://lucide.dev" }
];

export default function App() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <section className="flex gap-4">
        {IMAGES.map(({ src, href }) => (
          <Image key={src} src={src} href={href} />
        ))}
      </section>
      <section className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-semibold">ReVite</h1>
        <p className="text-sm font-medium">Click on the Images to learn more</p>
      </section>
      <section className="flex gap-2">
        <ModeToggle />
        <a href="https://github.com/vwh/revite" target="_blank">
          <Button variant="outline" size="icon">
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </a>
      </section>
    </div>
  );
}
