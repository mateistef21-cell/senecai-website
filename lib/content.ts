import type { Locale, SiteContent } from "./types";

export const content: Record<Locale, SiteContent> = {
  en: {
    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "Method", href: "#method" },
        { label: "Team", href: "#team" },
        { label: "Tools", href: "#tools" },
        { label: "Resources", href: "#resources" },
      ],
      ctaSecondary: "Start your Compliance Journey",
      ctaPrimary: "Book a free 15-minute consultation",
    },
    hero: {
      headline: [
        "Your one-stop shop for EU digital compliance in the AI era.",
        "Turn compliance into a competitive advantage.",
      ],
      subhead:
        "Understand, implement, and govern your obligations under the AI Act, GDPR, DORA, NIS2, and the wider EU digital rulebook through one multidisciplinary team and the SenecAI Governance Hub.",
      tagline: "Legal. Technical. Cybersecurity. One governance approach.",
      checkLabel: "Check out:",
      checks: [
        { label: "Not sure where you fall? Take our 3-minute compliance checker", href: "#tools" },
        { label: "Book a free intro call", href: "#final-cta" },
        { label: "Explore the SenecAI Governance Hub", href: "#services" },
      ],
      ctaPrimary: "Book a free 15-minute consultation",
    },
    intro: {
      eyebrow: "Who we are",
      whoTitle: "Who we are",
      whoLead:
        "We are a multidisciplinary team of legal, AI, and cybersecurity experts helping companies comply with the AI Act, GDPR, and the wider EU digital rulebook.",
      whoBold: "Digital compliance no longer belongs to one discipline. Neither do we.",
      whoBody:
        "Traditional law firms understand the regulation but not the technology. Technical auditors understand the systems but not the law. We bring both together, in one team, coordinated through the SenecAI Governance Hub.",
      pillars: [
        {
          title: "Legal Expertise",
          short: "Navigate Europe's evolving digital rulebook with confidence.",
          details:
            "Our legal experts help you interpret and implement the AI Act, GDPR, DORA, NIS2, the Cyber Resilience Act, and other applicable frameworks. From determining your regulatory role and obligations to preparing documentation and supporting conformity assessments, we ensure your compliance strategy is legally sound and aligned with your business objectives.",
        },
        {
          title: "Technical AI Expertise",
          short: "Govern AI systems beyond legal compliance.",
          details:
            "Our AI engineers help you understand how your AI systems are built, deployed, and operated. We perform AI inventories, technical assessments, risk classification, model evaluations, and governance reviews to ensure your systems are compliant by design — not just compliant on paper.",
        },
        {
          title: "Cybersecurity Expertise",
          short: "Build the technical foundations that compliance depends on.",
          details:
            "Compliance is only as strong as the security controls supporting it. Together with our cybersecurity specialists, we help organizations strengthen their security posture through penetration testing, vulnerability assessments, operational resilience, and certification support under frameworks such as ISO/IEC 27001 and ISO/IEC 42001.",
        },
        {
          title: "One Governance Approach",
          short:
            "Most organizations coordinate multiple advisors, documents, and disconnected compliance initiatives. We don't.",
          details:
            "The SenecAI Governance Hub brings legal advice, technical assessments, cybersecurity activities, and compliance documentation into one structured governance process. Every engagement follows the same methodology — from discovery and gap assessment to implementation and continuous governance — giving your organization one clear view of its compliance obligations and progress.",
        },
      ],
      whatTitle: "What we do",
      whatLead:
        "We are the compliance partners for tech and regulated companies. Our expertise across legal, technical, AI/ML, and cyber covers all bases of the EU digital regulatory framework. We offer an integrated and structured approach to digital compliance, delivered through expert services and powered by the SenecAI Governance Hub.",
      whatItems: [
        {
          title: "AI Inventory",
          framework: "AI Act",
          short:
            "knowing what AI systems you build, buy, or embed, and what role and risk level each one carries.",
          details:
            "Most companies don't have a clear picture of every AI system they've built, bought, or quietly embedded through a vendor. We help you build and maintain a living inventory of these systems, so you always know what you're running, who's responsible for it, and what regulatory role and risk level it carries — the essential first step before anything else can be assessed.",
        },
        {
          title: "Governing Agentic Workflows",
          framework: "AI Act",
          short:
            "keeping AI systems and agents that act on your behalf safe, controlled, and auditable as they take on more autonomy.",
          details:
            "As AI systems move from simple predictions to taking real actions — booking, purchasing, negotiating, executing code — the governance question changes. We help you put guardrails around agentic workflows: who approves what, how autonomy is bounded, and how every action an agent takes can be traced, explained, and audited after the fact.",
        },
        {
          title: "Data Governance and Privacy",
          framework: "GDPR",
          short: "knowing what personal data you process, why, and whether you're handling it lawfully.",
          details:
            "Personal data doesn't stop at GDPR's definition of processing — it touches how you collect, store, share, and eventually delete information about real people. We map your data flows, evaluate your legal basis for processing, and help you build documentation and internal practices that hold up under scrutiny, whether that scrutiny comes from a regulator, a customer, or an investor's due diligence team.",
        },
        {
          title: "Operational Resilience",
          framework: "DORA",
          short: "making sure your tech stack can withstand and report on ICT incidents and disruptions.",
          details:
            "Modern digital businesses run on infrastructure they don't fully control — cloud providers, APIs, subprocessors. Operational resilience means that when something breaks, you can detect it, respond to it, report it within the required timelines, and keep the business running.",
        },
        {
          title: "Security Governance",
          framework: "NIS2 / ISO 27001 / ISO 42001",
          short: "the cybersecurity controls and certifications that back up every one of the above.",
          details:
            "Compliance and security are inseparable — nearly every framework in the EU digital rulebook assumes a baseline of technical protection. We help you put the right cybersecurity controls in place and pursue the certifications that prove it, both to regulators and to the market.",
        },
        {
          title: "Compliance Audits",
          framework: "AI Act / GDPR / DORA / NIS2 / CRA",
          short:
            "checking your documented obligations against what's actually happening, across every framework you're subject to.",
          details:
            "Across every framework — AI Act, GDPR, DORA, NIS2, CRA — the same underlying question eventually comes up: can you prove it? We run periodic compliance audits against your documented obligations, surfacing drift between what's on paper and what's actually happening, before a regulator, auditor, or client does it for you.",
        },
      ],
      whatFooter:
        "Underneath each of these sits the relevant EU framework — the AI Act, GDPR, DORA, NIS2, CRA — but you shouldn't have to think in regulations to know what you need. We do that translation for you.",
      whyTitle: "Why now",
      whyBody:
        "In recent years, the EU has built a digital constitution — a binding rulebook spanning multiple layers that complement and overlap one another. Founders don't think in terms of individual regulations — they think in terms of what they're actually building: an AI feature, a customer database, an uptime commitment, a security posture. That's why we lead with those concepts, not the acronyms behind them — and built one place to manage all of it.",
      whoWorkTitle: "Who we work with",
      whoWorkBody:
        "Tech companies, AI-native startups, organizations in regulated industries, and any company that takes compliance seriously and wants to use it as a competitive advantage.",
    },
    services: {
      eyebrow: "Services",
      title: "How we can help you",
      intro:
        "Depending on your needs and objectives, we may activate all six areas — or just one.",
      blocks: [
        {
          title: "AI Inventory",
          framework: "This helps you comply with the AI Act.",
          bullets: [
            "Inventory of your AI systems — built, bought, or embedded",
            "Role determination and risk classification",
            "Conformity documentation and Declaration of Conformity support",
          ],
        },
        {
          title: "Governing Agentic Workflows",
          framework: "This helps you comply with the AI Act and emerging agentic AI governance requirements.",
          bullets: [
            "AI Act technical audit",
            "Testing models for bias, accuracy, and robustness",
            "Building compliant-by-design AI and agentic systems",
          ],
        },
        {
          title: "Data Governance and Privacy",
          framework: "This helps you comply with GDPR.",
          bullets: [
            "GDPR consulting and documentation review",
            "Processing activity mapping and data protection assessments",
            "Evaluation of conformity with data protection obligations",
          ],
        },
        {
          title: "Operational Resilience",
          framework: "This helps you comply with DORA.",
          bullets: ["ICT risk management and resilience assessments", "Incident reporting readiness"],
        },
        {
          title: "Security Governance",
          framework: "This helps you comply with NIS2, the CRA, and ISO 27001 / ISO 42001 certification requirements.",
          bullets: [
            "Vulnerability screening, penetration testing",
            "AI Act and NIS2 cybersecurity controls",
            "ISO/IEC 27001 and ISO/IEC 42001 certification",
          ],
        },
        {
          title: "Compliance Audits",
          framework: "This helps you comply with all applicable frameworks — AI Act, GDPR, DORA, NIS2, CRA.",
          bullets: [
            "Periodic audits of your documented obligations against actual practice",
            "Pre-audit readiness reviews ahead of a regulator, client, or investor request",
            "Remediation plans for any gaps identified",
          ],
        },
      ],
      deliveredTitle: "Delivered through",
      delivered: [
        "Legal consultancy across all six areas",
        "Technical AI audit: reviewing your AI systems to ensure they're built and run compliantly",
        "Cybersecurity services: from ISO 27001 certification to penetration testing and protection against prompt injection and adversarial attacks",
        "The SenecAI Governance Hub, which ties it all together — included as part of working with us, not sold separately",
      ],
      footer: "Depending on your needs and objectives, we may activate all six areas — or just one.",
    },
    method: {
      eyebrow: "The SenecAI Method",
      title: "The SenecAI Method",
      steps: [
        {
          number: "01",
          title: "Compliance Discovery",
          body: "An introductory meeting where we identify your AI systems, processing activities, applicable regulations, organizational role, and current documentation — building a complete baseline of your obligations.",
        },
        {
          number: "02",
          title: "Gap Assessment",
          body: "We compare your current state against the legal and technical requirements that actually apply to you, identifying missing documentation, governance gaps, technical shortcomings, and regulatory risks — prioritized by business impact and exposure.",
        },
        {
          number: "03",
          title: "Compliance Roadmap",
          body: "Based on the assessment, we design a roadmap with clear, executable steps — not generic legal advice, but a concrete plan tied to your business.",
        },
        {
          number: "04",
          title: "Implementation",
          body: "Our legal experts and technical partners help execute the measures required for compliance — documentation, governance frameworks, AI assessments, cybersecurity controls, or certification support, depending on your needs.",
        },
        {
          number: "05",
          title: "Continuous Governance",
          body: "Compliance doesn't stop at execution. The SenecAI Governance Hub keeps tracking your obligations, documentation, and implementation status after the initial engagement concludes — turning a one-time project into an ongoing governance capability.",
        },
      ],
      tailoredTitle: "Tailored support",
      tailoredBody:
        "We don't believe in one-size-fits-all. The steps above are indicative. We offer tailored compliance strategies customized to your organization's level of readiness, objectives, and budget.",
      onDemandTitle: "On-demand",
      onDemand: [
        { title: "Hourly consulting", body: "for scoping, strategy, and specific questions" },
        { title: "Project-based", body: "punctual documentation review, cybersecurity controls, ISO certification consulting" },
        { title: "Retainer", body: "fractional CAIO, CISO, or AI/ML team" },
      ],
      footer: "Every engagement includes access to the SenecAI Governance Hub.",
    },
    team: {
      eyebrow: "Team",
      title: "Team",
      members: [
        { name: "Matei Ștefan", role: "Founder, Legal Advisor, Consultant on AI Act and GDPR", founder: true },
        { name: "Vlad Tudor", role: "AI/ML engineer, AI technical audit, ensuring your AI systems run compliantly" },
        { name: "Mihai Cvasnievsci", role: "AI/ML engineer, AI technical audit, helping build compliant-by-design AI systems" },
        {
          name: "Logan Fernandez",
          role: "Cybersecurity expert, NIS2 and ISO 27001-certified auditor; building the platform that identifies, monitors, and governs your compliance risks",
        },
        { name: "Marius Petcu", role: "Cybersecurity partner" },
        { name: "Ivaylo", role: "DORA expert" },
        { name: "Tudor Dumitrașcu", role: "ISO 42001-certified consultant" },
        { name: "Marius Stanciu", role: "AI Act, GDPR, commercial, and energy lawyer" },
        { name: "Dr. Irina Raicu", role: "Brand specialist" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials & case studies",
      title: "Testimonials & case studies",
      body: "Coming soon — we'll populate this space with client stories once engagements can be referenced publicly.",
    },
    resources: {
      eyebrow: "Resources",
      inDepthTitle: "In-depth",
      inDepthLinks: [
        { label: "The EU's digital rulebook", description: "A map of how the AI Act, GDPR, DORA, NIS2, and the CRA fit together." },
        { label: "EU AI Act", description: "Brochure — obligations, roles, and risk tiers explained." },
        { label: "DORA", description: "Brochure — operational resilience for the financial sector and its ICT providers." },
        { label: "NIS2", description: "Brochure — cybersecurity risk management and incident reporting." },
        { label: "What cybersecurity controls you need", description: "A practical baseline across frameworks." },
        { label: "ISO 42001", description: "AI management system certification, explained." },
        { label: "ISO 27001", description: "Information security management system certification, explained." },
      ],
      researchTitle: "Research & publications",
      researchLinks: [
        { label: "SenecAI's Global AI Policy Study", description: "Our research into how AI policy is developing worldwide." },
        { label: "The Global AI Policy Explorer", description: "An interactive map of AI regulation across jurisdictions." },
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
      ctaFromResult: "Book a free 15-minute consultation",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      body: "We're drafting answers to the questions we hear most often. Check back soon, or ask us directly on an intro call.",
    },
    finalCta: {
      title: "Let's turn compliance into a competitive advantage",
      ctaLabel: "Book an intro call",
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
            { label: "Services", href: "#services" },
            { label: "Method", href: "#method" },
            { label: "Team", href: "#team" },
            { label: "Tools", href: "#tools" },
            { label: "Resources", href: "#resources" },
            { label: "FAQ", href: "#faq" },
          ],
        },
      ],
      rights: "SenecAI. All rights reserved.",
    },
  },
  ro: {
    nav: {
      links: [
        { label: "Servicii", href: "#services" },
        { label: "Metodă", href: "#method" },
        { label: "Echipă", href: "#team" },
        { label: "Instrumente", href: "#tools" },
        { label: "Resurse", href: "#resources" },
      ],
      ctaSecondary: "Începe călătoria de conformare",
      ctaPrimary: "Programează o consultație gratuită de 15 minute",
    },
    hero: {
      headline: [
        "Soluția completă pentru conformarea digitală în UE, în era AI.",
        "Transformă conformarea într-un avantaj competitiv.",
      ],
      subhead:
        "Înțelege, implementează și guvernează-ți obligațiile din AI Act, GDPR, DORA, NIS2 și restul cadrului digital european, printr-o singură echipă multidisciplinară și SenecAI Governance Hub.",
      tagline: "Juridic. Tehnic. Cybersecurity. O singură abordare de guvernanță.",
      checkLabel: "Vezi și:",
      checks: [
        { label: "Nu știi unde te încadrezi? Testul nostru de conformitate de 3 minute", href: "#tools" },
        { label: "Programează un apel introductiv gratuit", href: "#final-cta" },
        { label: "Explorează SenecAI Governance Hub", href: "#services" },
      ],
      ctaPrimary: "Programează o consultație gratuită de 15 minute",
    },
    intro: {
      eyebrow: "Cine suntem",
      whoTitle: "Cine suntem",
      whoLead:
        "Suntem o echipă multidisciplinară de experți juridici, AI și cybersecurity care ajută companiile să se conformeze cu AI Act, GDPR și restul cadrului digital european.",
      whoBold: "Conformarea digitală nu mai aparține unei singure discipline. Nici noi.",
      whoBody:
        "Firmele de avocatură tradiționale înțeleg reglementarea, dar nu tehnologia. Auditorii tehnici înțeleg sistemele, dar nu legislația. Noi le aducem pe amândouă împreună, într-o singură echipă, coordonată prin SenecAI Governance Hub.",
      pillars: [
        {
          title: "Expertiză juridică",
          short: "Navighează cu încredere cadrul digital european, aflat în continuă evoluție.",
          details:
            "Experții noștri juridici te ajută să interpretezi și să implementezi AI Act, GDPR, DORA, NIS2, Cyber Resilience Act și alte cadre aplicabile. De la stabilirea rolului și obligațiilor tale de reglementare, până la pregătirea documentației și susținerea evaluărilor de conformitate, ne asigurăm că strategia ta de conformare este solidă din punct de vedere juridic și aliniată cu obiectivele afacerii.",
        },
        {
          title: "Expertiză tehnică AI",
          short: "Guvernează sistemele AI dincolo de conformarea juridică.",
          details:
            "Inginerii noștri AI te ajută să înțelegi cum sunt construite, implementate și operate sistemele tale AI. Realizăm inventare AI, evaluări tehnice, clasificări de risc, evaluări de modele și revizuiri de guvernanță, pentru ca sistemele tale să fie conforme prin proiectare — nu doar pe hârtie.",
        },
        {
          title: "Expertiză cybersecurity",
          short: "Construiește fundațiile tehnice de care depinde conformarea.",
          details:
            "Conformarea este la fel de solidă precum controalele de securitate care o susțin. Împreună cu specialiștii noștri în cybersecurity, ajutăm organizațiile să își consolideze postura de securitate prin teste de penetrare, evaluări de vulnerabilități, reziliență operațională și suport pentru certificare conform unor cadre precum ISO/IEC 27001 și ISO/IEC 42001.",
        },
        {
          title: "O singură abordare de guvernanță",
          short:
            "Majoritatea organizațiilor coordonează mai mulți consultanți, documente și inițiative de conformare disparate. Noi, nu.",
          details:
            "SenecAI Governance Hub reunește consultanța juridică, evaluările tehnice, activitățile de cybersecurity și documentația de conformare într-un singur proces structurat de guvernanță. Fiecare colaborare urmează aceeași metodologie — de la descoperire și evaluarea decalajelor, până la implementare și guvernanță continuă — oferind organizației tale o imagine clară a obligațiilor și progresului în materie de conformare.",
        },
      ],
      whatTitle: "Ce facem",
      whatLead:
        "Suntem partenerul de conformare pentru companii tech și industrii reglementate. Expertiza noastră juridică, tehnică, AI/ML și cyber acoperă toate ariile cadrului de reglementare digital european. Oferim o abordare integrată și structurată a conformării digitale, livrată prin servicii de specialitate și susținută de SenecAI Governance Hub.",
      whatItems: [
        {
          title: "Inventar AI",
          framework: "AI Act",
          short: "să știi ce sisteme AI construiești, cumperi sau integrezi și ce rol și nivel de risc are fiecare.",
          details:
            "Majoritatea companiilor nu au o imagine clară asupra tuturor sistemelor AI pe care le-au construit, cumpărat sau integrat discret printr-un furnizor. Te ajutăm să construiești și să menții un inventar viu al acestor sisteme, astfel încât să știi mereu ce rulezi, cine este responsabil și ce rol și nivel de risc de reglementare are — primul pas esențial înainte ca orice altceva să poată fi evaluat.",
        },
        {
          title: "Guvernarea fluxurilor agentice",
          framework: "AI Act",
          short:
            "menținerea sistemelor și agenților AI care acționează în numele tău în siguranță, sub control și auditabili, pe măsură ce capătă mai multă autonomie.",
          details:
            "Pe măsură ce sistemele AI trec de la simple predicții la acțiuni reale — rezervări, achiziții, negocieri, executare de cod — întrebarea de guvernanță se schimbă. Te ajutăm să pui garduri de protecție în jurul fluxurilor agentice: cine aprobă ce, cum este limitată autonomia și cum poate fi urmărită, explicată și auditată fiecare acțiune a unui agent, ulterior.",
        },
        {
          title: "Guvernanța datelor și confidențialitate",
          framework: "GDPR",
          short: "să știi ce date cu caracter personal prelucrezi, de ce și dacă o faci în mod legal.",
          details:
            "Datele cu caracter personal nu se opresc la definiția prelucrării din GDPR — privesc modul în care colectezi, stochezi, distribui și, în final, ștergi informații despre persoane reale. Îți mapăm fluxurile de date, evaluăm temeiul legal al prelucrării și te ajutăm să construiești documentație și practici interne care rezistă la o verificare atentă, fie că vine din partea unui reglementator, a unui client sau a unei echipe de due diligence a unui investitor.",
        },
        {
          title: "Reziliență operațională",
          framework: "DORA",
          short: "asigurarea faptului că infrastructura ta tehnologică poate rezista și raporta incidente și disfuncționalități ICT.",
          details:
            "Afacerile digitale moderne rulează pe infrastructură pe care nu o controlează integral — furnizori cloud, API-uri, subcontractanți. Reziliența operațională înseamnă că, atunci când ceva se defectează, poți să detectezi, să răspunzi, să raportezi în termenele impuse și să menții afacerea funcțională.",
        },
        {
          title: "Guvernanță de securitate",
          framework: "NIS2 / ISO 27001 / ISO 42001",
          short: "controalele de cybersecurity și certificările care susțin toate cele de mai sus.",
          details:
            "Conformarea și securitatea sunt inseparabile — aproape fiecare cadru din reglementarea digitală europeană presupune un nivel minim de protecție tehnică. Te ajutăm să implementezi controalele de cybersecurity potrivite și să obții certificările care dovedesc acest lucru, atât în fața reglementatorilor, cât și a pieței.",
        },
        {
          title: "Audituri de conformitate",
          framework: "AI Act / GDPR / DORA / NIS2 / CRA",
          short: "verificarea obligațiilor documentate față de ceea ce se întâmplă efectiv, pentru fiecare cadru care ți se aplică.",
          details:
            "Pentru fiecare cadru — AI Act, GDPR, DORA, NIS2, CRA — aceeași întrebare de fond apare, mai devreme sau mai târziu: poți dovedi? Derulăm audituri periodice de conformitate față de obligațiile tale documentate, scoțând la iveală decalajele dintre ce este pe hârtie și ce se întâmplă efectiv, înainte ca un reglementator, auditor sau client să o facă în locul tău.",
        },
      ],
      whatFooter:
        "Sub fiecare dintre acestea se află cadrul UE relevant — AI Act, GDPR, DORA, NIS2, CRA — dar nu ar trebui să fii nevoit să gândești în termeni de reglementări ca să știi de ce ai nevoie. Facem noi această traducere pentru tine.",
      whyTitle: "De ce acum",
      whyBody:
        "În ultimii ani, UE a construit o constituție digitală — un cadru obligatoriu format din mai multe straturi care se completează și se suprapun. Fondatorii nu gândesc în termeni de reglementări individuale — gândesc în termeni de ceea ce construiesc de fapt: o funcționalitate AI, o bază de date de clienți, un angajament de disponibilitate, o postură de securitate. De aceea pornim de la aceste concepte, nu de la acronimele din spatele lor — și am construit un singur loc în care să le gestionezi pe toate.",
      whoWorkTitle: "Cu cine lucrăm",
      whoWorkBody:
        "Companii tech, startup-uri AI-native, organizații din industrii reglementate și orice companie care tratează conformarea în serios și vrea să o folosească drept avantaj competitiv.",
    },
    services: {
      eyebrow: "Servicii",
      title: "Cum te putem ajuta",
      intro: "În funcție de nevoile și obiectivele tale, putem activa toate cele șase arii — sau doar una.",
      blocks: [
        {
          title: "Inventar AI",
          framework: "Te ajută să te conformezi cu AI Act.",
          bullets: [
            "Inventarul sistemelor tale AI — construite, cumpărate sau integrate",
            "Determinarea rolului și clasificarea riscului",
            "Documentație de conformitate și suport pentru Declarația de conformitate",
          ],
        },
        {
          title: "Guvernarea fluxurilor agentice",
          framework: "Te ajută să te conformezi cu AI Act și cu cerințele emergente de guvernanță pentru AI agentic.",
          bullets: [
            "Audit tehnic AI Act",
            "Testarea modelelor pentru bias, acuratețe și robustețe",
            "Construirea de sisteme AI și agentice conforme prin proiectare",
          ],
        },
        {
          title: "Guvernanța datelor și confidențialitate",
          framework: "Te ajută să te conformezi cu GDPR.",
          bullets: [
            "Consultanță GDPR și revizuirea documentației",
            "Maparea activităților de prelucrare și evaluări de protecție a datelor",
            "Evaluarea conformității cu obligațiile de protecție a datelor",
          ],
        },
        {
          title: "Reziliență operațională",
          framework: "Te ajută să te conformezi cu DORA.",
          bullets: ["Managementul riscului ICT și evaluări de reziliență", "Pregătire pentru raportarea incidentelor"],
        },
        {
          title: "Guvernanță de securitate",
          framework: "Te ajută să te conformezi cu NIS2, CRA și cerințele de certificare ISO 27001 / ISO 42001.",
          bullets: [
            "Scanare de vulnerabilități, teste de penetrare",
            "Controale de cybersecurity conform AI Act și NIS2",
            "Certificare ISO/IEC 27001 și ISO/IEC 42001",
          ],
        },
        {
          title: "Audituri de conformitate",
          framework: "Te ajută să te conformezi cu toate cadrele aplicabile — AI Act, GDPR, DORA, NIS2, CRA.",
          bullets: [
            "Audituri periodice ale obligațiilor documentate față de practica efectivă",
            "Evaluări de pregătire înainte de un audit din partea unui reglementator, client sau investitor",
            "Planuri de remediere pentru orice decalaj identificat",
          ],
        },
      ],
      deliveredTitle: "Livrate prin",
      delivered: [
        "Consultanță juridică pentru toate cele șase arii",
        "Audit tehnic AI: revizuirea sistemelor tale AI pentru a te asigura că sunt construite și rulate conform",
        "Servicii de cybersecurity: de la certificare ISO 27001 la teste de penetrare și protecție împotriva prompt injection și atacurilor adversariale",
        "SenecAI Governance Hub, care leagă totul — inclus în colaborarea cu noi, nu vândut separat",
      ],
      footer: "În funcție de nevoile și obiectivele tale, putem activa toate cele șase arii — sau doar una.",
    },
    method: {
      eyebrow: "Metoda SenecAI",
      title: "Metoda SenecAI",
      steps: [
        {
          number: "01",
          title: "Descoperirea conformării",
          body: "O întâlnire introductivă în care identificăm sistemele tale AI, activitățile de prelucrare, reglementările aplicabile, rolul organizației și documentația existentă — construind o bază completă a obligațiilor tale.",
        },
        {
          number: "02",
          title: "Evaluarea decalajelor",
          body: "Comparăm starea ta actuală cu cerințele legale și tehnice care ți se aplică efectiv, identificând documentația lipsă, decalajele de guvernanță, deficiențele tehnice și riscurile de reglementare — prioritizate în funcție de impactul asupra afacerii și expunere.",
        },
        {
          number: "03",
          title: "Foaia de parcurs a conformării",
          body: "Pe baza evaluării, proiectăm o foaie de parcurs cu pași clari, executabili — nu consultanță juridică generică, ci un plan concret, legat de afacerea ta.",
        },
        {
          number: "04",
          title: "Implementare",
          body: "Experții noștri juridici și partenerii tehnici te ajută să implementezi măsurile necesare pentru conformare — documentație, cadre de guvernanță, evaluări AI, controale de cybersecurity sau suport pentru certificare, în funcție de nevoile tale.",
        },
        {
          number: "05",
          title: "Guvernanță continuă",
          body: "Conformarea nu se oprește la implementare. SenecAI Governance Hub continuă să monitorizeze obligațiile, documentația și stadiul implementării după încheierea colaborării inițiale — transformând un proiect punctual într-o capabilitate de guvernanță continuă.",
        },
      ],
      tailoredTitle: "Suport personalizat",
      tailoredBody:
        "Nu credem în soluții universale. Pașii de mai sus sunt orientativi. Oferim strategii de conformare personalizate, adaptate nivelului de pregătire, obiectivelor și bugetului organizației tale.",
      onDemandTitle: "La cerere",
      onDemand: [
        { title: "Consultanță pe oră", body: "pentru scoping, strategie și întrebări punctuale" },
        { title: "Pe bază de proiect", body: "revizuire punctuală de documentație, controale de cybersecurity, consultanță pentru certificare ISO" },
        { title: "Retainer", body: "CAIO, CISO sau echipă AI/ML fracționată" },
      ],
      footer: "Fiecare colaborare include acces la SenecAI Governance Hub.",
    },
    team: {
      eyebrow: "Echipă",
      title: "Echipă",
      members: [
        { name: "Matei Ștefan", role: "Fondator, consultant juridic, specialist AI Act și GDPR", founder: true },
        { name: "Vlad Tudor", role: "Inginer AI/ML, audit tehnic AI, asigurându-se că sistemele tale AI rulează conform" },
        { name: "Mihai Cvasnievsci", role: "Inginer AI/ML, audit tehnic AI, contribuind la construirea de sisteme AI conforme prin proiectare" },
        {
          name: "Logan Fernandez",
          role: "Expert cybersecurity, auditor certificat NIS2 și ISO 27001; construiește platforma care identifică, monitorizează și guvernează riscurile tale de conformitate",
        },
        { name: "Marius Petcu", role: "Partener cybersecurity" },
        { name: "Ivaylo", role: "Expert DORA" },
        { name: "Tudor Dumitrașcu", role: "Consultant certificat ISO 42001" },
        { name: "Marius Stanciu", role: "Avocat AI Act, GDPR, drept comercial și energetic" },
        { name: "Dr. Irina Raicu", role: "Specialist de brand" },
      ],
    },
    testimonials: {
      eyebrow: "Testimoniale și studii de caz",
      title: "Testimoniale și studii de caz",
      body: "În curând — vom completa această secțiune cu poveștile clienților noștri, de îndată ce colaborările pot fi menționate public.",
    },
    resources: {
      eyebrow: "Resurse",
      inDepthTitle: "Aprofundat",
      inDepthLinks: [
        { label: "Cadrul digital al UE", description: "O hartă a modului în care AI Act, GDPR, DORA, NIS2 și CRA se leagă între ele." },
        { label: "AI Act", description: "Broșură — obligații, roluri și niveluri de risc explicate." },
        { label: "DORA", description: "Broșură — reziliență operațională pentru sectorul financiar și furnizorii săi ICT." },
        { label: "NIS2", description: "Broșură — managementul riscului de cybersecurity și raportarea incidentelor." },
        { label: "De ce controale de cybersecurity ai nevoie", description: "O bază practică, valabilă pentru toate cadrele." },
        { label: "ISO 42001", description: "Certificarea sistemului de management AI, explicată." },
        { label: "ISO 27001", description: "Certificarea sistemului de management al securității informației, explicată." },
      ],
      researchTitle: "Cercetare și publicații",
      researchLinks: [
        { label: "Studiul global SenecAI privind politicile AI", description: "Cercetarea noastră privind evoluția politicilor AI la nivel mondial." },
        { label: "The Global AI Policy Explorer", description: "O hartă interactivă a reglementării AI în diverse jurisdicții." },
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
      ctaFromResult: "Programează o consultație gratuită de 15 minute",
    },
    faq: {
      eyebrow: "Întrebări frecvente",
      title: "Întrebări frecvente",
      body: "Pregătim răspunsuri la cele mai frecvente întrebări. Revino în curând sau întreabă-ne direct într-un apel introductiv.",
    },
    finalCta: {
      title: "Hai să transformăm conformarea într-un avantaj competitiv",
      ctaLabel: "Programează un apel introductiv",
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
            { label: "Servicii", href: "#services" },
            { label: "Metodă", href: "#method" },
            { label: "Echipă", href: "#team" },
            { label: "Instrumente", href: "#tools" },
            { label: "Resurse", href: "#resources" },
            { label: "Întrebări frecvente", href: "#faq" },
          ],
        },
      ],
      rights: "SenecAI. Toate drepturile rezervate.",
    },
  },
};
