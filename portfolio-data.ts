// Static data that remains code-managed (skills, timeline, marketing copy).
// Case studies live in the database, see src/lib/cms.ts.

export const COMPANIES = [
  "Amazon",
  "Better.com",
  "Flyhomes",
  "Climate-tech",
  "Prop-tech",
  "Enterprise SaaS",
];

export const SKILL_GROUPS = [
  {
    title: "MACHINE LEARNING Systems",
    items: [
      "OpenAI",
      "Claude",
      "LangChain",
      "Prompt Engineering",
      "AI Evaluation",
      "AI Governance",
      "Agent Design",
    ],
  },
  {
    title: "Analytics & Data",
    items: ["SQL", "Python", "BigQuery", "Snowflake", "Databricks", "Looker", "dbt"],
  },
  {
    title: "Product Management",
    items: [
      "Discovery",
      "Product Strategy",
      "Experimentation",
      "Roadmapping",
      "Metrics Design",
      "Stakeholder Management",
    ],
  },
  {
    title: "Builder Stack",
    items: ["n8n", "Make", "Zapier", "REST APIs", "React", "Node.js", "PostgreSQL"],
  },
];

export const TIMELINE = [
  {
    year: "2025",
    title: "AI Product Lead, building agentic decision systems",
    detail:
      "Designing AI agents, evaluation frameworks and governance for production LLM workflows.",
  },
  {
    year: "2023 – 2024",
    title: "Founding PM at Flyhomes",
    detail:
      "Took a 0→1 wholesale platform from idea to 45% adoption with measurable cycle-time wins.",
  },
  {
    year: "2022 – 2023",
    title: "Senior PM in climate-tech & prop-tech",
    detail:
      "Shipped LLM-powered enterprise analytics with auditable, governed outputs.",
  },
  {
    year: "2020 – 2022",
    title: "PM, Analytics, Better.com",
    detail:
      "Built an internal analytics platform used by 700 DAUs across ops, sales and finance.",
  },
  {
    year: "2016 – 2020",
    title: "From operations at Amazon to data-driven product thinking",
    detail:
      "Learned how systems, metrics and incentives shape decisions at scale.",
  },
];
