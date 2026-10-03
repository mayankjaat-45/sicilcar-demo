"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const storySteps = [
  {
    year: "1986",
    eyebrow: "Le origini",
    title: "Tutto parte da Messina.",
    text: "Dal 1986 SicilCar opera a Messina nel settore del noleggio e dei servizi di mobilità.",
    image: "/about/story-1986.jpg",
  },
  {
    year: "OGGI",
    eyebrow: "La mobilità evolve",
    title: "Più modi di muoversi.",
    text: "Alle esigenze di noleggio auto si affiancano furgoni, transfer e servizi dedicati alla scoperta del territorio.",
    image: "/about/story-today.jpg",
  },
  {
    year: "SICILIA",
    eyebrow: "Il territorio",
    title: "Non solo una destinazione.",
    text: "Messina diventa il punto di partenza per vivere la città e scoprire diverse destinazioni della Sicilia.",
    image: "/about/story-sicily.jpg",
  },
];

const services = [
  {
    number: "01",
    title: "Auto",
    label: "Noleggio Auto",
    text: "Una soluzione flessibile per muoversi in città e scoprire il territorio.",
    image: "/about/service-car.jpg",
    href: "/cars",
  },
  {
    number: "02",
    title: "Furgoni",
    label: "Veicoli commerciali",
    text: "Soluzioni dedicate alle esigenze di trasporto e mobilità professionale.",
    image: "/about/service-van.jpg",
    href: "/vans",
  },
  {
    number: "03",
    title: "Transfer",
    label: "Transfer privati",
    text: "Collegamenti dedicati per aeroporti, porti e destinazioni siciliane.",
    image: "/about/service-transfer.jpg",
    href: "/transfers",
  },
  {
    number: "04",
    title: "Tour",
    label: "Scopri la Sicilia",
    text: "Esperienze e itinerari per conoscere alcune delle destinazioni dell'isola.",
    image: "/about/service-tour.jpg",
    href: "/tours",
  },
];

