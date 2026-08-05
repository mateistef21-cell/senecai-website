import type { Locale, SiteContent } from "./types";

export const content: Record<Locale, SiteContent> = {
  en: {
    nav: {
      links: [
        { label: "Our Services", href: "/#services" },
        { label: "Method", href: "/#method" },
        { label: "Team", href: "/#team" },
        { label: "Tools", href: "/tools" },
        { label: "Resources", href: "/resources" },
        { label: "Research", href: "/research" },
      ],
      ctaPrimary: "Book a free intro call",
    },
    hero: {
      headlinePrefix: "Your one-stop shop for ",
      headlineGold: "EU digital compliance",
      headlineSuffix: " in the AI era",
      subhead:
        "Understand, implement, and govern your obligations under the AI Act, GDPR, DORA, NIS2 and turn compliance into your competitive advantage.",
      ctaPrimary: "Book a free intro call",
      secondaryCheck: "Not sure where you stand? Take our checker",
      secondaryHub: "Explore the SenecAI Governance Hub",
    },
    whyChoose: {
      heading: "Introducing SenecAI",
      leftSubtitle: "LEGAL. TECHNICAL. CYBERSECURITY. ONE GOVERNANCE HUB.",
      leftBody:
        "Digital compliance today sits at the intersection of law, technology and cybersecurity. SenecAI brings these disciplines together under one roof, helping organizations understand, implement and govern their obligations across the AI Act, GDPR, DORA, NIS2 and the wider EU digital rulebook.",
      rightBodyPrefix: "Every engagement combines multidisciplinary expertise with the ",
      rightBodyBold: "SenecAI Governance Hub",
      rightBodySuffix: ", providing one place to manage obligations, documentation and ongoing governance.",
      pillars: [
        {
          icon: "legal",
          title: "Legal Acumen",
          short: "Navigate Europe's evolving digital rulebook with confidence.",
          details:
            "Our legal experts help you interpret and implement the AI Act, GDPR, DORA, NIS2, the Cyber Resilience Act, and other applicable frameworks. From determining your regulatory role and obligations to preparing documentation and supporting conformity assessments, we ensure your compliance strategy is legally sound and aligned with your business objectives.",
        },
        {
          icon: "technical",
          title: "Technical AI Capabilities",
          short: "Govern AI systems beyond legal compliance.",
          details:
            "Our AI engineers help you understand how your AI systems are built, deployed, and operated. We perform AI inventories, technical assessments, risk classification, model evaluations, and governance reviews to ensure your systems are compliant by design — not just compliant on paper.",
        },
        {
          icon: "cybersecurity",
          title: "Cybersecurity Expertise",
          short: "Build the technical foundations that compliance depends on.",
          details:
            "Compliance is only as strong as the security controls supporting it. Together with our cybersecurity specialists, we help organizations strengthen their security posture through penetration testing, vulnerability assessments, operational resilience, and certification support under frameworks such as ISO/IEC 27001 and ISO/IEC 42001.",
        },
        {
          icon: "governance",
          title: "One Governance Approach",
          short:
            "Most organizations coordinate multiple advisors, documents, and disconnected compliance initiatives. We don't.",
          details:
            "The SenecAI Governance Hub brings legal advice, technical assessments, cybersecurity activities, and compliance documentation into one structured governance process. Every engagement follows the same methodology — from discovery and gap assessment to implementation and continuous governance — giving your organization one clear view of its compliance obligations and progress.",
        },
      ],
    },
    whyNow: {
      title: "The EU has been building a Digital Constitution.",
      body: "The AI Act, GDPR, DORA, NIS2 and the CRA don't exist in isolation. Most organizations are subject to several at once. We help you understand what applies, prioritize what matters, and build one governance approach instead of managing regulations one at a time.",
    },
    whoWeWorkWith: {
      title: "Who we work with",
      cards: [
        { icon: "ai-companies", title: "AI Companies", description: "Building, fine-tuning or deploying AI systems." },
        {
          icon: "tech-companies",
          title: "Technology Companies",
          description: "Building software, SaaS platforms and digital products.",
        },
        {
          icon: "regulated-industries",
          title: "Regulated Industries",
          description: "Financial services, healthcare, energy, telecom and critical infrastructure.",
        },
        {
          icon: "enterprise-ai",
          title: "Enterprise AI Adoption",
          description: "Organizations integrating AI into internal operations.",
        },
      ],
    },
    whatWeDo: {
      title: "Our Services",
      helpWithLabel: "What we help you with",
      items: [
        {
          icon: "inventory",
          title: "AI Inventory",
          short: "knowing what AI systems you build, buy, or embed, and what role and risk level each one carries.",
          details:
            "Most companies don't have a clear picture of every AI system they've built, bought, or quietly embedded through a vendor. We help you build and maintain a living inventory of these systems, so you always know what you're running, who's responsible for it, and what regulatory role and risk level it carries — the essential first step before anything else can be assessed.",
          badges: ["AI ACT"],
          bullets: [
            "Inventory of your AI systems — built, bought, or embedded",
            "Role determination and risk classification",
            "Conformity documentation and Declaration of Conformity support",
          ],
        },
        {
          icon: "agentic",
          title: "Governing Agentic Workflows",
          short:
            "keeping AI systems and agents that act on your behalf safe, controlled, and auditable as they take on more autonomy.",
          details:
            "As AI systems move from simple predictions to taking real actions — booking, purchasing, negotiating, executing code — the governance question changes. We help you put guardrails around agentic workflows: who approves what, how autonomy is bounded, and how every action an agent takes can be traced, explained, and audited after the fact.",
          badges: ["AI ACT"],
          bullets: [
            "AI Act technical audit",
            "Testing models for bias, accuracy, and robustness",
            "Building compliant-by-design AI and agentic systems",
          ],
        },
        {
          icon: "privacy",
          title: "Data Governance and Privacy",
          short: "knowing what personal data you process, why, and whether you're handling it lawfully.",
          details:
            "Personal data doesn't stop at GDPR's definition of processing — it touches how you collect, store, share, and eventually delete information about real people. We map your data flows, evaluate your legal basis for processing, and help you build documentation and internal practices that hold up under scrutiny, whether that scrutiny comes from a regulator, a customer, or an investor's due diligence team.",
          badges: ["GDPR"],
          bullets: [
            "GDPR consulting and documentation review",
            "Processing activity mapping and data protection assessments",
            "Evaluation of conformity with data protection obligations",
          ],
        },
        {
          icon: "resilience",
          title: "Operational Resilience",
          short: "making sure your tech stack can withstand and report on ICT incidents and disruptions.",
          details:
            "Modern digital businesses run on infrastructure they don't fully control — cloud providers, APIs, subprocessors. Operational resilience means that when something breaks, you can detect it, respond to it, report it within the required timelines, and keep the business running.",
          badges: ["DORA"],
          bullets: ["ICT risk management and resilience assessments", "Incident reporting readiness"],
        },
        {
          icon: "security",
          title: "Security Governance",
          short: "the cybersecurity controls and certifications that back up every one of the above.",
          details:
            "Compliance and security are inseparable — nearly every framework in the EU digital rulebook assumes a baseline of technical protection. We help you put the right cybersecurity controls in place and pursue the certifications that prove it, both to regulators and to the market.",
          badges: ["NIS2", "CRA", "ISO 27001", "ISO 42001"],
          bullets: [
            "Vulnerability screening, penetration testing",
            "AI Act and NIS2 cybersecurity controls",
            "ISO/IEC 27001 and ISO/IEC 42001 certification",
          ],
        },
        {
          icon: "audit",
          title: "Compliance Audits",
          short:
            "checking your documented obligations against what's actually happening, across every framework you're subject to.",
          details:
            "Across every framework — AI Act, GDPR, DORA, NIS2, CRA — the same underlying question eventually comes up: can you prove it? We run periodic compliance audits against your documented obligations, surfacing drift between what's on paper and what's actually happening, before a regulator, auditor, or client does it for you.",
          badges: ["AI ACT", "GDPR", "DORA", "NIS2", "CRA"],
          bullets: [
            "Periodic audits of your documented obligations against actual practice",
            "Pre-audit readiness reviews ahead of a regulator, client, or investor request",
            "Remediation plans for any gaps identified",
          ],
        },
      ],
      deliveredTitle: "Every engagement combines:",
      delivered: [
        {
          label: "Legal",
          body: "Legal consultancy across all six governance areas — from regulatory interpretation and obligation mapping to documentation, contracts, and conformity assessment support.",
        },
        {
          label: "Technical",
          body: "Technical AI audits to assess AI systems, risk classification, model governance and compliance by design.",
        },
        {
          label: "Cyber",
          body: "Cybersecurity services ranging from ISO 27001 implementation and penetration testing to resilience assessments and security controls.",
        },
      ],
    },
    method: {
      eyebrow: "Our Collaboration Framework",
      title: "Our Collaboration Framework",
      steps: [
        {
          number: "01",
          title: "Compliance Discovery",
          summary: "Mapping your AI systems, processing activities, and applicable regulations.",
          body: "An introductory meeting where we identify your AI systems, processing activities, applicable regulations, organizational role, and current documentation — building a complete baseline of your obligations.",
        },
        {
          number: "02",
          title: "Gap Assessment",
          summary: "Comparing your current state against what actually applies to you.",
          body: "We compare your current state against the legal and technical requirements that actually apply to you, identifying missing documentation, governance gaps, technical shortcomings, and regulatory risks — prioritized by business impact and exposure.",
        },
        {
          number: "03",
          title: "Compliance Roadmap",
          summary: "A concrete, prioritized plan tied to your business.",
          body: "Based on the assessment, we design a roadmap with clear, executable steps — not generic legal advice, but a concrete plan tied to your business.",
        },
        {
          number: "04",
          title: "Implementation",
          summary: "Executing the measures required for compliance.",
          body: "Our legal experts and technical partners help execute the measures required for compliance — documentation, governance frameworks, AI assessments, cybersecurity controls, or certification support, depending on your needs.",
        },
        {
          number: "05",
          title: "Continuous Governance",
          summary: "Ongoing tracking through the SenecAI Governance Hub.",
          body: "Compliance doesn't stop at execution. The SenecAI Governance Hub keeps tracking your obligations, documentation, and implementation status after the initial engagement concludes — turning a one-time project into an ongoing governance capability. Every engagement includes access to the SenecAI Governance Hub.",
        },
      ],
      flexibleTitle: "Flexible engagement models",
      flexibleBody:
        "Every organization is different. We tailor our engagements to your objectives, internal capabilities and budget.",
      onDemand: [
        { title: "Hourly consulting", body: "for scoping, strategy, and specific questions" },
        { title: "Project-based", body: "punctual documentation review, cybersecurity controls, ISO certification consulting" },
        { title: "Retainer", body: "fractional CAIO, CISO, or AI/ML team" },
      ],
    },
    team: {
      eyebrow: "Team",
      title: "Team",
      photoPlaceholder: "Photo coming soon",
      bioPlaceholder: "Full bio coming soon.",
      members: [
        { name: "Matei Ștefan", role: "Founder, Legal Advisor, Consultant on AI Act and GDPR", founder: true },
        { name: "Vlad Tudor", role: "AI/ML engineer, AI technical audit" },
        { name: "Mihai Cvasnievsci", role: "AI/ML engineer, AI technical audit" },
        { name: "Logan Fernandez", role: "Cybersecurity expert, NIS2 and ISO 27001-certified auditor" },
        { name: "Marius Petcu", role: "Cybersecurity partner" },
        { name: "Ivaylo", role: "DORA expert" },
        { name: "Tudor Dumitrașcu", role: "ISO 42001-certified consultant" },
        { name: "Marius Stanciu", role: "AI Act, GDPR, commercial, and energy lawyer" },
        { name: "Dr. Irina Raicu", role: "Brand specialist" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials & Partners",
      title: "Testimonials & Partners",
      body: "Coming soon — we'll populate this space with client stories once engagements can be referenced publicly.",
      partnersLabel: "Partners we work with",
      partnersPlaceholder: "Partner logo",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      body: "We're drafting answers to the questions we hear most often. Check back soon, or ask us directly on an intro call.",
    },
    finalCta: {
      title: "Let's turn compliance into a competitive advantage",
      note: "Tell us a little about your organization and we'll get back to you within one business day.",
      formName: "Full name",
      formEmail: "Work email",
      formCompany: "Company",
      formMessage: "What are you looking to achieve?",
      formSubmit: "Book an intro call",
      formSuccessTitle: "Thank you",
      formSuccessBody: "We've received your message and will get back to you within one business day.",
    },
    footer: {
      tagline: "One-stop shop for EU digital compliance in the AI era.",
      columns: [
        {
          title: "Site",
          links: [
            { label: "Our Services", href: "/#services" },
            { label: "Method", href: "/#method" },
            { label: "Team", href: "/#team" },
            { label: "Testimonials", href: "/#testimonials" },
            { label: "FAQ", href: "/#faq" },
          ],
        },
        {
          title: "Explore",
          links: [
            { label: "Tools", href: "/tools" },
            { label: "Resources", href: "/resources" },
            { label: "Research & Publications", href: "/research" },
          ],
        },
      ],
      rights: "SenecAI. All rights reserved.",
    },
    resources: {
      eyebrow: "Resources",
      title: "Resources",
      intro:
        "In-depth explainers on the frameworks behind your compliance obligations. We're building out this library — full write-ups are coming soon.",
      links: [
        {
          label: "The EU's digital rulebook",
          description: "What does the EU's digital rulebook mean in practice, and how do we help you?",
        },
        { label: "EU AI Act", description: "What does the EU AI Act mean in practice, and how do we help you?" },
        { label: "DORA", description: "What does DORA mean in practice, and how do we help you?" },
        { label: "NIS2", description: "What does NIS2 mean in practice, and how do we help you?" },
        {
          label: "What cybersecurity controls you need",
          description: "What does a practical cybersecurity baseline mean in practice, and how do we help you?",
        },
        { label: "ISO 42001", description: "What does ISO 42001 mean in practice, and how do we help you?" },
        { label: "ISO 27001", description: "What does ISO 27001 mean in practice, and how do we help you?" },
      ],
    },
    research: {
      eyebrow: "Research & Publications",
      title: "Research & Publications",
      intro: "Our ongoing research into how AI and digital policy is developing — in the EU and worldwide.",
      links: [
        { label: "SenecAI's Global AI Policy Study", description: "Full study coming soon." },
        { label: "The Global AI Policy Explorer", description: "Interactive tool coming soon." },
        { label: "'The AI Act Guy' — Substack", description: "Structured doctrinal analysis of the EU AI Act." },
      ],
    },
    tools: {
      eyebrow: "Tools",
      title: "Free compliance-check tools",
      body: "Quick decision-tree questionnaires you can try directly on the site — no login, no engagement required. These are standalone and separate from the Governance Hub.",
      startLabel: "Start",
      restartLabel: "Start over",
      nextLabel: "Next",
      backLabel: "Back",
      resultTitle: "Your result",
      ctaFromResult: "Book a free intro call",
    },
  },
  ro: {
    nav: {
      links: [
        { label: "Serviciile noastre", href: "/#services" },
        { label: "Metodă", href: "/#method" },
        { label: "Echipă", href: "/#team" },
        { label: "Instrumente", href: "/tools" },
        { label: "Resurse", href: "/resources" },
        { label: "Cercetare", href: "/research" },
      ],
      ctaPrimary: "Programează un apel introductiv gratuit",
    },
    hero: {
      headlinePrefix: "Soluția completă pentru ",
      headlineGold: "conformarea digitală în UE",
      headlineSuffix: ", în era AI",
      subhead:
        "Înțelege, implementează și guvernează-ți obligațiile din AI Act, GDPR, DORA, NIS2 și transformă conformarea într-un avantaj competitiv.",
      ctaPrimary: "Programează un apel introductiv gratuit",
      secondaryCheck: "Nu știi unde te încadrezi? Fă testul",
      secondaryHub: "Explorează SenecAI Governance Hub",
    },
    whyChoose: {
      heading: "Prezentăm SenecAI",
      leftSubtitle: "JURIDIC. TEHNIC. CYBERSECURITY. UN SINGUR GOVERNANCE HUB.",
      leftBody:
        "Conformarea digitală se află astăzi la intersecția dintre drept, tehnologie și cybersecurity. SenecAI reunește aceste discipline sub un singur acoperiș, ajutând organizațiile să înțeleagă, să implementeze și să își guverneze obligațiile din AI Act, GDPR, DORA, NIS2 și restul cadrului digital european.",
      rightBodyPrefix: "Fiecare colaborare combină expertiza multidisciplinară cu ",
      rightBodyBold: "SenecAI Governance Hub",
      rightBodySuffix: ", oferind un singur loc în care gestionezi obligațiile, documentația și guvernanța continuă.",
      pillars: [
        {
          icon: "legal",
          title: "Perspicacitate juridică",
          short: "Navighează cu încredere cadrul digital european, aflat în continuă evoluție.",
          details:
            "Experții noștri juridici te ajută să interpretezi și să implementezi AI Act, GDPR, DORA, NIS2, Cyber Resilience Act și alte cadre aplicabile. De la stabilirea rolului și obligațiilor tale de reglementare, până la pregătirea documentației și susținerea evaluărilor de conformitate, ne asigurăm că strategia ta de conformare este solidă din punct de vedere juridic și aliniată cu obiectivele afacerii.",
        },
        {
          icon: "technical",
          title: "Capabilități tehnice AI",
          short: "Guvernează sistemele AI dincolo de conformarea juridică.",
          details:
            "Inginerii noștri AI te ajută să înțelegi cum sunt construite, implementate și operate sistemele tale AI. Realizăm inventare AI, evaluări tehnice, clasificări de risc, evaluări de modele și revizuiri de guvernanță, pentru ca sistemele tale să fie conforme prin proiectare — nu doar pe hârtie.",
        },
        {
          icon: "cybersecurity",
          title: "Expertiză cybersecurity",
          short: "Construiește fundațiile tehnice de care depinde conformarea.",
          details:
            "Conformarea este la fel de solidă precum controalele de securitate care o susțin. Împreună cu specialiștii noștri în cybersecurity, ajutăm organizațiile să își consolideze postura de securitate prin teste de penetrare, evaluări de vulnerabilități, reziliență operațională și suport pentru certificare conform unor cadre precum ISO/IEC 27001 și ISO/IEC 42001.",
        },
        {
          icon: "governance",
          title: "O singură abordare de guvernanță",
          short:
            "Majoritatea organizațiilor coordonează mai mulți consultanți, documente și inițiative de conformare disparate. Noi, nu.",
          details:
            "SenecAI Governance Hub reunește consultanța juridică, evaluările tehnice, activitățile de cybersecurity și documentația de conformare într-un singur proces structurat de guvernanță. Fiecare colaborare urmează aceeași metodologie — de la descoperire și evaluarea decalajelor, până la implementare și guvernanță continuă — oferind organizației tale o imagine clară a obligațiilor și progresului în materie de conformare.",
        },
      ],
    },
    whyNow: {
      title: "UE a construit o Constituție Digitală.",
      body: "AI Act, GDPR, DORA, NIS2 și CRA nu există izolat. Majoritatea organizațiilor se supun mai multora simultan. Te ajutăm să înțelegi ce ți se aplică, să prioritizezi ce contează și să construiești o singură abordare de guvernanță, în loc să gestionezi reglementările una câte una.",
    },
    whoWeWorkWith: {
      title: "Cu cine lucrăm",
      cards: [
        { icon: "ai-companies", title: "Companii AI", description: "Care construiesc, ajustează sau implementează sisteme AI." },
        {
          icon: "tech-companies",
          title: "Companii tech",
          description: "Care construiesc software, platforme SaaS și produse digitale.",
        },
        {
          icon: "regulated-industries",
          title: "Industrii reglementate",
          description: "Servicii financiare, sănătate, energie, telecom și infrastructură critică.",
        },
        {
          icon: "enterprise-ai",
          title: "Adopție AI la nivel de organizație",
          description: "Organizații care integrează AI în operațiunile interne.",
        },
      ],
    },
    whatWeDo: {
      title: "Serviciile noastre",
      helpWithLabel: "Cu ce te ajutăm",
      items: [
        {
          icon: "inventory",
          title: "Inventar AI",
          short: "să știi ce sisteme AI construiești, cumperi sau integrezi și ce rol și nivel de risc are fiecare.",
          details:
            "Majoritatea companiilor nu au o imagine clară asupra tuturor sistemelor AI pe care le-au construit, cumpărat sau integrat discret printr-un furnizor. Te ajutăm să construiești și să menții un inventar viu al acestor sisteme, astfel încât să știi mereu ce rulezi, cine este responsabil și ce rol și nivel de risc de reglementare are — primul pas esențial înainte ca orice altceva să poată fi evaluat.",
          badges: ["AI ACT"],
          bullets: [
            "Inventarul sistemelor tale AI — construite, cumpărate sau integrate",
            "Determinarea rolului și clasificarea riscului",
            "Documentație de conformitate și suport pentru Declarația de conformitate",
          ],
        },
        {
          icon: "agentic",
          title: "Guvernarea fluxurilor agentice",
          short:
            "menținerea sistemelor și agenților AI care acționează în numele tău în siguranță, sub control și auditabili, pe măsură ce capătă mai multă autonomie.",
          details:
            "Pe măsură ce sistemele AI trec de la simple predicții la acțiuni reale — rezervări, achiziții, negocieri, executare de cod — întrebarea de guvernanță se schimbă. Te ajutăm să pui garduri de protecție în jurul fluxurilor agentice: cine aprobă ce, cum este limitată autonomia și cum poate fi urmărită, explicată și auditată fiecare acțiune a unui agent, ulterior.",
          badges: ["AI ACT"],
          bullets: [
            "Audit tehnic AI Act",
            "Testarea modelelor pentru bias, acuratețe și robustețe",
            "Construirea de sisteme AI și agentice conforme prin proiectare",
          ],
        },
        {
          icon: "privacy",
          title: "Guvernanța datelor și confidențialitate",
          short: "să știi ce date cu caracter personal prelucrezi, de ce și dacă o faci în mod legal.",
          details:
            "Datele cu caracter personal nu se opresc la definiția prelucrării din GDPR — privesc modul în care colectezi, stochezi, distribui și, în final, ștergi informații despre persoane reale. Îți mapăm fluxurile de date, evaluăm temeiul legal al prelucrării și te ajutăm să construiești documentație și practici interne care rezistă la o verificare atentă, fie că vine din partea unui reglementator, a unui client sau a unei echipe de due diligence a unui investitor.",
          badges: ["GDPR"],
          bullets: [
            "Consultanță GDPR și revizuirea documentației",
            "Maparea activităților de prelucrare și evaluări de protecție a datelor",
            "Evaluarea conformității cu obligațiile de protecție a datelor",
          ],
        },
        {
          icon: "resilience",
          title: "Reziliență operațională",
          short: "asigurarea faptului că infrastructura ta tehnologică poate rezista și raporta incidente și disfuncționalități ICT.",
          details:
            "Afacerile digitale moderne rulează pe infrastructură pe care nu o controlează integral — furnizori cloud, API-uri, subcontractanți. Reziliența operațională înseamnă că, atunci când ceva se defectează, poți să detectezi, să răspunzi, să raportezi în termenele impuse și să menții afacerea funcțională.",
          badges: ["DORA"],
          bullets: ["Managementul riscului ICT și evaluări de reziliență", "Pregătire pentru raportarea incidentelor"],
        },
        {
          icon: "security",
          title: "Guvernanță de securitate",
          short: "controalele de cybersecurity și certificările care susțin toate cele de mai sus.",
          details:
            "Conformarea și securitatea sunt inseparabile — aproape fiecare cadru din reglementarea digitală europeană presupune un nivel minim de protecție tehnică. Te ajutăm să implementezi controalele de cybersecurity potrivite și să obții certificările care dovedesc acest lucru, atât în fața reglementatorilor, cât și a pieței.",
          badges: ["NIS2", "CRA", "ISO 27001", "ISO 42001"],
          bullets: [
            "Scanare de vulnerabilități, teste de penetrare",
            "Controale de cybersecurity conform AI Act și NIS2",
            "Certificare ISO/IEC 27001 și ISO/IEC 42001",
          ],
        },
        {
          icon: "audit",
          title: "Audituri de conformitate",
          short: "verificarea obligațiilor documentate față de ceea ce se întâmplă efectiv, pentru fiecare cadru care ți se aplică.",
          details:
            "Pentru fiecare cadru — AI Act, GDPR, DORA, NIS2, CRA — aceeași întrebare de fond apare, mai devreme sau mai târziu: poți dovedi? Derulăm audituri periodice de conformitate față de obligațiile tale documentate, scoțând la iveală decalajele dintre ce este pe hârtie și ce se întâmplă efectiv, înainte ca un reglementator, auditor sau client să o facă în locul tău.",
          badges: ["AI ACT", "GDPR", "DORA", "NIS2", "CRA"],
          bullets: [
            "Audituri periodice ale obligațiilor documentate față de practica efectivă",
            "Evaluări de pregătire înainte de un audit din partea unui reglementator, client sau investitor",
            "Planuri de remediere pentru orice decalaj identificat",
          ],
        },
      ],
      deliveredTitle: "Fiecare colaborare combină:",
      delivered: [
        {
          label: "Juridic",
          body: "Consultanță juridică pentru toate cele șase arii de guvernanță — de la interpretare de reglementare și maparea obligațiilor, până la documentație, contracte și suport pentru evaluarea conformității.",
        },
        {
          label: "Tehnic",
          body: "Audituri tehnice AI pentru evaluarea sistemelor AI, clasificarea riscului, guvernanța modelelor și conformitate prin proiectare.",
        },
        {
          label: "Cyber",
          body: "Servicii de cybersecurity, de la implementare ISO 27001 și teste de penetrare, până la evaluări de reziliență și controale de securitate.",
        },
      ],
    },
    method: {
      eyebrow: "Cadrul nostru de colaborare",
      title: "Cadrul nostru de colaborare",
      steps: [
        {
          number: "01",
          title: "Descoperirea conformării",
          summary: "Maparea sistemelor tale AI, a activităților de prelucrare și a reglementărilor aplicabile.",
          body: "O întâlnire introductivă în care identificăm sistemele tale AI, activitățile de prelucrare, reglementările aplicabile, rolul organizației și documentația existentă — construind o bază completă a obligațiilor tale.",
        },
        {
          number: "02",
          title: "Evaluarea decalajelor",
          summary: "Comparăm starea ta actuală cu ceea ce ți se aplică efectiv.",
          body: "Comparăm starea ta actuală cu cerințele legale și tehnice care ți se aplică efectiv, identificând documentația lipsă, decalajele de guvernanță, deficiențele tehnice și riscurile de reglementare — prioritizate în funcție de impactul asupra afacerii și expunere.",
        },
        {
          number: "03",
          title: "Foaia de parcurs a conformării",
          summary: "Un plan concret, prioritizat, legat de afacerea ta.",
          body: "Pe baza evaluării, proiectăm o foaie de parcurs cu pași clari, executabili — nu consultanță juridică generică, ci un plan concret, legat de afacerea ta.",
        },
        {
          number: "04",
          title: "Implementare",
          summary: "Executăm măsurile necesare pentru conformare.",
          body: "Experții noștri juridici și partenerii tehnici te ajută să implementezi măsurile necesare pentru conformare — documentație, cadre de guvernanță, evaluări AI, controale de cybersecurity sau suport pentru certificare, în funcție de nevoile tale.",
        },
        {
          number: "05",
          title: "Guvernanță continuă",
          summary: "Monitorizare continuă prin SenecAI Governance Hub.",
          body: "Conformarea nu se oprește la implementare. SenecAI Governance Hub continuă să monitorizeze obligațiile, documentația și stadiul implementării după încheierea colaborării inițiale — transformând un proiect punctual într-o capabilitate de guvernanță continuă. Fiecare colaborare include acces la SenecAI Governance Hub.",
        },
      ],
      flexibleTitle: "Modele flexibile de colaborare",
      flexibleBody:
        "Fiecare organizație este diferită. Adaptăm colaborarea la obiectivele, capabilitățile interne și bugetul tău.",
      onDemand: [
        { title: "Consultanță pe oră", body: "pentru scoping, strategie și întrebări punctuale" },
        { title: "Pe bază de proiect", body: "revizuire punctuală de documentație, controale de cybersecurity, consultanță pentru certificare ISO" },
        { title: "Retainer", body: "CAIO, CISO sau echipă AI/ML fracționată" },
      ],
    },
    team: {
      eyebrow: "Echipă",
      title: "Echipă",
      photoPlaceholder: "Fotografie în curând",
      bioPlaceholder: "Biografie completă în curând.",
      members: [
        { name: "Matei Ștefan", role: "Fondator, consultant juridic, specialist AI Act și GDPR", founder: true },
        { name: "Vlad Tudor", role: "Inginer AI/ML, audit tehnic AI" },
        { name: "Mihai Cvasnievsci", role: "Inginer AI/ML, audit tehnic AI" },
        { name: "Logan Fernandez", role: "Expert cybersecurity, auditor certificat NIS2 și ISO 27001" },
        { name: "Marius Petcu", role: "Partener cybersecurity" },
        { name: "Ivaylo", role: "Expert DORA" },
        { name: "Tudor Dumitrașcu", role: "Consultant certificat ISO 42001" },
        { name: "Marius Stanciu", role: "Avocat AI Act, GDPR, drept comercial și energetic" },
        { name: "Dr. Irina Raicu", role: "Specialist de brand" },
      ],
    },
    testimonials: {
      eyebrow: "Testimoniale și parteneri",
      title: "Testimoniale și parteneri",
      body: "În curând — vom completa această secțiune cu poveștile clienților noștri, de îndată ce colaborările pot fi menționate public.",
      partnersLabel: "Parteneri cu care lucrăm",
      partnersPlaceholder: "Logo partener",
    },
    faq: {
      eyebrow: "Întrebări frecvente",
      title: "Întrebări frecvente",
      body: "Pregătim răspunsuri la cele mai frecvente întrebări. Revino în curând sau întreabă-ne direct într-un apel introductiv.",
    },
    finalCta: {
      title: "Hai să transformăm conformarea într-un avantaj competitiv",
      note: "Spune-ne câteva cuvinte despre organizația ta și îți vom răspunde în cel mult o zi lucrătoare.",
      formName: "Nume complet",
      formEmail: "Email de serviciu",
      formCompany: "Companie",
      formMessage: "Ce vrei să obții?",
      formSubmit: "Programează un apel introductiv",
      formSuccessTitle: "Mulțumim",
      formSuccessBody: "Am primit mesajul tău și îți vom răspunde în cel mult o zi lucrătoare.",
    },
    footer: {
      tagline: "Soluția completă pentru conformarea digitală în UE, în era AI.",
      columns: [
        {
          title: "Site",
          links: [
            { label: "Serviciile noastre", href: "/#services" },
            { label: "Metodă", href: "/#method" },
            { label: "Echipă", href: "/#team" },
            { label: "Testimoniale", href: "/#testimonials" },
            { label: "Întrebări frecvente", href: "/#faq" },
          ],
        },
        {
          title: "Explorează",
          links: [
            { label: "Instrumente", href: "/tools" },
            { label: "Resurse", href: "/resources" },
            { label: "Cercetare și publicații", href: "/research" },
          ],
        },
      ],
      rights: "SenecAI. Toate drepturile rezervate.",
    },
    resources: {
      eyebrow: "Resurse",
      title: "Resurse",
      intro:
        "Explicații aprofundate despre cadrele din spatele obligațiilor tale de conformare. Construim această bibliotecă — articolele complete urmează în curând.",
      links: [
        {
          label: "Cadrul digital al UE",
          description: "Ce înseamnă cadrul digital al UE în practică și cum te ajutăm?",
        },
        { label: "AI Act", description: "Ce înseamnă AI Act în practică și cum te ajutăm?" },
        { label: "DORA", description: "Ce înseamnă DORA în practică și cum te ajutăm?" },
        { label: "NIS2", description: "Ce înseamnă NIS2 în practică și cum te ajutăm?" },
        {
          label: "De ce controale de cybersecurity ai nevoie",
          description: "Ce înseamnă o bază practică de cybersecurity și cum te ajutăm?",
        },
        { label: "ISO 42001", description: "Ce înseamnă ISO 42001 în practică și cum te ajutăm?" },
        { label: "ISO 27001", description: "Ce înseamnă ISO 27001 în practică și cum te ajutăm?" },
      ],
    },
    research: {
      eyebrow: "Cercetare și publicații",
      title: "Cercetare și publicații",
      intro: "Cercetarea noastră continuă privind evoluția politicilor AI și digitale — în UE și la nivel global.",
      links: [
        { label: "Studiul global SenecAI privind politicile AI", description: "Studiul complet urmează în curând." },
        { label: "The Global AI Policy Explorer", description: "Instrumentul interactiv urmează în curând." },
        { label: "'The AI Act Guy' — Substack", description: "Analiză doctrinară structurată a AI Act." },
      ],
    },
    tools: {
      eyebrow: "Instrumente",
      title: "Instrumente gratuite de verificare a conformității",
      body: "Chestionare rapide, tip arbore decizional, pe care le poți încerca direct pe site — fără cont, fără angajament. Sunt independente și separate de Governance Hub.",
      startLabel: "Începe",
      restartLabel: "Ia-o de la capăt",
      nextLabel: "Continuă",
      backLabel: "Înapoi",
      resultTitle: "Rezultatul tău",
      ctaFromResult: "Programează un apel introductiv gratuit",
    },
  },
};
