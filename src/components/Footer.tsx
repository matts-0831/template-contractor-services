import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0b0d10] pb-8">
        <div className="hazard h-1.5" aria-hidden="true" />
        <div className="mx-auto grid w-[min(calc(100%-2rem),1180px)] gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display mb-2 text-xl uppercase tracking-wide">{site.businessName}</p>
            <p className="text-muted">{site.footerBlurb}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm text-safety">Contact</h3>
            <p className="mb-1">
              <a className="text-safety hover:text-safety-2" href={site.phoneTel}>
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mb-1 text-muted">{site.email}</p>
            <p className="text-muted">{site.serviceArea}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm text-safety">Hours</h3>
            <p className="mb-1 text-muted">{site.hours.weekday}</p>
            <p className="mb-1 text-muted">{site.hours.saturday}</p>
            <p className="text-muted">{site.hours.sunday}</p>
          </div>
        </div>
        <p className="mx-auto w-[min(calc(100%-2rem),1180px)] border-t border-white/10 pt-4 text-sm text-[#7f8791]">
          © {year} {site.businessName}. All rights reserved.
        </p>
      </footer>
      <a
        className="fixed right-3 bottom-3 left-3 z-30 flex min-h-14 items-center justify-between rounded-xl bg-safety px-4 font-extrabold text-ink shadow-2xl md:hidden"
        href={site.phoneTel}
      >
        <span className="text-xs uppercase tracking-wider">Tap to call</span>
        <strong>{site.phoneDisplay}</strong>
      </a>
    </>
  );
}
