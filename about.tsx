import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteLayout } from "@/components/SiteLayout";
import headshotAsset from "@/assets/deeksha-headshot-v3.png.asset.json";
import { Layers, Cpu, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Deeksha Sharma" },
      {
        name: "description",
        content:
          "From Amazon operations to founding PM roles to shipping AI in mortgage operations. The arc, the through-line, and the credentials.",
      },
      { property: "og:title", content: "About - Deeksha Sharma" },
      {
        property: "og:description",
        content:
          "An engineer who became a PM. Two founding roles. Four zero-to-one launches. Now shipping AI where every output meets compliance.",
      },
      { property: "og:url", content: "https://thinkwithdeeksha.com/about" },
      { property: "og:image", content: `https://thinkwithdeeksha.com${headshotAsset.url}` },
      { property: "og:image:alt", content: "Deeksha Sharma" },
      { name: "twitter:title", content: "About - Deeksha Sharma" },
      {
        name: "twitter:description",
        content:
          "An engineer who became a PM. Two founding roles. Four zero-to-one launches. Now shipping AI where every output meets compliance.",
      },
      { name: "twitter:image", content: `https://thinkwithdeeksha.com${headshotAsset.url}` },
    ],
    links: [{ rel: "canonical", href: "https://thinkwithdeeksha.com/about" }],
  }),
  component: AboutPage,
});

// [confirm] Edit company names, roles, and outcomes here.
const TIMELINE = [
  {
    years: "2024 - Present",
    startYear: 2024,
    endYear: 2026,
    company: "Flyhomes",
    role: "Product Manager, AI",
    domain: "Real estate fintech, Series D",
    tags: ["AI", "Fintech"],
    summary:
      "Shipping AI into mortgage operations where every output has to clear compliance.",
    outcomes: [
      "Built eval harnesses before model rollout; reduced reviewer rework on AI-drafted outputs.",
      "Designed agentic workflows for loan ops that route edge cases to humans by confidence, not by rule.",
      "Owned the trust surface: explainability, audit trail, and reviewer UX as one product.",
    ],
  },
  {
    years: "2024",
    startYear: 2024,
    endYear: 2024,
    company: "Independent",
    role: "Technical Product Manager / Consultant",
    domain: "Climate and SaaS",
    tags: ["AI", "Climate"],
    summary:
      "Short engagements on AI feature design, evals, and zero-to-one product scoping.",
    outcomes: [
      "Stood up evaluation pipelines for two LLM features before launch.",
      "Translated regulation-heavy workflows into PRDs engineers could ship from.",
    ],
  },
  {
    years: "2023 - 2024",
    startYear: 2023,
    endYear: 2024,
    company: "Calculus Carbon",
    role: "Founding Product Manager",
    domain: "Climate SaaS, Series A",
    tags: ["Climate", "Founding"],
    summary:
      "Led product and engineering from zero. Hired the team. Turned dense regulation into a tool a non-technical team would actually open on a Monday.",
    outcomes: [
      "0 → 1 carbon credit issuance platform; first paying customers within two quarters.",
      "Built the methodology engine that mapped IPCC and Verra protocols into a guided workflow.",
      "Hired and ran a cross-functional team of engineers, scientists, and designers.",
    ],
  },
  {
    years: "2022 - 2023",
    startYear: 2022,
    endYear: 2023,
    company: "Accacia.ai",
    role: "Founding Product Manager",
    domain: "Climate tech, LLM-powered ESG",
    tags: ["AI", "Climate", "Founding"],
    summary:
      "Built LLM-powered ESG intelligence into a regulated domain where wrong answers cost the customer their disclosure.",
    outcomes: [
      "Shipped the first product surface: real-estate emissions intelligence for asset managers.",
      "Designed retrieval and eval pipelines so every number was traceable to a source document.",
      "Closed design partners across APAC and EU pre-Series A.",
    ],
  },
  {
    years: "2019 - 2022",
    startYear: 2019,
    endYear: 2022,
    company: "Better.com",
    role: "Team Lead → Product Analytics Lead",
    domain: "Mortgage fintech, public",
    tags: ["Fintech"],
    summary:
      "Grew from analytics into product leadership. Learned to own the numbers instead of running reports about them.",
    outcomes: [
      "Owned funnel and pricing analytics through hyper-growth and IPO prep.",
      "Led product analytics: instrumentation standards, experimentation, weekly business reviews.",
      "Shipped pricing and underwriting experiments that moved conversion at scale.",
    ],
  },
  {
    years: "2017 - 2019",
    startYear: 2017,
    endYear: 2019,
    company: "Amazon",
    role: "CS Operations Associate",
    domain: "Global e-commerce",
    tags: ["Operations"],
    summary:
      "Operations at volume. Customer pain at scale is its own dataset, and it teaches you what dashboards cannot.",
    outcomes: [
      "Ran root-cause analysis on escalations across multiple marketplaces.",
      "Built reporting that surfaced systemic defects rather than one-off tickets.",
    ],
  },
] as const;

const ALL_TAGS = ["AI", "Climate", "Fintech", "Founding", "Operations"] as const;
type Tag = (typeof ALL_TAGS)[number];
type ViewMode = "arc" | "timeline";

