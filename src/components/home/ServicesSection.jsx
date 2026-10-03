"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services } from "@/data/services";

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  const activeService = services[active];

  return (
    <section id="services" className="overflow-hidden bg-[#061a29] text-white">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid min-h-[850px] lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div className="flex flex-col justify-between px-5 py-20 sm:px-8 lg:px-14 lg:py-28 xl:px-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#61b8ff]">
                Più di un autonoleggio
              </p>

              <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                Tutto ciò che ti serve per muoverti.
              </h2>
            </div>

            <div className="mt-16 border-t border-white/15">
              {services.map((service, index) => {
                const selected = active === index;

                return (
                  <Link
                    key={service.number}
                    href={service.href}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="group relative block border-b border-white/15"
                  >
                    <div className="grid grid-cols-[50px_1fr_auto] items-center gap-4 py-7 lg:py-8">
                      <span
                        className={`text-xs font-bold transition ${
                          selected ? "text-[#61b8ff]" : "text-white/30"
                        }`}
                      >
                        {service.number}
                      </span>

                      <div>
                        <h3
                          className={`text-2xl font-semibold transition duration-300 sm:text-3xl ${
                            selected
                              ? "translate-x-2 text-white"
                              : "text-white/55"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <AnimatePresence initial={false}>
                          {selected && (
                            <motion.p
                              initial={{
                                opacity: 0,
                                height: 0,
                                y: -5,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="max-w-md overflow-hidden pt-3 text-sm leading-6 text-white/50"
                            >
                              {service.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full border transition duration-300 ${
                          selected
                            ? "rotate-[-35deg] border-white bg-white text-[#071b2b]"
                            : "border-white/20 text-white/60"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {selected && (
                      <motion.div
                        layoutId="service-line"
                        className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#61b8ff]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden min-h-[850px] overflow-hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-[#061a29]/40 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 pt-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    {activeService.number} / 04
                  </p>

                  <h3 className="mt-3 text-5xl font-semibold tracking-[-0.04em]">
                    {activeService.shortTitle}
                  </h3>

                  <Link
                    href={activeService.href}
                    className="mt-7 inline-flex items-center gap-3 text-sm font-bold"
                  >
                    Scopri il servizio
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* LARGE BACKGROUND NUMBER */}
            <AnimatePresence mode="wait">
              <motion.span
                key={activeService.number}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute right-8 top-5 text-[220px] font-semibold leading-none tracking-[-0.08em] text-white"
              >
                {activeService.number}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
