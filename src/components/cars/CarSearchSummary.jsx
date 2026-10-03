export default function CarSearchSummary({
  pickup,
  dropoff,
  pickupDate,
  returnDate,
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5 md:grid-cols-4">
        <Item label="Ritiro" value={pickup || "Messina Centro"} />

        <Item
          label="Data ritiro"
          value={formatDate(pickupDate) || "Da definire"}
        />

        <Item label="Riconsegna" value={dropoff || "Messina Centro"} />

        <Item
          label="Data riconsegna"
          value={formatDate(returnDate) || "Da definire"}
        />
      </div>
    </div>
  );
}

function Item({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}
