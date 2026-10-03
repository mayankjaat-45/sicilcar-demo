"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CarCard({ car }) {
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const detailsUrl = query ? `/cars/${car.slug}?${query}` : `/cars/${car.slug}`;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-[#f5f7f9] p-7">
        <span className="absolute left-5 top-5 z-10 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#005baa] shadow-sm">
          {car.category}
        </span>

        <img
          src={car.image}
          alt={car.name}
          className="max-h-[170px] w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
          {car.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">o modello similare</p>

        <div className="mt-6 grid grid-cols-2 gap-y-3 border-y border-slate-100 py-5 text-sm text-slate-600">
          <span>{car.passengers} posti</span>
          <span>{car.transmission}</span>
          <span>{car.luggage} bagagli</span>
          <span>{car.fuel}</span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Tariffa
            </span>

            <p className="mt-1 font-semibold text-slate-900">
              Richiedi preventivo
            </p>
          </div>

          <Link
            href={detailsUrl}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#005baa] text-xl text-white transition group-hover:bg-[#003f7d]"
            aria-label={`Visualizza ${car.name}`}
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
