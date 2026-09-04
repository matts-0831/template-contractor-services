"use client";

import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

export function HeroSlideshow({ slides }: { slides: readonly Slide[] }) {
  const [index, setIndex] = useState(0);
  const current = slides[index] ?? slides[0];
  const showDots = slides.length > 1;

  if (!current) {
    return null;
  }

  return (
    <div className="relative isolate h-[min(28svh,13.5rem)] shrink-0 overflow-hidden max-md:static md:absolute md:inset-0 md:h-auto">
      <img
        className="h-full w-full object-cover"
        src={current.src}
        alt={current.alt}
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-scrim/40 via-scrim/15 to-transparent md:from-scrim/92 md:via-scrim/70 md:to-scrim/25" />
      <div className="absolute inset-0 bg-linear-to-t from-scrim to-transparent md:from-scrim/80" />
      {showDots ? (
        <div
          className="absolute inset-x-0 bottom-0 z-2 flex h-[var(--hero-dots-space)] items-center justify-center gap-2"
          role="tablist"
          aria-label="Hero photos"
        >
          {slides.map((slide, slideIndex) => {
            const selected = slideIndex === index;
            return (
              <button
                key={`${slide.src}-${slideIndex}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Show photo ${slideIndex + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${selected ? "bg-accent" : "bg-cream/55"}`}
                onClick={() => setIndex(slideIndex)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
