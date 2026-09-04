import { HeroSlideshow } from "@/components/HeroSlideshow";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-var(--header-height))] flex-col justify-end overflow-hidden bg-black md:justify-center"
      id="top"
    >
      <HeroSlideshow slides={site.hero.slides} />
      <div className="relative z-10">
        <div className="mx-auto flex w-[min(calc(100%-2rem),1180px)] flex-col gap-6 pt-10 pb-[max(2.75rem,var(--mobile-bottom-chrome))] md:gap-7 md:py-16 md:pb-24">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{site.serviceAreaShort}</p>
            <h1 className="max-w-[14ch] text-[clamp(2.15rem,7vw,4.65rem)] text-white">
              {site.hero.headline}
              <span className="mt-1 block">{site.hero.headlineLine2}</span>
            </h1>
            <p className="max-w-[42ch] text-lg leading-relaxed text-white/92">{site.hero.subheadline}</p>
          </div>
          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-accent px-5 py-3 font-extrabold uppercase tracking-wide text-ink hover:bg-accent-2"
              href="#estimate"
            >
              {site.hero.primaryCta}
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-white/80 px-5 py-3 font-extrabold uppercase tracking-wide text-white hover:bg-white hover:text-ink"
              href="#projects"
            >
              {site.hero.secondaryCta}
            </a>
          </div>
          <ul className="hidden max-w-xl gap-2 md:grid sm:grid-cols-2" aria-label="Trust points">
            {site.trustItems.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-xs font-bold uppercase tracking-wider text-white/90 before:absolute before:top-[0.4em] before:left-0 before:h-2 before:w-2 before:rotate-45 before:bg-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
