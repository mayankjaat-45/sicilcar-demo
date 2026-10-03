export default function BookingSummary({ bookingData }) {
  const { car, pickup, dropoff, pickupDate, returnDate } = bookingData;

  return (
    <aside className="overflow-hidden rounded-[26px] border border-slate-200 bg-white lg:sticky lg:top-6">
      <div className="flex min-h-[190px] items-center justify-center bg-[#f3f6f8] p-7">
        <img
          src={car.image}
          alt={car.name}
          className="max-h-[140px] w-full object-contain"
        />
      </div>

      <div className="p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#005baa]">
          {car.category}
        </span>

        <h2 className="mt-2 text-2xl font-semibold text-slate-950">
          {car.name}
        </h2>

        <p className="mt-1 text-xs text-slate-400">o modello similare</p>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <SummaryRow label="Ritiro" value={pickup} />

          <SummaryRow label="Data" value={formatDate(pickupDate)} />

          <SummaryRow label="Riconsegna" value={dropoff} />

          <SummaryRow label="Data" value={formatDate(returnDate)} />
        </div>

        <div className="mt-6 rounded-2xl bg-[#eaf4fc] p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#005baa]">
            Tariffa
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            Preventivo personalizzato
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Il prezzo finale sarà confermato da SicilCar.
          </p>
        </div>
      </div>
    </aside>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-5 py-2">
      <span className="text-xs text-slate-400">{label}</span>

      <span className="text-right text-xs font-semibold text-slate-700">
        {value || "Da definire"}
      </span>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "Da definire";

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}
