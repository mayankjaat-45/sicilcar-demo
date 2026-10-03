"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();

  const [sameLocation, setSameLocation] = useState(true);

  const [form, setForm] = useState({
    pickup: "Messina Centro",
    dropoff: "Messina Centro",
    pickupDate: "",
    returnDate: "",
  });

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSearch() {
    const dropoff = sameLocation ? form.pickup : form.dropoff;

    const params = new URLSearchParams({
      pickup: form.pickup,
      dropoff,
    });

    if (form.pickupDate) {
      params.set("pickupDate", form.pickupDate);
    }

    if (form.returnDate) {
      params.set("returnDate", form.returnDate);
    }

    router.push(`/cars?${params.toString()}`);
  }

  return (
    <div
      id="booking"
      className="w-full rounded-[26px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-5"
    >
      <div className="mb-4 flex items-center justify-between px-1">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#005baa]">
            Noleggio auto
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Trova il veicolo giusto per il tuo viaggio
          </p>
        </div>

        <label className="hidden cursor-pointer items-center gap-2 text-xs text-slate-600 md:flex">
          <input
            type="checkbox"
            checked={sameLocation}
            onChange={(e) => setSameLocation(e.target.checked)}
            className="h-4 w-4 accent-[#005baa]"
          />
          Riconsegna nella stessa sede
        </label>
      </div>

      <div className="grid gap-2 lg:grid-cols-[1.25fr_1.25fr_1fr_1fr_auto]">
        <Field label="Ritiro">
          <select
            value={form.pickup}
            onChange={(e) => updateField("pickup", e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none"
          >
            <option>Messina Centro</option>
            <option>Messina Porto</option>
            <option>Catania Aeroporto</option>
          </select>
        </Field>

        <Field label="Riconsegna">
          <select
            value={sameLocation ? form.pickup : form.dropoff}
            disabled={sameLocation}
            onChange={(e) => updateField("dropoff", e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none disabled:text-slate-400"
          >
            <option>Messina Centro</option>
            <option>Messina Porto</option>
            <option>Catania Aeroporto</option>
          </select>
        </Field>

        <Field label="Data ritiro">
          <input
            type="date"
            value={form.pickupDate}
            onChange={(e) => updateField("pickupDate", e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none"
          />
        </Field>

        <Field label="Data riconsegna">
          <input
            type="date"
            value={form.returnDate}
            onChange={(e) => updateField("returnDate", e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none"
          />
        </Field>

        <button
          type="button"
          onClick={handleSearch}
          className="min-h-[66px] rounded-2xl bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c] lg:min-w-[150px]"
        >
          Cerca auto →
        </button>
      </div>

      <label className="mt-4 flex cursor-pointer items-center gap-2 px-1 text-xs text-slate-600 md:hidden">
        <input
          type="checkbox"
          checked={sameLocation}
          onChange={(e) => setSameLocation(e.target.checked)}
          className="h-4 w-4 accent-[#005baa]"
        />
        Riconsegna nella stessa sede
      </label>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex min-h-[66px] flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-[#005baa] focus-within:bg-white">
      <label className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </label>

      {children}
    </div>
  );
}
