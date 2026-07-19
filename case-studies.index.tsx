import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, Lock, ArrowUpRight, X, Youtube, Download } from "lucide-react";
import { z } from "zod";
import { SKILL_FILTERS } from "@/lib/skills";


const searchSchema = z.object({
  skill: z.string().optional(),
});

export const Route = createFileRoute("/case-studies/")({
  validateSearch: searchSchema,

  head: () => ({
    meta: [
      { title: "Projects - Deeksha Sharma" },
      {
        name: "description",
        content:
          "Shipped, measured, and trusted. Work impact in production plus personal builds prototyping what production AI could look like next.",
      },
      { property: "og:title", content: "Projects - Deeksha Sharma" },
      {
        property: "og:description",
        content:
          "Four work case studies and three personal builds. Every claim has a number attached.",
      },
      { property: "og:url", content: "https://thinkwithdeeksha.com/case-studies" },
      { property: "og:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
      { property: "og:image:alt", content: "Deeksha Sharma case studies" },
      { name: "twitter:title", content: "Projects - Deeksha Sharma" },
      {
        name: "twitter:description",
        content:
          "Four work case studies and three personal builds. Every claim has a number attached.",
      },
      { name: "twitter:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
    ],
    links: [{ rel: "canonical", href: "https://thinkwithdeeksha.com/case-studies" }],
  }),
  component: ProjectsPage,
});

// ============================================================
// WORK IMPACT , each opens an in-page detailed case study.
// Toggle `showCompany: false` to hide the muted company label.
// Set `gate: "yourpasscode"` to require a passcode before the
// detailed view expands (default: undefined = open).
// ============================================================
type WorkCase = {
  id: string;
  domain: string;
  title: string;
  metric: string;
  teaser: string;
  company?: string;
  showCompany?: boolean;
  skills: string[];
  bullets: string[];
  context: string;
  problem: string;
  what: string;
  how: string; // [confirm]
  outcome: string;
  learned: string; // [confirm]
  gate?: string;
};





const WORK: WorkCase[] = [
  {
    id: "real-estate-fintech",
    domain: "Real Estate Fintech · Series D · Current",
    title: "Shipping AI into mortgage operations where every output meets compliance",
    metric: "10,737% traffic growth",
    teaser: "How a content bet became qualified mortgage pipeline.",
    company: "[confirm: company name optional]",
    showCompany: false,
    skills: ["MACHINE LEARNING", "Analytics & Data", "Enterprise / Compliance"],
    // gate: "set-a-passcode-here", // OPTIONAL: gate this study only
    bullets: [
      "Grew organic traffic 10,737% (18.7K to 2M monthly visits in 3 months) by owning analytics for a programmatic content expansion, then built the funnel instrumentation that turned it into qualified mortgage pipeline",
      "Took a B2B wholesale product 0 to 1: 45% adoption in 6 months, 80% of requests served in under 10 minutes",
      "Built AI research agents (Claude, n8n) that cut research cycle time 60% (20 hrs/week to 4), with evals designed and output monitored in production",
      "Designed an LLM-powered Smart Product Advisor across BBYS, Instant Equity, and FCO that replaced manual sales-to-product Q&A with instant self-serve answers",
      "Shipped an internal sales tool with full RBAC, removing 24 hours from top-of-funnel conversion",
    ],
    context:
      "I own product for AI tooling and B2B2C surfaces at a Series D real estate fintech that helps people through one of the most complex financial decisions they will ever make. The work spans the mortgage experience, a partner platform, and the internal tools sales and operations rely on daily. A wrong output here is a compliance question, not a cosmetic bug.",
    problem:
      "Growth was leaving qualified pipeline on the table because content traffic was not instrumented to convert. Sales and product lost hours to manual product Q&A. And research that should take an afternoon was taking most of a week.",
    what:
      "I treated each as a product. I owned analytics for a programmatic content expansion and built the funnel instrumentation that connected traffic to qualified pipeline. I designed an LLM-powered Smart Product Advisor across BBYS, Instant Equity, and FCO, scoped so answers hold up to compliance review. I built AI research agents on Claude and n8n, defining the evaluation criteria first. I took a B2B wholesale product from zero to one, and shipped an internal sales tool with full RBAC.",
    how:
      "[confirm and tighten] The research agents run on n8n calling Claude, with the eval set defined before launch and quality monitored in production. The Smart Product Advisor is a retrieval layer over approved product documentation, so it answers only from compliant source material. The sales tool uses full RBAC so access matches role and licensing.",
    outcome:
      "Traffic grew 10,737% (18.7K to 2M monthly in 3 months), now tied to qualified pipeline. The wholesale product reached 45% adoption in 6 months, 80% of requests under 10 minutes. Research cycle time fell 60% (20 to 4 hrs/week). The sales tool removed 24 hours from top-of-funnel conversion.",
    learned:
      "In a regulated domain, the eval is the product decision. The fastest way to lose trust is to ship an AI answer that is confident and wrong, so I build the evaluation before the feature. [confirm: a specific moment lands harder]",
  },
  {
    id: "climate-saas-series-a",
    domain: "Climate SaaS · Series A · Founding Product Manager",
    title: "Leading product and engineering from zero, and making compliance usable",
    metric: "30% enterprise adoption",
    teaser: "Turning a regulation into a product a non-technical team would open on a Monday.",
    company: "[confirm: company name optional]",
    showCompany: false,
    skills: ["0→1 Product", "Enterprise / Compliance"],
    bullets: [
      "Sole product leader directing a cross-functional team of 9 from discovery through delivery",
      "Drove 30% enterprise adoption by turning GHG Protocol and CBAM into self-service analytics non-technical teams would actually use",
      "Secured a Microsoft for Startups partnership (~£160K Azure credits) through a joint program with Accenture",
      "Ran 18 customer discovery interviews across North America and Europe to define ICP and validate PMF",
    ],
    context:
      "I joined as the sole product leader for a climate SaaS platform and owned product and engineering end to end: roadmap, hiring, onboarding, scope. Customers were enterprise sustainability leads who needed trustworthy emissions visibility and were not going to read a regulation to get it.",
    problem:
      "The value sat behind two walls. The science (GHG Protocol, CBAM) was dense, and the data work needed a specialist, so leads could not act without the data team in the room.",
    what:
      "I directed a team of 9 through discovery to delivery and made the central bet that self-service was the answer. I turned the regulatory frameworks into self-service analytics a non-technical lead could use without help, and ran 18 discovery interviews across North America and Europe to validate PMF before committing the roadmap.",
    how:
      "[confirm] I sequenced the roadmap around the highest-value compliance questions first, and built the analytics so the regulatory logic lived in the product, not in a consultant's head.",
    outcome:
      "30% enterprise adoption. A Microsoft for Startups partnership worth roughly £160K in Azure credits via Accenture, which removed hosting capex and let the platform scale without more fundraising. A validated ICP from 18 interviews.",
    learned:
      "Translating a regulation into a feature is the real product work in climate. The moment a non-technical user can answer their own compliance question, the product stops being a service and starts being software. [confirm]",
  },
  {
    id: "climate-founding-first-employee",
    domain: "Climate Tech · Founding PM",
    title: "First-of-kind LLM ESG intelligence in real estate decarbonization",
    metric: "100+ analyst hours saved / month",
    teaser: "Building ESG intelligence an auditor would accept.",
    company: "[confirm: company name optional]",
    showCompany: false,
    skills: ["MACHINE LEARNING", "0→1 Product", "Enterprise / Compliance"],
    bullets: [
      "Built and shipped LLM-powered ESG risk dashboards (LangChain, OpenAI, Node.js) tracking Scope 1/2/3 emissions across 20M+ sq ft of institutional real estate",
      "Saved 100+ analyst hours a month, becoming the primary decision tool for enterprise clients",
      "Built a conversational Q&A layer over live emissions data, a first in the space",
      "Designed the evaluation and observability framework for LLM outputs before enterprise deployment, leading a team of 10+",
    ],
    context:
      "Founding PM, building emissions tracking and ESG reporting for enterprises managing institutional real estate. Early LLM product work in a regulated domain, before most teams had a playbook.",
    problem:
      "Asset managers needed to understand carbon exposure across large portfolios, but the data was scattered and the analysis was manual and slow. Trust was the constraint: an ESG number an enterprise cannot defend is worse than no number.",
    what:
      "I built and shipped LLM-powered ESG risk dashboards tracking Scope 1, 2, and 3 across 20M+ sq ft. I added a conversational Q&A layer over live emissions data so managers could query exposure in plain language, a first in real estate decarbonization. Before client release, I designed the evaluation and observability framework and led a team of 10+ through it.",
    how:
      "Stack was LangChain, OpenAI, and Node.js. [confirm: add detail on the eval and observability framework, your strongest technical differentiator] The conversational layer sat over live data, not a static export, so answers reflected the current portfolio.",
    outcome:
      "Saved 100+ analyst hours a month and became the primary decision tool for enterprise clients. Shipped a first-of-kind conversational feature. Defined what trustworthy AI analytics required in a regulated domain, as a reusable framework.",
    learned:
      "Observability is what lets a client defend the output to their own auditor. Designing for that first is what made the product adoptable. [confirm]",
  },
  {
    id: "mortgage-fintech-public",
    domain: "Mortgage Fintech · Public · Team Lead → Product Analytics Lead",
    title: "Turning frontline telemetry into the roadmap, and cutting weeks off the loan cycle",
    metric: "21 → 12 days",
    teaser: "Cutting nine days out of the loan cycle.",
    company: "[confirm: company name optional]",
    showCompany: false,
    skills: ["Analytics & Data", "MACHINE LEARNING"],
    bullets: [
      "Cut the full lock-to-fund cycle from 21 days to 12 through internal tooling and process redesign",
      "Built an AI-based OCR tool for document ingestion that removed manual data entry and cut turnaround by 48 hours",
      "Led a team of 20 across mortgage workflows: CSAT +12%, containment +18%, NPS +9",
      "Owned 4 data products (SQL, Looker) used by 700 people daily across 4 teams, driving a 1.9% conversion lift (~$1.3M a month)",
    ],
    context:
      "Three and a half years at one of the fastest-growing mortgage fintechs. Joined in operations, grew into product and analytics, and helped build the data infrastructure product decisions ran on.",
    problem:
      "The loan cycle was slow and the roadmap ran on opinion. Frontline signal from IVR, chat, and call telemetry existed but was not turned into prioritization.",
    what:
      "I set the data and instrumentation standards across four product teams and turned raw telemetry into the signal that drove the roadmap. I led a redesign of internal tooling and process around the loan cycle, and built an AI-based OCR tool for document ingestion. As team lead, I ran a team of 20.",
    how:
      "The data products were built on SQL and Looker, used daily across the org. The OCR work was an ML product operation: I owned data preprocessing, evaluation, and the human-in-the-loop review that kept quality high. [confirm]",
    outcome:
      "Lock-to-fund cut from 21 days to 12. OCR cut turnaround by 48 hours. Team results: CSAT +12%, containment +18%, NPS +9. Four data products used by 700 people daily, driving a 1.9% conversion lift worth roughly $1.3M a month.",
    learned:
      "Own the numbers, do not run reports about them. The analytics that changed the roadmap were the ones I treated as products with users, not as dashboards. [confirm]",
  },
];

// ============================================================
// PERSONAL BUILDS, expandable cards.
// ============================================================
type Build = {
  context: string;
  name: string;
  tagline: string;
  result: string;
  problem: string;
  what: string;
  how: string;
  // Small proof badge shown in the card header (below result).
  proof?: { label: string; href: string };
  // "View the full deck" CTA shown at the bottom of the expanded panel.
  deck?: { label: string; href: string };
  // Optional inline preview shown in a modal (PPTX via Office viewer, or YouTube embed).
  embed?: { kind: "pptx" | "youtube"; src: string; label: string; title: string };
  links?: { label: string; href: string }[];
};

const BUILDS: Build[] = [
  {
    context: "Product Compass AI Agent Buildathon · 2026 · with Neda Vacheva",
    name: "ActionPilot",
    tagline: "The AI execution layer that turns email into structured work, automatically.",
    result: "Top 5 of 350 teams.",
    proof: {
      label: "Featured on Product Compass",
      href: "https://go.productcompass.pm/gallery/9338100b-3a28-4c7b-817f-09a6cd4005bc",
    },
    problem:
      "The average knowledge worker gets 117 emails a day and spends roughly 28% of the week translating messages into tasks across other tools.",
    what:
      "Turns emails into reviewable Action Cards (tasks, checklists, decision logs), not just summaries, with a person approving before anything is created.",
    how:
      "n8n orchestration with two separate LLM agents, one for extraction and one for verification, human-in-the-loop approval, and one-click execution into Trello. The extraction/verification split is what keeps the output trustworthy.",
    links: [{ label: "GitHub", href: "https://github.com/strategicsages/actionpilot" }],
  },
  {
    context: "ISB Executive Program in Product Management · Capstone · Oct 2025",
    name: "QuoteIQ",
    tagline: "Predictive, explainable quoting for brokers and lending partners.",
    result: "Pricing validated through Van Westendorp and Gabor-Granger research (n=42).",
    problem:
      "Quoting for brokers and NBFCs is reactive and fragmented across CRM, LOS, and spreadsheets, with slow time-to-first-quote and low quote-to-close.",
    what:
      "Guided intake, a rules-plus-interpretable scorecard, what-if scenario simulation (price, LTV, close date to win probability), and an explainable, shareable Quote Pack.",
    how:
      "Generative AI for suggestions and narrative, predictive ML for win and turnaround forecasting, and an assistive LLM for broker Q&A. Explainability is deliberate, a broker has to be able to defend the quote.",
    deck: { label: "Download the deck", href: "/__l5e/assets-v1/a5652652-20db-493f-a1fd-e029d418e454/QuoteIQ_ISB_PM_Capstone_Deeksha_Sharma.pptx" },
    embed: {
      kind: "pptx",
      src: "/__l5e/assets-v1/a5652652-20db-493f-a1fd-e029d418e454/QuoteIQ_ISB_PM_Capstone_Deeksha_Sharma.pptx",
      label: "Preview slides",
      title: "QuoteIQ, ISB PM Capstone deck",
    },
  },
  {
    context: "AI Product Management Capstone",
    name: "Upstream AI",
    tagline: "The operating system for Scope 3 decarbonization.",
    result: "[confirm: add validation, feedback, or recognition if you have it]",
    problem:
      "90% of a company's carbon footprint sits in Scope 3 supplier operations, and 40 to 60% of that data is missing because suppliers send PDFs, photos, and WhatsApp screenshots. SB 253 and CSRD now require auditable Scope 3 data.",
    what:
      "A multimodal LLM extraction layer with strict JSON schemas and extract-only prompts that turns messy supplier documents into clean ERP and ESG data, plus an agentic layer for risk detection and supplier enablement under confidence-gated human review.",
    how:
      "The architecture deliberately separates AI (handles document ambiguity) from deterministic code (handles compliance math), which keeps audit risk low.",
    embed: {
      kind: "youtube",
      src: "https://www.youtube.com/embed/0LTgBoS38PE",
      label: "Watch the walkthrough",
      title: "Upstream AI, walkthrough video",
    },
  },
  {
    context: "Independent strategy deck · Agritech × Climate",
    name: "Carbon Markets in the Agri Sector",
    tagline: "A product strategy for monetizing carbon credits across agricultural value chains.",
    result: "Self-initiated strategy work exploring MRV, agri-waste, and farmer-facing monetization.",
    problem:
      "Agriculture is both a source and a sink for greenhouse gases, but carbon credit certification is complex, data collection is manual, and there is no standardized methodology for agri-MRV.",
    what:
      "A go-to-market and product strategy covering target segments (farm operators, agri consultants, credit traders), monetization models (subscription, certification fees, performance incentives), and a competitive edge built on remote sensing plus farmer-friendly UX.",
    how:
      "Combined market research, SWOT, and a phased pilot plan. Mapped existing agritech (MRV tools, agri cloud, remote sensing) against gaps a new product could own, with a PM-led roadmap from MVP to scale.",
    deck: { label: "Download the deck", href: "/__l5e/assets-v1/19088176-4b75-40cd-8830-22579b8ce425/Carbon-Markets-in-the-Agri-Sector.pptx" },
    embed: {
      kind: "pptx",
      src: "/__l5e/assets-v1/19088176-4b75-40cd-8830-22579b8ce425/Carbon-Markets-in-the-Agri-Sector.pptx",
      label: "Preview slides",
      title: "Carbon Markets in the Agri Sector deck",
    },
  },
];

const YOUTUBE_PORTFOLIO_URL = "https://www.youtube.com/watch?v=0LTgBoS38PE&t=8s";
const YOUTUBE_PORTFOLIO_EMBED: NonNullable<Build["embed"]> = {
  kind: "youtube",
  src: "https://www.youtube.com/embed/0LTgBoS38PE?start=8",
  label: "Watch my portfolio product on YouTube",
  title: "Portfolio product walkthrough",
};
const YOUTUBE_PORTFOLIO_HASH = "#portfolio-video";

function ProjectsPage() {
  const [youtubePreviewOpen, setYoutubePreviewOpen] = useState(false);
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeSkill =
    search.skill && (SKILL_FILTERS as readonly string[]).includes(search.skill) ? search.skill : "All";
  const setActiveSkill = (s: string) => {
    navigate({
      search: s === "All" ? {} : { skill: s },
      replace: true,
      resetScroll: false,
    });
  };
  const filteredWork =
    activeSkill === "All"
      ? WORK
      : WORK.filter((w) => w.skills.includes(activeSkill));

  const closeYoutubePreview = () => {
    setYoutubePreviewOpen(false);
    if (window.location.hash === YOUTUBE_PORTFOLIO_HASH) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  const openYoutubePortfolio = (event: MouseEvent<HTMLAnchorElement>) => {
    let isFramed = false;
    try {
      isFramed = window.self !== window.top;
    } catch {
      isFramed = true;
    }

    if (isFramed) {
      setYoutubePreviewOpen(true);
      return;
    }

    event.preventDefault();
    const opened = window.open(YOUTUBE_PORTFOLIO_URL, "_blank", "noopener,noreferrer");
    if (!opened) window.open(YOUTUBE_PORTFOLIO_URL, "_blank");
  };

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === YOUTUBE_PORTFOLIO_HASH) setYoutubePreviewOpen(true);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    if (search.skill) {
      const el = document.getElementById("work-impact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Run once on mount when arriving with ?skill=...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <SiteLayout>
      <div
        className="relative z-50 border-b border-border bg-surface/95 backdrop-blur"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-2.5">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium">
            <a
              href={YOUTUBE_PORTFOLIO_HASH}
              onClick={openYoutubePortfolio}
              className="inline-flex items-center gap-2 text-brand hover:opacity-80 transition"
            >
              <span>Watch my portfolio product on YouTube</span>
              <Youtube className="h-4 w-4 text-red-600" />
            </a>
            <span aria-hidden className="hidden sm:inline text-foreground/25">|</span>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-petrol hover:opacity-80 transition"
            >
              <span>Download resume</span>
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <section className="pt-10 md:pt-14 pb-6">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="eyebrow">Selected work</div>
          <h1 className="font-display mt-6 text-4xl md:text-6xl leading-[1.04] tracking-tight text-balance">
            Products shipped, measured,{" "}
            <span className="italic text-petrol font-light">and trusted.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-foreground/75 leading-relaxed">
            Work impact in production, and personal builds where I prototype
            what production AI could look like next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work-impact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-petrol text-background hover:opacity-90 transition font-mono text-[0.78rem] tracking-widest uppercase"
            >
              Case Studies <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#personal-builds"
              className="inline-flex items-center gap-2 px-5 py-3 hairline hover:bg-[color:var(--color-surface-2)] transition font-mono text-[0.78rem] tracking-widest uppercase"
            >
              AI Builds <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 01, WORK IMPACT */}
      <section id="work-impact" className="py-10 md:py-14 hairline-t bg-background scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div className="font-mono text-[0.78rem] tracking-widest uppercase text-petrol">
              01 · Work Impact
            </div>
            <div className="text-xs text-foreground/55">
              Shipped in production · each opens into a full case study
            </div>
          </div>

          {/* Skill tabs */}
          <div role="tablist" aria-label="Filter case studies by skill" className="mt-6 flex flex-wrap gap-2">
            {SKILL_FILTERS.map((s) => {
              const count =
                s === "All"
                  ? WORK.length
                  : WORK.filter((w) => w.skills.includes(s)).length;
              const active = activeSkill === s;
              return (
                <button
                  key={s}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveSkill(s)}
                  className={`font-mono text-[0.7rem] tracking-widest uppercase px-3 py-1.5 hairline transition ${
                    active
                      ? "bg-petrol text-primary-foreground border-petrol"
                      : "bg-background text-foreground/70 hover:bg-[color:var(--color-surface-2)]"
                  }`}
                >
                  {s} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-6">
            {filteredWork.map((w) => (
              <WorkCard key={w.id} w={w} />
            ))}
            {filteredWork.length === 0 && (
              <div className="py-10 text-center text-sm text-foreground/55 hairline bg-background">
                No case studies under that skill yet.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 02, PERSONAL BUILDS */}
      <section id="personal-builds" className="py-10 md:py-14 hairline-t bg-[color:var(--color-surface-2)] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div className="font-mono text-[0.78rem] tracking-widest uppercase text-petrol">
              02 · Personal Builds
            </div>
            <div className="text-xs text-foreground/55">
              Side projects, buildathons, capstones
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Where I prototype what production AI could look like next.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {BUILDS.map((b) => (
              <BuildCard key={b.name} b={b} />
            ))}
            <PlaceholderCard label="Currently Building" sub="Details coming soon" />
            <PlaceholderCard label="Coming Soon" sub="Next case study in progress" />
          </div>
        </div>
      </section>
      {youtubePreviewOpen && (
        <EmbedModal embed={YOUTUBE_PORTFOLIO_EMBED} onClose={closeYoutubePreview} />
      )}
    </SiteLayout>
  );
}

function WorkCard({ w }: { w: WorkCase }) {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [err, setErr] = useState(false);
  const gated = Boolean(w.gate) && !unlocked;

  return (
    <article id={w.id} className="hairline bg-background scroll-mt-24">
      <div className="p-6 md:p-8">
        <div className="font-mono text-[0.72rem] tracking-widest uppercase text-petrol">
          {w.domain}
        </div>
        <div className="font-display text-petrol mt-4 text-3xl md:text-[2.5rem] leading-[1.05] tracking-tight">
          {w.metric}
        </div>
        <p className="mt-3 font-display italic text-lg md:text-xl text-foreground/85 leading-snug max-w-2xl">
          {w.teaser}
        </p>
        <h2 className="font-display mt-4 text-lg md:text-xl leading-snug tracking-tight text-foreground/75">
          {w.title}
        </h2>
        {w.showCompany && w.company && (
          <div className="mt-3 text-xs text-foreground/60 font-mono">
            {w.company}
          </div>
        )}

        <ul className="mt-6 space-y-3">
          {w.bullets.map((b, i) => {
            const m = b.match(/^([\d.,$%×x+\s/-]+(?:\s*(?:hrs|hr|days|day|mo|month|months|weeks|week|months)?)?(?:\s*[\d.,$%×x+\s/-]+)?)\b/);
            const num = m ? m[0].trim() : "";
            const rest = num ? b.slice(num.length) : b;
            return (
              <li key={i} className="flex gap-4 text-[0.95rem] leading-relaxed">
                <span className="font-display text-petrol shrink-0 min-w-[3.5rem]">
                  {num || "·"}
                </span>
                <span className="text-foreground/80">{rest}</span>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-petrol hover:text-[color:var(--color-petrol-hover)] transition"
        >
          {open ? "Hide the full case study" : "Read the full case study"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="hairline-t p-6 md:p-8 bg-[color:var(--color-surface)]">
          {gated ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (code === w.gate) {
                  setUnlocked(true);
                  setErr(false);
                } else {
                  setErr(true);
                }
              }}
              className="max-w-md"
            >
              <div className="flex items-center gap-2 text-petrol mb-3">
                <Lock className="h-4 w-4" />
                <div className="font-mono text-xs tracking-widest uppercase">
                  Passcode required
                </div>
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                The summary above is public. The full case study is shared on request.
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter passcode"
                  className="flex-1 hairline bg-background px-3 py-2 text-sm focus:outline-none focus:border-petrol"
                />
                <button
                  type="submit"
                  className="bg-petrol text-primary-foreground px-4 py-2 text-sm hover:bg-petrol-hover transition"
                >
                  Unlock
                </button>
              </div>
              {err && (
                <div className="mt-2 text-xs text-destructive">
                  That passcode didn't match.
                </div>
              )}
            </form>
          ) : (
            <div className="space-y-7">
              <Detail label="Context" body={w.context} />
              <Detail label="The problem" body={w.problem} />
              <Detail label="What I did" body={w.what} />
              <Detail label="How I built it" body={w.how} />
              <Detail label="Outcome" body={w.outcome} />
              <Detail label="What I learned" body={w.learned} />
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-4">
      <div className="md:col-span-3 font-mono text-[0.7rem] tracking-widest uppercase text-foreground/55 pt-1">
        {label}
      </div>
      <div className="md:col-span-9 text-[0.97rem] leading-[1.75] text-foreground/85">
        {body}
      </div>
    </div>
  );
}

function BuildCard({ b }: { b: Build }) {
  const [open, setOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  return (
    <article className="hairline bg-background">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-6 md:p-7 pb-4"
      >
        <div className="font-mono text-[0.7rem] tracking-widest uppercase text-foreground/55">
          {b.context}
        </div>
        <h2 className="font-display mt-3 text-2xl tracking-tight">{b.name}</h2>
        <div className="mt-2 italic text-foreground/75 text-[0.95rem] leading-snug">
          "{b.tagline}"
        </div>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="font-display text-petrol text-base">{b.result}</div>
          <ChevronDown
            className={`h-4 w-4 text-foreground/40 transition-transform shrink-0 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {b.proof && (
        <div className="px-6 md:px-7 pb-6 -mt-1">
          <a
            href={b.proof.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-widest uppercase text-petrol hover:text-[color:var(--color-petrol-hover)] transition border-b border-petrol/40 hover:border-petrol pb-0.5"
          >
            {b.proof.label} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
      {open && (
        <div className="hairline-t p-6 md:p-7 bg-[color:var(--color-surface)] space-y-4 text-sm leading-relaxed text-foreground/80">
          <div>
            <div className="font-mono text-[0.65rem] tracking-widest uppercase text-foreground/55 mb-1">
              The problem
            </div>
            <p>{b.problem}</p>
          </div>
          <div>
            <div className="font-mono text-[0.65rem] tracking-widest uppercase text-foreground/55 mb-1">
              What it does
            </div>
            <p>{b.what}</p>
          </div>
          <div>
            <div className="font-mono text-[0.65rem] tracking-widest uppercase text-foreground/55 mb-1">
              How it's built
            </div>
            <p>{b.how}</p>
          </div>
          {(b.embed || b.deck) && (
            <div className="pt-2 flex flex-wrap gap-3">
              {b.embed && (
                <button
                  type="button"
                  onClick={() => setPreviewOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-petrol text-background hover:opacity-90 transition font-mono text-[0.72rem] tracking-widest uppercase"
                >
                  {b.embed.label}
                </button>
              )}
              {b.deck && (
                <a
                  href={b.deck.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 hairline hover:bg-[color:var(--color-surface-2)] transition font-mono text-[0.72rem] tracking-widest uppercase"
                >
                  {b.deck.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
          {b.links && b.links.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-3">
              {b.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-petrol hover:text-[color:var(--color-petrol-hover)] transition"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
      {b.embed && previewOpen && (
        <EmbedModal embed={b.embed} onClose={() => setPreviewOpen(false)} />
      )}
    </article>
  );
}

function EmbedModal({
  embed,
  onClose,
}: {
  embed: NonNullable<Build["embed"]>;
  onClose: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const pauseYouTube = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
      "*",
    );
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onVisibility = () => {
      if (document.hidden && embed.kind === "youtube") pauseYouTube();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", pauseYouTube);
    window.addEventListener("blur", pauseYouTube);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", pauseYouTube);
      window.removeEventListener("blur", pauseYouTube);
      document.body.style.overflow = prev;
    };
  }, [onClose, embed.kind]);

  // Office viewer needs an absolute, publicly reachable URL.
  const iframeSrc = (() => {
    if (embed.kind === "pptx") {
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        embed.src.startsWith("http")
          ? embed.src
          : `${window.location.origin}${embed.src}`,
      )}`;
    }

    const youtubeUrl = new URL(embed.src);
    youtubeUrl.searchParams.set("rel", "0");
    youtubeUrl.searchParams.set("modestbranding", "1");
    youtubeUrl.searchParams.set("playsinline", "1");
    youtubeUrl.searchParams.set("autoplay", "1");
    youtubeUrl.searchParams.set("enablejsapi", "1");
    youtubeUrl.searchParams.set("origin", window.location.origin);
    return youtubeUrl.toString();
  })();

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={embed.title}
    >
      <div
        className="relative w-full max-w-5xl bg-background hairline overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3 hairline-b">
          <div className="font-mono text-[0.7rem] tracking-widest uppercase text-foreground/65 truncate">
            {embed.title}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="p-1.5 text-foreground/60 hover:text-foreground transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="relative w-full bg-foreground/5" style={{ aspectRatio: "16 / 9" }}>
          {!iframeLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/5 flex items-center justify-center"
            >
              <div className="font-mono text-[0.65rem] tracking-widest uppercase text-foreground/40">
                Loading {embed.kind === "youtube" ? "video" : "preview"}…
              </div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title={embed.title}
            onLoad={() => setIframeLoaded(true)}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${iframeLoaded ? "opacity-100" : "opacity-0"}`}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder={0}
          />
        </div>

      </div>
    </div>
  );
}


function PlaceholderCard({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="hairline border-dashed bg-background/40 p-6 md:p-7 flex flex-col justify-center min-h-[160px]">
      <div className="font-mono text-[0.7rem] tracking-widest uppercase text-foreground/55">
        {label}
      </div>
      <div className="mt-3 font-display text-xl text-foreground/50">{sub}</div>
    </div>
  );
}
