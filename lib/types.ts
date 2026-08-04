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
  headline: string;
  subtitleLarge: string;
  bodyPara1: string;
  bodyPara2: string;
  floatingLine: string;
  pillars: PillarContent[];
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
  introHeadline: string;
  introPara1: string;
  introPara2: string;
  items: WhatWeDoItem[];
  deliveredTitle: string;
  deliveredIntro: string;
  delivered: string[];
  deliveredClosing: string;
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

export interface TestimonialsContent extends PlaceholderContent {
  partnersLabel: string;
  partnersPlaceholder: string;
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
  whyNow: PlaceholderContent;
  whoWeWorkWith: PlaceholderContent;
  whatWeDo: WhatWeDoContent;
  method: MethodContent;
  team: TeamContent;
  testimonials: TestimonialsContent;
  faq: PlaceholderContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  resources: ResourcePageContent;
  research: ResourcePageContent;
  tools: ToolsContent;
}
