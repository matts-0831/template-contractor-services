import { site } from "@/lib/site";

const icons = [
  "M8 38h32v4H8v-4zm4-6l8-18 5 8 5-12 10 22H12zm22-20a3 3 0 110-6 3 3 0 010 6z",
  "M4 34h40v4H4v-4zm2-6l10-8 8 5 8-10 12 13H6z",
  "M24 4l13 18h-8l8 12H11l8-12h-8L24 4zm-3 30h6v10h-6z",
  "M4 30h24v-9H16l-5 5H4v4zm26 0h8l6-8V16h-8v6h-6v8zM12 36a4 4 0 110 8 4 4 0 010-8zm24 0a4 4 0 110 8 4 4 0 010-8z",
];

export function Services() {
  return (
    <section className="bg-slate px-0 py-[4.5rem]" id="services">
      <div className="mx-auto w-[min(calc(100%-2rem),1180px)]">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-safety">{site.servicesEyebrow}</p>
          <h2 className="mb-3 max-w-[18ch] text-[clamp(1.85rem,4.4vw,3.1rem)]">{site.servicesHeading}</h2>
          <p className="max-w-[52ch] text-muted">{site.servicesLede}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, index) => (
            <article
              key={service.title}
              className="relative rounded-2xl border border-cream/15 border-t-4 border-t-safety bg-panel p-5 shadow-2xl"
            >
              <span className="absolute top-4 right-4 font-display text-2xl text-safety/30">{service.number}</span>
              <div className="mb-3 h-12 w-12 text-safety" aria-hidden="true">
                <svg viewBox="0 0 48 48" className="h-full w-full">
                  <path fill="currentColor" d={icons[index] ?? icons[0]} />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">{service.title}</h3>
              <p className="m-0 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
