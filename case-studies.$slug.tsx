import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/SiteLayout";
import { fetchCaseStudyBySlug, fetchPublishedCaseStudies } from "@/lib/cms";
import { getSkillsForSlug } from "@/lib/skills";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Play } from "lucide-react";


export const Route = createFileRoute("/case-studies/$slug")({
  loader: async ({ params }) => {
    const cs = await fetchCaseStudyBySlug(params.slug);
    return { cs };
  },
  head: ({ params, loaderData }) => {
    const cs = loaderData?.cs;
    const title = cs?.title
      ? `${cs.title}, Case study by Deeksha Sharma`
      : "Case study by Deeksha Sharma";
    const rawDesc = cs?.subtitle || cs?.hero || cs?.problem || "";
    const trimmed = rawDesc.trim().replace(/\s+/g, " ");
    const description = trimmed.length > 0
      ? (trimmed.length > 160 ? trimmed.slice(0, 157).trimEnd() + "..." : trimmed)
      : `Read how Deeksha Sharma approached the ${params.slug.replace(/-/g, " ")} case study: problem, decisions, and measured outcomes.`;
    const ogImage = cs?.hero_image || "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png";
    const url = `https://thinkwithdeeksha.com/case-studies/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:image:alt", content: title },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CaseStudyPage,
});

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="text-xs font-mono uppercase tracking-widest text-brand">{label}</div>
      <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-5 text-foreground/90 leading-relaxed">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const { data: cs, isLoading, error } = useQuery({
    queryKey: ["case-study", slug],
    queryFn: async () => {
      const c = await fetchCaseStudyBySlug(slug);
      if (!c) throw notFound();
      return c;
    },
  });
  const { data: all } = useQuery({
    queryKey: ["case-studies", "published"],
    queryFn: fetchPublishedCaseStudies,
  });

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
          <div className="h-8 w-1/3 bg-surface rounded animate-pulse" />
          <div className="mt-4 h-12 w-2/3 bg-surface rounded animate-pulse" />
        </div>
      </SiteLayout>
    );
  }

  if (error || !cs) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20 text-center">
          <h1 className="font-display text-3xl font-bold">Case study not found</h1>
          <Link
            to="/case-studies"
            className="mt-6 inline-flex items-center gap-1 text-brand hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to case studies
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const idx = all?.findIndex((c) => c.slug === cs.slug) ?? -1;
  const next = all && idx >= 0 ? all[(idx + 1) % all.length] : null;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 pt-10 pb-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>

          {slug === "upstream-ai" && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-surface hairline px-3 py-1.5 text-xs text-muted-foreground">
              <Play className="h-3 w-3 text-brand" fill="currentColor" />
              <span>Featured project, video walkthrough included</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-surface px-2.5 py-1 text-muted-foreground">
              {cs.tag}
            </span>
            <span className="text-muted-foreground">{cs.company}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{cs.year}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{cs.role}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
            {cs.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{cs.subtitle}</p>
          {cs.hero && (
            <p className="mt-3 font-display text-foreground/80 italic">{cs.hero}</p>
          )}

          {slug === "upstream-ai" && (
            <div className="mt-8">
              <div className="aspect-video w-full rounded-2xl hairline overflow-hidden bg-surface">
                <iframe
                  src="https://www.youtube.com/embed/0LTgBoS38PE?start=8&rel=0"
                  title="Upstream AI featured walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs font-mono uppercase tracking-widest text-brand">
                Featured walkthrough
              </p>
            </div>
          )}

          {cs.hero_image && (
            <img
              src={cs.hero_image}
              alt={cs.title}
              className="mt-8 w-full rounded-2xl hairline object-cover aspect-[16/9]"
              loading="lazy"
            />
          )}

          {cs.metrics?.length > 0 && (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl hairline bg-border">
              {cs.metrics.map((m) => (
                <div key={m.label} className="bg-background p-5">
                  <div className="font-display text-2xl font-bold tracking-tight">{m.value}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-12">
        {cs.problem && (
          <Section label="01 · Problem" title="The friction we set out to remove">
            <p>{cs.problem}</p>
          </Section>
        )}
        {cs.opportunity && (
          <Section label="02 · Opportunity" title="What a great product would enable">
            <p>{cs.opportunity}</p>
          </Section>
        )}
        {cs.research?.length > 0 && (
          <Section label="03 · Research" title="How I learned the space">
            <Bullets items={cs.research} />
          </Section>
        )}
        {cs.insights?.length > 0 && (
          <Section label="04 · Insights" title="The decisions that flipped">
            <Bullets items={cs.insights} />
          </Section>
        )}
        {cs.decisions?.length > 0 && (
          <Section label="05 · Decisions" title="Product choices I owned">
            <Bullets items={cs.decisions} />
          </Section>
        )}
        {cs.roadmap?.length > 0 && (
          <Section label="06 · Roadmap" title="How we sequenced the work">
            <div className="grid md:grid-cols-2 gap-4">
              {cs.roadmap.map((r) => (
                <div key={r.phase} className="rounded-xl hairline p-5 bg-surface/40">
                  <div className="font-mono text-xs uppercase tracking-widest text-brand">
                    {r.phase}
                  </div>
                  <div className="mt-1 text-sm">{r.detail}</div>
                </div>
              ))}
            </div>
          </Section>
        )}
        {cs.execution?.length > 0 && (
          <Section label="07 · Execution" title="How we operated">
            <Bullets items={cs.execution} />
          </Section>
        )}
        {cs.results?.length > 0 && (
          <Section label="08 · Metrics" title="Outcomes that mattered">
            <div className="grid sm:grid-cols-2 gap-3">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-xl hairline p-5">
                  <div className="font-display text-2xl font-bold">{r.value}</div>
                  <div className="text-sm">{r.label}</div>
                  {r.note && (
                    <div className="text-xs text-muted-foreground mt-1">{r.note}</div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}
        {cs.learnings?.length > 0 && (
          <Section label="09 · Learnings" title="What I'd take to the next product">
            <Bullets items={cs.learnings} />
          </Section>
        )}

        {(() => {
          const skills = getSkillsForSlug(cs.slug);
          if (skills.length === 0) return null;
          return (
            <section className="mt-12 border-t border-border pt-8">
              <div className="text-xs font-mono uppercase tracking-widest text-brand">
                Skills
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Tap a skill to see other case studies in this area.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Link
                    key={s}
                    to="/case-studies"
                    search={{ skill: s }}
                    className="font-mono text-[0.7rem] tracking-widest uppercase px-3 py-1.5 hairline bg-surface hover:bg-petrol hover:text-primary-foreground hover:border-petrol transition inline-flex items-center gap-1.5"
                  >
                    {s} <ArrowUpRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {cs.stack?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <span
                key={s}
                className="text-xs font-medium rounded-full bg-surface hairline px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        )}

      </article>

      {next && (
        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
                Next case study
              </div>
              <div className="mt-1 font-display text-xl font-semibold">{next.title}</div>
            </div>
            <Link
              to="/case-studies/$slug"
              params={{ slug: next.slug }}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition self-start"
            >
              Read next <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
