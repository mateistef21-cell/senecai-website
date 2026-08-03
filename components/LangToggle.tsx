"use client";

import { useLocale } from "@/lib/LocaleContext";
import type { Locale } from "@/lib/types";

export function LangToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  const options: Locale[] = ["en", "ro"];

  return (
    <div
      className={`relative inline-flex items-center rounded-pill border border-gold-300 bg-white/70 p-1 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLocale(opt)}
          aria-pressed={locale === opt}
          className={`relative z-10 rounded-pill px-3 py-1.5 uppercase tracking-wide transition-colors duration-150 ${
            locale === opt ? "bg-gold-500 text-ink" : "text-slate hover:text-ink"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
