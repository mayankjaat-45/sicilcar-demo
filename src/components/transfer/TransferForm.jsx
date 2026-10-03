"use client";

import { useState } from "react";

const initialForm = {
  pickup: "",
  destination: "",
  date: "",
  time: "",
  passengers: "2",
  transferType: "Solo andata",
  name: "",
  email: "",
  phone: "",
  notes: "",
};

export default function TransferForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

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
      <div className="rounded-[30px] border border-slate-200 bg-[#f8fafc] p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf4fc] text-2xl font-bold text-[#005baa]">
          ✓
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#005baa]">
          Richiesta inviata
        </p>

        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Grazie, {form.name}.
        </h3>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500">
          La richiesta da{" "}
          <strong className="text-slate-700">{form.pickup}</strong> a{" "}
          <strong className="text-slate-700">{form.destination}</strong> è stata
          registrata nella demo.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
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
      className="rounded-[30px] border border-slate-200 bg-[#f8fafc] p-6 sm:p-8"
    >
      {/* ROUTE */}
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <Input
          label="Luogo di partenza"
          placeholder="Es. Messina Porto"
          value={form.pickup}
          required
          onChange={(value) => update("pickup", value)}
        />

        <div className="hidden h-[54px] items-center text-slate-300 sm:flex">
          →
        </div>

        <Input
          label="Destinazione"
          placeholder="Es. Taormina"
          value={form.destination}
          required
          onChange={(value) => update("destination", value)}
        />
      </div>

      <div className="my-7 border-t border-slate-200" />

      {/* TRIP */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          label="Data"
          type="date"
          value={form.date}
          required
          onChange={(value) => update("date", value)}
        />

        <Input
          label="Orario"
          type="time"
          value={form.time}
          onChange={(value) => update("time", value)}
        />

        <div>
          <Label>Persone</Label>

          <select
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
            className={fieldClass}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Viaggio</Label>

          <select
            value={form.transferType}
            onChange={(e) => update("transferType", e.target.value)}
            className={fieldClass}
          >
            <option>Solo andata</option>
            <option>Andata e ritorno</option>
          </select>
        </div>
      </div>

      <div className="my-7 border-t border-slate-200" />

      {/* CONTACT */}
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#005baa]">
        I tuoi dati
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Nome e cognome"
          placeholder="Mario Rossi"
          value={form.name}
          required
          onChange={(value) => update("name", value)}
        />

        <Input
          label="Telefono"
          type="tel"
          placeholder="+39..."
          value={form.phone}
          required
          onChange={(value) => update("phone", value)}
        />

        <div className="sm:col-span-2">
          <Input
            label="Email"
            type="email"
            placeholder="nome@email.com"
            value={form.email}
            required
            onChange={(value) => update("email", value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <Label>Note</Label>

        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Numero del volo, nave, bagagli, seggiolino, richieste particolari..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#005baa]"
        />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[#005baa]"
        />

        <span>
          Accetto che i dati inseriti vengano utilizzati per rispondere alla mia
          richiesta.
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 flex min-h-[58px] w-full items-center justify-center rounded-full bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c]"
      >
        Richiedi preventivo →
      </button>

      <p className="mt-4 text-center text-[11px] text-slate-400">
        Nessun pagamento richiesto. La disponibilità verrà confermata
        successivamente.
      </p>
    </form>
  );
}

const fieldClass =
  "mt-2 min-h-[54px] w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#005baa]";

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
        placeholder={placeholder}
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
