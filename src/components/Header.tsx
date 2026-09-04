"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto grid min-h-[78px] w-[min(calc(100%-2rem),1180px)] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 py-2 md:grid-cols-[auto_1fr_auto] md:grid-rows-1">
        <a href="#top" className="flex min-w-0 items-center gap-3 text-cream" onClick={close}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="h-8 w-8">
              <path
                fill="#101318"
                d="M10 33h16l2.2-6h4.6l3 6H38v3H10v-3zm18-9c0-4.6 3-8.4 8.4-9.2v6c-2.2.8-3.6 2.4-3.6 4.6H28z"
              />
              <rect x="9" y="35.5" width="30" height="3" fill="#101318" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.15rem] uppercase tracking-wide">{site.shortName}</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">{site.tagline}</span>
          </span>
        </a>

        <p className="col-span-2 text-center text-xs font-semibold text-muted md:col-span-1 md:text-sm">
          {site.serviceArea}
        </p>

        <nav
          className={`max-md:absolute max-md:top-[86px] max-md:right-3 max-md:left-3 max-md:grid max-md:gap-1 max-md:rounded-xl max-md:border max-md:border-white/10 max-md:bg-panel max-md:p-3 max-md:shadow-2xl ${
            open ? "max-md:opacity-100 max-md:pointer-events-auto" : "max-md:pointer-events-none max-md:opacity-0"
          } md:flex md:items-center md:gap-4 lg:gap-5`}
          aria-label="Primary"
        >
          <a className="block rounded-lg px-3 py-3 font-semibold text-cream hover:text-safety md:p-0" href="#services" onClick={close}>
            Services
          </a>
          <a className="block rounded-lg px-3 py-3 font-semibold text-cream hover:text-safety md:p-0" href="#projects" onClick={close}>
            Projects
          </a>
          <a className="block rounded-lg px-3 py-3 font-semibold text-cream hover:text-safety md:p-0" href="#careers" onClick={close}>
            Careers
          </a>
          <a className="block rounded-lg px-3 py-3 font-semibold text-cream hover:text-safety md:p-0" href="#estimate" onClick={close}>
            Free Estimate
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand px-4 py-2 font-extrabold uppercase tracking-wide text-ink hover:bg-brand-2"
            href={site.phoneTel}
          >
            Call {site.phoneDisplay}
          </a>
        </nav>

        <button
          className="grid h-11 w-11 place-content-center gap-1 justify-self-end rounded-lg border border-white/10 bg-panel md:hidden"
          type="button"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-0.5 w-4 bg-cream" />
          <span className="block h-0.5 w-4 bg-cream" />
          <span className="block h-0.5 w-4 bg-cream" />
        </button>
      </div>
      <div className="hazard" aria-hidden="true" />
    </header>
  );
}
