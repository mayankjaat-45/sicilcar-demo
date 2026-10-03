"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import SearchBox from "@/components/booking/SearchBox";

const trustItems = [
  {
    number: "01",
    title: "Dal 1986",
    text: "A Messina",
  },
  {
    number: "02",
    title: "Auto & Van",
    text: "Mobilità flessibile",
  },
  {
    number: "03",
    title: "Transfer",
    text: "In Sicilia",
  },
  {
    number: "04",
    title: "Tour privati",
    text: "Scopri l'isola",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  const backgroundX = useTransform(smoothX, [-0.5, 0.5], ["-1.5%", "1.5%"]);

  const backgroundY = useTransform(smoothY, [-0.5, 0.5], ["-1%", "1%"]);

  function handleMouseMove(event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  useEffect(() => {
    const reset = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mouseleave", reset);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[950px] overflow-hidden bg-[#061a29] text-white lg:min-h-[100svh]"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.04 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -inset-[3%]"
      >
        <img
          src="/hero/sicily-coast.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-[#031725]/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#031725]/95 via-[#031725]/65 to-[#031725]/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#031725]/90 via-transparent to-[#031725]/35" />

      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
        }}
      />

      {/* LARGE DECORATIVE SICILIA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 1,
        }}
        className="pointer-events-none absolute -right-8 top-[18%] hidden xl:block"
      >
        <p className="text-[150px] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.035]">
          SICILIA
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[950px] max-w-[1500px] flex-col px-5 pb-8 pt-40 sm:px-8 lg:min-h-[100svh] lg:px-12 lg:pb-7 lg:pt-44">
        {/* MAIN */}
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-5xl">
            {/* EYEBROW */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#61b8ff]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8bcbff]">
                Noleggio & mobilità · Messina
              </p>
            </motion.div>

            {/* HEADING */}
            <h1 className="mt-7 max-w-[950px] text-[54px] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-[72px] lg:text-[86px] xl:text-[104px]">
              <AnimatedLine delay={0.25}>La Sicilia,</AnimatedLine>

              <AnimatedLine delay={0.37}>
                <span className="text-white/55">al tuo ritmo.</span>
              </AnimatedLine>
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
            >
              Auto, furgoni, transfer e tour privati. Parti da Messina e scopri
              la Sicilia con la libertà che desideri.
            </motion.p>

            {/* ACTIONS */}
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
                duration: 0.7,
                delay: 0.8,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#booking"
                className="group inline-flex min-h-[58px] items-center gap-5 rounded-full bg-white px-7 text-sm font-bold text-[#071b2b] transition hover:bg-[#eaf4fc]"
              >
                Trova la tua auto
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#fleet"
                className="group inline-flex min-h-[58px] items-center gap-3 rounded-full border border-white/25 bg-white/[0.05] px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Esplora la flotta
                <span className="text-white/50 transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className="relative hidden justify-end lg:flex"
          >
            <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-sm">
              {/* rotating border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-dashed border-white/20"
              />

              <div className="relative text-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/45">
                  Messina
                </span>

                <p className="mt-2 text-6xl font-semibold tracking-[-0.06em]">
                  1986
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8bcbff]">
                  SicilCar
                </p>
              </div>

              <div className="absolute right-[-7px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#61b8ff] shadow-[0_0_25px_rgba(97,184,255,0.9)]" />
            </div>
          </motion.div>
        </div>

        {/* BOOKING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 mt-12 lg:mt-8"
        >
          <SearchBox />
        </motion.div>

        {/* TRUST BAR */}
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
            duration: 0.7,
            delay: 1.15,
          }}
          className="mt-5 grid overflow-hidden rounded-[22px] border border-white/10 bg-[#031725]/45 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item, index) => (
            <div
              key={item.number}
              className={`flex items-center gap-4 px-5 py-4 ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-white/10"
                  : ""
              }`}
            >
              <span className="text-[10px] font-bold text-[#61b8ff]">
                {item.number}
              </span>

              <div>
                <p className="text-xs font-semibold text-white">{item.title}</p>

                <p className="mt-0.5 text-[10px] text-white/40">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#fleet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-10 right-10 z-20 hidden items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 xl:flex"
      >
        Scorri
        <span className="relative block h-14 w-px overflow-hidden bg-white/20">
          <motion.span
            animate={{
              y: ["-100%", "140%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-6 w-px bg-white"
          />
        </span>
      </motion.a>
    </section>
  );
}

function AnimatedLine({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={{
          y: "110%",
        }}
        animate={{
          y: "0%",
        }}
        transition={{
          duration: 0.85,
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
