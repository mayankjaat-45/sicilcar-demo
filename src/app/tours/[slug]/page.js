import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import TourEnquiryForm from "@/components/tours/TourEnquiryForm";
import Footer from "@/components/layout/Footer";

export default async function TourDetailsPage({ params }) {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#071b2b]">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031726]/95 via-black/30 to-black/25" />

        <header className="relative z-20">
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
              href="/tours"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              ← Tutti i tour
            </Link>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1400px] items-end px-5 pb-16 sm:px-8 lg:px-12">
          <div className="w-full">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              {tour.category}
            </span>

            <h1 className="mt-5 text-6xl font-semibold tracking-[-0.05em] text-white sm:text-7xl lg:text-[90px]">
              {tour.title}
            </h1>

            <p className="mt-4 text-lg text-white/70">{tour.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-[1400px] sm:grid-cols-3">
          <Meta label="Partenza" value={tour.departure} />
          <Meta label="Durata" value={tour.duration} />
          <Meta label="Tipologia" value={tour.group} />
        </div>
      </section>

      {/* Description */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
              L&apos;esperienza
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Scopri {tour.title}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              {tour.longDescription}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eaf4fc] text-xs font-bold text-[#005baa]">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-[#f5f7f9] py-24" id="enquiry">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
              Richiedi disponibilità
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Organizziamo il tuo viaggio.
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-slate-500">
              Inserisci le informazioni principali. Il team potrà confermare
              disponibilità, itinerario e preventivo.
            </p>
          </div>

          <TourEnquiryForm tour={tour} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Meta({ label, value }) {
  return (
    <div className="border-b border-slate-200 px-6 py-7 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-12">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-900">{value}</p>
    </div>
  );
}
