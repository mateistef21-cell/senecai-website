"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PillButton } from "./PillButton";
import { LangToggle } from "./LangToggle";
import { useLocale } from "@/lib/LocaleContext";

export function Nav() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled ? "border-gold-200 bg-cream-50/90 backdrop-blur" : "border-transparent bg-cream-50/60 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <PillButton href="#tools" variant="outline">
            {t.nav.ctaSecondary}
          </PillButton>
          <PillButton href="#final-cta" variant="primary">
            {t.nav.ctaPrimary}
          </PillButton>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-gold-300 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="#161410" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="#161410" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold-200 bg-cream-50 px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4 py-3">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-700"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-gold-200 pt-4">
            <LangToggle />
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <PillButton href="#tools" variant="outline" onClick={() => setOpen(false)} className="w-full">
              {t.nav.ctaSecondary}
            </PillButton>
            <PillButton href="#final-cta" variant="primary" onClick={() => setOpen(false)} className="w-full">
              {t.nav.ctaPrimary}
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
