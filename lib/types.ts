export type Locale = "en" | "ro";

export interface ExpandableItem {
  title: string;
  short: string;
  details: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string[];
  subhead: string;
  tagline: string;
  checkLabel: string;
  checks: NavLink[];
  ctaPrimary: string;
}

export interface PillarContent extends ExpandableItem {}

export interface WhatWeDoItem extends ExpandableItem {
  framework: string;
}

export interface IntroContent {
  eyebrow: string;
  whoTitle: string;
  whoLead: string;
  whoBold: string;
  whoBody: string;
  pillars: PillarContent[];
  whatTitle: string;
  whatLead: string;
  whatItems: WhatWeDoItem[];
  whatFooter: string;
  whyTitle: string;
  whyBody: string;
  whoWorkTitle: string;
  whoWorkBody: string;
}

export interface ServiceBlock {
  title: string;
  framework: string;
  bullets: string[];
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: ServiceBlock[];
  deliveredTitle: string;
  delivered: string[];
  footer: string;
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
  footer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  founder?: boolean;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
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

export interface ResourcesContent {
  eyebrow: string;
  inDepthTitle: string;
  inDepthLinks: ResourceLink[];
  researchTitle: string;
  researchLinks: ResourceLink[];
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

export interface FinalCtaContent {
  title: string;
  ctaLabel: string;
  note: string;
  formName: string;
  formEmail: string;
  formCompany: string;
  formMessage: string;
  formSubmit: string;
  formSuccessTitle: string;
  formSuccessBody: string;
}

export interface NavContent {
  links: NavLink[];
  ctaSecondary: string;
  ctaPrimary: string;
}

export interface FooterContent {
  tagline: string;
  columns: { title: string; links: NavLink[] }[];
  rights: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  intro: IntroContent;
  services: ServicesContent;
  method: MethodContent;
  team: TeamContent;
  testimonials: PlaceholderContent;
  resources: ResourcesContent;
  tools: ToolsContent;
  faq: PlaceholderContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
}
