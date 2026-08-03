import type { Locale } from "./types";

export interface QuizOption {
  label: string;
  tags: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  helper?: string;
  type: "single" | "multi";
  options: QuizOption[];
}

export interface QuizResult {
  title: string;
  body: string;
  match: (tags: Set<string>) => boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

const en: Quiz[] = [
  {
    id: "general",
    title: "General compliance check",
    description: "Which EU regulations apply to you?",
    questions: [
      {
        id: "activities",
        type: "multi",
        prompt: "Which of these describe your organization? Select all that apply.",
        options: [
          { label: "We build, sell, or embed AI systems or AI-powered features", tags: ["ai"] },
          { label: "We collect or process personal data about individuals in the EU", tags: ["gdpr"] },
          { label: "We provide financial services, or ICT services to financial entities, in the EU", tags: ["dora"] },
          {
            label: "We operate in a sector NIS2 covers as essential or important (energy, health, digital infrastructure, transport, etc.)",
            tags: ["nis2"],
          },
          { label: "We manufacture or sell hardware/software products with digital elements in the EU", tags: ["cra"] },
          { label: "None of the above apply to us", tags: ["none"] },
        ],
      },
      {
        id: "nexus",
        type: "single",
        prompt: "Do you offer products or services to customers in the EU, or are you established in the EU?",
        options: [
          { label: "Yes", tags: ["eu"] },
          { label: "No, not yet", tags: ["noeu"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("noeu"),
        title: "Outside current scope — for now",
        body: "Most EU digital laws apply based on where your users are, not just where you're established. If you're planning to enter the EU market, it's worth mapping your obligations early — before they become urgent.",
      },
      {
        match: (t) => t.has("ai"),
        title: "The AI Act is likely on your radar",
        body: "Building, selling, or embedding AI puts you within scope of the AI Act, with obligations that vary by your role and the system's risk level. Depending on your data and sector, GDPR, DORA, NIS2, or the CRA may apply too — a compliance discovery call will give you the full picture.",
      },
      {
        match: (t) => t.has("dora"),
        title: "DORA likely applies to you",
        body: "As a financial entity or an ICT provider serving one, DORA's operational resilience requirements are likely in scope. Other frameworks may layer on top depending on your data and technology footprint.",
      },
      {
        match: (t) => t.has("nis2"),
        title: "NIS2 likely applies to you",
        body: "Operating in an essential or important sector puts you within NIS2's cybersecurity risk management and incident reporting requirements, subject to size thresholds.",
      },
      {
        match: (t) => t.has("cra"),
        title: "The Cyber Resilience Act likely applies to you",
        body: "Manufacturing or selling connected hardware or software in the EU brings cybersecurity-by-design and reporting obligations under the CRA.",
      },
      {
        match: (t) => t.has("gdpr"),
        title: "GDPR applies to you",
        body: "Processing personal data of individuals in the EU means GDPR applies, regardless of your size or sector. The scope of your obligations depends on what you process and why.",
      },
      {
        match: () => true,
        title: "Let's map your obligations together",
        body: "Your answers don't clearly trigger the primary EU digital frameworks — but rules change quickly, and thresholds are easy to cross without noticing. A short call will confirm where you stand.",
      },
    ],
  },
  {
    id: "ai-act-role",
    title: "AI Act role identification tool",
    description: "Find out whether you're a provider, deployer, importer, or distributor.",
    questions: [
      {
        id: "role",
        type: "single",
        prompt: "Which best describes your relationship to the AI system in question?",
        options: [
          {
            label: "We designed or developed it (or had it developed for us) and market it under our own name",
            tags: ["provider"],
          },
          {
            label: "We use an AI system built by someone else, under our own authority, for our own purposes",
            tags: ["deployer"],
          },
          {
            label: "We bring an AI system from outside the EU and place it on the EU market under our own name",
            tags: ["importer"],
          },
          {
            label: "We make an AI system available on the EU market without being its provider or importer",
            tags: ["distributor"],
          },
          { label: "I'm not sure yet", tags: ["unsure"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("provider"),
        title: "You're likely a Provider",
        body: "Providers carry the heaviest obligations under the AI Act: risk management systems, technical documentation, conformity assessment, and registration for high-risk systems. This is the role worth getting right first.",
      },
      {
        match: (t) => t.has("deployer"),
        title: "You're likely a Deployer",
        body: "Deployers must use AI systems in line with the provider's instructions, ensure human oversight, monitor operation, and in some cases run a fundamental rights impact assessment before deployment.",
      },
      {
        match: (t) => t.has("importer"),
        title: "You're likely an Importer",
        body: "Importers must verify the provider has completed the required conformity procedures, ensure proper CE marking and documentation, and keep records available for authorities.",
      },
      {
        match: (t) => t.has("distributor"),
        title: "You're likely a Distributor",
        body: "Distributors must verify CE marking and accompanying documentation before making a system available, and ensure it hasn't been altered in ways that affect compliance.",
      },
      {
        match: () => true,
        title: "Let's determine your role together",
        body: "Role determination depends on the specifics of how the system was built, sourced, and used — often more than one role applies across different systems. We'll walk through it with you.",
      },
    ],
  },
  {
    id: "ai-act-risk",
    title: "AI Act risk categorization calculator",
    description: "Estimate the risk tier of a specific AI system.",
    questions: [
      {
        id: "risk",
        type: "single",
        prompt: "Which best describes what your AI system does?",
        options: [
          {
            label:
              "Something explicitly prohibited (e.g. social scoring, manipulative techniques, real-time public biometric surveillance for law enforcement)",
            tags: ["prohibited"],
          },
          {
            label:
              "Used in a high-risk area listed in the AI Act (e.g. employment/HR, credit scoring, critical infrastructure, biometric ID, education access, law enforcement, migration, justice)",
            tags: ["highrisk"],
          },
          {
            label: "Interacts directly with people, generates or manipulates content, or does emotion/biometric recognition — without being high-risk",
            tags: ["limited"],
          },
          { label: "None of the above — a straightforward automation or analytics tool", tags: ["minimal"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("prohibited"),
        title: "This may fall into a prohibited category",
        body: "Some AI practices are banned outright under the AI Act, regardless of risk mitigation. This needs urgent legal review before you go any further — book a call as a priority.",
      },
      {
        match: (t) => t.has("highrisk"),
        title: "Likely High-Risk",
        body: "High-risk systems carry the most obligations short of prohibition: a risk management system, technical documentation, data governance, human oversight, and — for most — registration in the EU database before market placement.",
      },
      {
        match: (t) => t.has("limited"),
        title: "Likely Limited Risk",
        body: "Limited-risk systems mainly carry transparency obligations — disclosing that people are interacting with AI, or labeling AI-generated or manipulated content.",
      },
      {
        match: (t) => t.has("minimal"),
        title: "Likely Minimal Risk",
        body: "Minimal-risk systems carry few direct AI Act obligations today, but should still be logged in your AI inventory — risk classification can change as the system or its use evolves.",
      },
      {
        match: () => true,
        title: "Let's classify this system together",
        body: "Risk classification depends on the specific use case and context, not just the technology. We'll help you get it right.",
      },
    ],
  },
  {
    id: "gdpr",
    title: "GDPR readiness check",
    description: "See where your data protection fundamentals stand.",
    questions: [
      {
        id: "fundamentals",
        type: "multi",
        prompt: "Which of these do you currently have in place? Select all that apply.",
        options: [
          { label: "A published, accurate privacy policy", tags: ["policy"] },
          { label: "A record of processing activities (Art. 30)", tags: ["ropa"] },
          { label: "A documented legal basis for each processing activity", tags: ["basis"] },
          { label: "A process for handling data subject requests (access, deletion, etc.)", tags: ["dsr"] },
          { label: "A data processing agreement with every vendor that touches personal data", tags: ["dpa"] },
          { label: "None of the above yet", tags: ["none"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => count(t, ["policy", "ropa", "basis", "dsr", "dpa"]) <= 1,
        title: "Early stage — let's build the fundamentals",
        body: "The core building blocks of GDPR compliance aren't in place yet. That's normal at an early stage, but worth prioritizing before it becomes urgent — a gap assessment will give you a clear, sequenced plan.",
      },
      {
        match: (t) => count(t, ["policy", "ropa", "basis", "dsr", "dpa"]) <= 3,
        title: "Partway there — a few structural gaps remain",
        body: "You have some fundamentals in place, but the gaps that remain are often the ones that matter most under scrutiny. A focused gap assessment will tell you exactly what's missing.",
      },
      {
        match: () => true,
        title: "Well positioned — time to stress-test what you have",
        body: "You've covered the core fundamentals. The next step is validating that they hold up in practice — through an audit, not just a document review.",
      },
    ],
  },
  {
    id: "nis2",
    title: "NIS2 readiness check",
    description: "Check your cybersecurity risk management posture.",
    questions: [
      {
        id: "scope",
        type: "single",
        prompt:
          "Does your organization fall within a NIS2 essential or important sector (energy, transport, banking, health, digital infrastructure, public administration, certain manufacturing, digital providers, etc.) and meet the size thresholds (roughly 50+ employees or €10M+ turnover)?",
        options: [
          { label: "Yes", tags: ["scope"] },
          { label: "No, or not sure", tags: ["maybe"] },
        ],
      },
      {
        id: "controls",
        type: "multi",
        prompt: "Which of these do you already have in place? Select all that apply.",
        options: [
          { label: "A documented cyber risk management framework", tags: ["risk"] },
          { label: "An incident detection and 24h/72h reporting process", tags: ["incident"] },
          { label: "Supply-chain security requirements for vendors", tags: ["supply"] },
          { label: "Board-level accountability for cybersecurity risk", tags: ["board"] },
          { label: "None of the above yet", tags: ["none"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("maybe"),
        title: "Let's confirm your NIS2 status",
        body: "Scope under NIS2 depends on sector, size, and sometimes criticality rather than size alone — it's easy to be in scope without realizing it. A short call will confirm where you stand.",
      },
      {
        match: (t) => count(t, ["risk", "incident", "supply", "board"]) <= 1,
        title: "Early stage — core controls are missing",
        body: "The foundational controls NIS2 expects — risk management, incident reporting, supply-chain requirements — aren't yet in place. Worth prioritizing given the reporting deadlines involved.",
      },
      {
        match: (t) => count(t, ["risk", "incident", "supply", "board"]) <= 3,
        title: "Partway there — some gaps remain",
        body: "You have real building blocks in place. The remaining gaps are worth closing before an incident — or an audit — surfaces them for you.",
      },
      {
        match: () => true,
        title: "Well positioned — validate under pressure",
        body: "Your core controls are in place. The next step is testing them — can your organization actually detect, respond to, and report an incident within the required windows?",
      },
    ],
  },
  {
    id: "dora",
    title: "DORA readiness check",
    description: "Check your operational resilience posture.",
    questions: [
      {
        id: "scope",
        type: "single",
        prompt:
          "Is your organization a financial entity (bank, insurer, investment firm, payment institution, crypto-asset provider, etc.) or a critical ICT third-party provider serving one?",
        options: [
          { label: "Yes", tags: ["scope"] },
          { label: "No, or not sure", tags: ["maybe"] },
        ],
      },
      {
        id: "controls",
        type: "multi",
        prompt: "Which of these do you already have in place? Select all that apply.",
        options: [
          { label: "An ICT risk management framework", tags: ["risk"] },
          { label: "A register of information on ICT third-party providers", tags: ["register"] },
          { label: "A tested incident classification and reporting process", tags: ["incident"] },
          { label: "A digital operational resilience testing programme", tags: ["testing"] },
          { label: "None of the above yet", tags: ["none"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("maybe"),
        title: "Let's confirm your DORA status",
        body: "DORA also reaches ICT providers serving financial entities, not just the entities themselves — scope is broader than it first appears. A short call will confirm where you stand.",
      },
      {
        match: (t) => count(t, ["risk", "register", "incident", "testing"]) <= 1,
        title: "Early stage — core controls are missing",
        body: "The foundational pillars DORA expects — ICT risk management, a third-party register, incident reporting, resilience testing — aren't yet in place. Worth prioritizing given supervisory expectations.",
      },
      {
        match: (t) => count(t, ["risk", "register", "incident", "testing"]) <= 3,
        title: "Partway there — some gaps remain",
        body: "You have real building blocks in place. The remaining gaps are worth closing before a regulator, client, or auditor finds them first.",
      },
      {
        match: () => true,
        title: "Well positioned — validate under pressure",
        body: "Your core pillars are in place. The next step is testing them, including threat-led penetration testing where required, to confirm they hold up under real conditions.",
      },
    ],
  },
];

function count(tags: Set<string>, keys: string[]) {
  return keys.filter((k) => tags.has(k)).length;
}

// Romanian translations mirror the English structure and tag logic exactly,
// so `match` functions are shared by tag id across locales.
const ro: Quiz[] = [
  {
    id: "general",
    title: "Testul general de conformitate",
    description: "Ce reglementări europene ți se aplică?",
    questions: [
      {
        id: "activities",
        type: "multi",
        prompt: "Care dintre acestea descriu organizația ta? Selectează tot ce se aplică.",
        options: [
          { label: "Construim, vindem sau integrăm sisteme AI sau funcționalități bazate pe AI", tags: ["ai"] },
          { label: "Colectăm sau prelucrăm date cu caracter personal ale unor persoane din UE", tags: ["gdpr"] },
          { label: "Oferim servicii financiare sau servicii ICT către entități financiare din UE", tags: ["dora"] },
          {
            label: "Activăm într-un sector acoperit de NIS2 ca esențial sau important (energie, sănătate, infrastructură digitală, transport etc.)",
            tags: ["nis2"],
          },
          { label: "Producem sau vindem produse hardware/software cu elemente digitale în UE", tags: ["cra"] },
          { label: "Niciuna dintre acestea nu se aplică", tags: ["none"] },
        ],
      },
      {
        id: "nexus",
        type: "single",
        prompt: "Oferi produse sau servicii clienților din UE sau ești stabilit în UE?",
        options: [
          { label: "Da", tags: ["eu"] },
          { label: "Nu, încă nu", tags: ["noeu"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("noeu"),
        title: "În afara sferei de aplicare — deocamdată",
        body: "Majoritatea legilor digitale ale UE se aplică în funcție de unde sunt utilizatorii tăi, nu doar de unde ești stabilit. Dacă plănuiești să intri pe piața UE, merită să îți mapezi obligațiile din timp — înainte să devină urgente.",
      },
      {
        match: (t) => t.has("ai"),
        title: "AI Act este probabil relevant pentru tine",
        body: "Construirea, vânzarea sau integrarea de AI te aduce în sfera AI Act, cu obligații care variază în funcție de rolul tău și nivelul de risc al sistemului. În funcție de date și sector, GDPR, DORA, NIS2 sau CRA se pot aplica și ele — o discuție de descoperire a conformării îți va oferi imaginea completă.",
      },
      {
        match: (t) => t.has("dora"),
        title: "DORA se aplică probabil",
        body: "Ca entitate financiară sau furnizor ICT pentru una, cerințele de reziliență operațională din DORA sunt probabil relevante. Alte cadre se pot suprapune, în funcție de date și tehnologie.",
      },
      {
        match: (t) => t.has("nis2"),
        title: "NIS2 se aplică probabil",
        body: "Activarea într-un sector esențial sau important te aduce în sfera cerințelor NIS2 de management al riscului de cybersecurity și raportare a incidentelor, sub rezerva pragurilor de mărime.",
      },
      {
        match: (t) => t.has("cra"),
        title: "Cyber Resilience Act se aplică probabil",
        body: "Producerea sau vânzarea de hardware sau software conectat în UE aduce obligații de securitate prin proiectare și raportare conform CRA.",
      },
      {
        match: (t) => t.has("gdpr"),
        title: "GDPR se aplică",
        body: "Prelucrarea datelor personale ale unor persoane din UE înseamnă că GDPR se aplică, indiferent de mărimea sau sectorul tău. Amploarea obligațiilor depinde de ce prelucrezi și de ce.",
      },
      {
        match: () => true,
        title: "Hai să mapăm obligațiile tale împreună",
        body: "Răspunsurile tale nu declanșează clar cadrele digitale europene principale — dar regulile se schimbă rapid, iar pragurile pot fi depășite fără să observi. O scurtă discuție va confirma unde te afli.",
      },
    ],
  },
  {
    id: "ai-act-role",
    title: "Identificarea rolului conform AI Act",
    description: "Află dacă ești furnizor, utilizator, importator sau distribuitor.",
    questions: [
      {
        id: "role",
        type: "single",
        prompt: "Care descrie cel mai bine relația ta cu sistemul AI în discuție?",
        options: [
          {
            label: "L-am proiectat sau dezvoltat (sau l-am dezvoltat prin terți) și îl comercializăm sub numele nostru",
            tags: ["provider"],
          },
          {
            label: "Folosim un sistem AI construit de altcineva, sub autoritatea noastră, pentru propriile scopuri",
            tags: ["deployer"],
          },
          {
            label: "Aducem un sistem AI din afara UE și îl introducem pe piața UE sub numele nostru",
            tags: ["importer"],
          },
          {
            label: "Punem la dispoziție un sistem AI pe piața UE fără a fi furnizorul sau importatorul acestuia",
            tags: ["distributor"],
          },
          { label: "Încă nu știu", tags: ["unsure"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("provider"),
        title: "Ești probabil Furnizor",
        body: "Furnizorii au cele mai mari obligații conform AI Act: sisteme de management al riscului, documentație tehnică, evaluare de conformitate și înregistrare pentru sistemele cu risc ridicat. Acesta este rolul care merită clarificat primul.",
      },
      {
        match: (t) => t.has("deployer"),
        title: "Ești probabil Utilizator (Deployer)",
        body: "Utilizatorii trebuie să folosească sistemele AI conform instrucțiunilor furnizorului, să asigure supraveghere umană, să monitorizeze funcționarea și, în anumite cazuri, să realizeze o evaluare a impactului asupra drepturilor fundamentale înainte de utilizare.",
      },
      {
        match: (t) => t.has("importer"),
        title: "Ești probabil Importator",
        body: "Importatorii trebuie să verifice că furnizorul a finalizat procedurile de conformitate necesare, să asigure marcajul CE și documentația corespunzătoare și să păstreze evidențe disponibile autorităților.",
      },
      {
        match: (t) => t.has("distributor"),
        title: "Ești probabil Distribuitor",
        body: "Distribuitorii trebuie să verifice marcajul CE și documentația însoțitoare înainte de a pune la dispoziție un sistem și să se asigure că acesta nu a fost modificat în moduri care afectează conformitatea.",
      },
      {
        match: () => true,
        title: "Hai să determinăm rolul tău împreună",
        body: "Determinarea rolului depinde de specificul modului în care sistemul a fost construit, achiziționat și utilizat — de multe ori se aplică mai mult de un rol, pentru sisteme diferite. Te ghidăm prin acest proces.",
      },
    ],
  },
  {
    id: "ai-act-risk",
    title: "Calculator de clasificare a riscului conform AI Act",
    description: "Estimează nivelul de risc al unui sistem AI specific.",
    questions: [
      {
        id: "risk",
        type: "single",
        prompt: "Ce descrie cel mai bine ce face sistemul tău AI?",
        options: [
          {
            label:
              "Ceva explicit interzis (ex. scoring social, tehnici manipulative, supraveghere biometrică publică în timp real pentru aplicarea legii)",
            tags: ["prohibited"],
          },
          {
            label:
              "Este folosit într-o arie cu risc ridicat listată în AI Act (ex. angajare/HR, scoring de credit, infrastructură critică, identificare biometrică, acces la educație, aplicarea legii, migrație, justiție)",
            tags: ["highrisk"],
          },
          {
            label: "Interacționează direct cu oamenii, generează sau manipulează conținut, sau face recunoaștere emoțională/biometrică — fără a fi risc ridicat",
            tags: ["limited"],
          },
          { label: "Niciuna dintre acestea — un instrument simplu de automatizare sau analiză", tags: ["minimal"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("prohibited"),
        title: "Poate intra într-o categorie interzisă",
        body: "Unele practici AI sunt interzise complet conform AI Act, indiferent de măsurile de atenuare a riscului. Este nevoie de o revizuire juridică urgentă înainte de a merge mai departe — programează un apel ca prioritate.",
      },
      {
        match: (t) => t.has("highrisk"),
        title: "Probabil Risc Ridicat",
        body: "Sistemele cu risc ridicat au cele mai multe obligații, exceptând interdicția: sistem de management al riscului, documentație tehnică, guvernanța datelor, supraveghere umană și, pentru majoritatea, înregistrare în baza de date UE înainte de introducerea pe piață.",
      },
      {
        match: (t) => t.has("limited"),
        title: "Probabil Risc Limitat",
        body: "Sistemele cu risc limitat au în principal obligații de transparență — informarea persoanelor că interacționează cu AI sau etichetarea conținutului generat ori manipulat de AI.",
      },
      {
        match: (t) => t.has("minimal"),
        title: "Probabil Risc Minimal",
        body: "Sistemele cu risc minimal au puține obligații directe conform AI Act astăzi, dar tot merită înregistrate în inventarul tău AI — clasificarea riscului se poate schimba odată cu evoluția sistemului sau utilizării sale.",
      },
      {
        match: () => true,
        title: "Hai să clasificăm acest sistem împreună",
        body: "Clasificarea riscului depinde de cazul de utilizare și contextul specific, nu doar de tehnologie. Te ajutăm să o faci corect.",
      },
    ],
  },
  {
    id: "gdpr",
    title: "Verificarea gradului de pregătire GDPR",
    description: "Vezi unde te afli cu fundamentele protecției datelor.",
    questions: [
      {
        id: "fundamentals",
        type: "multi",
        prompt: "Care dintre acestea le ai deja implementate? Selectează tot ce se aplică.",
        options: [
          { label: "O politică de confidențialitate publicată și actualizată", tags: ["policy"] },
          { label: "Un registru al activităților de prelucrare (Art. 30)", tags: ["ropa"] },
          { label: "Un temei legal documentat pentru fiecare activitate de prelucrare", tags: ["basis"] },
          { label: "Un proces pentru gestionarea cererilor persoanelor vizate (acces, ștergere etc.)", tags: ["dsr"] },
          { label: "Un acord de prelucrare a datelor cu fiecare furnizor care atinge date personale", tags: ["dpa"] },
          { label: "Niciuna dintre acestea încă", tags: ["none"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => count(t, ["policy", "ropa", "basis", "dsr", "dpa"]) <= 1,
        title: "Etapă incipientă — să construim fundamentele",
        body: "Elementele de bază ale conformării GDPR nu sunt încă implementate. E normal la un stadiu incipient, dar merită prioritizat înainte să devină urgent — o evaluare a decalajelor îți va oferi un plan clar, secvențial.",
      },
      {
        match: (t) => count(t, ["policy", "ropa", "basis", "dsr", "dpa"]) <= 3,
        title: "Parțial acolo — mai rămân câteva decalaje structurale",
        body: "Ai câteva fundamente implementate, dar decalajele rămase sunt adesea cele mai importante sub o verificare atentă. O evaluare punctuală a decalajelor îți va arăta exact ce lipsește.",
      },
      {
        match: () => true,
        title: "Bine poziționat — e timpul să testezi ce ai",
        body: "Ai acoperit fundamentele de bază. Următorul pas este să validezi că rezistă în practică — printr-un audit, nu doar o revizuire de documente.",
      },
    ],
  },
  {
    id: "nis2",
    title: "Verificarea gradului de pregătire NIS2",
    description: "Verifică-ți postura de management al riscului de cybersecurity.",
    questions: [
      {
        id: "scope",
        type: "single",
        prompt:
          "Organizația ta se încadrează într-un sector esențial sau important conform NIS2 (energie, transport, bănci, sănătate, infrastructură digitală, administrație publică, anumite activități de producție, furnizori digitali etc.) și îndeplinește pragurile de mărime (aprox. 50+ angajați sau 10M€+ cifră de afaceri)?",
        options: [
          { label: "Da", tags: ["scope"] },
          { label: "Nu, sau nu sunt sigur", tags: ["maybe"] },
        ],
      },
      {
        id: "controls",
        type: "multi",
        prompt: "Care dintre acestea le ai deja implementate? Selectează tot ce se aplică.",
        options: [
          { label: "Un cadru documentat de management al riscului cibernetic", tags: ["risk"] },
          { label: "Un proces de detectare a incidentelor și raportare la 24h/72h", tags: ["incident"] },
          { label: "Cerințe de securitate pentru lanțul de furnizori", tags: ["supply"] },
          { label: "Responsabilitate la nivel de conducere pentru riscul de cybersecurity", tags: ["board"] },
          { label: "Niciuna dintre acestea încă", tags: ["none"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("maybe"),
        title: "Hai să confirmăm statutul tău NIS2",
        body: "Sfera de aplicare NIS2 depinde de sector, mărime și uneori de criticitate, nu doar de mărime — e ușor să te încadrezi fără să realizezi. O scurtă discuție va confirma unde te afli.",
      },
      {
        match: (t) => count(t, ["risk", "incident", "supply", "board"]) <= 1,
        title: "Etapă incipientă — lipsesc controalele de bază",
        body: "Controalele fundamentale așteptate de NIS2 — management al riscului, raportarea incidentelor, cerințe pentru lanțul de furnizori — nu sunt încă implementate. Merită prioritizat, având în vedere termenele de raportare implicate.",
      },
      {
        match: (t) => count(t, ["risk", "incident", "supply", "board"]) <= 3,
        title: "Parțial acolo — mai rămân câteva decalaje",
        body: "Ai deja elemente reale implementate. Decalajele rămase merită închise înainte ca un incident — sau un audit — să le scoată la iveală în locul tău.",
      },
      {
        match: () => true,
        title: "Bine poziționat — validează sub presiune",
        body: "Controalele tale de bază sunt implementate. Următorul pas este să le testezi — poate organizația ta să detecteze, să răspundă și să raporteze un incident în termenele cerute?",
      },
    ],
  },
  {
    id: "dora",
    title: "Verificarea gradului de pregătire DORA",
    description: "Verifică-ți postura de reziliență operațională.",
    questions: [
      {
        id: "scope",
        type: "single",
        prompt:
          "Organizația ta este o entitate financiară (bancă, asigurător, firmă de investiții, instituție de plăți, furnizor de cripto-active etc.) sau un furnizor ICT critic pentru una dintre acestea?",
        options: [
          { label: "Da", tags: ["scope"] },
          { label: "Nu, sau nu sunt sigur", tags: ["maybe"] },
        ],
      },
      {
        id: "controls",
        type: "multi",
        prompt: "Care dintre acestea le ai deja implementate? Selectează tot ce se aplică.",
        options: [
          { label: "Un cadru de management al riscului ICT", tags: ["risk"] },
          { label: "Un registru de informații privind furnizorii terți ICT", tags: ["register"] },
          { label: "Un proces testat de clasificare și raportare a incidentelor", tags: ["incident"] },
          { label: "Un program de testare a rezilienței operaționale digitale", tags: ["testing"] },
          { label: "Niciuna dintre acestea încă", tags: ["none"] },
        ],
      },
    ],
    results: [
      {
        match: (t) => t.has("maybe"),
        title: "Hai să confirmăm statutul tău DORA",
        body: "DORA acoperă și furnizorii ICT care deservesc entități financiare, nu doar entitățile în sine — sfera de aplicare este mai largă decât pare la prima vedere. O scurtă discuție va confirma unde te afli.",
      },
      {
        match: (t) => count(t, ["risk", "register", "incident", "testing"]) <= 1,
        title: "Etapă incipientă — lipsesc controalele de bază",
        body: "Pilonii fundamentali așteptați de DORA — management al riscului ICT, registru al furnizorilor terți, raportarea incidentelor, testarea rezilienței — nu sunt încă implementați. Merită prioritizat, având în vedere așteptările de supraveghere.",
      },
      {
        match: (t) => count(t, ["risk", "register", "incident", "testing"]) <= 3,
        title: "Parțial acolo — mai rămân câteva decalaje",
        body: "Ai deja elemente reale implementate. Decalajele rămase merită închise înainte ca un reglementator, client sau auditor să le găsească primul.",
      },
      {
        match: () => true,
        title: "Bine poziționat — validează sub presiune",
        body: "Pilonii tăi de bază sunt implementați. Următorul pas este testarea lor, inclusiv teste de penetrare bazate pe amenințări acolo unde sunt cerute, pentru a confirma că rezistă în condiții reale.",
      },
    ],
  },
];

export const quizzes: Record<Locale, Quiz[]> = { en, ro };
