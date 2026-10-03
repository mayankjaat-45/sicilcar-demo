import Link from "next/link";
import { cars } from "@/data/cars";
import CarsResults from "@/components/cars/CarsResults";
import CarSearchSummary from "@/components/cars/CarSearchSummary";
import Footer from "@/components/layout/Footer";

export default async function CarsPage({ searchParams }) {
  const params = await searchParams;

  const pickup = params?.pickup || "Messina Centro";
  const dropoff = params?.dropoff || pickup;
  const pickupDate = params?.pickupDate || "";
  const returnDate = params?.returnDate || "";

  return (
    <main className="min-h-screen bg-[#f5f7f9]">
      {/* Results Header */}
      <header className="bg-[#071b2b] text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
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
              href="/"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              ← Torna alla home
            </Link>
          </div>
        </div>
      </header>

      {/* Heading */}
      <section className="bg-[#071b2b] pb-28 pt-12 text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#61b8ff]">
            La nostra flotta
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Scegli la tua auto
          </h1>

          <p className="mt-4 max-w-xl text-white/60">
            Trova il veicolo più adatto al tuo viaggio in Sicilia.
          </p>
        </div>
      </section>

      <div className="mx-auto -mt-16 max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <CarSearchSummary
          pickup={pickup}
          dropoff={dropoff}
          pickupDate={pickupDate}
          returnDate={returnDate}
        />
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12">
        <CarsResults cars={cars} />
      </section>

      <Footer />
    </main>
  );
}
