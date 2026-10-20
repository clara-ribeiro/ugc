export type NavItem = {
  href: string;
  label: string;
};

export type VideoItem = {
  id: string;
  category: string;
  product: string;
  title: string;
  duration: string;
  hook: string;
  description: string;
  formatLabel: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  label: string;
  brief: string;
  hook: string;
  visual: string;
  cta: string;
};

export type ServicePackage = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  priceCurrency: "USD";
  priceSuffix?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  mailtoSubject: string;
  featured?: boolean;
  badge?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const CONTACT_EMAIL = "clararibeiro.ugc@gmail.com";

export const landing = {
  site: {
    title: "Tech UGC Creator for B2B SaaS, DevTools & AI | Clara Sousa",
    description:
      "Clara Sousa is a software engineer creating English-language UGC video ads for B2B SaaS, DevTools, and AI products. Technical walkthroughs, hooks, and paid social assets recorded by an actual developer.",
    shortTitle: "Clara Sousa | Tech UGC",
    serviceName: "Clara Sousa Tech UGC",
    brand: "<Clara />",
    contactEmail: CONTACT_EMAIL,
    keywords: [
      "UGC for SaaS",
      "B2B UGC creator",
      "DevTools video ads",
      "AI product UGC",
      "software engineer UGC",
      "technical UGC videos",
      "SaaS TikTok ads",
      "developer-led content",
      "Cursor UGC ad",
      "DevTools paid social",
    ],
  },
  person: {
    name: "Clara Sousa",
    jobTitle: "Software Engineer and UGC Creator",
    nationality: "Brazilian",
    areaServed: "Worldwide",
    languages: ["English", "Portuguese"],
    knowsAbout: [
      "User-generated content",
      "B2B SaaS marketing",
      "Developer tools",
      "AI products",
      "Technical video ads",
      "Software engineering",
    ],
    serviceTypes: [
      "UGC video production",
      "SaaS product walkthroughs",
      "Paid social creative",
      "Technical scriptwriting",
    ],
  },
  nav: {
    ariaLabel: "Primary",
    skipToContent: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    items: [
      { href: "#about", label: "About" },
      { href: "#work", label: "Archive" },
      { href: "#cases", label: "Scripts" },
      { href: "#services", label: "Services" },
      { href: "#faq", label: "FAQ" },
    ] satisfies NavItem[],
    ctaLabel: "Get in touch →",
    ctaShort: "Email",
    ctaAriaLabel: "Send an email to book a call",
  },
  hero: {
    titleId: "hero-heading",
    availability: "Available for new projects",
    titleLead: "Translating complex",
    titleEmphasis: "software",
    titleTrail: "into high-converting video ads.",
    description:
      "I'm Clara Sousa, a Software Engineer crafting technical UGC for B2B SaaS, DevTools, and AI. Stop hiring generic creators—let an actual developer explain your stack.",
    primaryCta: "Request a Brief",
    primarySubject: "Inquiry: SaaS UGC Video",
    secondaryCta: "Explore the archive",
    photoAlt:
      "Portrait of Clara Sousa, Brazilian software engineer and tech UGC creator",
    photoSrc: "/images/clara.jpg",
    credentials: ["Software Engineer", "Fluent English", "Studio Lighting & 4K"],
  },
  about: {
    id: "about",
    titleId: "about-heading",
    title: "A developer who also makes the ads.",
    lead: "Most UGC for software products is filmed by creators who cannot use the product. I can. I write the script, capture the UI, and explain the workflow the way an engineer talks to another engineer—or to a technical buyer who is tired of vague demos.",
    body: "I produce English-language talking-head and screen-capture videos for B2B SaaS teams that need paid social, organic short-form, and bottom-of-funnel walkthroughs. The first public slate is four direct-response scripts—Cursor, Notion AI, Wise, and Claude—written for developers and technical buyers. Finished 9:16 cuts replace the placeholders as they are edited.",
    nichesTitle: "Built for technical products",
    niches: [
      {
        title: "B2B SaaS",
        description:
          "Product walkthroughs, onboarding stories, and objection-handling ads for tools sold to operators, PMs, and founders.",
      },
      {
        title: "DevTools",
        description:
          "Editor walkthroughs, Cmd+K demos, and “stop debugging manually” ads that stay technically accurate.",
      },
      {
        title: "AI products",
        description:
          "Workflow automations, prompt-to-output stories, and comparison ads that show the product working, not just claiming to.",
      },
    ],
  },
  archive: {
    id: "work",
    titleId: "archive-heading",
    title: "The Archive.",
    description:
      "Four direct-response UGC scripts, written in fluent English for developers and technical buyers. 9:16 cuts land here as they are edited; each card already shows the product, hook, and runtime.",
    items: [
      {
        id: "video-1",
        category: "BOFU / Paid Ad",
        product: "Cursor",
        title: "Stop debugging legacy code manually",
        duration: "40s",
        hook: "Stop debugging legacy code manually. Do this instead.",
        formatLabel: "Coming soon · 9:16",
        description:
          "Talking-head plus Cursor screen capture: a red terminal error, Cmd+K, and an AI fix that reads the whole codebase. Built for conversion.",
      },
      {
        id: "video-2",
        category: "TOFU / Workflow",
        product: "Notion AI",
        title: "Sprint planning in 15 minutes",
        duration: "35s",
        hook: "Here is exactly how I cut my sprint planning from four hours down to 15 minutes.",
        formatLabel: "Coming soon · 9:16",
        description:
          "Before/after split, then a Notion AI demo that turns messy meeting notes into tickets with acceptance criteria. Built for organic and paid social.",
      },
      {
        id: "video-3",
        category: "Trust / Testimonial",
        product: "Wise",
        title: "Remote devs are losing money",
        duration: "40s",
        hook: "If you're a remote software engineer, you are probably losing money on every single paycheck.",
        formatLabel: "Coming soon · 9:16",
        description:
          "Authority testimonial for international payroll: hidden bank fees versus Wise mid-market rates, with phone and B-roll of the conversion UI.",
      },
      {
        id: "video-4",
        category: "MOFU / Comparison",
        product: "Claude",
        title: "ChatGPT vs Claude for coding",
        duration: "45s",
        hook: "Why I completely stopped using ChatGPT for coding and switched to Claude.",
        formatLabel: "Coming soon · 9:16",
        description:
          "Analytical comparison: lazy placeholders versus Claude 3.5 Sonnet writing a full React component and rendering it in Artifacts.",
      },
    ] satisfies VideoItem[],
  },
  journal: {
    id: "cases",
    titleId: "journal-heading",
    title: "The scripts.",
    description:
      "Shot lists for the four ads above. Direct-response structure: hook in three seconds, problem, visual demo, hard CTA. These are production scripts, not published client case studies.",
    items: [
      {
        id: "case-01",
        title: "Cursor code walkthrough",
        label: "Script 01 · 40s · BOFU",
        brief:
          "A DevTools conversion ad. Face on camera, frustrated, pointing at a red terminal error. Jump cut, then Cursor screen-share with face in a PiP circle.",
        hook: "Stop debugging legacy code manually. Do this instead.",
        visual:
          "Cmd+K in Cursor, type the break, TOS: “Reads your entire codebase.” Audio: skip Stack Overflow; the model reads the project and writes the fix in seconds.",
        cta: "It actually understands my project's context. Stop wasting time on bugs. Click the link below to try Cursor today.",
      },
      {
        id: "case-02",
        title: "Notion AI sprint workflow",
        label: "Script 02 · 35s · TOFU",
        brief:
          "A before/after workflow ad. Split screen: 50 tabs and a headache versus coffee, calm. Then walking-and-talking, then a clean Notion screen recording.",
        hook: "Here is exactly how I cut my sprint planning from four hours down to 15 minutes.",
        visual:
          "Dump a transcript into Notion AI, hit Generate Action Items, checkmarks on screen. TOS: auto-formats tasks, zero manual typing.",
        cta: "It's a game changer for product teams. Click below to automate your workflow with Notion AI.",
      },
      {
        id: "case-03",
        title: "Wise for remote engineers",
        label: "Script 03 · 40s · Trust",
        brief:
          "A fintech testimonial. Phone in frame with the app open, advisor tone. Then B-roll: card at a café, laptop, overlay of a clean FX conversion.",
        hook: "If you're a remote software engineer, you are probably losing money on every single paycheck.",
        visual:
          "USD payroll through traditional banks versus Wise mid-market rate. TOS: real mid-market rate, transparent fees, no surprises.",
        cta: "Keep the money you actually earned. Use the link on screen to set up your Wise account in minutes.",
      },
      {
        id: "case-04",
        title: "Claude vs ChatGPT for code",
        label: "Script 04 · 45s · MOFU",
        brief:
          "A technical comparison. Split logos, creator in the center. Then talking-head on the “lazy code” problem, then a Claude Artifacts screen recording.",
        hook: "Why I completely stopped using ChatGPT for coding and switched to Claude.",
        visual:
          "ChatGPT leaving placeholders in a large codebase versus Claude 3.5 Sonnet writing a full React component and rendering the UI beside the code.",
        cta: "If you want to code faster, make the switch. Click below to try Claude on your next project.",
      },
    ] satisfies CaseStudy[],
  },
  process: {
    id: "process",
    titleId: "process-heading",
    title: "How a brief becomes an asset.",
    description: "A short production path so marketing teams can start before a full creative deck exists.",
    steps: [
      {
        title: "Brief",
        description:
          "You send the product, audience, offer, and any must-use claims. A Loom or docs link is enough to start.",
      },
      {
        title: "Script",
        description:
          "I write a technical script with a hook, proof, and CTA. You approve before recording.",
      },
      {
        title: "Record & edit",
        description:
          "Talking-head, screen capture, captions, and hook variants in 4K. Delivered as vertical social files.",
      },
      {
        title: "Usage",
        description:
          "Paid usage windows and buyouts are listed in the packages. Raw footage is available as an add-on.",
      },
    ],
  },
  services: {
    id: "services",
    titleId: "services-heading",
    title: "Investment.",
    description:
      "Transparent USD pricing for technical UGC assets. Engineered for paid social tests, not vanity content.",
    footnote:
      "* Raw footage +30%. Paid usage, Spark Ads / whitelisting, and 48-hour rush delivery available as add-ons.",
    packages: [
      {
        id: "starter",
        name: "The Starter Test",
        price: "$350",
        priceValue: 350,
        priceCurrency: "USD",
        description: "One edited video to test a new ad angle.",
        features: [
          "1x Edited Video (30-60s)",
          "Scriptwriting & Ideation",
          "Screen Capture & Edit",
        ],
        ctaLabel: "Request Starter",
        mailtoSubject: "Starter Package",
      },
      {
        id: "growth",
        name: "The Growth Asset",
        price: "$450",
        priceValue: 450,
        priceCurrency: "USD",
        description: "Base video plus hooks for paid social.",
        features: [
          "1x Edited Base Video",
          "2x Alternative Hooks",
          "Clean text-free version",
          "3 Months Paid Usage Rights",
        ],
        ctaLabel: "Request Growth Asset",
        mailtoSubject: "Growth Asset Package",
        featured: true,
        badge: "Popular",
      },
      {
        id: "retainer",
        name: "Retainer",
        price: "$1,200",
        priceValue: 1200,
        priceCurrency: "USD",
        priceSuffix: "/mo",
        description: "A consistent creative pipeline each month.",
        features: ["4x Videos per month", "8x Hook variations", "Priority comms"],
        ctaLabel: "Check Availability",
        mailtoSubject: "Monthly Retainer",
      },
    ] satisfies ServicePackage[],
  },
  faq: {
    id: "faq",
    titleId: "faq-heading",
    title: "Questions brands usually ask.",
    description:
      "Direct answers for SaaS, DevTools, and AI teams briefing a software engineer for UGC—usage rights, sandbox hygiene, launches, and delivery.",
    items: [
      {
        question: "What is UGC for B2B SaaS?",
        answer:
          "UGC here means short, creator-style videos that look native on TikTok, Reels, LinkedIn, and paid social—not a polished brand film. For SaaS, that usually means a talking head plus a real product demo: a hook in the first three seconds, a workflow, and a clear next step.",
      },
      {
        question: "Why should a B2B SaaS company hire a Software Engineer for UGC?",
        answer:
          "Unlike generic influencers, an actual Software Engineer understands your API documentation, complex dashboards, and tech stack. I don't just read a script; I can set up local environments, troubleshoot bugs on camera, and explain developer tools using the correct jargon. That translates to authentic video ads that convert technical buyers and CTOs.",
      },
      {
        question: "What types of UGC videos work best for DevTools and AI software?",
        answer:
          "High-converting tech ads rely on Direct Response frameworks. I specialize in BOFU coding walkthroughs, TOFU workflow transformations, FinTech trust testimonials, and MOFU technical comparisons. All feature a triple hook (visual, verbal, on-screen text) and dynamic screen-zoom optimized for Meta Ads, LinkedIn, and TikTok.",
      },
      {
        question: "How do you handle sensitive data and API keys in SaaS product demos?",
        answer:
          "I practice strict sandbox hygiene. Dedicated browser profiles, no real .env files, no private repositories, and no actual customer data. Environments are populated with realistic dummy data so the product looks active without compromising security.",
      },
      {
        question: "Can you create a promotional UGC video for our Product Hunt launch?",
        answer:
          "Yes. I offer 48-hour rush delivery for startups launching on Product Hunt or Hacker News. Because I already understand tech, onboarding takes minutes, and I can turn a docs link into a spec ad in time for launch and retargeting.",
      },
      {
        question: "Do your packages include paid usage rights and Whitelisting / Spark Ads?",
        answer:
          "Organic usage is included. Paid usage rights, buyouts, and Spark Ads / whitelisting (running ads through my Software Engineer creator handle) are scalable add-ons. Whitelisting adds third-party credibility on Meta and TikTok.",
      },
      {
        question: "Do you film in English?",
        answer:
          "Yes. Videos are produced in fluent English for international SaaS, DevTools, and AI teams. I am based in Brazil and also work in Portuguese when a campaign needs it.",
      },
      {
        question: "How fast is delivery, and what is rush pricing?",
        answer:
          "Standard turnaround is a few business days after script approval. A 48-hour rush add-on is available at +25–50% for launches, paid tests, and retargeting windows that cannot wait.",
      },
      {
        question: "Do I need to give you production access or real API keys?",
        answer:
          "No. A staging URL, docs, or a short Loom is enough to start. If a local setup is required, I use a sandbox with dummy data. I never need production credentials.",
      },
      {
        question: "What do you deliver, and can we A/B test hooks?",
        answer:
          "An edited vertical video (typically 30–60 seconds), captions, and screen capture when the product needs it. Growth and Retainer packages include hook variants and a clean text-free version for ads managers. Extra hooks for A/B tests can be added to any package.",
      },
      {
        question: "Who is this for?",
        answer:
          "B2B SaaS, DevTools, AI, FinTech, and technical productivity products that sell to developers, product managers, CTOs, or operators. If a generic UGC creator would mispronounce your feature names, this is the fit.",
      },
      {
        question: "Can we start before the public archive has finished videos?",
        answer:
          "Yes. The four scripts already on this page—Cursor, Notion AI, Wise, and Claude—show the angles, hooks, and shot lists I write. Finished cuts replace the placeholders as they are edited. Production for your product can start from a Starter or Growth package in parallel.",
      },
      {
        question: "Where are you based, and can you work with US time zones?",
        answer:
          "I am a software engineer based in Brazil, recording in 4K with studio lighting. Async briefs work well with US and EU teams; calls can be scheduled for overlap hours. Invoices are issued in USD.",
      },
    ] satisfies FaqItem[],
  },
  footer: {
    quote: "“Vissi d'arte, vissi d'amore.”",
    description:
      "Tech UGC studio by Clara Sousa, software engineer. Semantic, accessible pages designed to be read by people and by search engines.",
    copyright: "© 2026 Clara Sousa. All rights reserved.",
  },
} as const;

export function mailtoHref(subject?: string) {
  const encoded = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${CONTACT_EMAIL}${encoded}`;
}
