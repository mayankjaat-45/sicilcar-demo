"use client";

import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phone = "393394484484";

  const message =
    "Ciao SicilCar, vorrei ricevere informazioni sui vostri servizi.";

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contatta SicilCar su WhatsApp"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="group fixed bottom-6 right-5 z-[80] flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 text-white shadow-[0_15px_40px_rgba(0,0,0,0.22)] sm:bottom-7 sm:right-7 sm:h-[60px]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M16.04 3C8.85 3 3 8.74 3 15.8c0 2.25.6 4.45 1.74 6.38L3 28.5l6.53-1.7a13.2 13.2 0 0 0 6.5 1.68h.01C23.23 28.48 29 22.74 29 15.7 29 8.64 23.23 3 16.04 3Zm0 23.32h-.01a11 11 0 0 1-5.6-1.5l-.4-.23-3.88 1.01 1.04-3.72-.26-.4a10.53 10.53 0 0 1-1.68-5.68c0-5.86 4.84-10.63 10.8-10.63 5.95 0 10.79 4.7 10.79 10.53 0 5.85-4.84 10.62-10.8 10.62Zm5.93-7.95c-.32-.16-1.92-.93-2.22-1.03-.3-.11-.51-.16-.73.16-.21.31-.83 1.03-1.02 1.24-.19.21-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.58-.97-.84-1.62-1.88-1.81-2.2-.19-.31-.02-.48.14-.64.15-.14.33-.37.49-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.73-1-2.37-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.29.31-1.13 1.08-1.13 2.64 0 1.55 1.16 3.05 1.32 3.26.16.21 2.28 3.42 5.52 4.8.77.33 1.37.52 1.84.67.77.24 1.47.21 2.03.13.62-.09 1.92-.77 2.19-1.51.27-.74.27-1.37.19-1.51-.08-.13-.3-.21-.62-.37Z" />
      </svg>

      <span className="hidden pr-1 text-sm font-semibold sm:block">
        WhatsApp
      </span>

      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 transition group-hover:scale-110 group-hover:opacity-0" />
    </motion.a>
  );
}
