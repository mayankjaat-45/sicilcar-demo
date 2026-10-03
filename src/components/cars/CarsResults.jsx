"use client";

import { useMemo, useState } from "react";
import CarCard from "./CarCard";
import CarFilters from "./CarFilters";

export default function CarsResults({ cars }) {
  const [selectedCategory, setSelectedCategory] = useState("Tutte");
  const [transmission, setTransmission] = useState("Tutte");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const categoryMatch =
        selectedCategory === "Tutte" || car.category === selectedCategory;

      const transmissionMatch =
        transmission === "Tutte" || car.transmission === transmission;

      return categoryMatch && transmissionMatch;
    });
  }, [cars, selectedCategory, transmission]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <CarFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        transmission={transmission}
        setTransmission={setTransmission}
      />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            <strong className="text-slate-950">{filteredCars.length}</strong>{" "}
            veicoli disponibili
          </p>

          <select className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none">
            <option>Consigliati</option>
            <option>Categoria</option>
          </select>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] border border-slate-200 bg-white p-12 text-center">
            <h3 className="text-xl font-semibold text-slate-950">
              Nessun veicolo trovato
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Prova a modificare i filtri di ricerca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
