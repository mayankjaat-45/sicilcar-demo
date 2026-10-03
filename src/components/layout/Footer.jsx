import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px] py-16">
        <div className="grid gap-12 border-b border-slate-200 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#005baa] text-sm font-bold text-white">
                SC
              </div>

              <div>
                <p className="text-xl font-bold text-slate-950">SICILCAR</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Noleggio Auto
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-slate-500">
              Mobilità, noleggio e servizi per scoprire Messina e la Sicilia.
            </p>
          </div>

          <FooterColumn
            title="Noleggio"
            links={[
              ["Auto", "/cars"],
              ["Furgoni", "/vans"],
              ["Lungo Termine", "/long-term-rental"],
            ]}
          />

          <FooterColumn
            title="Scopri"
            links={[
              ["Tour privati", "/tours"],
              ["Transfer", "/transfers"],
              ["Chi siamo", "/about"],
              ["Contatti", "/contact"],
            ]}
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Contatti
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>Messina, Sicilia</p>
              <p>info@sicilcar.net</p>
              <p>+39 090 46942</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SicilCar — Concept redesign.</p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Cookie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
        {title}
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {links.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="w-fit text-sm text-slate-600 transition hover:text-[#005baa]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
