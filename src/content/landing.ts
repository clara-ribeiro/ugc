export type NavItem = {
  href: string;
  label: string;
};

export type StrategyBeat = {
  label: string;
  body: string;
};

export type VideoItem = {
  id: string;
  category: string;
  product: string;
  title: string;
  duration: string;
  durationIso: string;
  hook: string;
  description: string;
  formatLabel: string;
  src: string;
  poster: string;
  job: string;
  spine: string;
  strategy: StrategyBeat[];
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

export type CredentialItem = {
  id: string;
  label: string;
  icon: "check" | "camera";
};

export type WorkItem = {
  label: string;
  href: string;
  tone: "blue" | "rose";
};

const CONTACT_EMAIL = "clararibeiro.ugc@gmail.com";

export const landing = {
  site: {
    title: "Tech UGC Creator for B2B SaaS, DevTools & AI | Clara Sousa",
    description:
      "Clara Sousa is a software engineer who writes and films English-language UGC ads for B2B SaaS, DevTools, AI, and creator hardware. Watch finished examples, then send a brief.",
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
      "Direct-response UGC",
      "Software engineering",
    ],
    serviceTypes: [
      "UGC video production",
      "SaaS product walkthroughs",
      "Paid social creative",
      "Technical scriptwriting",
      "Hardware and lifestyle UGC",
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
      { href: "#method", label: "Method" },
      { href: "#cases", label: "Scripts" },
      { href: "#services", label: "Services" },
      { href: "#faq", label: "FAQ" },
    ] satisfies NavItem[],
    ctaLabel: "Get in touch",
    ctaShort: "Contact",
    ctaAriaLabel: "Open the contact form",
  },
  hero: {
    titleId: "hero-heading",
    availability: "Available for new projects",
    titleLead: "Translating complex",
    titleEmphasis: "software",
    titleTrail: "into high-converting video ads.",
    description:
      "I'm Clara Sousa, a software engineer. I write the script, demo the product on camera, and deliver vertical ads your technical buyers will actually watch. SaaS, DevTools, AI, and hardware.",
    primaryCta: "Get in touch",
    primarySubject: "Brief: UGC video",
    secondaryCta: "Watch the work",
    photoAlt:
      "Portrait of Clara Sousa, Brazilian software engineer and tech UGC creator",
    photoSrc: "/images/clara.webp",
    proofLabel: "Proof of work",
    credentials: [
      { id: "english", label: "Fluent English", icon: "check" },
      { id: "studio", label: "4K Studio Setup", icon: "camera" },
    ] satisfies CredentialItem[],
  },
  works: [
    {
      label: "devXperience",
      href: "https://www.devxperience.com.br/",
      tone: "blue",
    },
    { label: "Clamari", href: "https://www.clamari.com.br/", tone: "rose" },
  ] satisfies WorkItem[],
  about: {
    id: "about",
    titleId: "about-heading",
    title: "A developer who also makes the ads.",
    lead: "Most UGC for software is filmed by creators who cannot use the product. I can. I write the script, capture the real UI, and talk the way an engineer talks to another engineer—or to a buyer tired of vague demos.",
    body: "English-language ads for paid social and short-form: talking-head walkthroughs, screen demos, desk films, and motion graphics. Watch the six examples below, then send a brief if the angle fits.",
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
          "Editor walkthroughs and “stop debugging manually” ads that stay technically accurate.",
      },
      {
        title: "AI products",
        description:
          "Workflow automations, prompt-to-output stories, and comparison ads that show the product working, not just claiming to.",
      },
      {
        title: "Hardware",
        description:
          "Desk films and product motion for keyboards and mice that still have to look native on TikTok and Reels.",
      },
    ],
  },
  archive: {
    id: "work",
    titleId: "archive-heading",
    title: "The Archive.",
    description:
      "Finished ads for Cursor, Notion AI, Wise, Claude, Key Waves, and Logitech.",
    modal: {
      close: "Close",
      closeAria: "Close video",
      jobLabel: "Job",
      spineLabel: "Spine",
      strategyLabel: "Conversion strategy",
    },
    items: [
      {
        id: "video-2",
        category: "Workflow",
        product: "Notion AI",
        title: "Sprint planning in 15 minutes",
        duration: "28s",
        durationIso: "PT28S",
        hook: "Here is exactly how I cut my sprint planning from hours down to 15 minutes.",
        formatLabel: "9:16",
        src: "/videos/web/notion.mp4",
        poster: "/videos/web/notion.webp",
        description:
          "A workflow ad: messy meeting notes in, a full task list out—without typing tickets by hand.",
        job: "A workflow ad for product teams who still turn meetings into tickets by hand.",
        spine: "Split-screen hook → meeting pain → Notion AI proof → on-camera ask",
        strategy: [
          {
            label: "Hook",
            body: "“Hours down to 15 minutes” is spoken, written on screen, and shown as stressed typing versus tea. The promise lands with the sound off.",
          },
          {
            label: "Pain",
            body: "Writing tickets from a chaotic meeting is named as the worst part of the week—then a fast fake Meet makes the cost visible.",
          },
          {
            label: "Proof",
            body: "The transcript goes into Notion AI, a command is typed, tasks appear. Zero manual typing is the only claim, and it is on screen while it happens.",
          },
          {
            label: "Ask",
            body: "On camera, in the chair: try Notion AI. The next tap is the landing page, not a comment.",
          },
        ],
      },
      {
        id: "video-5",
        category: "Brand film",
        product: "Key Waves",
        title: "Typing or floating?",
        duration: "12s",
        durationIso: "PT12S",
        hook: "Typing or floating?",
        formatLabel: "9:16",
        src: "/videos/web/key-waves.mp4",
        poster: "/videos/web/key-waves.webp",
        description:
          "A short brand loop: ocean, the Key Waves name filled by the keyboard, then the product itself.",
        job: "A 12-second brand loop for awareness—organic or paid—not a hard sell.",
        spine: "Atmosphere → name as mask → product → question",
        strategy: [
          {
            label: "Watch first",
            body: "No talking head. Ocean holds the scroll long enough for the name to appear.",
          },
          {
            label: "Name = product",
            body: "The Key Waves wordmark fills with a photo of the keyboard. You learn the name by seeing the object inside it.",
          },
          {
            label: "Ask",
            body: "Type-on: typing or floating? A line people can repeat. The tap is curiosity, not a checkout.",
          },
        ],
      },
      {
        id: "video-1",
        category: "Paid ad",
        product: "Cursor",
        title: "Stop debugging legacy code manually",
        duration: "32s",
        durationIso: "PT32S",
        hook: "Stop debugging legacy code manually. Do this instead.",
        formatLabel: "9:16",
        src: "/videos/web/cursor.mp4",
        poster: "/videos/web/cursor.webp",
        description:
          "A DevTools ad: the pain of a huge error log, then Cursor fixing it from the project’s own context.",
        job: "A bottom-of-funnel DevTools ad for developers stuck in error logs.",
        spine: "Command hook → hours of pain → Command-K proof → finger-down ask",
        strategy: [
          {
            label: "Hook",
            body: "“Stop debugging legacy code manually. Do this instead.” Spoken, on screen, and timed with a turn to camera.",
          },
          {
            label: "Pain",
            body: "Staring at a massive error log for one broken flow. The cost is hours, named on screen.",
          },
          {
            label: "Proof",
            body: "Cursor reads the project, Command-K, the fix. No Stack Overflow tabs—shown, not claimed in a vacuum.",
          },
          {
            label: "Ask",
            body: "Same frame as the rant, pointing down: try Cursor for free. Built for paid social.",
          },
        ],
      },
      {
        id: "video-3",
        category: "Testimonial",
        product: "Wise",
        title: "Remote devs are losing money",
        duration: "35s",
        durationIso: "PT35S",
        hook: "If you're a software engineer, you are wasting money on every single paycheck.",
        formatLabel: "9:16",
        src: "/videos/web/wise.mp4",
        poster: "/videos/web/wise.webp",
        description:
          "A trust ad for international payroll: banks take a cut; Wise shows the real rate and the fee up front.",
        job: "A trust ad for engineers paid in dollars through local banks.",
        spine: "Pattern interrupt → fee pain → app proof → phone-up ask",
        strategy: [
          {
            label: "Hook",
            body: "A grimace at a notification, then to camera: you are wasting money on every paycheck. Lifestyle first, then the claim.",
          },
          {
            label: "Pain",
            body: "A jump-cut close-up. Traditional banks and hidden fees eating up to 5%. The number is on screen.",
          },
          {
            label: "Proof",
            body: "POV of the Wise app: mid-market rate, fee shown up front. Transparency is the demo.",
          },
          {
            label: "Ask",
            body: "Phone raised with the logo. Set up Wise today—minutes, not a lecture.",
          },
        ],
      },
      {
        id: "video-4",
        category: "Comparison",
        product: "Claude",
        title: "ChatGPT vs Claude for coding",
        duration: "34s",
        durationIso: "PT34S",
        hook: "Why I completely stopped using ChatGPT for coding and switched to Claude.",
        formatLabel: "9:16",
        src: "/videos/web/claude.mp4",
        poster: "/videos/web/claude.webp",
        description:
          "A comparison ad: ChatGPT goes lazy on a large codebase; Claude writes the component and previews the UI.",
        job: "A mid-funnel comparison for developers choosing a coding model.",
        spine: "Logo split → lazy-code pain → Artifacts proof → switch ask",
        strategy: [
          {
            label: "Hook",
            body: "“Why I completely stopped using ChatGPT for coding.” Two logos on the TV so the debate is visible before a word lands.",
          },
          {
            label: "Pain",
            body: "ChatGPT gets lazy on a large codebase and leaves “insert your code here.” The break in flow is the enemy, not the brand.",
          },
          {
            label: "Proof",
            body: "Claude writes the full React component and Artifacts renders the UI beside the code. Preview is the product.",
          },
          {
            label: "Ask",
            body: "TV on Claude only. Make the switch—level up your dev stack, arrow down.",
          },
        ],
      },
      {
        id: "video-6",
        category: "Desk film",
        product: "Logitech",
        title: "Come work with me",
        duration: "16s",
        durationIso: "PT16S",
        hook: "Come work with me in 15 seconds.",
        formatLabel: "9:16",
        src: "/videos/web/keyboard-and-mouse.mp4",
        poster: "/videos/web/keyboard-and-mouse.webp",
        description:
          "A morning at the desk with the Lift and Wave Keys—real clicks, real typing, then five hours later, zero wrist pain.",
        job: "A native desk film for hardware. Sound and time do the selling.",
        spine: "ASMR macros → clock → timelapse → zero-pain end card",
        strategy: [
          {
            label: "Hook",
            body: "Come work with me in 15 seconds. The Lift hits the desk. Sound first, no rant.",
          },
          {
            label: "Proof",
            body: "Clicks, scroll, wave-profile typing. A clock from 8:00 to 8:30 AM makes the products feel used, not posed.",
          },
          {
            label: "Ask",
            body: "The morning speeds up. End card: 5 hours later. Zero wrist pain. Link in the caption—the product is the CTA.",
          },
        ],
      },
    ] satisfies VideoItem[],
  },
  journal: {
    id: "cases",
    titleId: "journal-heading",
    title: "The scripts.",
    description:
      "The hook, on-screen text, and ask behind each film—so you can see how a 30-second ad is built before you brief one.",
    items: [
      {
        id: "case-01",
        title: "Cursor · stop debugging manually",
        label: "DevTools ad · 32s",
        brief:
          "Turn from the monitor, name the pain of staring at error logs, then show Cursor reading the project and writing the fix. Close on camera, pointing down.",
        hook: "Stop debugging legacy code manually. Do this instead.",
        visual:
          "Stop debugging manually. / The old way wastes hours. / Zero Stack Overflow tabs. / Context-aware AI. / Try Cursor for free.",
        cta: "It actually understands my project's context. Stop wasting time on bugs. Click the link below and try Cursor today.",
      },
      {
        id: "case-02",
        title: "Notion AI · sprint planning in 15 minutes",
        label: "Workflow ad · 28s",
        brief:
          "Stressed typing versus tea and a book. A chaotic meeting. Then the transcript goes into Notion AI and comes back as tasks.",
        hook: "Here is exactly how I cut my sprint planning from hours down to 15 minutes.",
        visual:
          "Sprint planning: hours → 15 mins. / Writing tickets = tedious. / Zero manual typing. / Automate your workflow.",
        cta: "It's a game changer for product teams. Click below to try Notion AI.",
      },
      {
        id: "case-03",
        title: "Wise · keep the paycheck",
        label: "Trust ad · 35s",
        brief:
          "Laptop by the pool, a grimace at a bank notification, then the Wise app: real rate, fee shown up front. Close holding the phone.",
        hook: "If you're a software engineer, you are wasting money on every single paycheck.",
        visual:
          "Remote devs: losing money? / Banks take up to 5%. / Real mid-market rate. / No hidden fees. / Set up Wise today.",
        cta: "Keep the money you actually earned. Use the link below to set up your Wise account in minutes.",
      },
      {
        id: "case-04",
        title: "Claude · stop using ChatGPT for code",
        label: "Comparison ad · 34s",
        brief:
          "ChatGPT versus Claude on a TV. The “lazy code” problem, then Claude writing a full React component and previewing it. Close on the Claude logo.",
        hook: "Why I completely stopped using ChatGPT for coding and switched to Claude.",
        visual:
          "ChatGPT vs Claude. / The lazy code problem. / Claude Artifacts UI preview. / Level up your dev stack.",
        cta: "If you want to code faster, make the switch. Click below to try Claude on your next project.",
      },
      {
        id: "case-05",
        title: "Logitech · come work with me",
        label: "Desk film · 16s",
        brief:
          "The Lift lands on the desk, then the Wave Keys. Clicks, scroll, typing. A wide shot of the morning speeding up.",
        hook: "Come work with me in 15 seconds.",
        visual:
          "Clock from 8:00 to 8:30 AM, then 9:00 AM → 1:00 PM. Last frame: 5 hours later. Zero wrist pain.",
        cta: "The product is the proof. Link lives in the caption.",
      },
      {
        id: "case-06",
        title: "Key Waves · typing or floating?",
        label: "Brand film · 12s",
        brief:
          "Ocean. The Key Waves name fills with a photo of the keyboard. The product appears, then the question: typing or floating?",
        hook: "Key Waves.",
        visual:
          "The wordmark is the mask; the product is the fill. No talking head.",
        cta: "A loop for awareness—organic or paid—not a hard sell.",
      },
    ] satisfies CaseStudy[],
  },
  method: {
    id: "method",
    titleId: "method-heading",
    title: "How these ads convert.",
    description:
      "Four of the films use the same spine: hook, pain, product proof, one ask. The two hardware films earn the watch first—then the brand.",
    steps: [
      {
        title: "Hook in three seconds",
        description:
          "The first line is spoken, written on screen, and matched by a visual change. The promise still lands if someone is scrolling with the sound off.",
      },
      {
        title: "Pain, then proof",
        description:
          "Raise the cost—tedious tickets, lazy placeholders, bank fees, hours in a log—then show the product doing the work. Claims wait until there is something to see.",
      },
      {
        title: "One clear next step",
        description:
          "Cursor, Notion, Wise, and Claude close on camera with an arrow on screen. Built for paid social, where the next tap should be your page, not a comment.",
      },
      {
        title: "The right format for the job",
        description:
          "A keyboard does not need a rant. Logitech is a real morning at the desk. Key Waves is a short brand loop. Same goal: they stop, they understand, they tap.",
      },
    ],
  },
  process: {
    id: "process",
    titleId: "process-heading",
    title: "How a brief becomes an ad.",
    description: "Four steps. You approve the script before anything is recorded.",
    steps: [
      {
        title: "Brief",
        description:
          "Send the product, the audience, and the offer. A Loom or a docs link is enough to start.",
      },
      {
        title: "Script",
        description:
          "You get a hook, the proof, and the ask. Nothing is filmed until you say yes.",
      },
      {
        title: "Record & edit",
        description:
          "Talking-head, screen capture, captions, and on-screen text. Desk film or motion graphic if the brief needs it.",
      },
      {
        title: "You run it",
        description:
          "Vertical files ready for organic or paid. Usage windows and raw footage are in the packages and add-ons.",
      },
    ],
  },
  services: {
    id: "services",
    titleId: "services-heading",
    title: "Packages.",
    description: "USD pricing. One film to test an angle, or a monthly pipeline.",
    footnote:
      "* Raw footage +30%. Paid usage, Spark Ads / whitelisting, and 48-hour rush delivery as add-ons.",
    packages: [
      {
        id: "starter",
        name: "The Starter Test",
        price: "$350",
        priceValue: 350,
        priceCurrency: "USD",
        description: "One edited video to test a new angle.",
        features: [
          "1 edited video (30–60s)",
          "Script and idea",
          "Screen capture and edit",
        ],
        ctaLabel: "Book Starter",
        mailtoSubject: "Starter Package",
      },
      {
        id: "growth",
        name: "The Growth Asset",
        price: "$450",
        priceValue: 450,
        priceCurrency: "USD",
        description: "The film, plus extra hooks for paid tests.",
        features: [
          "1 edited base video",
          "2 alternative hooks",
          "Clean version with no on-screen text",
          "3 months paid usage",
        ],
        ctaLabel: "Book Growth",
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
        description: "Four films a month, without re-briefing from zero.",
        features: ["4 videos per month", "8 hook variations", "Priority replies"],
        ctaLabel: "Ask about a retainer",
        mailtoSubject: "Monthly Retainer",
      },
    ] satisfies ServicePackage[],
  },
  faq: {
    id: "faq",
    titleId: "faq-heading",
    title: "Questions brands usually ask.",
    description: "Usage, access, turnaround, and what you actually get.",
    items: [
      {
        question: "What is UGC for B2B SaaS?",
        answer:
          "Short videos that look native on TikTok, Reels, LinkedIn, and paid social—not a brand film. For software, that is usually a person on camera plus a real product demo: a hook in three seconds, a workflow, and one clear next step. Hardware can be a desk film or a short brand loop, like the Logitech and Key Waves pieces above.",
      },
      {
        question: "Why hire a software engineer to make the ads?",
        answer:
          "I can set up the product, read the docs, and say the feature names correctly. Technical buyers notice when a creator is guessing. That is the difference between a pretty clip and an ad that converts a CTO.",
      },
      {
        question: "What kinds of videos do you make?",
        answer:
          "Walkthroughs (Cursor), workflow transformations (Notion AI), trust spots (Wise), comparisons (Claude), desk films (Logitech), and short brand loops (Key Waves). Most paid ads use the same shape: hook, problem, proof, ask.",
      },
      {
        question: "How do you handle sensitive data and API keys?",
        answer:
          "Dedicated browser profiles, no real .env files, no private repos, no customer data. The product looks live because the dummy data is realistic—not because I am in production.",
      },
      {
        question: "Can you turn something around for a Product Hunt launch?",
        answer:
          "Yes. 48-hour rush is an add-on. A docs link is often enough; I do not need a week of onboarding to understand a developer tool.",
      },
      {
        question: "Do packages include paid usage and Spark Ads / whitelisting?",
        answer:
          "Organic use is included. Paid usage, buyouts, and running ads from my creator handle on Meta or TikTok are add-ons.",
      },
      {
        question: "Do you film in English?",
        answer:
          "Yes—fluent English for international teams. I am based in Brazil and can work in Portuguese when the campaign needs it.",
      },
      {
        question: "How fast is delivery?",
        answer:
          "A few business days after you approve the script. 48-hour rush is +25–50% when a launch or a test window cannot wait.",
      },
      {
        question: "Do I need to give you production access?",
        answer:
          "No. A staging URL, docs, or a short Loom is enough. I never need production credentials.",
      },
      {
        question: "What do you deliver? Can we test different hooks?",
        answer:
          "A vertical video (usually 30–60 seconds), captions, and screen capture when the product needs it. Growth and Retainer include extra hooks and a clean version with no on-screen text. Extra hooks can be added to any package.",
      },
      {
        question: "Who is this for?",
        answer:
          "B2B SaaS, DevTools, AI, FinTech, and technical products sold to developers, PMs, CTOs, or operators. If a generic creator would mispronounce your features, this is the fit.",
      },
      {
        question: "Are these client case studies?",
        answer:
          "No. They are examples I wrote, shot, and edited so you can judge the work before a brief. They are not claimed results from a paid campaign.",
      },
      {
        question: "Where are you based? Can you work with US hours?",
        answer:
          "Brazil, recording in 4K. Async briefs work well with US and EU teams; calls can overlap. Invoices are in USD.",
      },
    ] satisfies FaqItem[],
  },
  footer: {
    quote: "“Vissi d'arte, vissi d'amore.”",
    description:
      "Tech UGC by a software engineer. English-language ads for SaaS, DevTools, AI, and hardware.",
    copyright: "© 2026 Clara Sousa. All rights reserved.",
  },
  contact: {
    primaryCta: "Get in touch",
    emailCta: "Or send an email",
    copyAria: "Copy email address",
    copied: "Email copied",
    modalTitle: "Start a brief",
    modalDescription: "Tell me the product and the goal. I reply by email.",
    close: "Close",
    closeAria: "Close contact form",
    nameLabel: "Name",
    emailLabel: "Work email",
    companyLabel: "Company",
    productLabel: "Product or site",
    packageLabel: "Package",
    packagePlaceholder: "Not sure yet",
    messageLabel: "Brief",
    messagePlaceholder: "Audience, offer, deadline, and a docs or Loom link if you have one.",
    submit: "Send brief",
    sending: "Sending your brief…",
    sendingHint: "This can take a few seconds. Don’t close this window.",
    successTitle: "Brief received",
    success:
      "I’ll reply to the work email you entered, usually within one business day.",
    successClose: "Done",
    errorTitle: "Couldn’t send the brief",
    error: "Try again, or send the same details from your email app so nothing is lost.",
    errorRetry: "Try again",
    errorMailto: "Send by email",
  },
} as const;

export function mailtoHref(subject?: string, body?: string) {
  const parts = [
    subject ? `subject=${encodeURIComponent(subject)}` : "",
    body ? `body=${encodeURIComponent(body)}` : "",
  ].filter(Boolean);
  return `mailto:${CONTACT_EMAIL}${parts.length ? `?${parts.join("&")}` : ""}`;
}
