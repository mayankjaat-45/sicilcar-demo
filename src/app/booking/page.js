import Link from "next/link";
import { cars } from "@/data/cars";
import BookingSteps from "@/components/booking/BookingSteps";
import Footer from "@/components/layout/Footer";

export default async function BookingPage({ searchParams }) {
  const params = await searchParams;

  const selectedCar = cars.find((car) => car.slug === params?.car);

  if (!selectedCar) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7f9] px-5">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold text-slate-950">
            Seleziona prima un veicolo
          </h1>

          <p className="mt-3 text-slate-500">
            Scegli un&apos;auto dalla nostra flotta per continuare.
          </p>

          <Link
            href="/cars"
            className="mt-7 inline-flex rounded-full bg-[#005baa] px-7 py-4 text-sm font-bold text-white"
          >
            Visualizza la flotta
          </Link>
        </div>
      </main>
    );
  }

  const bookingData = {
    car: selectedCar,
    pickup: params?.pickup || "Messina Centro",
    dropoff: params?.dropoff || params?.pickup || "Messina Centro",
    pickupDate: params?.pickupDate || "",
    returnDate: params?.returnDate || "",
  };

  return (
    <main className="min-h-screen bg-[#f5f7f9]">
      <header className="bg-[#071b2b] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
              SC
            </div>

            <div>
              <p className="text-xl font-bold leading-none">SICILCAR</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                Prenotazione
              </p>
            </div>
          </Link>

          <span className="hidden text-xs text-white/50 sm:block">
            Prenotazione sicura
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
            Prenotazione
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
            Completa la tua richiesta
          </h1>

          <p className="mt-3 text-slate-500">Mancano solo pochi passaggi.</p>
        </div>

        <BookingSteps bookingData={bookingData} />
      </section>

      <Footer />
    </main>
  );
}