const CAPABILITIES = [
  {
    icon: Layers,
    label: "Product & Leadership",
    tags: [
      "0 to 1",
      "Product Strategy",
      "Roadmap Ownership",
      "OKRs",
      "Cross-functional Leadership",
      "Stakeholder Management",
      "A/B Experimentation",
      "AI Governance",
    ],
  },
  {
    icon: Cpu,
    label: "AI & Technical",
    tags: [
      "LLM Orchestration",
      "LangChain",
      "Claude / OpenAI",
      "Prompt Engineering",
      "Evals & Observability",
      "SQL",
      "Python",
      "n8n",
    ],
  },
  {
    icon: Globe,
    label: "Domain Expertise",
    tags: [
      "EU AI Act",
      "GDPR",
      "CBAM",
      "GHG Protocol",
      "US Mortgage Compliance",
      "ESG Reporting",
      "Fintech",
      "Climate SaaS",
    ],
  },
];

function AboutPage() {
  const [view, setView] = useState<ViewMode>("arc");
  const [activeTags, setActiveTags] = useState<Tag[]>([]);

  const filtered = useMemo(() => {
    if (activeTags.length === 0) return TIMELINE;
    return TIMELINE.filter((t) =>
      activeTags.every((tag) => (t.tags as readonly string[]).includes(tag))
    );
  }, [activeTags]);

  const toggleTag = (tag: Tag) =>
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const minYear = Math.min(...TIMELINE.map((t) => t.startYear));
  const maxYear = Math.max(...TIMELINE.map((t) => t.endYear));
  const yearSpan = maxYear - minYear;

  return (
    <SiteLayout>
      <section className="pt-10 md:pt-14 pb-6">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8">
              <div className="eyebrow">Deeksha's story</div>
              <h1 className="font-display mt-6 text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
                Nine years of building{" "}
                <span className="italic text-petrol font-light">
                  where the math actually matters.
                </span>
              </h1>
            </div>
            <div className="md:col-span-4 order-first md:order-last flex md:justify-end">
              <img
                src={headshotAsset.url}
                alt="Portrait of Deeksha Sharma"
                loading="eager"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-[center_30%] hairline shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-7 text-[1.05rem] leading-[1.8] text-foreground/85">
          <p>
            My story starts with an engineering degree. I studied Information
            Technology at Pune University and finished with distinction. My
            bachelor's thesis was on cloud log monitoring and digital
            forensics: tracing what a system actually did, and proving it. It
            turns out I have been doing versions of that ever since, trusting
            a system only as far as I can show its work.
          </p>
          <p>
            I started in operations at Amazon, where customer pain at volume
            is its own dataset. Then three and a half years at Better.com, a
            mortgage fintech, where I grew from analytics into product
            leadership and learned to own the numbers instead of running
            reports about them.
          </p>
          <p>
            Two founding PM roles in climate tech taught me the harder half
            of the job. At Accacia.ai I built LLM-powered ESG intelligence
            into a regulated domain. At Calculus
            Carbon I led product and engineering from zero, hired the team,
            and turned dense regulation into something a non-technical team
            would actually open on a Monday.
          </p>
          <p>
            Now, at Flyhomes, I build AI into mortgage operations, where
            every output has to hold up to compliance. The way I work has
            stayed the same throughout. I prototype with agents, not slides.
            I build evals so teams can trust what ships. I read the code so
            the roadmap holds up. And I assume the workflow is broken, not
            the user.
          </p>
        </div>
      </section>

      {/* WHAT I BRING TO THE TABLE */}
      <section className="py-10 md:py-14 bg-[color:var(--color-surface)] hairline-t">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-6 md:mb-10">
            <div className="eyebrow">Capabilities</div>
            <h2 className="font-display mt-4 md:mt-5 text-2xl md:text-5xl tracking-tight">
              What I bring{" "}
              <span className="italic text-petrol font-light">to the table.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="bg-background p-5 md:p-6 hairline rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[color:var(--color-surface)] hairline flex items-center justify-center text-petrol">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl tracking-tight">
                      {c.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm hairline bg-[color:var(--color-surface)] text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 hairline-t">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-petrol/60 whitespace-nowrap">
              Chronicle
            </span>
            <div className="h-px flex-1 bg-petrol/15" />
          </div>

          <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">
              {view === "arc" ? "The arc." : "The timeline."}
            </h2>

            <div
              role="tablist"
              aria-label="View mode"
              className="inline-flex hairline rounded-full p-1 bg-background self-start md:self-end"
            >
              {(["arc", "timeline"] as const).map((mode) => {
                const active = view === mode;
                return (
                  <button
                    key={mode}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setView(mode)}
                    className={`px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] rounded-full transition-colors ${
                      active
                        ? "bg-petrol text-primary-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/50 mr-2">
              Filter
            </span>
            <button
              onClick={() => setActiveTags([])}
              className={`px-3 py-1.5 text-xs hairline transition-colors ${
                activeTags.length === 0
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground/70 hover:text-foreground"
              }`}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 text-xs hairline transition-colors ${
                    active
                      ? "bg-petrol text-primary-foreground border-petrol"
                      : "bg-background text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            <span className="ml-auto font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/50">
              {filtered.length} of {TIMELINE.length}
            </span>
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-foreground/60 text-sm">
              No roles match the current filters.{" "}
              <button
                onClick={() => setActiveTags([])}
                className="underline underline-offset-4 text-petrol"
              >
                Clear filters
              </button>
              .
            </p>
          )}

          {/* ARC VIEW */}
          {view === "arc" && filtered.length > 0 && (
            <ol
              className="mt-10 md:mt-14 space-y-14 md:space-y-16"
              aria-label="Career arc"
            >
              {filtered.map((t, i) => (
                <li
                  key={t.years}
                  className="grid grid-cols-1 md:grid-cols-[150px_1px_1fr] gap-x-10 md:gap-x-12 gap-y-4"
                >
                  <div className="md:pt-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-petrol">
                      {t.years}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-petrol/55 mt-1.5">
                      {t.domain}
                    </div>
                  </div>
                  <div aria-hidden className="hidden md:block relative">
                    <span
                      className={`absolute top-3 -left-[3px] w-[7px] h-[7px] rounded-full ${
                        i % 2 === 0
                          ? "bg-petrol"
                          : "border border-petrol bg-background"
                      }`}
                    />
                    {i !== filtered.length - 1 && (
                      <span className="absolute top-5 bottom-[-4rem] left-0 w-px bg-gradient-to-b from-petrol/30 via-petrol/10 to-transparent" />
                    )}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight">
                        {t.company}
                      </h3>
                      <p className="font-display italic text-foreground/70 text-base md:text-lg mt-1">
                        {t.role}
                      </p>
                    </div>
                    <p className="text-[0.95rem] md:text-base text-foreground/80 leading-[1.7] max-w-xl">
                      {t.summary}
                    </p>
                    {t.outcomes.length > 0 && (
                      <ul className="space-y-2 max-w-xl">
                        {t.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-start gap-3 text-[0.9rem] text-foreground/70 leading-[1.65]"
                          >
                            <span aria-hidden className="text-amber-warm mt-1 leading-none">
                              -
                            </span>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}

          {/* TIMELINE VIEW */}
          {view === "timeline" && filtered.length > 0 && (
            <div className="mt-10 md:mt-14">
              {/* Year axis */}
              <div
                className="relative ml-0 md:ml-[180px] mb-4 h-6"
                aria-hidden
              >
                <div className="absolute inset-x-0 top-1/2 h-px bg-petrol/20" />
                {Array.from({ length: yearSpan + 1 }).map((_, idx) => {
                  const year = minYear + idx;
                  const left = (idx / yearSpan) * 100;
                  return (
                    <div
                      key={year}
                      className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                      style={{ left: `${left}%` }}
                    >
                      <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-foreground/50">
                        {`'${String(year).slice(2)}`}
                      </span>
                      <span className="w-px h-1.5 bg-petrol/30 mt-1" />
                    </div>
                  );
                })}
              </div>

              <ol className="space-y-2.5" aria-label="Career timeline bars">
                {filtered.map((t) => {
                  const startPct =
                    ((t.startYear - minYear) / yearSpan) * 100;
                  const widthPct = Math.max(
                    ((t.endYear - t.startYear) / yearSpan) * 100,
                    2.5
                  );
                  return (
                    <li
                      key={t.years}
                      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-4 items-center group"
                    >
                      <div className="min-w-0">
                        <div className="font-display text-base md:text-lg tracking-tight truncate">
                          {t.company}
                        </div>
                        <div className="font-display italic text-foreground/60 text-xs md:text-sm truncate">
                          {t.role}
                        </div>
                      </div>
                      <div className="relative h-10 hairline bg-[color:var(--color-surface)]">
                        <div
                          className="absolute top-1.5 bottom-1.5 bg-petrol/85 group-hover:bg-petrol transition-colors flex items-center px-2"
                          style={{
                            left: `${startPct}%`,
                            width: `${widthPct}%`,
                          }}
                        >
                          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-primary-foreground whitespace-nowrap overflow-hidden">
                            {t.years}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </section>


      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-5xl px-6 md:px-10 grid md:grid-cols-2 gap-px bg-[color:var(--color-hairline)] hairline">
          <div className="bg-background p-6 md:p-8">
            <div className="eyebrow">Education</div>
            <div className="mt-5 font-display text-xl tracking-tight">
              ISB Executive Program in Product Management
            </div>
            <div className="text-sm text-foreground/65 mt-1">
              Generative AI, 2025
            </div>
            <div className="mt-6 font-display text-xl tracking-tight">
              B.E. Information Technology
            </div>
            <div className="text-sm text-foreground/65 mt-1">
              Pune University, Distinction
            </div>
          </div>
          <div className="bg-background p-6 md:p-8">
            <div className="eyebrow">Languages</div>
            <div className="mt-5 text-foreground/85">English (Native)</div>
            <div className="text-foreground/85 mt-2">Hindi (Native)</div>
            <div className="text-foreground/85 mt-2">German (A1, learning)</div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

