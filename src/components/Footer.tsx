import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer pb-8">
        <div className="theme-rule h-1.5" aria-hidden="true" />
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
        <div className="mx-auto flex w-[min(calc(100%-2rem),1180px)] flex-col gap-2 border-t border-cream/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} {site.businessName}. All rights reserved.
          </p>
          <a
            className="w-fit text-[11px] tracking-wide text-muted/70 transition-colors hover:text-muted"
            href="https://www.trippworksai.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Powered by Tripp Works AI
          </a>
        </div>
      </footer>
      <a
        className="fixed inset-x-0 bottom-0 z-30 flex min-h-14 items-center justify-between bg-brand px-4 pt-3 font-extrabold text-ink shadow-2xl md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))" }}
        href={site.phoneTel}
        aria-label={`Call ${site.phoneDisplay}`}
      >
        <span className="text-xs uppercase tracking-wider">Tap to call</span>
        <strong>{site.phoneDisplay}</strong>
      </a>
    </>
  );
}
