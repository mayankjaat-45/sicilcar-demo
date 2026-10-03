"use client";

const categories = ["Tutte", "Economy", "City", "SUV", "Van"];

export default function CarFilters({
  selectedCategory,
  setSelectedCategory,
  transmission,
  setTransmission,
}) {
  return (
    <aside className="rounded-[26px] border border-slate-200 bg-white p-6 lg:sticky lg:top-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">Filtri</h2>

        <button
          type="button"
          onClick={() => {
            setSelectedCategory("Tutte");
            setTransmission("Tutte");
          }}
          className="text-xs font-semibold text-[#005baa]"
        >
          Reset
        </button>
      </div>

      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
          Categoria
        </p>

        <div className="mt-4 space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                selectedCategory === category
                  ? "bg-[#eaf4fc] font-semibold text-[#005baa]"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}

              {selectedCategory === category && <span>✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-7">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
          Cambio
        </p>

        <div className="mt-4 space-y-3">
          {["Tutte", "Manuale", "Automatico"].map((value) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
            >
              <input
                type="radio"
                name="transmission"
                checked={transmission === value}
                onChange={() => setTransmission(value)}
                className="accent-[#005baa]"
              />

              {value}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
