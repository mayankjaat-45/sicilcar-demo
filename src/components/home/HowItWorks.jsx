const steps = [
  {
    number: "01",
    title: "Cerca",
    text: "Inserisci luogo, date di ritiro e riconsegna per iniziare la ricerca.",
  },
  {
    number: "02",
    title: "Scegli",
    text: "Confronta le categorie disponibili e scegli il veicolo più adatto.",
  },
  {
    number: "03",
    title: "Prenota",
    text: "Inserisci i tuoi dati e invia la richiesta in pochi semplici passaggi.",
  },
  {
    number: "04",
    title: "Parti",
    text: "Ritira il veicolo e inizia il tuo viaggio alla scoperta della Sicilia.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f7f9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
            Semplice dall&apos;inizio
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Il tuo viaggio in quattro passaggi.
          </h2>
        </div>

        <div className="mt-16 grid border-t border-slate-300 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative py-8 md:p-8 lg:min-h-[270px] ${
                index !== 3 ? "lg:border-r lg:border-slate-300" : ""
              }`}
            >
              <span className="text-xs font-bold tracking-widest text-[#005baa]">
                {step.number}
              </span>

              <h3 className="mt-14 text-2xl font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[250px] text-sm leading-6 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
