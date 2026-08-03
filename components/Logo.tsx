export function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`} aria-label="SenecAI home">
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M20 3C10.6 3 3 10.6 3 20c0 4.9 2.1 9.3 5.4 12.4"
          stroke="#C9A24B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M20 37c9.4 0 17-7.6 17-17 0-4.9-2.1-9.3-5.4-12.4"
          stroke={dark ? "#FBF8F1" : "#161410"}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="5.5" fill="#C9A24B" />
      </svg>
      <span className={`font-headline text-[1.25rem] font-extrabold tracking-tight ${dark ? "text-cream" : "text-ink"}`}>
        Senec<span className="text-gold-500">AI</span>
      </span>
    </a>
  );
}