export default function AboutExperience() {
  return (
    <>
      <InteractiveHero />

      <StoryExperience />

      <InteractiveServices />

      <MessinaSection />

      <FinalCTA />
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function InteractiveHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  const imageX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);

  const imageY = useTransform(springY, [-0.5, 0.5], ["-1.5%", "1.5%"]);

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;

    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] overflow-hidden bg-[#061a29] text-white"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        initial={{
          scale: 1.15,
        }}
        animate={{
          scale: 1.05,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -inset-[3%]"
      >
        <img
          src="/about/about-hero.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#031725]/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#031725]/95 via-[#031725]/75 to-[#031725]/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#031725]/85 via-transparent to-[#031725]/40" />

      {/* HUGE YEAR */}
      <motion.span
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 0.07,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.6,
        }}
        className="pointer-events-none absolute -right-12 bottom-[5%] hidden text-[300px] font-semibold leading-none tracking-[-0.09em] text-white lg:block xl:text-[430px]"
      >
        1986
      </motion.span>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] items-center px-5 pb-20 pt-[150px] sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#61b8ff]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8bcbff]">
              La nostra storia · Messina
            </p>
          </motion.div>

          <h1 className="mt-8 text-[56px] font-semibold leading-[0.93] tracking-[-0.065em] sm:text-[78px] lg:text-[105px] xl:text-[120px]">
            <RevealLine delay={0.25}>Da Messina,</RevealLine>

            <RevealLine delay={0.38}>
              <span className="text-white/45">dal 1986.</span>
            </RevealLine>
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-9 max-w-xl text-base leading-8 text-white/60 sm:text-lg"
          >
            Una storia legata a Messina, alla mobilità e alla libertà di
            scoprire la Sicilia.
          </motion.p>

          <motion.a
            href="#story"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-12 inline-flex items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-white/60"
          >
            Scopri la storia
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
              <motion.span
                animate={{
                  y: [-3, 4, -3],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              >
                ↓
              </motion.span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SCROLL STORY
========================================================= */

function StoryExperience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="story" className="relative bg-white">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          {/* STICKY VISUAL */}
          <div className="relative hidden lg:block">
            <div className="sticky top-0 flex h-screen items-center py-24">
              <StoryVisual />

              {/* progress */}
              <div className="absolute right-8 top-1/2 h-[180px] w-px -translate-y-1/2 bg-slate-200">
                <motion.div
                  style={{
                    height: progressHeight,
                  }}
                  className="absolute left-0 top-0 w-px bg-[#005baa]"
                />
              </div>
            </div>
          </div>

          {/* STORY CONTENT */}
          <div>
            {storySteps.map((step, index) => (
              <StoryStep key={step.year} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryVisual() {
  const [activeImage, setActiveImage] = useState(storySteps[0].image);

  /*
    StoryVisual listens for our custom browser event.
    This keeps the visual sticky while the right side
    controls which image is shown.
  */
  useEffect(() => {
    const handler = (event) => {
      setActiveImage(event.detail);
    };

    window.addEventListener("sicilcar-story-image", handler);

    return () => {
      window.removeEventListener("sicilcar-story-image", handler);
    };
  }, []);

  return (
    <div className="relative h-[72vh] w-[88%] overflow-hidden rounded-[36px] bg-slate-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage}
          src={activeImage}
          alt=""
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
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-8 left-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          SicilCar
        </p>

        <p className="mt-2 text-2xl font-semibold text-white">
          Messina · Sicilia
        </p>
      </div>
    </div>
  );
}

function StoryStep({ step, index }) {
  return (
    <motion.article
      onViewportEnter={() => {
        window.dispatchEvent(
          new CustomEvent("sicilcar-story-image", {
            detail: step.image,
          }),
        );
      }}
      viewport={{
        amount: 0.55,
      }}
      className="flex min-h-[85vh] items-center border-b border-slate-100 py-20 lg:min-h-screen lg:py-28"
    >
      <div className="max-w-xl">
        {/* MOBILE IMAGE */}
        <div className="relative mb-10 h-[420px] overflow-hidden rounded-[28px] lg:hidden">
          <img src={step.image} alt="" className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex items-center gap-5">
          <span className="text-xs font-bold text-[#005baa]">0{index + 1}</span>

          <span className="h-px w-12 bg-slate-200" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {step.eyebrow}
          </span>
        </div>

        <p className="mt-10 text-[72px] font-semibold leading-none tracking-[-0.07em] text-slate-200 sm:text-[100px]">
          {step.year}
        </p>

        <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
          {step.title}
        </h2>

        <p className="mt-7 max-w-lg text-base leading-8 text-slate-500">
          {step.text}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   INTERACTIVE SERVICES
========================================================= */

function InteractiveServices() {
  const [active, setActive] = useState(0);

  const service = services[active];

  return (
    <section className="bg-[#061a29] text-white">
      <div className="grid min-h-[850px] lg:grid-cols-2">
        {/* VISUAL */}
        <div className="relative min-h-[500px] overflow-hidden lg:min-h-[850px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={service.image}
              src={service.image}
              alt={service.title}
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
              }}
              transition={{
                duration: 0.6,
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#061a29]/30" />

          <AnimatePresence mode="wait">
            <motion.span
              key={service.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 0.12,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="absolute bottom-4 left-8 text-[180px] font-semibold leading-none tracking-[-0.08em]"
            >
              {service.number}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#61b8ff]">
            SicilCar oggi
          </p>

          <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
            Un modo diverso
            <span className="text-white/35"> di muoversi.</span>
          </h2>

          <div className="mt-14 border-t border-white/15">
            {services.map((item, index) => {
              const selected = index === active;

              return (
                <Link
                  key={item.number}
                  href={item.href}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group block border-b border-white/15"
                >
                  <div className="grid grid-cols-[45px_1fr_auto] items-center gap-4 py-7">
                    <span
                      className={`text-xs font-bold ${
                        selected ? "text-[#61b8ff]" : "text-white/25"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                        {item.label}
                      </p>

                      <h3
                        className={`mt-1 text-2xl font-semibold transition duration-300 ${
                          selected
                            ? "translate-x-2 text-white"
                            : "text-white/50"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <AnimatePresence>
                        {selected && (
                          <motion.p
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            className="max-w-md overflow-hidden pt-3 text-sm leading-6 text-white/45"
                          >
                            {item.text}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                        selected
                          ? "-rotate-[35deg] border-white bg-white text-[#061a29]"
                          : "border-white/20 text-white/50"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MESSINA
========================================================= */

function MessinaSection() {
  return (
    <section className="relative min-h-[850px] overflow-hidden">
      <motion.img
        initial={{
          scale: 1.08,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.4,
        }}
        src="/about/messina-wide.jpg"
        alt="Messina, Sicilia"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#031725]/90 via-[#031725]/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[850px] max-w-[1500px] items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8bcbff]">
            Il punto di partenza
          </p>

          <h2 className="mt-7 text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[100px]">
            Messina.
            <br />
            <span className="text-white/40">Sicilia.</span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-white/60">
            Dalla città alla costa e alle destinazioni dell&apos;isola, il
            viaggio parte da qui.
          </p>

          <Link
            href="/tours"
            className="group mt-10 inline-flex min-h-[58px] items-center gap-6 rounded-full bg-white px-7 text-sm font-bold text-[#071b2b]"
          >
            Esplora la Sicilia
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[40px] bg-[#005baa] px-7 py-20 text-white sm:px-12 lg:px-16 lg:py-28">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-dashed border-white/15"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
              Il prossimo viaggio
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Dove vuoi andare?
            </h2>

            <p className="mt-7 max-w-xl leading-7 text-white/60">
              Raccontaci le tue esigenze e richiedi informazioni sui servizi
              SicilCar.
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex h-24 w-24 items-center justify-center rounded-full bg-white text-2xl text-[#005baa] transition duration-500 hover:scale-110 sm:h-28 sm:w-28"
          >
            <span className="transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={{
          y: "110%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
