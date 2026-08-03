"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gold-200 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-cream/70">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-12">
            {t.footer.columns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-gold-400">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-cream/75 transition-colors hover:text-gold-400">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
