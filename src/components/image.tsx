interface ImageProps {
  href: string;
  src: string;
}

export default function Image({ src, href }: ImageProps) {
  return (
    <a href={href} title={href} target="_blank" rel="noopener noreferrer">
      <img
        title={href}
        src={src}
        alt={src}
        className="h-28 w-auto rounded-lg hover:animate-pulse hover:opacity-85 sm:h-24 md:h-32 lg:h-40"
      />
    </a>
  );
}
