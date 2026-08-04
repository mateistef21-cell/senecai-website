import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-150 whitespace-nowrap";

const variants = {
  primary: "bg-gold-500 text-ink hover:bg-gold-400 shadow-card hover:shadow-pop active:bg-gold-600",
  outline: "border border-gold-400 bg-white text-gold-700 hover:border-gold-500 hover:bg-gold-50 active:bg-gold-100",
  dark: "bg-ink text-cream hover:bg-ink-700 shadow-card hover:shadow-pop",
  ghost: "text-ink hover:bg-gold-50",
};

interface CommonProps {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function PillButton(props: LinkProps | ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
