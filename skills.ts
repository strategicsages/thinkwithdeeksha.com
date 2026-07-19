// Shared skill taxonomy used by the homepage, the Projects page filter,
// and the per-case-study Skills section.

export type SkillGroup = {
  label: string;
  items: { name: string; strong?: boolean; tooltip?: string }[];
};


export const SKILL_FILTERS = [
  "All",
  "MACHINE LEARNING",
  "Analytics & Data",
  "0→1 Product",
  "Enterprise / Compliance",
] as const;

export type Skill = (typeof SKILL_FILTERS)[number];

// Skill groups shown in the homepage "Why me" section.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "MACHINE LEARNING",
    items: [
      { name: "LangChain", strong: true, tooltip: "Built production RAG and agent orchestration with evals." },
      { name: "OpenAI" },
      { name: "Claude", strong: true, tooltip: "Shipped compliance and research features on Claude." },
      { name: "Vertex AI" },
      { name: "LLM Orchestration", strong: true, tooltip: "Designed multi-agent routing, retries, and observability." },
      { name: "Prompt Engineering" },
      { name: "Evals & Observability", strong: true, tooltip: "Wrote evals and monitoring before releasing LLM features." },
    ],
  },
  {
    label: "Data & Analytics",
    items: [
      { name: "SQL", strong: true, tooltip: "Production SQL for analytics, funnel, and compliance reporting." },
      { name: "Python", strong: true, tooltip: "Prototypes and pipelines for data and model evaluation." },
      { name: "BigQuery" },
      { name: "Looker" },
      { name: "Snowflake" },
      { name: "dbt" },
      { name: "Metabase" },
      { name: "Databricks" },
    ],
  },
  {
    label: "Integrations & APIs",
    items: [
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "React.js" },
      { name: "n8n", strong: true, tooltip: "Automated CRM, docs, and notification workflows end to end." },
      { name: "Make" },
      { name: "Zapier" },
      { name: "PostgreSQL" },
    ],
  },
  {
    label: "Infrastructure",
    items: [{ name: "AWS" }, { name: "GCP" }, { name: "Azure" }],
  },
  {
    label: "Regulatory fluency",
    items: [
      { name: "EU AI Act", strong: true, tooltip: "Mapped AI Act requirements to product controls and governance." },
      { name: "GDPR" },
      { name: "CBAM", strong: true, tooltip: "Shipped carbon-border compliance workflows for EU importers." },
      { name: "GHG Protocol", strong: true, tooltip: "Built emissions calculations aligned with GHG Protocol." },
      { name: "EU ETS" },
      { name: "GRESB" },
      { name: "BRSR" },
      { name: "US Mortgage Compliance (KYC/AML)" },
    ],
  },
  {
    label: "PM craft",
    items: [
      { name: "0 to 1", strong: true, tooltip: "Four founding/early-PM roles from zero to revenue and PMF." },
      { name: "PRDs & specs" },
      { name: "OKRs" },
      { name: "A/B experimentation" },
      { name: "Roadmap ownership" },
      { name: "AI governance", strong: true, tooltip: "Implemented risk tiers, reviews, and documentation workflows." },
      { name: "Developer workflows" },
    ],
  },
  {
    label: "Certifications",
    items: [
      { name: "Generative AI with LLMs (DeepLearning.AI)" },
      { name: "Advanced-CSPO" },
      { name: "AI Product Management" },
      { name: "Design Thinking" },
    ],
  },
];


// Skills per slug. Covers both the hardcoded WORK list on the Projects page
// and the CMS-backed case studies served by /case-studies/$slug.
export const SKILLS_BY_SLUG: Record<string, string[]> = {
  // Hardcoded WORK ids on the Projects page
  "real-estate-fintech": ["MACHINE LEARNING", "Analytics & Data", "Enterprise / Compliance"],
  "climate-saas-series-a": ["0→1 Product", "Enterprise / Compliance"],
  "climate-founding-first-employee": ["MACHINE LEARNING", "0→1 Product", "Enterprise / Compliance"],
  "mortgage-fintech-public": ["Analytics & Data", "MACHINE LEARNING"],

  // CMS-backed case studies
  "flyhomes-wholesale": ["0→1 Product", "Analytics & Data"],
  "ai-research-agent": ["MACHINE LEARNING"],
  "esg-intelligence": ["MACHINE LEARNING", "0→1 Product", "Enterprise / Compliance"],
  "better-analytics": ["Analytics & Data"],
  "upstream-ai": ["MACHINE LEARNING", "Enterprise / Compliance"],
  "quoteiq": ["MACHINE LEARNING", "Analytics & Data"],
  "actionpilot": ["MACHINE LEARNING"],
};

export function getSkillsForSlug(slug: string): string[] {
  return SKILLS_BY_SLUG[slug] ?? [];
}

