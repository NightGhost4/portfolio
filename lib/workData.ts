export interface WorkItem {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  /** Optional mobile-specific hero image (shown below the md breakpoint). */
  imageSrcMobile?: string;
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
    slug: "sideshift",
    category: "SOFTWARE ENGINEER / 2026–PRESENT",
    name: "SIDESHIFT",
    tagline: "Creator Marketing Platform",
    description:
      "Full-stack product work on the brand dashboard — campaign briefs, applicant review, and creator marketplace — alongside the payout and real-time reporting surfaces, plus AI-backed features across the applicant pipeline.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "GCP"],
    imageSrc: "/sideshift.png",
    imagePlaceholder: "SIDESHIFT SCREENSHOT",
    awards: [],
    carouselLinks: [
      { label: "EXPLORE", href: "/work/sideshift" },
      { label: "LIVE", href: "https://sideshift.app" },
    ],
    overview:
      "SideShift is a creator marketing platform that replaces the email, Slack, and spreadsheet sprawl behind user-generated content campaigns. Brands post a campaign brief, vetted creators apply, and the platform handles centralized communication, real-time performance tracking, and automated payouts — serving 3,000+ brands across tech, finance, CPG, health and wellness, and entertainment against a pool of over a million creators. I work full-stack across the product.",
    highlights: [
      "Full-stack product engineering across the brand dashboard — campaign briefs, applicant review, and creator marketplace browsing",
      "Build and maintain the payout surfaces that move money to creators once their content is approved",
      "Ship the real-time campaign performance and reporting views brands use to judge what's working",
      "Work on AI-backed features across the applicant and content pipeline",
    ],
    stack: {
      Frontend: ["React", "Next.js", "TypeScript"],
      Backend: ["Node.js", "PostgreSQL"],
      Infra: ["GCP"],
    },
    screenshots: ["/sideshift-feature-1.png", "/sideshift-feature-2.png"],
    externalLinks: [
      { label: "WEBSITE", href: "https://sideshift.app" },
    ],
  },
  {
    slug: "agent-integrator",
    category: "FOUNDING ENGINEER / 2025–2026",
    name: "AGENT INTEGRATOR",
    tagline: "AI-Native Venture Studio",
    description:
      "Architected and shipped client-facing products including a full-stack finance portal, a public illness database backed by a proprietary agentic content pipeline, and a community health platform with embedded AI tooling.",
    tech: ["Agentic Systems", "Full-Stack", "Finance", "Healthtech"],
    imageSrc: "/agent-integrator.png",
    imageSrcMobile: "/agent-integrator-hero-mobile.png",
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
    slug: "orstrum",
    category: "PRODUCT / 2026",
    name: "ORSTRUM",
    tagline: "Persistent Code Intelligence for AI Agents",
    description:
      "A published npm CLI that parses TypeScript, JavaScript, and Python into a queryable SQLite import graph, then serves it to coding agents over MCP — eight tools including multi-hop blast-radius analysis. Structure only; source never leaves the machine.",
    tech: ["MCP", "TypeScript", "SQLite", "AST Parsing"],
    imageSrc: "/orstrum.png",
    imagePlaceholder: "ORSTRUM SCREENSHOT",
    awards: [],
    carouselLinks: [
      { label: "EXPLORE", href: "/work/orstrum" },
      { label: "LIVE", href: "https://www.orstrum.com" },
    ],
    overview:
      "Orstrum is a code intelligence layer I designed, built, and shipped end to end — a published npm CLI, an MCP server, and a hosted cloud product. It walks TypeScript, JavaScript, and Python repositories with real AST parsers, resolves every import edge, and writes the result to a local SQLite graph. Coding agents then query that graph through MCP instead of burning tokens on recursive grep-and-read loops. Only structure and generated summaries are stored — raw source never leaves the machine.",
    highlights: [
      "Published to npm as a global CLI — one command scans a repo into a queryable graph of files, exports, and import edges",
      "Parses TypeScript and JavaScript with ts-morph and Python with tree-sitter, resolving path aliases and barrel re-exports through the AST rather than text search",
      "Exposes the graph to coding agents through eight MCP tools, including multi-hop blast-radius analysis over the caller graph",
      "Built Orstrum Cloud on Astro and Supabase — GitHub OAuth, team workspaces, Stripe billing, and a radial graph explorer",
      "Batch summarizer prices the job before it runs and generates per-file purpose summaries via the Anthropic API with prompt caching",
      "Incremental scans are content-hashed, so re-running only rewrites files that actually changed and never discards existing summaries",
    ],
    stack: {
      CLI: ["TypeScript", "Node.js", "ts-morph", "tree-sitter", "Ink"],
      Graph: ["SQLite", "MCP SDK", "AST Resolution"],
      AI: ["Anthropic API", "Claude Haiku 4.5", "Prompt Caching"],
      Cloud: ["Astro", "Supabase", "Stripe", "Vercel"],
    },
    screenshots: ["/orstrum-feature-1.png", "/orstrum-feature-2.png"],
    externalLinks: [
      { label: "LIVE", href: "https://www.orstrum.com" },
      { label: "NPM", href: "https://www.npmjs.com/package/orstrum" },
      { label: "DOCS", href: "https://www.orstrum.com/docs" },
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
