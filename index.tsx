import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, LINKS, LOCATION_LINE } from "@/components/SiteLayout";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import headshotAsset from "@/assets/deeksha-headshot.png.asset.json";

const BRANDS = [
  "Amazon",
  "Better.com",
  "Accacia.ai",
  "CalculusCarbon",
  "Ecoryx",
  "Flyhomes",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deeksha Sharma - Senior AI Product Manager" },
      {
        name: "description",
        content:
          "An engineer who became a PM and never put the tools down. AI and data products shipped in fintech, climate, and mortgage.",
      },
      { property: "og:title", content: "Deeksha Sharma - Senior AI Product Manager" },
      {
        property: "og:description",
        content:
          "An engineer who became a PM and never put the tools down. AI and data products shipped in fintech, climate, and mortgage.",
      },
      { property: "og:url", content: "https://thinkwithdeeksha.com/" },
      { property: "og:image", content: `https://thinkwithdeeksha.com${headshotAsset.url}` },
      { property: "og:image:alt", content: "Deeksha Sharma, Senior AI Product Manager" },
      { name: "twitter:title", content: "Deeksha Sharma - Senior AI Product Manager" },
      {
        name: "twitter:description",
        content:
          "An engineer who became a PM and never put the tools down. AI and data products shipped in fintech, climate, and mortgage.",
      },
      { name: "twitter:image", content: `https://thinkwithdeeksha.com${headshotAsset.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://thinkwithdeeksha.com/" },
      {
        rel: "preload",
        as: "image",
        href: headshotAsset.url,
        fetchpriority: "high",
      },
    ],
  }),
  component: HomePage,
});

const WHY = [
  {
    title: "Technical depth",
    body: "SQL, Python, LLM orchestration, and model evals, hands-on.",
  },
  {
    title: "Regulated-domain judgment",
    body: "Shipped AI into mortgage, climate, and ESG compliance.",
  },
  {
    title: "Builder mindset",
    body: "Prototypes with agents, not slides. Builds evals so teams can trust what ships.",
  },
  {
    title: "Two founding PM roles",
    body: "Led product, engineering, and hiring from zero.",
  },
];

const WORK_PREVIEW = [
  {
    file: "01 · REAL ESTATE FINTECH · SERIES D",
    metric: "10,737% traffic growth",
    title: "How a content bet became qualified mortgage pipeline",
    slug: "real-estate-fintech",
    skills: ["MACHINE LEARNING", "Analytics & Data", "Enterprise / Compliance"],
  },
  {
    file: "02 · CLIMATE SAAS · SERIES A",
    metric: "30% enterprise adoption",
    title: "Turning a regulation into a product a non-technical team would open on a Monday",
    slug: "climate-saas-series-a",
    skills: ["0→1 Product", "Enterprise / Compliance"],
  },
  {
    file: "03 · CLIMATE TECH · FOUNDING PM",
    metric: "100+ analyst hours saved / month",
    title: "Building ESG intelligence an auditor would accept",
    slug: "climate-founding-first-employee",
    skills: ["MACHINE LEARNING", "0→1 Product", "Enterprise / Compliance"],
  },
  {
    file: "04 · MORTGAGE FINTECH · PUBLIC",
    metric: "21 → 12 days",
    title: "Cutting nine days out of the loan cycle",
    slug: "mortgage-fintech-public",
    skills: ["Analytics & Data", "MACHINE LEARNING"],
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10 w-full grid md:grid-cols-12 gap-6 md:gap-10 lg:gap-12 pt-10 md:pt-14 pb-6 items-center">
          <div className="md:col-span-8 order-2 md:order-1">
            <div className="eyebrow reveal">
              SENIOR AI PRODUCT MANAGER · 9+ YEARS · 4× ZERO-TO-ONE
            </div>
            <h1 className="font-display mt-5 md:mt-7 text-[2rem] sm:text-5xl md:text-[4.25rem] leading-[1.02] tracking-tight text-balance max-w-4xl reveal reveal-delay-1">
              I build AI products{" "}
              <span className="block text-petrol italic font-light">
                people can trust.
              </span>
            </h1>
            <p className="mt-5 md:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80 reveal reveal-delay-2">
              The data, the code, and the user rarely tell the same story. My
              job is knowing which one is right today.
            </p>
            <div className="mt-7 md:mt-10 flex flex-wrap items-center gap-3 reveal reveal-delay-3">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-petrol text-primary-foreground px-5 py-3 text-sm tracking-wide hover:bg-petrol-hover transition"
              >
                See my work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 hairline px-5 py-3 text-sm tracking-wide hover:bg-[color:var(--color-surface)] transition"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-6 md:mt-10 font-mono text-[0.7rem] tracking-widest uppercase text-foreground/75 reveal reveal-delay-4">
              {LOCATION_LINE}
            </div>
          </div>

          {/* Headshot */}
          <div className="md:col-span-4 order-1 md:order-2 reveal reveal-delay-2">
            <figure className="relative mx-auto max-w-[200px] sm:max-w-[260px] md:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-3 bg-petrol/10 -z-10"
              />
              <img
                src={headshotAsset.url}
                alt="Portrait of Deeksha Sharma"
                width={522}
                height={992}
                loading="eager"
                fetchPriority="high"
                className="w-full aspect-[4/5] object-cover hairline grayscale-[15%] shadow-sm"
              />
              <figcaption className="mt-1 font-mono text-[0.65rem] tracking-widest uppercase text-foreground/50">
                {"\n"}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="py-6 md:py-8 bg-[color:var(--color-surface)] hairline-t hairline-b">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-[0.65rem] tracking-widest uppercase text-foreground/75 mb-2 text-center">
            Brands & teams I've shipped with
          </div>
          <div className="marquee-pause relative overflow-hidden hairline-t hairline-b py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max gap-8 pr-8">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="font-display text-base tracking-tight text-foreground/75 whitespace-nowrap"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-5">
              <div className="eyebrow">Why me</div>
              <h2 className="font-display mt-4 md:mt-5 text-2xl md:text-5xl leading-[1.05] tracking-tight">
                An operator{" "}
                <span className="italic text-petrol font-light">and a builder.</span>
              </h2>
              <p className="mt-4 md:mt-6 text-foreground/85 leading-snug md:leading-relaxed max-w-md">
                Most AI roadmaps die in the gap between the model and the
                workflow. I close that gap. I read the code so the roadmap
                holds up, and I build evals so teams can trust what ships.
              </p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-2 md:gap-4">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="bg-background p-4 md:p-7 hairline"
                >
                  <div className="font-display text-lg md:text-xl tracking-tight text-petrol">
                    {w.title}
                  </div>
                  <p className="mt-2 md:mt-3 text-sm leading-snug md:leading-relaxed text-foreground/75">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-10 md:py-14 bg-[color:var(--color-surface)] hairline-t hairline-b">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-3 sm:flex sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 className="font-display mt-4 md:mt-5 text-2xl md:text-5xl tracking-tight">
                Case studies,{" "}
                <span className="italic text-petrol font-light">measured.</span>
              </h2>
              <p className="mt-4 md:mt-6 text-foreground/70 leading-snug md:leading-relaxed max-w-md">
                Figures from shipped work, not protot
              </p>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1 text-sm text-petrol hover:text-[color:var(--color-petrol-hover)] transition"
            >
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 md:mt-10 grid md:grid-cols-2 gap-2 md:gap-4">
            {WORK_PREVIEW.map((w) => (
              <Link
                key={w.file}
                to="/case-studies"
                hash={w.slug}
                className="group bg-background p-4 md:p-8 flex flex-col gap-3 md:gap-5 hairline"
              >
                <div className="flex items-center justify-between relative">
                  <div className="font-mono text-[0.65rem] tracking-widest uppercase text-foreground/75">
                    {w.file}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-petrol" />
                </div>
                <div className="font-display text-petrol text-2xl md:text-3xl leading-tight tracking-tight">
                  {w.metric}
                </div>
                <h3 className="font-display text-base md:text-xl tracking-tight leading-snug text-foreground/85 relative">
                  {w.title}
                </h3>
                <div className="mt-auto pt-3 md:pt-4 flex flex-wrap gap-1.5">
                  {w.skills.map((sk) => (
                    <span
                      key={sk}
                      className="font-mono text-[0.6rem] tracking-widest uppercase text-foreground/75 hairline px-2 py-0.5"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <h2 className="font-display text-2xl md:text-5xl leading-[1.1] tracking-tight text-balance">
            Let's build where AI meets{" "}
            <span className="italic text-petrol font-light">
              real-world complexity.
            </span>
          </h2>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-petrol text-primary-foreground px-5 py-3 text-sm tracking-wide hover:bg-petrol-hover transition"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={LINKS.substack}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hairline px-5 py-3 text-sm tracking-wide hover:bg-[color:var(--color-surface)] transition"
            >
              Substack <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 hairline px-5 py-3 text-sm tracking-wide hover:bg-[color:var(--color-surface)] transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
