"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const milestones = [
  {
    year: "1986",
    title: "Nasce SicilCar",
    description:
      "SicilCar nasce a Messina e inizia il suo percorso nel settore della mobilità e del noleggio.",
    image: "/about/story-1986.jpg",
  },
  {
    year: "1990",
    title: "La crescita",
    description:
      "L’attività continua a crescere, consolidando la propria presenza sul territorio messinese.",
    image: "/about/story-1990.jpg",
  },
  {
    year: "2006",
    title: "Una nuova generazione",
    description:
      "Una nuova generazione entra nell’attività, portando avanti l’esperienza costruita negli anni.",
    image: "/about/story-2006.jpg",
  },
  {
    year: "2014",
    title: "La flotta si rinnova",
    description:
      "Un nuovo capitolo dedicato al rinnovamento della flotta e all’evoluzione dei servizi di mobilità.",
    image: "/about/story-2014.jpg",
  },
  {
    year: "2022",
    title: "Nuove soluzioni di mobilità",
    description:
      "SicilCar amplia la propria proposta con nuove soluzioni, incluso il noleggio a lungo termine.",
    image: "/about/story-2022.jpg",
  },
  {
    year: "2023",
    title: "Move Lightly, Move SicilCar",
    description:
      "L’identità SicilCar continua ad evolversi mantenendo Messina al centro della propria storia.",
    image: "/about/story-2023.jpg",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = milestones[activeIndex];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#061a29] py-24 text-white lg:py-32"
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-20 h-[420px] w-[420px] rounded-full border border-white/5" />
        <div className="absolute -right-10 top-32 h-[300px] w-[300px] rounded-full border border-white/5" />

        <motion.div
          key={active.year}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.035 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-[-80px] left-[-20px] select-none text-[220px] font-bold leading-none tracking-[-0.08em] text-white lg:text-[380px]"
        >
          {active.year}
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da9ee]">
              La nostra storia
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Dal 1986,
              <br />
              <span className="text-white/45">in movimento.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60 lg:justify-self-end lg:text-lg">
            Una storia iniziata a Messina e cresciuta nel tempo insieme alle
            esigenze di chi si muove per lavoro, viaggio e scoperta.
          </p>
        </div>

        {/* interactive experience */}
        <div className="mt-16 grid overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT */}
          <div className="relative flex flex-col p-6 sm:p-8 lg:min-h-[620px] lg:p-12">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                SicilCar · Messina
              </p>

              <div className="mt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.year}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <p className="text-[72px] font-semibold leading-none tracking-[-0.07em] text-[#4da9ee] sm:text-[100px] lg:text-[130px]">
                      {active.year}
                    </p>

                    <h3 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {active.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                      {active.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-auto pt-12">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Scopri la nostra storia
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#4da9ee] group-hover:bg-[#4da9ee]">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={`${active.year} — ${active.title}`}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-[#061a29]/55 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a29]/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 right-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
              Messina · Sicilia
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 md:block" />

          <div className="relative grid grid-cols-3 gap-y-7 md:grid-cols-6">
            {milestones.map((item, index) => {
              const selected = index === activeIndex;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="group relative text-left md:text-center"
                >
                  <span
                    className={`relative z-10 mx-0 block h-[15px] w-[15px] rounded-full border transition-all duration-300 md:mx-auto ${
                      selected
                        ? "scale-125 border-[#4da9ee] bg-[#4da9ee]"
                        : "border-white/25 bg-[#061a29] group-hover:border-white/60"
                    }`}
                  />

                  <span
                    className={`mt-4 block text-sm font-semibold transition-colors ${
                      selected ? "text-white" : "text-white/40"
                    }`}
                  >
                    {item.year}
                  </span>

                  <span
                    className={`mt-1 hidden text-[11px] transition-colors md:block ${
                      selected ? "text-white/55" : "text-white/25"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* bottom message */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-white/45">
            Esperienza locale, contatto diretto e soluzioni pensate per
            accompagnare ogni esigenza di mobilità.
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
            Messina · Dal 1986
          </p>
        </div>
      </div>
    </section>
  );
}
