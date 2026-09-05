"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function Proof() {
  const [active, setActive] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section className="py-[4.5rem]" id="projects">
      <div className="mx-auto w-[min(calc(100%-2rem),1180px)]">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-safety">{site.proof.eyebrow}</p>
          <h2 className="max-w-[18ch] text-[clamp(1.85rem,4.4vw,3.1rem)]">{site.proof.heading}</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <figure className="relative m-0 overflow-hidden rounded-2xl bg-panel">
            {site.proof.videoSrc ? (
              <video
                className="aspect-4/3 h-full w-full object-cover lg:aspect-auto"
                autoPlay
                loop
                muted
                playsInline
                poster={site.proof.poster}
                aria-label={site.proof.videoLabel}
              >
                <source src={site.proof.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <img
                className="aspect-4/3 h-full w-full object-cover lg:aspect-auto"
                src={site.proof.poster}
                alt={site.proof.videoLabel}
              />
            )}
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent px-3 py-3 text-sm font-bold">
              {site.proof.videoLabel}
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-3">
            {site.proof.gallery.map((item) => (
              <button
                key={item.label}
                type="button"
                className="relative overflow-hidden rounded-2xl bg-panel p-0"
                onClick={() => setActive({ src: item.src, caption: item.caption })}
              >
                <img className="aspect-4/3 w-full object-cover" src={item.src} alt={item.caption} />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent px-3 py-2 text-left text-sm font-bold">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 max-w-[52ch] text-lg text-muted">{site.proof.caption}</p>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/92 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Project photo"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-3 right-3 h-11 w-11 rounded-full bg-safety text-3xl leading-none text-ink"
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <img className="max-h-[78vh] max-w-[min(1100px,100%)] rounded-xl" src={active.src} alt={active.caption} />
          <p className="mt-3 text-center text-muted">{active.caption}</p>
        </div>
      ) : null}
    </section>
  );
}
