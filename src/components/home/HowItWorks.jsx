"use client";

import { motion } from "motion/react";
import { Search, CarFront, Send, MapPin } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Cerca",
    text: "Inserisci luogo, date di ritiro e riconsegna per iniziare la ricerca.",
    icon: Search,
  },
  {
    number: "02",
    title: "Scegli",
    text: "Confronta le categorie e scegli la soluzione più adatta alle tue esigenze.",
    icon: CarFront,
  },
  {
    number: "03",
    title: "Richiedi",
    text: "Inserisci i tuoi dati e invia la richiesta di preventivo in pochi semplici passaggi.",
    icon: Send,
  },
  {
    number: "04",
    title: "Parti",
    text: "Dopo la conferma, ritira il veicolo e inizia il tuo viaggio.",
    icon: MapPin,
  },
];

export default function HowItWorks() {
  return (
    <section className="overflow-hidden bg-[#f5f7f9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="grid gap-7 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              Semplice dall&apos;inizio
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Il tuo viaggio,
              <br />
              <span className="text-slate-400">passo dopo passo.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 lg:justify-self-end lg:text-base">
            Dalla ricerca iniziale alla richiesta di preventivo, un percorso
            semplice per trovare la soluzione più adatta al tuo viaggio.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-slate-300 lg:block" />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div
                    className={`
                      relative h-full min-h-[300px]
                      rounded-[26px] border border-slate-200
                      bg-white p-7
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-[#005baa]/30
                      hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]
                      sm:p-8
                      lg:min-h-[330px]
                      lg:rounded-none
                      lg:border-y
                      lg:border-l-0
                      lg:border-r
                      lg:bg-transparent
                      lg:shadow-none
                      lg:hover:bg-white
                      lg:hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                      ${index === 0 ? "lg:border-l" : ""}
                    `}
                  >
                    {/* Number / icon */}
                    <div className="flex items-center justify-between">
                      <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full border border-slate-300 bg-[#f5f7f9] transition-all duration-500 group-hover:border-[#005baa] group-hover:bg-[#005baa]">
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          className="text-slate-700 transition-colors duration-500 group-hover:text-white"
                        />
                      </div>

                      <span className="text-xs font-bold tracking-[0.18em] text-[#005baa]">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-14">
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-[260px] text-sm leading-6 text-slate-500">
                        {step.text}
                      </p>
                    </div>

                    {/* Bottom progress */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#005baa] transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex items-center gap-3 text-xs text-slate-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#005baa]" />
          La richiesta non comporta un pagamento online immediato.
        </motion.div>
      </div>
    </section>
  );
}
