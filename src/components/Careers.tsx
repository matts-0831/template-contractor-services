import { site } from "@/lib/site";

const icons = [
  "M6 36h36v4H6v-4zm4-8l8-14 6 8 6-12 12 18H10zM14 12a4 4 0 110-8 4 4 0 010 8z",
  "M10 14h8v4h-8v-4zm12 0h16v4H22v-4zM10 22h28v16H10V22zm4 4v8h20v-8H14z",
  "M8 34h32v4H8v-4zm6-20h4v16h-4V14zm16 4h4v12h-4V18zM22 10h4v20h-4V10z",
];

export function Careers() {
  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent("Crew application")}`;

  return (
    <section className="bg-slate pt-[4.5rem] pb-32 md:pb-[4.5rem]" id="careers">
      <div className="mx-auto w-[min(calc(100%-2rem),1180px)]">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-safety">{site.careers.eyebrow}</p>
          <h2 className="mb-3 max-w-[18ch] text-[clamp(1.85rem,4.4vw,3.1rem)]">{site.careers.heading}</h2>
          <p className="max-w-[52ch] text-muted">{site.careers.lede}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {site.careers.roles.map((role, index) => (
            <article
              key={role.title}
              className="relative rounded-2xl border border-white/10 border-t-4 border-t-accent bg-panel p-5 shadow-2xl"
            >
              <span className="absolute top-4 right-4 font-display text-2xl text-accent/30">{role.number}</span>
              <div className="mb-3 h-12 w-12 text-accent" aria-hidden="true">
                <svg viewBox="0 0 48 48" className="h-full w-full">
                  <path fill="currentColor" d={icons[index] ?? icons[0]} />
                </svg>
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-safety">{role.type}</p>
              <h3 className="mb-2 text-xl">{role.title}</h3>
              <p className="m-0 text-muted">{role.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-[18px] bg-paper p-5 text-paper-ink shadow-2xl md:grid-cols-[1.2fr_auto] md:items-center md:p-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">{site.careers.applyEyebrow}</p>
            <h3 className="mb-3 text-paper-ink">{site.careers.applyHeading}</h3>
            <p className="m-0 max-w-[46ch]">{site.careers.applyLede}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-safety px-5 py-3 font-extrabold uppercase tracking-wide text-ink hover:bg-safety-2"
              href={site.phoneTel}
            >
              {site.careers.callCta}
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-accent px-5 py-3 font-extrabold uppercase tracking-wide text-ink hover:bg-accent-2"
              href={emailHref}
            >
              {site.careers.emailCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
