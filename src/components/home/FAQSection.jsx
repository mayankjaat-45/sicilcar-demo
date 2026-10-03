"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
            Domande frequenti
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Hai qualche domanda?
          </h2>

          <p className="mt-5 max-w-sm leading-7 text-slate-500">
            Trova rapidamente le informazioni principali sul noleggio e sui
            servizi SicilCar.
          </p>
        </div>

        <div className="border-t border-slate-200">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl">
                    {active ? "−" : "+"}
                  </span>
                </button>

                {active && (
                  <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
