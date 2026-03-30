import Image from "next/image";

type PageHeroProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

/** Full-width banner image — abstract / thematic per route. */
export function PageHero({ src, alt, priority }: PageHeroProps) {
  return (
    <div className="relative h-[min(38vh,300px)] w-full md:h-[min(42vh,380px)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={priority}
        quality={90}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--navy)]/35 via-transparent to-[var(--navy)]/20"
        aria-hidden
      />
    </div>
  );
}
