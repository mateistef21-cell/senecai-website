export type Locale = "en" | "ro";

export type IconKey =
  | "legal"
  | "technical"
  | "cybersecurity"
  | "governance"
  | "inventory"
  | "agentic"
  | "privacy"
  | "resilience"
  | "security"
  | "audit";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headlinePrefix: string;
  headlineGold: string;
  headlineSuffix: string;
  subhead: string;
  ctaPrimary: string;
  secondaryCheck: string;
  secondaryHub: string;
}

export interface PillarContent {
  icon: IconKey;
  title: string;
  short: string;
  details: string;
}

export interface WhyChooseContent {
  eyebrow: string;
  title: string;
  lead: string;
  boldStatement: string;
  body: string;
  pillars: PillarContent[];
  tagline: string;
  cardWhyNowTitle: string;
  cardWhyNowBody: string;
  cardWhoWorkTitle: string;
  cardWhoWorkBody: string;
}

export interface WhatWeDoItem {
  icon: IconKey;
  title: string;
  short: string;
  details: string;
  framework: string;
  bullets: string[];
}

export interface WhatWeDoContent {
  eyebrow: string;
  title: string;
  lead: string;
  items: WhatWeDoItem[];
  footer: string;
  deliveredTitle: string;
  delivered: string[];
  closingFooter: string;
}

export interface MethodStep {
  number: string;
  title: string;
  body: string;
}

export interface MethodContent {
  eyebrow: string;
  title: string;
  steps: MethodStep[];
  tailoredTitle: string;
  tailoredBody: string;
  onDemandTitle: string;
  onDemand: { title: string; body: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  founder?: boolean;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
  photoPlaceholder: string;
  bioPlaceholder: string;
  members: TeamMember[];
}

export interface PlaceholderContent {
  eyebrow: string;
  title: string;
  body: string;
}

export interface ResourceLink {
  label: string;
  description: string;
}

export interface ResourcePageContent {
  eyebrow: string;
  title: string;
  intro: string;
  links: ResourceLink[];
}

export interface ToolsContent {
  eyebrow: string;
  title: string;
  body: string;
  startLabel: string;
  restartLabel: string;
  nextLabel: string;
  backLabel: string;
  resultTitle: string;
  ctaFromResult: string;
}

export interface NavContent {
  links: NavLink[];
  ctaPrimary: string;
}

export interface FinalCtaContent {
  title: string;
  note: string;
  formName: string;
  formEmail: string;
  formCompany: string;
  formMessage: string;
  formSubmit: string;
  formSuccessTitle: string;
  formSuccessBody: string;
}

export interface FooterContent {
  tagline: string;
  columns: { title: string; links: NavLink[] }[];
  rights: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  whyChoose: WhyChooseContent;
  whatWeDo: WhatWeDoContent;
  method: MethodContent;
  team: TeamContent;
  testimonials: PlaceholderContent;
  faq: PlaceholderContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  resources: ResourcePageContent;
  research: ResourcePageContent;
  tools: ToolsContent;
}
