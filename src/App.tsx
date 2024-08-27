import Image from "@/components/image";
import ModeToggle from "@/components/theme/theme-toggle";
import { Button } from "./components/ui/button";

import { CodeXmlIcon } from "lucide-react";

const IMAGES = [
  { src: "/images/vite.webp", href: "https://vitejs.dev" },
  { src: "/images/react.webp", href: "https://react.dev" },
  { src: "/images/tailwind.webp", href: "https://tailwindcss.com" },
  { src: "/images/shadcn.webp", href: "https://ui.shadcn.com" },
  { src: "/images/lucide.webp", href: "https://lucide.dev" },
  { src: "/images/typescript.webp", href: "https://www.typescriptlang.org" },
  { src: "/images/prettier.webp", href: "https://prettier.io" }
];

export default function App() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-4">
      <section className="flex max-w-screen-md flex-wrap justify-center gap-4">
        {IMAGES.map(({ src, href }) => (
          <Image key={src} src={src} href={href} />
        ))}
      </section>
      <section className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-3xl font-semibold">ReVite</h1>
        <p className="text-sm font-medium">Click on the Images to learn more</p>
      </section>
      <section className="flex gap-2">
        <ModeToggle />
        <a
          title="GitHub Repo"
          href="https://github.com/vwh/revite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="gooeyRight" size="icon" aria-label="GitHub">
            <CodeXmlIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </a>
      </section>
    </div>
  );
}
