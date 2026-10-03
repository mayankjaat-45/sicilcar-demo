import Link from "next/link";
import Footer from "@/components/layout/Footer";
import LongTermForm from "@/components/longTerm/LongTermForm";

const benefits = [
  {
    number: "01",
    title: "Un unico canone",
    text: "Una soluzione pensata per semplificare la gestione della mobilità.",
  },
  {
    number: "02",
    title: "Privati e aziende",
    text: "Proposte costruite intorno alle esigenze del cliente.",
  },
  {
    number: "03",
    title: "Durata flessibile",
    text: "Valuta periodo, chilometraggio e categoria di veicolo.",
  },
  {
    number: "04",
    title: "Supporto locale",
    text: "Un contatto diretto a Messina durante tutto il percorso.",
  },
];

export default function LongTermRentalPage() {
  return (
    <main className="bg-white">
      {/* HEADER + HERO */}
      <section className="relative overflow-hidden bg-[#071b2b] text-white">
        <header className="relative z-20">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
                SC
              </div>

              <div>
                <p className="text-xl font-bold leading-none">SICILCAR</p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/60">
                  Lungo Termine
                </p>
              </div>
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              ← Home
            </Link>
          </div>
        </header>

        <div className="mx-auto grid min-h-[650px] max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#61b8ff]">
              Noleggio a lungo termine
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              La tua mobilità.
              <br />
              Più semplice.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/60">
              Soluzioni a lungo termine per privati, professionisti e aziende
              costruite intorno alle reali esigenze di utilizzo.
            </p>

            <a
              href="#long-term-quote"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-[#071b2b]"
            >
              Richiedi una proposta →
            </a>
          </div>

          <div className="relative hidden min-h-[500px] lg:block">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#0c3451] to-[#005baa]" />

            <img
              src="/cars/jeep-renegade.png"
              alt="Noleggio auto lungo termine"
              className="absolute inset-0 m-auto max-h-[300px] w-[90%] object-contain"
            />

            <div className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                Soluzione personalizzata
              </p>

              <p className="mt-1 font-semibold">
                Privati • Aziende • Professionisti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
                Una scelta diversa
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                Pensa alla strada.
                <br />
                Non alla gestione.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="bg-white p-7 sm:p-8">
                  <span className="text-xs font-bold text-[#005baa]">
                    {benefit.number}
                  </span>

                  <h3 className="mt-10 text-xl font-semibold text-slate-950">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#f5f7f9] py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
            Come funziona
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Una proposta costruita intorno a te.
          </h2>

          <div className="mt-14 grid border-t border-slate-300 md:grid-cols-3">
            {[
              [
                "01",
                "Raccontaci cosa cerchi",
                "Tipo di veicolo, durata e chilometraggio indicativo.",
              ],
              [
                "02",
                "Ricevi una proposta",
                "Il team valuta la richiesta e individua la soluzione disponibile.",
              ],
              [
                "03",
                "Valuta senza impegno",
                "Controlla condizioni e dettagli prima di procedere.",
              ],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`py-8 md:p-8 ${
                  index < 2 ? "md:border-r md:border-slate-300" : ""
                }`}
              >
                <span className="text-xs font-bold text-[#005baa]">
                  {number}
                </span>

                <h3 className="mt-14 text-xl font-semibold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="long-term-quote" className="scroll-mt-10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              Preventivo personalizzato
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Iniziamo dalle tue esigenze.
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-slate-500">
              Nessun listino inventato nel demo: il cliente inserisce ciò che
              cerca e SicilCar può preparare una proposta dedicata.
            </p>
          </div>

          <LongTermForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
