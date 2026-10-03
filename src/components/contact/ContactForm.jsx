"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "Noleggio auto",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
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
          Messaggio ricevuto
        </p>

        <h3 className="mt-3 text-3xl font-semibold text-slate-950">
          Grazie, {form.name}.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
          Questa è la conferma dimostrativa. Nel sito finale il messaggio
          verrebbe inviato direttamente a SicilCar.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-7 text-sm font-bold text-[#005baa]"
        >
          Nuovo messaggio
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Nome e cognome"
          required
          value={form.name}
          onChange={(value) => update("name", value)}
        />

        <Input
          label="Telefono"
          type="tel"
          value={form.phone}
          onChange={(value) => update("phone", value)}
        />

        <div className="sm:col-span-2">
          <Input
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(value) => update("email", value)}
          />
        </div>

        <div className="sm:col-span-2">
          <Label>Come possiamo aiutarti?</Label>

          <select
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={fieldClass}
          >
            <option>Noleggio auto</option>
            <option>Noleggio furgoni</option>
            <option>Lungo termine</option>
            <option>Transfer</option>
            <option>Tour privato</option>
            <option>Altra richiesta</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Label>Messaggio</Label>

        <textarea
          rows={6}
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Scrivi qui la tua richiesta..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white"
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
        className="mt-7 min-h-[58px] w-full rounded-full bg-[#005baa] px-7 text-sm font-bold text-white transition hover:bg-[#004b8c]"
      >
        Invia richiesta →
      </button>
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
        required={required}
        value={value}
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
