import Link from "next/link";
import { tours } from "@/data/tours";
import Footer from "@/components/layout/Footer";

export default function ToursPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
              SC
            </div>

            <div>
              <p className="text-xl font-bold leading-none">SICILCAR</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/60">
                Tour & Transfer
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#071b2b]">
        <img
          src="/tours/taormina-hero.jpg"
          alt="Sicilia"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031726]/95 via-[#031726]/65 to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1400px] items-end px-5 pb-20 pt-36 sm:px-8 lg:px-12">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7ac4ff]">
              Tour privati dalla città di Messina
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              La Sicilia è più vicina
              <br />
              di quanto immagini.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Tour e transfer privati per scoprire alcune delle destinazioni più
              affascinanti dell&apos;isola partendo da Messina.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
                Scopri la Sicilia
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Dal porto di Messina alle destinazioni che rendono unica
                quest&apos;isola.
              </h2>

              <p className="mt-6 max-w-2xl leading-7 text-slate-500">
                Scegli una destinazione e richiedi un&apos;esperienza privata
                personalizzata in base ai tuoi orari e alle esigenze del tuo
                gruppo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="bg-[#f5f7f9] py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {tours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group relative min-h-[560px] overflow-hidden rounded-[32px]"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <span className="inline-flex rounded-full border border-white/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur">
                    {tour.category}
                  </span>

                  <div className="mt-5 flex items-end justify-between gap-6">
                    <div>
                      <h2 className="text-4xl font-semibold tracking-tight">
                        {tour.title}
                      </h2>

                      <p className="mt-2 text-sm text-white/60">
                        {tour.subtitle}
                      </p>
                    </div>

                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-white text-xl text-slate-950 transition group-hover:scale-110">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Private service */}
      <section className="bg-[#071b2b] py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#61b8ff]">
              Su misura
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Hai in mente un&apos;altra destinazione?
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="max-w-lg leading-7 text-white/60">
              Possiamo mostrare al cliente come il sito potrebbe raccogliere
              richieste personalizzate anche per destinazioni non presenti nel
              catalogo.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-[#071b2b]"
            >
              Richiedi un transfer →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
