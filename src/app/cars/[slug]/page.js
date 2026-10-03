import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import Footer from "@/components/layout/Footer";

export default async function CarDetailsPage({ params, searchParams }) {
  const { slug } = await params;
  const queryParams = await searchParams;

  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  const pickup = queryParams?.pickup || "Messina Centro";
  const dropoff = queryParams?.dropoff || pickup;
  const pickupDate = queryParams?.pickupDate || "";
  const returnDate = queryParams?.returnDate || "";

  const bookingParams = new URLSearchParams({
    car: car.slug,
    pickup,
    dropoff,
  });

  if (pickupDate) bookingParams.set("pickupDate", pickupDate);
  if (returnDate) bookingParams.set("returnDate", returnDate);

  const bookingUrl = `/booking?${bookingParams.toString()}`;

  const backParams = new URLSearchParams({
    pickup,
    dropoff,
  });

  if (pickupDate) backParams.set("pickupDate", pickupDate);
  if (returnDate) backParams.set("returnDate", returnDate);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#071b2b] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
              SC
            </div>

            <div>
              <p className="text-xl font-bold leading-none">SICILCAR</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                Noleggio Auto
              </p>
            </div>
          </Link>

          <Link
            href={`/cars?${backParams.toString()}`}
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            ← Torna ai risultati
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-[#005baa]">
            Home
          </Link>

          <span>/</span>

          <Link
            href={`/cars?${backParams.toString()}`}
            className="hover:text-[#005baa]"
          >
            Auto
          </Link>

          <span>/</span>

          <span className="text-slate-700">{car.name}</span>
        </div>
      </div>

      {/* Vehicle Hero */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-10 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Car presentation */}
          <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden rounded-[36px] bg-[#f3f6f8] p-8 sm:p-12">
            <div className="absolute left-7 top-7">
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#005baa] shadow-sm">
                {car.category}
              </span>
            </div>

            <img
              src={car.image}
              alt={car.name}
              className="max-h-[330px] w-full object-contain"
            />

            <p className="absolute bottom-6 left-7 text-xs text-slate-400">
              Immagine indicativa • Il modello può variare
            </p>
          </div>

          {/* Vehicle info */}
          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
              {car.category}
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">
              {car.name}
            </h1>

            <p className="mt-2 text-lg text-slate-400">o modello similare</p>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600">
              {car.description}
            </p>

            {/* Specs */}
            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-slate-200 bg-slate-200">
              <Spec label="Passeggeri" value={`${car.passengers} posti`} />

              <Spec label="Cambio" value={car.transmission} />

              <Spec label="Bagagli" value={`${car.luggage} bagagli`} />

              <Spec label="Carburante" value={car.fuel} />

              <Spec label="Porte" value={`${car.doors} porte`} />

              <Spec
                label="Climatizzazione"
                value={car.airConditioning ? "Inclusa" : "—"}
              />
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingUrl}
                className="flex min-h-[58px] flex-1 items-center justify-center rounded-full bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c]"
              >
                Scegli questo veicolo →
              </Link>

              <a
                href="#conditions"
                className="flex min-h-[58px] items-center justify-center rounded-full border border-slate-300 px-7 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Condizioni
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rental selection */}
      <section className="bg-[#071b2b] py-16 text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#61b8ff]">
                Il tuo viaggio
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Dettagli del noleggio
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[22px] bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
              <JourneyItem label="Ritiro" value={pickup} />

              <JourneyItem label="Data ritiro" value={formatDate(pickupDate)} />

              <JourneyItem label="Riconsegna" value={dropoff} />

              <JourneyItem
                label="Data riconsegna"
                value={formatDate(returnDate)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
                Il noleggio
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                Pensato per viaggiare senza complicazioni.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Feature
                title="Assistenza locale"
                text="Un contatto diretto per supportarti durante il noleggio."
              />

              <Feature
                title="Chilometraggio"
                text="Le condizioni specifiche vengono confermate con il preventivo."
              />

              <Feature
                title="Copertura assicurativa"
                text="Le opzioni disponibili vengono indicate prima della conferma."
              />

              <Feature
                title="Veicolo controllato"
                text="Il veicolo viene preparato prima della consegna."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="bg-[#f5f7f9] py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
              Informazioni
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Condizioni di noleggio
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Le condizioni definitive, inclusi requisiti del conducente,
              deposito, coperture, chilometraggio e modalità di pagamento,
              vengono confermate da SicilCar in base al veicolo e al periodo
              richiesto.
            </p>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              <Condition
                number="01"
                title="Patente e documenti"
                text="È necessario presentare documenti validi e rispettare i requisiti previsti per la categoria selezionata."
              />

              <Condition
                number="02"
                title="Deposito e pagamento"
                text="Importi e modalità vengono comunicati insieme alla conferma del preventivo."
              />

              <Condition
                number="03"
                title="Ritiro e riconsegna"
                text="Orari e sedi vengono confermati prima dell'inizio del noleggio."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
        <Link
          href={bookingUrl}
          className="flex min-h-[54px] items-center justify-center rounded-full bg-[#005baa] px-6 text-sm font-bold text-white"
        >
          Scegli {car.name} →
        </Link>
      </div>

      <Footer />
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="bg-white p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function JourneyItem({ label, value }) {
  return (
    <div className="bg-white/[0.04] p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold">{value || "Da definire"}</p>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-[22px] border border-slate-200 p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4fc] text-sm font-bold text-[#005baa]">
        ✓
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function Condition({ number, title, text }) {
  return (
    <div className="grid gap-4 py-7 sm:grid-cols-[60px_180px_1fr]">
      <span className="text-xs font-bold text-[#005baa]">{number}</span>

      <h3 className="font-semibold text-slate-900">{title}</h3>

      <p className="text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "Da definire";

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}
