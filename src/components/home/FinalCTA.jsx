import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white px-5 pb-5 sm:px-8 lg:px-12">
      <div className="relative mx-auto min-h-[500px] max-w-[1400px] overflow-hidden rounded-[36px] bg-[#005baa]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: "url('/tours/taormina.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#003e73] via-[#005baa]/80 to-transparent" />

        <div className="relative z-10 flex min-h-[500px] items-center px-7 py-16 sm:px-12 lg:px-16">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              Il viaggio inizia qui
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Pronto a scoprire
              <br />
              la Sicilia?
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
              Trova il veicolo adatto al tuo viaggio e parti da Messina verso la
              tua prossima destinazione.
            </p>

            <Link
              href="#booking"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-[#005baa] transition hover:scale-[1.03]"
            >
              Cerca la tua auto →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
