"use client";

import { useState } from "react";

export default function TourEnquiryForm({ tour }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "2",
    pickup: "Messina",
    notes: "",
  });

  function update(field, value) {
    setForm((current) => ({
      ...current,
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
          Grazie, {form.name || "viaggiatore"}.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
          Questa è una dimostrazione. In una versione reale, la richiesta per il
          tour di {tour.title} verrebbe inviata direttamente al team SicilCar.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-semibold text-[#005baa]"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-8">
        <p className="text-xs text-slate-400">Tour selezionato</p>

        <h3 className="mt-1 text-2xl font-semibold text-slate-950">
          {tour.title}
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Nome e cognome"
          value={form.name}
          required
          onChange={(value) => update("name", value)}
        />

        <Input
          label="Email"
          type="email"
          value={form.email}
          required
          onChange={(value) => update("email", value)}
        />

        <Input
          label="Telefono"
          type="tel"
          value={form.phone}
          onChange={(value) => update("phone", value)}
        />

        <Input
          label="Data"
          type="date"
          value={form.date}
          onChange={(value) => update("date", value)}
        />

        <div>
          <Label>Numero di persone</Label>

          <select
            value={form.people}
            onChange={(e) => update("people", e.target.value)}
            className="mt-2 min-h-[54px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#005baa] focus:bg-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((number) => (
              <option key={number}>{number}</option>
            ))}
          </select>
        </div>

        <Input
          label="Luogo di ritiro"
          value={form.pickup}
          onChange={(value) => update("pickup", value)}
        />
      </div>

      <div className="mt-5">
        <Label>Note o richieste particolari</Label>

        <textarea
          rows={5}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Orario della nave, hotel, esigenze particolari..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-[#005baa] focus:bg-white"
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input type="checkbox" required className="mt-1 accent-[#005baa]" />

        <span>
          Accetto che i dati inseriti vengano utilizzati per rispondere alla
          richiesta.
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 flex min-h-[58px] w-full items-center justify-center rounded-full bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c]"
      >
        Richiedi disponibilità →
      </button>

      <p className="mt-4 text-center text-[11px] text-slate-400">
        Nessun pagamento richiesto in questa fase.
      </p>
    </form>
  );
}

function Input({ label, type = "text", value, onChange, required = false }) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-[54px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white"
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
