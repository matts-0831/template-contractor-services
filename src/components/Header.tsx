"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { resolveTheme, type HeaderStyle } from "@/lib/theme";

const MARK_PATHS: Record<HeaderStyle, string> = {
  grove:
    "M24 6c-3 8-10 12-10 20a10 10 0 0020 0c0-8-7-12-10-20zm-2 16c-4 2-6 6-6 10h4c0-2 1-4 3-6l-1-4z",
  volt: "M26 4L12 26h10l-4 18 18-24H26l4-16z",
  mason:
    "M4 18h18v8H4v-8zm22 0h18v8H26v-8zM4 30h10v8H4v-8zm14 0h16v8H18v-8zm20 0h10v8H38v-8zM10 8h28v8H10V8z",
  atelier:
    "M8 40V22l16-14 16 14v18H28v-10h-8v10H8zm4-4h8v-10h16v10h8V23.4L24 12.2 12 23.4V36z",
};

const MARK_WRAP: Record<HeaderStyle, string> = {
  grove: "rounded-full bg-brand",
  volt: "rounded-md bg-brand shadow-[0_0_16px_color-mix(in_srgb,var(--brand)_55%,transparent)]",
  mason: "rounded-none bg-panel ring-1 ring-brand",
  atelier: "rounded-sm bg-brand ring-1 ring-brand-2/40",
};

function BrandMark({ headerStyle }: { headerStyle: HeaderStyle }) {
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center text-ink ${MARK_WRAP[headerStyle]}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <path fill="currentColor" d={MARK_PATHS[headerStyle]} />
      </svg>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const headerStyle = resolveTheme(site.themeId).headerStyle;
  const style = (site.headerStyle as HeaderStyle) || headerStyle;

  function close() {
    setOpen(false);
  }

  return (
    <header className={`sticky top-0 z-40 bg-ink/95 backdrop-blur-md ${style === "volt" ? "shadow-[inset_0_2px_0_var(--brand)]" : ""}`}>
      <div className="mx-auto grid min-h-[78px] w-[min(calc(100%-2rem),1180px)] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 py-2 md:grid-cols-[auto_1fr_auto] md:grid-rows-1">
        <a href="#top" className="flex min-w-0 items-center gap-3 text-cream" onClick={close}>
          <BrandMark headerStyle={style} />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.15rem] uppercase tracking-wide">{site.shortName}</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">{site.tagline}</span>
          </span>
        </a>

        <p className="col-span-2 text-center text-xs font-semibold text-muted md:col-span-1 md:text-sm">
          {site.serviceArea}
        </p>

        <nav
          className={`max-md:absolute max-md:top-[86px] max-md:right-3 max-md:left-3 max-md:grid max-md:gap-1 max-md:rounded-xl max-md:border max-md:border-cream/15 max-md:bg-panel max-md:p-3 max-md:shadow-2xl ${
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
          className="grid h-11 w-11 place-content-center gap-1 justify-self-end rounded-lg border border-cream/15 bg-panel md:hidden"
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
      {style === "grove" ? <div className="h-px bg-brand/35" aria-hidden="true" /> : <div className="theme-rule" aria-hidden="true" />}
    </header>
  );
}
