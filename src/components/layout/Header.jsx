"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Auto",
    href: "/cars",
  },
  {
    label: "Furgoni",
    href: "/vans",
  },
  {
    label: "Tour",
    href: "/tours",
  },
  {
    label: "Transfer",
    href: "/transfers",
  },
  {
    label: "Chi siamo",
    href: "/about",
  },
  {
    label: "Contatti",
    href: "/contact",
  },
];

const serviceItems = [
  {
    title: "Noleggio Auto",
    description: "Trova il veicolo per il tuo viaggio.",
    href: "/cars",
    number: "01",
  },
  {
    title: "Noleggio Furgoni",
    description: "Soluzioni per lavoro e trasporto.",
    href: "/vans",
    number: "02",
  },
  {
    title: "Lungo Termine",
    description: "Mobilità per privati e aziende.",
    href: "/long-term-rental",
    number: "03",
  },
  {
    title: "Transfer Privati",
    description: "Aeroporti, porti e destinazioni.",
    href: "/transfers",
    number: "04",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isHome = pathname === "/";

  /*
   * Homepage starts transparent because it sits over Hero.
   * Internal pages immediately use the solid navigation.
   */
  const solidHeader = scrolled || !isHome || menuOpen;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 70);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: 0,
        }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
          solidHeader
            ? "border-b border-slate-200/70 bg-white/90 shadow-[0_8px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
            solidHeader ? "h-[76px]" : "h-[100px]"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="relative z-[110] flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-500 ${
                solidHeader
                  ? "bg-[#005baa] text-white"
                  : "bg-white text-[#005baa] shadow-sm"
              }`}
            >
              SC
            </div>

            <div>
              <div
                className={`text-xl font-bold leading-none tracking-[-0.03em] transition-colors duration-500 ${
                  solidHeader ? "text-[#071b2b]" : "text-white"
                }`}
              >
                SICILCAR
              </div>

              <div
                className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.23em] transition-colors duration-500 ${
                  solidHeader ? "text-slate-400" : "text-white/60"
                }`}
              >
                Noleggio Auto
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink
              href="/cars"
              label="Auto"
              active={pathname.startsWith("/cars")}
              solid={solidHeader}
            />

            <NavLink
              href="/vans"
              label="Furgoni"
              active={pathname.startsWith("/vans")}
              solid={solidHeader}
            />

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium transition ${
                  solidHeader
                    ? servicesOpen
                      ? "bg-slate-100 text-[#071b2b]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[#071b2b]"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                Servizi
                <motion.span
                  animate={{
                    rotate: servicesOpen ? 180 : 0,
                  }}
                  className="text-[10px]"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4"
                  >
                    <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                      <div className="grid grid-cols-2 gap-1">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.number}
                            href={service.href}
                            className="group rounded-[18px] p-5 transition hover:bg-[#f3f7fa]"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-[#005baa]">
                                {service.number}
                              </span>

                              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-500 transition group-hover:border-[#005baa] group-hover:bg-[#005baa] group-hover:text-white">
                                →
                              </span>
                            </div>

                            <h3 className="mt-5 text-sm font-semibold text-slate-950">
                              {service.title}
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-400">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              href="/tours"
              label="Tour"
              active={pathname.startsWith("/tours")}
              solid={solidHeader}
            />

            <NavLink
              href="/transfers"
              label="Transfer"
              active={pathname.startsWith("/transfers")}
              solid={solidHeader}
            />

            <NavLink
              href="/about"
              label="Chi siamo"
              active={pathname === "/about"}
              solid={solidHeader}
            />

            <NavLink
              href="/contact"
              label="Contatti"
              active={pathname === "/contact"}
              solid={solidHeader}
            />
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/#booking"
              className={`group flex min-h-[48px] items-center gap-4 rounded-full px-6 text-sm font-bold transition-all duration-300 ${
                solidHeader
                  ? "bg-[#005baa] text-white hover:bg-[#004b8c]"
                  : "bg-white text-[#005baa] hover:bg-[#eaf4fc]"
              }`}
            >
              Richiedi preventivo
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            className={`relative z-[110] flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              solidHeader
                ? "bg-[#071b2b] text-white"
                : "border border-white/20 bg-white/10 text-white backdrop-blur"
            }`}
          >
            <div className="relative h-5 w-5">
              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: 45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: -6,
                      }
                }
                className="absolute left-0 top-[9px] block h-[1.5px] w-5 bg-current"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                className="absolute left-0 top-[9px] block h-[1.5px] w-5 bg-current"
              />

              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: -45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: 6,
                      }
                }
                className="absolute left-0 top-[9px] block h-[1.5px] w-5 bg-current"
              />
            </div>
          </button>
        </div>

        {/* subtle scroll progress line */}
        <ScrollProgress />
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[90] bg-[#061a29] lg:hidden"
          >
            <div className="flex min-h-[100svh] flex-col px-5 pb-8 pt-[110px] sm:px-8">
              <nav className="border-t border-white/10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.05 + index * 0.04,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-[10px] font-bold text-[#61b8ff]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-2xl font-semibold text-white">
                          {item.label}
                        </span>
                      </div>

                      <span className="text-lg text-white/35 transition group-hover:translate-x-1 group-hover:text-white">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <Link
                  href="/#booking"
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-14.5 items-center justify-between rounded-full bg-white px-6 text-sm font-bold text-[#071b2b] transition hover:bg-[#eaf4fc]"
                >
                  Richiedi preventivo
                  <span>→</span>
                </Link>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="mt-7 border-t border-white/10 pt-6">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                      Messina · Sicilia
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white/70">
                      Dal 1986
                    </p>
                 </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label, active, solid }) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-3 text-sm font-medium transition ${
        solid
          ? active
            ? "bg-[#eaf4fc] text-[#005baa]"
            : "text-slate-600 hover:bg-slate-100 hover:text-[#071b2b]"
          : active
            ? "bg-white/10 text-white"
            : "text-white/85 hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}

      {active && (
        <motion.span
          layoutId="nav-active-dot"
          className={`absolute bottom-[5px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${
            solid ? "bg-[#005baa]" : "bg-white"
          }`}
        />
      )}
    </Link>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(Math.min((window.scrollY / documentHeight) * 100, 100));
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
      <div
        className="h-full bg-[#005baa] transition-[width] duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
