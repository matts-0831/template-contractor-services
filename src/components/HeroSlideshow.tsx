import { site } from "@/lib/site";

type Slide = {
  src: string;
  alt: string;
};

function underlayFromSite() {
  const hero = site.hero as typeof site.hero & {
    underlaySrc?: string;
    underlayAlt?: string;
  };
  if (hero.underlaySrc) {
    return { src: hero.underlaySrc, alt: hero.underlayAlt || `${site.businessName} job site` };
  }
  const slide = hero.slides?.[0] as Slide | undefined;
  return slide || null;
}

export function HeroSlideshow({ slides }: { slides: readonly Slide[] }) {
  const underlay = underlayFromSite() || slides[0];

  if (!underlay) {
    return <div className="absolute inset-0 bg-ink" aria-hidden="true" />;
  }

  return (
    <div className="absolute inset-0 isolate overflow-hidden" aria-hidden="true">
      <img
        className="h-full w-full scale-105 object-cover opacity-[0.26]"
        src={underlay.src}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
    </div>
  );
}
