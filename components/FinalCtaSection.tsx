"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { PillButton } from "./PillButton";

export function FinalCtaSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="final-cta" className="scroll-mt-24 wave-bg">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              {t.finalCta.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">{t.finalCta.note}</p>
          </div>

          <div className="rounded-2xl border border-gold-200 bg-white p-6 shadow-pop sm:p-8">
            {submitted ? (
              <div className="animate-fade-in-up py-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M2 8l5.5 5.5L18 2" stroke="#C9A24B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-headline text-lg font-bold text-ink">{t.finalCta.formSuccessTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{t.finalCta.formSuccessBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Field label={t.finalCta.formName} name="name" type="text" required />
                <Field label={t.finalCta.formEmail} name="email" type="email" required />
                <Field label={t.finalCta.formCompany} name="company" type="text" />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink-700">
                    {t.finalCta.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-xl border border-gold-200 bg-cream-50 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-gold-500"
                  />
                </div>
                <PillButton type="submit" variant="primary" className="mt-1 w-full">
                  {t.finalCta.formSubmit}
                </PillButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-gold-200 bg-cream-50 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-gold-500"
      />
    </div>
  );
}
