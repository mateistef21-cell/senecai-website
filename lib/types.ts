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
  | "audit"
  | "ai-companies"
  | "tech-companies"
  | "regulated-industries"
  | "enterprise-ai";

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
  heading: string;
  leftSubtitle: string;
  leftBody: string;
  rightBodyPrefix: string;
  rightBodyBold: string;
  rightBodySuffix: string;
  pillars: PillarContent[];
}

export interface WhyNowContent {
  title: string;
  body: string;
}

export interface WhoWeWorkWithCard {
  icon: IconKey;
  title: string;
  description: string;
}

export interface WhoWeWorkWithContent {
  title: string;
  cards: WhoWeWorkWithCard[];
}

export interface WhatWeDoItem {
  icon: IconKey;
  title: string;
  short: string;
  details: string;
  badges: string[];
  bullets: string[];
}

export interface DeliveredColumn {
  label: string;
  body: string;
}

export interface WhatWeDoContent {
  title: string;
  helpWithLabel: string;
  items: WhatWeDoItem[];
  deliveredTitle: string;
  delivered: DeliveredColumn[];
}

export interface MethodStep {
  number: string;
  title: string;
  summary: string;
  body: string;
}

export interface MethodContent {
  eyebrow: string;
  title: string;
  steps: MethodStep[];
  flexibleTitle: string;
  flexibleBody: string;
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
  whyNow: WhyNowContent;
  whoWeWorkWith: WhoWeWorkWithContent;
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
