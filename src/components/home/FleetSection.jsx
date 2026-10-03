"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cars } from "@/data/cars";

const categories = ["Tutti", "Economy", "City", "SUV", "Van"];

export default function FleetSection() {
  const [category, setCategory] = useState("Tutti");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredCars = useMemo(() => {
    if (category === "Tutti") {
      return cars;
    }

    return cars.filter((car) => car.category === category);
  }, [category]);

  const activeCar = filteredCars[activeIndex] || filteredCars[0];

  function changeCategory(value) {
    setCategory(value);
    setActiveIndex(0);
  }

  function previousCar() {
    setActiveIndex((current) =>
      current === 0 ? filteredCars.length - 1 : current - 1,
    );
  }

  function nextCar() {
    setActiveIndex((current) =>
      current === filteredCars.length - 1 ? 0 : current + 1,
    );
  }

  if (!activeCar) return null;

  return (
    <section id="fleet" className="overflow-hidden bg-[#f3f6f8] py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* HEADING */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]"
            >
              La nostra flotta
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Scegli come vivere
              <br />
              la Sicilia.
            </motion.h2>
          </div>

          <Link
            href="/cars"
            className="group hidden items-center gap-3 text-sm font-bold text-slate-900 lg:flex"
          >
            Esplora tutta la flotta
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition group-hover:border-[#005baa] group-hover:bg-[#005baa] group-hover:text-white">
              →
            </span>
          </Link>
        </div>

        {/* CATEGORY NAVIGATION */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => {
            const selected = item === category;

            return (
              <button
                key={item}
                type="button"
                onClick={() => changeCategory(item)}
                className={`relative shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  selected
                    ? "text-white"
                    : "bg-white text-slate-500 hover:text-slate-950"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="fleet-category"
                    className="absolute inset-0 rounded-full bg-[#071b2b]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>

        {/* SHOWROOM */}
        <div className="relative mt-8 overflow-hidden rounded-[36px] bg-white">
          {/* decorative text */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`${activeCar.id}-background`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.035 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute left-1/2 top-[48%] hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[170px] font-bold uppercase leading-none tracking-[-0.08em] text-slate-950 lg:block xl:text-[230px]"
            >
              {activeCar.category}
            </motion.span>
          </AnimatePresence>

          <div className="relative grid min-h-[670px] lg:grid-cols-[0.75fr_1.5fr_0.75fr]">
            {/* LEFT DETAILS */}
            <div className="order-2 flex flex-col justify-between border-t border-slate-100 p-7 lg:order-1 lg:border-r lg:border-t-0 lg:p-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Categoria
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCar.id}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 15,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-2 text-xl font-semibold text-slate-950">
                      {activeCar.category}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-10 space-y-6">
                <Spec
                  label="Passeggeri"
                  value={`${activeCar.passengers} posti`}
                />

                <Spec label="Cambio" value={activeCar.transmission} />

                <Spec label="Bagagli" value={`${activeCar.luggage} bagagli`} />

                <Spec label="Carburante" value={activeCar.fuel} />
              </div>

              <div className="mt-10 hidden lg:block">
                <p className="text-xs leading-6 text-slate-400">
                  Modello indicativo.
                  <br />
                  Veicolo o similare.
                </p>
              </div>
            </div>

            {/* CAR AREA */}
            <div className="order-1 relative flex min-h-[450px] flex-col items-center justify-center overflow-hidden px-6 py-12 lg:min-h-[670px] lg:px-12">
              {/* NUMBER */}
              <div className="absolute left-7 top-7 flex items-center gap-2 text-xs font-bold">
                <span className="text-slate-950">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="text-slate-300">/</span>

                <span className="text-slate-400">
                  {String(filteredCars.length).padStart(2, "0")}
                </span>
              </div>

              {/* NAME */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCar.id}-name`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-x-0 top-14 z-10 text-center lg:top-16"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005baa]">
                    {activeCar.category}
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                    {activeCar.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400">
                    o modello similare
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CAR */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCar.id}-car`}
                  initial={{
                    opacity: 0,
                    x: 80,
                    scale: 0.94,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -80,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mt-16 flex w-full items-center justify-center"
                >
                  {/* ground shadow */}
                  <div className="absolute bottom-[2%] h-[35px] w-[65%] rounded-[100%] bg-black/10 blur-2xl" />

                  <img
                    src={activeCar.image}
                    alt={activeCar.name}
                    className="relative z-10 max-h-[260px] w-full max-w-[700px] object-contain lg:max-h-[330px]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* CONTROLS */}
              {filteredCars.length > 1 && (
                <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
                  <button
                    type="button"
                    onClick={previousCar}
                    aria-label="Veicolo precedente"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-800 shadow-sm transition hover:border-[#005baa] hover:bg-[#005baa] hover:text-white"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextCar}
                    aria-label="Veicolo successivo"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071b2b] text-lg text-white shadow-sm transition hover:bg-[#005baa]"
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="order-3 flex flex-col justify-between border-t border-slate-100 p-7 lg:border-l lg:border-t-0 lg:p-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Ideale per
                </p>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${activeCar.id}-description`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-sm leading-7 text-slate-500"
                  >
                    {activeCar.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="mt-10">
                <div className="border-t border-slate-100 pt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Tariffa
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Richiedi preventivo
                  </p>
                </div>

                <Link
                  href={`/cars/${activeCar.slug}`}
                  className="group mt-7 flex min-h-[56px] w-full items-center justify-between rounded-full bg-[#005baa] px-6 text-sm font-bold text-white transition hover:bg-[#004b8c]"
                >
                  Scopri il veicolo
                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/cars"
                  className="mt-3 flex min-h-[52px] w-full items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Vedi tutta la flotta
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE DISCLAIMER */}
          <div className="border-t border-slate-100 px-7 py-5 text-xs leading-5 text-slate-400 lg:hidden">
            Modello indicativo. Veicolo o similare.
          </div>
        </div>

        <Link
          href="/cars"
          className="mt-7 flex items-center justify-center gap-3 text-sm font-bold text-slate-900 lg:hidden"
        >
          Esplora tutta la flotta →
        </Link>
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border-b border-slate-100 pb-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
