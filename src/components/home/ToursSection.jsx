import Link from "next/link";
import { tours } from "@/data/tours";

export default function ToursSection() {
  return (
    <section id="tours" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
              Tour & Transfer
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Non limitarti a visitare la Sicilia.
              <br />
              Vivila.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
              Tour privati e transfer personalizzati da Messina verso alcune
              delle destinazioni più affascinanti dell&apos;isola.
            </p>
          </div>

          <Link
            href="/tours"
            className="w-fit rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-[#005baa] hover:text-[#005baa]"
          >
            Scopri tutti i tour →
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className={`group relative overflow-hidden rounded-[30px] ${
                index === 0 ? "min-h-[570px] lg:col-span-1" : "min-h-[570px]"
              }`}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                <span className="inline-flex rounded-full border border-white/30 bg-black/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur">
                  {tour.tag}
                </span>

                <div className="mt-4 flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {tour.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                      {tour.description}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-slate-950 transition group-hover:scale-110">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
