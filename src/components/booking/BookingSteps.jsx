"use client";

import { useState } from "react";
import BookingSummary from "./BookingSummary";

const extrasList = [
  {
    id: "childSeat",
    title: "Seggiolino bambino",
    description: "Seggiolino adatto ai passeggeri più piccoli.",
  },
  {
    id: "additionalDriver",
    title: "Conducente aggiuntivo",
    description: "Aggiungi un secondo conducente alla richiesta.",
  },
  {
    id: "navigation",
    title: "Navigazione",
    description: "Richiedi una soluzione di navigazione per il viaggio.",
  },
];

export default function BookingSteps({ bookingData }) {
  const [step, setStep] = useState(1);

  const [extras, setExtras] = useState([]);

  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
  });

  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);

  function toggleExtra(id) {
    setExtras((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function updateDriver(field, value) {
    setDriver((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function nextStep() {
    setStep((current) => Math.min(current + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitBooking() {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return <SuccessScreen bookingData={bookingData} driver={driver} />;
  }

  return (
    <>
      <div className="mb-10 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <ProgressStep
          number="01"
          label="Extra"
          active={step === 1}
          completed={step > 1}
        />

        <ProgressStep
          number="02"
          label="Conducente"
          active={step === 2}
          completed={step > 2}
        />

        <ProgressStep
          number="03"
          label="Riepilogo"
          active={step === 3}
          completed={false}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          {step === 1 && (
            <ExtrasStep extras={extras} toggleExtra={toggleExtra} />
          )}

          {step === 2 && (
            <DriverStep
              driver={driver}
              updateDriver={updateDriver}
              notes={notes}
              setNotes={setNotes}
            />
          )}

          {step === 3 && (
            <ReviewStep
              bookingData={bookingData}
              extras={extras}
              driver={driver}
              notes={notes}
            />
          )}

          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
              >
                ← Indietro
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-[#005baa] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#004b8c]"
              >
                Continua →
              </button>
            ) : (
              <button
                type="button"
                onClick={submitBooking}
                className="rounded-full bg-[#005baa] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#004b8c]"
              >
                Invia richiesta →
              </button>
            )}
          </div>
        </div>

        <BookingSummary bookingData={bookingData} />
      </div>
    </>
  );
}

function ExtrasStep({ extras, toggleExtra }) {
  return (
    <section className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#005baa]">
        Passaggio 1
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        Personalizza il tuo viaggio
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        Seleziona eventuali servizi aggiuntivi. Puoi anche continuare senza
        extra.
      </p>

      <div className="mt-8 space-y-3">
        {extrasList.map((extra) => {
          const selected = extras.includes(extra.id);

          return (
            <button
              key={extra.id}
              type="button"
              onClick={() => toggleExtra(extra.id)}
              className={`flex w-full items-center justify-between gap-6 rounded-[20px] border p-5 text-left transition ${
                selected
                  ? "border-[#005baa] bg-[#eaf4fc]"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <h3 className="font-semibold text-slate-900">{extra.title}</h3>

                <p className="mt-1 text-sm text-slate-500">
                  {extra.description}
                </p>
              </div>

              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                  selected
                    ? "border-[#005baa] bg-[#005baa] text-white"
                    : "border-slate-300"
                }`}
              >
                {selected && "✓"}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function DriverStep({ driver, updateDriver, notes, setNotes }) {
  return (
    <section className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#005baa]">
        Passaggio 2
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        Dati del conducente
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        Inserisci i dati della persona che guiderà il veicolo.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Input
          label="Nome"
          value={driver.firstName}
          onChange={(value) => updateDriver("firstName", value)}
        />

        <Input
          label="Cognome"
          value={driver.lastName}
          onChange={(value) => updateDriver("lastName", value)}
        />

        <Input
          label="Email"
          type="email"
          value={driver.email}
          onChange={(value) => updateDriver("email", value)}
        />

        <Input
          label="Telefono"
          type="tel"
          value={driver.phone}
          onChange={(value) => updateDriver("phone", value)}
        />

        <Input
          label="Età"
          type="number"
          value={driver.age}
          onChange={(value) => updateDriver("age", value)}
        />
      </div>

      <div className="mt-5">
        <label className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
          Note
        </label>

        <textarea
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Richieste particolari, orario di arrivo..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white"
        />
      </div>
    </section>
  );
}

function ReviewStep({ bookingData, extras, driver, notes }) {
  return (
    <section className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#005baa]">
        Passaggio 3
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        Controlla la richiesta
      </h2>

      <div className="mt-8 divide-y divide-slate-100 border-y border-slate-100">
        <ReviewRow
          label="Veicolo"
          value={`${bookingData.car.name} o similare`}
        />

        <ReviewRow
          label="Conducente"
          value={
            `${driver.firstName} ${driver.lastName}`.trim() || "Non specificato"
          }
        />

        <ReviewRow label="Email" value={driver.email || "Non specificata"} />

        <ReviewRow label="Telefono" value={driver.phone || "Non specificato"} />

        <ReviewRow
          label="Extra"
          value={
            extras.length
              ? extras
                  .map((id) => extrasList.find((item) => item.id === id)?.title)
                  .filter(Boolean)
                  .join(", ")
              : "Nessun extra"
          }
        />

        <ReviewRow label="Note" value={notes || "Nessuna nota"} />
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
        <input type="checkbox" className="mt-1 accent-[#005baa]" />

        <span>
          Confermo di aver controllato i dati inseriti. Questa demo invia una
          richiesta di preventivo e non effettua alcun pagamento.
        </span>
      </label>
    </section>
  );
}

function SuccessScreen({ bookingData, driver }) {
  return (
    <div className="mx-auto max-w-2xl rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf4fc] text-2xl text-[#005baa]">
        ✓
      </div>

      <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#005baa]">
        Richiesta inviata
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        Grazie{driver.firstName ? `, ${driver.firstName}` : ""}.
      </h2>

      <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
        La richiesta per {bookingData.car.name} è stata registrata nella demo.
        In un sistema reale, SicilCar riceverebbe ora i dettagli e potrebbe
        confermare disponibilità e preventivo.
      </p>

      <a
        href="/"
        className="mt-8 inline-flex rounded-full bg-[#005baa] px-7 py-4 text-sm font-bold text-white"
      >
        Torna alla home
      </a>
    </div>
  );
}

function ProgressStep({ number, label, active, completed }) {
  return (
    <div className={`p-4 sm:p-5 ${active ? "bg-[#eaf4fc]" : "bg-white"}`}>
      <div className="flex items-center gap-3">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
            active || completed
              ? "bg-[#005baa] text-white"
              : "bg-slate-100 text-slate-400"
          }`}
        >
          {completed ? "✓" : number}
        </span>

        <span
          className={`hidden text-xs font-semibold sm:block ${
            active ? "text-[#005baa]" : "text-slate-500"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function Input({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#005baa] focus:bg-white"
      />
    </div>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
      <span className="text-xs font-semibold text-slate-400">{label}</span>

      <span className="text-sm font-medium text-slate-800">{value}</span>
    </div>
  );
}
