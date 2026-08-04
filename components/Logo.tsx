export function Logo({
  className = "",
  dark = false,
  tagline = false,
}: {
  className?: string;
  dark?: boolean;
  tagline?: boolean;
}) {
  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="SenecAI Consulting home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.png" alt="" aria-hidden="true" width={36} height={39} className="h-[34px] w-auto shrink-0" />
      <span className="flex flex-col justify-center leading-none">
        <span className={`font-headline text-[1.25rem] font-extrabold tracking-tight ${dark ? "text-cream" : "text-ink"}`}>
          Senec<span className="text-gold-500">AI</span>
        </span>
        {tagline && (
          <span className={`mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${dark ? "text-cream/60" : "text-slate-light"}`}>
            Consulting
          </span>
        )}
      </span>
    </a>
  );
}
