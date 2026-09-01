import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative grid min-h-[calc(100svh-78px)] items-end overflow-hidden md:items-center" id="top">
      {/* Replace /placeholders/hero.svg with a client job-site photo at /public/images/hero.jpg */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/placeholders/hero.svg"
        alt="Add a contractor job-site photo here"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/92 via-ink/70 to-ink/25" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />
      <div className="relative z-1 mx-auto w-[min(calc(100%-2rem),1180px)] py-12 md:py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-safety">{site.serviceAreaShort}</p>
        <h1 className="mb-4 max-w-[14ch] text-[clamp(2.15rem,7vw,4.65rem)] text-cream">
          {site.hero.headline}
          <span className="mt-1 block">{site.hero.headlineLine2}</span>
        </h1>
        <p className="max-w-[42ch] text-lg text-cream/90">{site.hero.subheadline}</p>
        <div className="mt-6 mb-7 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-14 items-center justify-center rounded-lg bg-safety px-5 py-3 font-extrabold uppercase tracking-wide text-ink hover:bg-safety-2"
            href={site.phoneTel}
          >
            {site.hero.primaryCta}
          </a>
          <a
            className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-cream px-5 py-3 font-extrabold uppercase tracking-wide text-cream hover:border-safety hover:text-safety"
            href="#estimate"
          >
            {site.hero.secondaryCta}
          </a>
        </div>
        <ul className="grid max-w-xl gap-2 sm:grid-cols-2" aria-label="Trust points">
          {site.trustItems.map((item) => (
            <li
              key={item}
              className="relative pl-4 text-xs font-bold uppercase tracking-wider text-safety before:absolute before:top-[0.4em] before:left-0 before:h-2 before:w-2 before:rotate-45 before:bg-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
