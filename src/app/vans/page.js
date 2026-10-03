import Link from "next/link";
import Footer from "@/components/layout/Footer";
import VanEnquiryForm from "@/components/vans/VanEnquiryForm";
import { vans } from "@/data/vans";

export default function VansPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#071b2b]">
        <img
          src="/vans/hero.jpg"
          alt="Noleggio furgoni a Messina"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031726]/95 via-[#031726]/70 to-black/10" />

        <header className="relative z-20">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
                SC
              </div>

              <div>
                <p className="text-xl font-bold leading-none">SICILCAR</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/60">
                  Noleggio Furgoni
                </p>
              </div>
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              ← Home
            </Link>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1400px] items-end px-5 pb-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#61b8ff]">
              Noleggio furgoni a Messina
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[80px]">
              Più spazio.
              <br />
              Più possibilità.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Furgoni per lavoro, trasporti, consegne e traslochi con soluzioni
              flessibili in base alle tue esigenze.
            </p>

            <a
              href="#van-request"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-[#071b2b]"
            >
              Trova il tuo furgone →
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
            Soluzioni professionali
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Il veicolo giusto quando la tua auto non basta.
            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-slate-500">
              Dal piccolo trasporto alle esigenze professionali, scegli la
              categoria più adatta e richiedi disponibilità in pochi passaggi.
            </p>
          </div>
        </div>
      </section>

      {/* VAN CARDS */}
      <section className="bg-[#f5f7f9] py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              La flotta commerciale
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Scegli in base al tuo carico.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {vans.map((van) => (
              <article
                key={van.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-[270px] items-center justify-center bg-[#eef2f5] p-8">
                  <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#005baa]">
                    {van.category}
                  </span>

                  <img
                    src={van.image}
                    alt={van.name}
                    className="max-h-[180px] w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {van.name}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                    {van.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-y border-slate-100 py-5 text-xs text-slate-600">
                    <span>{van.transmission}</span>
                    <span>{van.fuel}</span>
                    <span>{van.passengers} posti</span>
                    <span>{van.idealFor}</span>
                  </div>

                  <a
                    href="#van-request"
                    className="mt-6 flex min-h-[50px] items-center justify-center rounded-full bg-[#005baa] px-5 text-sm font-bold text-white"
                  >
                    Richiedi disponibilità →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#071b2b] py-24 text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-[30px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Soluzioni flessibili",
                "Periodo di noleggio adattabile alle necessità.",
              ],
              [
                "02",
                "Diverse capacità",
                "Categorie pensate per differenti tipi di trasporto.",
              ],
              [
                "03",
                "Assistenza locale",
                "Supporto diretto dal team SicilCar.",
              ],
              [
                "04",
                "Privati e aziende",
                "Soluzioni per esigenze personali e professionali.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-[#0b2234] p-8">
                <span className="text-xs font-bold text-[#61b8ff]">
                  {number}
                </span>

                <h3 className="mt-12 text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="van-request"
        className="scroll-mt-10 bg-[#f5f7f9] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              Disponibilità
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Raccontaci cosa devi trasportare.
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-slate-500">
              Seleziona categoria e periodo. SicilCar potrà suggerire il veicolo
              più adatto alla richiesta.
            </p>
          </div>

          <VanEnquiryForm vans={vans} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
