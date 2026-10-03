import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#f5f7f9]">
      {/* HEADER */}
      <header className="bg-[#071b2b] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#005baa]">
              SC
            </div>

            <div>
              <p className="text-xl font-bold leading-none">SICILCAR</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                Messina
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

      {/* INTRO */}
      <section className="bg-[#071b2b] pb-28 pt-16 text-white lg:pb-36 lg:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#61b8ff]">
            Contatti
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Parliamo del tuo
            <br />
            prossimo viaggio.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            Auto, furgoni, transfer o tour: raccontaci di cosa hai bisogno.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="-mt-16 pb-24">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          {/* DETAILS */}
          <div className="rounded-[30px] bg-[#005baa] p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              SicilCar
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Vieni a trovarci a Messina.
            </h2>

            <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
              <ContactItem
                label="Indirizzo"
                value={
                  <>
                    Via G. Garibaldi 187
                    <br />
                    98122 Messina
                  </>
                }
              />

              <ContactItem label="Telefono" value="+39 090 46942" />

              <ContactItem label="Mobile" value="+39 339 448 4484" />

              <ContactItem label="Email" value="info@sicilcar.net" />
            </div>

            <div className="mt-10">
              <p className="text-xs leading-6 text-white/50">
                Per disponibilità, orari e condizioni specifiche utilizza il
                modulo oppure contatta direttamente SicilCar.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005baa]">
                Dove siamo
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                Nel cuore di Messina.
              </h2>
            </div>

            <p className="max-w-lg self-end text-sm leading-6 text-slate-500">
              La sede SicilCar si trova in Via Giuseppe Garibaldi, a Messina.
            </p>
          </div>

          <div className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-[#e9eef2]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#005baa] text-xl text-white shadow-lg">
                ●
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                SicilCar — Messina
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Via G. Garibaldi 187, Messina
              </p>

              <p className="mt-5 text-xs text-slate-400">
                Interactive map area
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactItem({ label, value }) {
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-[100px_1fr]">
      <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/45">
        {label}
      </span>

      <span className="text-sm font-semibold leading-6">{value}</span>
    </div>
  );
}
