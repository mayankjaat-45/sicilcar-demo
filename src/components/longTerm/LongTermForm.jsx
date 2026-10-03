"use client";

import { useState } from "react";

export default function LongTermForm() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    customerType: "Privato",
    vehicle: "City car",
    duration: "12 mesi",
    mileage: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

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
      <div className="rounded-[30px] border border-slate-200 bg-white p-10 text-center shadow-sm">
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
          Nel sistema reale il team SicilCar riceverebbe ora i dati per
          preparare una proposta personalizzata.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-bold text-[#005baa]"
        >
          Modifica richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#005baa]">
        La tua soluzione
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Select
          label="Cliente"
          value={form.customerType}
          values={["Privato", "Azienda", "Professionista"]}
          onChange={(value) => update("customerType", value)}
        />

        <Select
          label="Tipo di veicolo"
          value={form.vehicle}
          values={["City car", "Economy", "SUV", "Van", "Non so ancora"]}
          onChange={(value) => update("vehicle", value)}
        />

        <Select
          label="Durata indicativa"
          value={form.duration}
          values={["6 mesi", "12 mesi", "24 mesi", "36 mesi", "Da valutare"]}
          onChange={(value) => update("duration", value)}
        />

        <Input
          label="Km annui indicativi"
          placeholder="Es. 15.000"
          value={form.mileage}
          onChange={(value) => update("mileage", value)}
        />
      </div>

      <div className="my-7 border-t border-slate-200" />

      <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#005baa]">
        Contatti
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Input
          label="Nome e cognome"
          required
          value={form.name}
          onChange={(value) => update("name", value)}
        />

        <Input
          label="Azienda"
          value={form.company}
          onChange={(value) => update("company", value)}
        />

        <Input
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(value) => update("email", value)}
        />

        <Input
          label="Telefono"
          type="tel"
          required
          value={form.phone}
          onChange={(value) => update("phone", value)}
        />
      </div>

      <div className="mt-5">
        <Label>Note</Label>

        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Modello preferito, utilizzo previsto o altre esigenze..."
          className={`${fieldClass} py-4`}
        />
      </div>

      <button
        type="submit"
        className="mt-7 min-h-[58px] w-full rounded-full bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c]"
      >
        Richiedi una proposta →
      </button>
    </form>
  );
}

const fieldClass =
  "mt-2 min-h-[54px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white";

function Label({ children }) {
  return (
    <label className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
      {children}
    </label>
  );
}

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
    </div>
  );
}

function Select({ label, value, values, onChange }) {
  return (
    <div>
      <Label>{label}</Label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      >
        {values.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
