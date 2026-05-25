export interface WorkItem {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  videoSrc?: string;
  /** "mobile" => portrait phone assets (shown contained, not cropped). Defaults to desktop. */
  media?: "desktop" | "mobile";
  imagePlaceholder: string;
  awards: string[];
  carouselLinks: Array<{ label: string; href: string }>;
  // Detail page
  overview: string;
  highlights: string[];
  stack: Record<string, string[]>;
  screenshots?: string[];
  externalLinks: Array<{ label: string; href: string }>;
}

export const workItems: WorkItem[] = [
  {
    slug: "agent-integrator",
    category: "FOUNDING ENGINEER / 2025–2026",
    name: "AGENT INTEGRATOR",
    tagline: "AI-Native Venture Studio",
    description:
      "Architected and shipped client-facing products including a full-stack finance portal, a public illness database backed by a proprietary agentic content pipeline, and a community health platform with embedded AI tooling.",
    tech: ["Agentic Systems", "Full-Stack", "Finance", "Healthtech"],
    imageSrc: "/agent-integrator.png",
    imagePlaceholder: "AGENT INTEGRATOR SCREENSHOT",
    awards: [],
    carouselLinks: [{ label: "EXPLORE", href: "/work/agent-integrator" }],
    overview:
      "Agent Integrator is an AI-native venture studio that embeds inside businesses to design and ship agentic systems and orchestration layers. As Founding Engineer, I was responsible for the architecture and delivery of client-facing products across finance, healthtech, and operations.",
    highlights: [
      "Architected and shipped a full-stack finance client portal from scratch",
      "Built a public illness database powered by a proprietary agentic content pipeline",
      "Designed and delivered a community health platform with embedded AI tooling",
      "Operated across multiple client engagements simultaneously a founding engineer ",
    ],
    stack: {
      Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      AI: ["OpenAI API", "Claude API", "Agentic Pipelines", "LangChain"],
      Infra: ["GCP", "Docker", "CI/CD", "Prisma"],
    },
    screenshots: ["/medizin-studio.png", "/disease-directory.png"],
    externalLinks: [
      { label: "WEBSITE", href: "https://agentintegrator.io" },
    ],
  },
  {
    slug: "taskmind",
    category: "TECHNICAL CO-FOUNDER / 2025",
    name: "TASKMIND",
    tagline: "AI-Powered Market Intelligence Platform",
    description:
      "Led full-stack architecture, built a multi-model AI orchestration layer across Perplexity, Grok, and third-party APIs, and shipped a RAG pipeline producing citation-backed research reports across 15+ categories.",
    tech: ["Next.js", "TypeScript", "RAG", "Multi-Model AI"],
    imageSrc: "/taskmind.png",
    videoSrc: "/taskmind-demo.mp4",
    imagePlaceholder: "TASKMIND SCREENSHOT",
    awards: ["Berkshire Innovation Center Stage 2 Accelerator — Cohort 2"],
    carouselLinks: [
      { label: "EXPLORE", href: "/work/taskmind" },
      { label: "LIVE", href: "https://www.taskmind.pro/" },
    ],
    overview:
      "TaskMind is an AI-powered market intelligence SaaS platform that delivers citation-backed research reports on demand. I co-founded the company and led all technical development — from architecture to production deployment.",
    highlights: [
      "Built a multi-model AI orchestration layer across Perplexity, Grok, and third-party APIs",
      "Shipped a RAG pipeline producing citation-backed research reports across 15+ industry categories",
      "Designed and implemented the full-stack architecture end-to-end",
      "Selected for the Berkshire Innovation Center Stage 2 Accelerator — a competitive 35-week equity-free program",
    ],
    stack: {
      Frontend: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      Backend: ["Node.js", "PostgreSQL", "Prisma", "Redis"],
      AI: ["Perplexity API", "Grok API", "RAG Pipeline", "Prompt Engineering"],
      Infra: ["GCP", "Docker", "Stripe", "CI/CD"],
    },
    screenshots: ["/taskmind-feature-1.png", "/taskmind-feature-2.png"],
    externalLinks: [
      { label: "LIVE", href: "https://www.taskmind.pro/" },
    ],
  },
  {
    slug: "dialogix",
    category: "PROJECT",
    name: "DIALOGIX",
    tagline: "AI Conversation Coaching Platform",
    description:
      "RAG pipeline fusing Pinecone vector search with LMS data, with a psychometric personality profiling engine that infers competencies and scores improvement across four framework dimensions.",
    tech: ["RAG", "Pinecone", "Psychometrics", "LMS"],
    imageSrc: "/dialogix-hero.png",
    media: "mobile",
    imagePlaceholder: "DIALOGIX SCREENSHOT",
    awards: ["1st Place — UNH Undergraduate Research Conference"],
    carouselLinks: [{ label: "EXPLORE", href: "/work/dialogix" }],
    overview:
      "Dialogix is an AI conversation coaching platform built on a RAG pipeline fusing Pinecone vector search with LMS data. It features a psychometric personality profiling engine that infers communication competencies from conversation history and scores user improvement across four framework dimensions over time.",
    highlights: [
      "Built a RAG pipeline fusing Pinecone vector search with LMS dataset",
      "Designed a psychometric personality profiling engine that infers competencies from conversation history",
      "Scores user improvement across four communication framework dimensions",
      "Won 1st Place at the UNH Undergraduate Research Conference",
    ],
    stack: {
      AI: ["RAG Pipeline", "Pinecone", "OpenAI API", "Prompt Engineering"],
      Backend: ["Node.js", "PostgreSQL", "Prisma"],
      Frontend: ["React", "TypeScript"],
    },
    screenshots: ["/dialogix-feature-1.png", "/dialogix-feature-2.png"],
    externalLinks: [],
  },
  {
    slug: "roomnet",
    category: "PROJECT",
    name: "ROOMNET",
    tagline: "Vector-Based Roommate Matching Platform",
    description:
      "Student preferences embedded via OpenAI and matched via cosine similarity in Pinecone, returning ranked candidates at sub-second latency. Designed to embed inside university housing systems.",
    tech: ["LangChain", "Pinecone", "OpenAI", "Cosine Similarity"],
    videoSrc: "/roomnet-demo.mp4",
    imagePlaceholder: "ROOMNET SCREENSHOT",
    awards: ["Semifinalist — UNH Holloway Prize Competition"],
    carouselLinks: [{ label: "EXPLORE", href: "/work/roomnet" }],
    overview:
      "RoomNet is a roommate matching platform designed to embed inside university housing applications. Student preference responses are embedded via OpenAI and matched via cosine similarity queries in Pinecone, returning ranked candidates at sub-second latency.",
    highlights: [
      "Built a vector-based matching pipeline using LangChain and Pinecone",
      "Student preference responses embedded via OpenAI and matched via cosine similarity",
      "Returns ranked roommate candidates at sub-second query latency",
      "Designed as a drop-in module for existing university housing portals",
      "Semifinalist in the UNH Paul J. Holloway Prize Competition",
    ],
    stack: {
      AI: ["LangChain", "Pinecone", "OpenAI Embeddings", "Cosine Similarity"],
      Backend: ["Python", "FastAPI", "PostgreSQL"],
      Frontend: ["React", "TypeScript"],
    },
    screenshots: ["/roomnet-feature-1.png", "/roomnet-feature-2.png"],
    externalLinks: [
      { label: "GITHUB", href: "https://github.com/NightGhost4/roomnet-2024-2025" },
    ],
  },
  {
    slug: "visual-design-agent",
    category: "PROJECT",
    name: "VISUAL DESIGN AGENT",
    tagline: "Multimodal AI Feedback Loop for UI Generation",
    description:
      "Generates React/Tailwind components via Claude, renders via headless Chromium, and pipes screenshots back for structured visual critique. Scores across five axes and iterates to a quality threshold. ~$0.45/component.",
    tech: ["Claude API", "Headless Chromium", "React", "Tailwind"],
    imageSrc: "/design-agent.png",
    imagePlaceholder: "VISUAL DESIGN AGENT SCREENSHOT",
    awards: [],
    carouselLinks: [{ label: "EXPLORE", href: "/work/visual-design-agent" }],
    overview:
      "A multimodal AI feedback loop that autonomously generates, renders, evaluates, and iterates on React/Tailwind UI components. The system generates components via Claude, renders them via headless Chromium, and pipes the screenshots back to Claude for structured visual critique — repeating until hitting a quality threshold.",
    highlights: [
      "Generates React/Tailwind components via Claude API with structured prompting",
      "Renders components in headless Chromium and captures pixel-accurate screenshots",
      "Pipes screenshots back to Claude for visual critique scored across five quality axes",
      "Iterates autonomously until the component meets the quality threshold",
      "Averages approximately $0.45 per production-quality component",
    ],
    stack: {
      AI: ["Claude API", "Multimodal Vision", "Structured Output", "Prompt Engineering"],
      Runtime: ["Node.js", "TypeScript", "Playwright / Chromium"],
      Output: ["React", "Tailwind CSS"],
    },
    screenshots: ["/design-agent-feature-1.png", "/design-agent-feature-2.png"],
    externalLinks: [
      { label: "GITHUB", href: "https://github.com/NightGhost4/design-agent" },
    ],
  },
];

export function getWorkItem(slug: string): WorkItem | undefined {
  return workItems.find((w) => w.slug === slug);
}
