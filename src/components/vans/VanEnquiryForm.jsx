"use client";

import { useState } from "react";

const initialState = {
  vehicle: "",
  pickupDate: "",
  returnDate: "",
  pickup: "Messina",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export default function VanEnquiryForm({ vans }) {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[30px] bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf4fc] text-2xl font-bold text-[#005baa]">
          ✓
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#005baa]">
          Richiesta ricevuta
        </p>

        <h3 className="mt-3 text-3xl font-semibold text-slate-950">
          Grazie, {form.name}.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
          La richiesta è stata registrata nella demo. Nel sito reale verrebbe
          inviata direttamente al team SicilCar.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-7 text-sm font-bold text-[#005baa]"
        >
          Nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <Label>Tipo di furgone</Label>

        <select
          required
          value={form.vehicle}
          onChange={(e) => update("vehicle", e.target.value)}
          className={fieldClass}
        >
          <option value="">Seleziona un veicolo</option>

          {vans.map((van) => (
            <option key={van.id} value={van.name}>
              {van.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Input
          label="Data ritiro"
          type="date"
          required
          value={form.pickupDate}
          onChange={(value) => update("pickupDate", value)}
        />

        <Input
          label="Data riconsegna"
          type="date"
          required
          value={form.returnDate}
          onChange={(value) => update("returnDate", value)}
        />

        <Input
          label="Sede di ritiro"
          value={form.pickup}
          onChange={(value) => update("pickup", value)}
        />

        <Input
          label="Nome e cognome"
          required
          value={form.name}
          onChange={(value) => update("name", value)}
        />

        <Input
          label="Telefono"
          type="tel"
          required
          value={form.phone}
          onChange={(value) => update("phone", value)}
        />

        <Input
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(value) => update("email", value)}
        />
      </div>

      <div className="mt-5">
        <Label>Di cosa hai bisogno?</Label>

        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Descrivi il tipo di trasporto, eventuali esigenze o richieste..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white"
        />
      </div>

      <button
        type="submit"
        className="mt-7 min-h-[58px] w-full rounded-full bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c]"
      >
        Richiedi disponibilità →
      </button>

      <p className="mt-4 text-center text-[11px] text-slate-400">
        Nessun pagamento richiesto in questa fase.
      </p>
    </form>
  );
}

const fieldClass =
  "mt-2 min-h-[54px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white";

function Input({ label, type = "text", value, onChange, required = false }) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
    </div>
  );
}

function Label({ children }) {
  return (
    <label className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
      {children}
    </label>
  );
}
