interface ImageProps {
  href: string;
  src: string;
}

export default function Image({ src, href }: ImageProps) {
  return (
    <a href={href} target="_blank">
      <img
        title={href}
        src={src}
        alt={src}
        className="h-28 rounded hover:animate-pulse hover:opacity-85"
      />
    </a>
  );
}
