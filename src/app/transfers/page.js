import Link from "next/link";
import Footer from "@/components/layout/Footer";
import TransferForm from "@/components/transfer/TransferForm";

const transferTypes = [
  {
    number: "01",
    title: "Airport Transfer",
    text: "Collegamenti privati da e verso gli aeroporti siciliani, con partenza o arrivo a Messina.",
  },
  {
    number: "02",
    title: "Port Transfer",
    text: "Servizio dedicato a crocieristi e viaggiatori in arrivo o partenza dal porto di Messina.",
  },
  {
    number: "03",
    title: "Hotel Transfer",
    text: "Transfer diretto tra hotel, strutture ricettive e le principali destinazioni della Sicilia.",
  },
  {
    number: "04",
    title: "Private Transfer",
    text: "Una soluzione personalizzata per spostamenti privati, business e itinerari su richiesta.",
  },
];

const popularRoutes = [
  {
    from: "Messina",
    to: "Catania Aeroporto",
    type: "Airport",
  },
  {
    from: "Messina Porto",
    to: "Taormina",
    type: "Private",
  },
  {
    from: "Messina",
    to: "Etna",
    type: "Tour & Transfer",
  },
  {
    from: "Messina",
    to: "Milazzo",
    type: "Private",
  },
];

export default function TransfersPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[700px] overflow-hidden bg-[#071b2b]">
        <img
          src="/transfers/hero.jpg"
          alt="Transfer privati in Sicilia"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031726]/95 via-[#031726]/75 to-black/20" />

        {/* HEADER */}
        <header className="relative z-20">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
                SC
              </div>

              <div>
                <p className="text-xl font-bold leading-none">SICILCAR</p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/60">
                  Noleggio Auto
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-7">
              <Link
                href="/tours"
                className="hidden text-sm font-medium text-white/70 transition hover:text-white sm:block"
              >
                Tour
              </Link>

              <Link
                href="/"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                ← Home
              </Link>
            </div>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1400px] items-end px-5 pb-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#65baff]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Transfer privati dalla Sicilia orientale
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[82px]">
              Dal punto A
              <br />
              al punto B.
              <br />
              Senza complicazioni.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Transfer privati per aeroporti, porti, hotel e destinazioni
              siciliane con partenza da Messina.
            </p>

            <a
              href="#quote"
              className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#071b2b] transition hover:bg-slate-100"
            >
              Richiedi un transfer →
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              Transfer SicilCar
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Il tuo viaggio continua anche dopo essere sceso dall&apos;aereo,
              dalla nave o dal treno.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-500">
              Un servizio pensato per chi desidera raggiungere la propria
              destinazione con maggiore comodità, senza dover organizzare ogni
              singolo spostamento.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSFER TYPES */}
      <section className="bg-[#071b2b] py-24 text-white lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#61b8ff]">
              I nostri servizi
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Un servizio per ogni spostamento.
            </h2>
          </div>

          <div className="border-t border-white/15">
            {transferTypes.map((service) => (
              <div
                key={service.number}
                className="group grid gap-5 border-b border-white/15 py-8 transition sm:grid-cols-[80px_1fr_1fr_auto] sm:items-center"
              >
                <span className="text-xs font-bold text-white/35">
                  {service.number}
                </span>

                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="max-w-lg text-sm leading-6 text-white/50">
                  {service.text}
                </p>

                <a
                  href="#quote"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-lg transition group-hover:border-white group-hover:bg-white group-hover:text-[#071b2b]"
                >
                  →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="bg-[#f5f7f9] py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
                Collegamenti
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Percorsi richiesti.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Alcuni esempi di collegamenti che possono essere richiesti
              attraverso il nuovo sito.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {popularRoutes.map((route) => (
              <a
                key={`${route.from}-${route.to}`}
                href="#quote"
                className="group rounded-[26px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#eaf4fc] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#005baa]">
                    {route.type}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005baa] text-white transition group-hover:scale-110">
                    →
                  </span>
                </div>

                <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Da
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-slate-950">
                      {route.from}
                    </h3>
                  </div>

                  <span className="text-slate-300">→</span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      A
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-slate-950">
                      {route.to}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="scroll-mt-10 bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              Preventivo
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Dove possiamo portarti?
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-slate-500">
              Inserisci partenza, destinazione e i dettagli principali del
              viaggio per richiedere disponibilità.
            </p>
          </div>

          <TransferForm />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[34px] bg-[#005baa] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                SicilCar Messina
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                La tua destinazione.
                <br />
                Il nostro prossimo viaggio.
              </h2>
            </div>

            <a
              href="#quote"
              className="inline-flex min-h-[56px] shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#005baa]"
            >
              Richiedi preventivo →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
