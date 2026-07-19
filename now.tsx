import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now - Deeksha Sharma" },
      {
        name: "description",
        content:
          "What I'm focused on right now: building, learning, and writing about AI in regulated industries.",
      },
      { property: "og:title", content: "Now - Deeksha Sharma" },
      {
        property: "og:description",
        content:
          "A short, personal page about what I'm building, learning, and writing about right now.",
      },
      { property: "og:url", content: "https://thinkwithdeeksha.com/now" },
      { property: "og:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
      { property: "og:image:alt", content: "Deeksha Sharma" },
      { name: "twitter:title", content: "Now - Deeksha Sharma" },
      {
        name: "twitter:description",
        content:
          "A short, personal page about what I'm building, learning, and writing about right now.",
      },
      { name: "twitter:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
    ],
    links: [{ rel: "canonical", href: "https://thinkwithdeeksha.com/now" }],
  }),
  component: NowPage,
});

// EDIT: bump this when you update the page.
const UPDATED = "Updated June 2026";

function NowPage() {
  return (
    <SiteLayout>
      <section className="pt-10 md:pt-14 pb-6">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="eyebrow">{UPDATED}</div>
          <h1 className="font-display mt-6 text-5xl md:text-7xl leading-[1] tracking-tight">
            Now<span className="text-amber-warm">.</span>
          </h1>
          <p className="mt-7 text-foreground/75 leading-relaxed">
            This page borrows from Derek Sivers' /now convention. It's the
            short, honest version of what's actually got my attention this
            month, not a status report.
          </p>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-10">
          {/* EDIT each block freely. */}
          <Block label="Building">
            <p>
              At work, an LLM-powered Smart Product Advisor across our
              mortgage products, and a second wave of internal agents that
              answer the questions sales used to forward to product. At home,
              quietly sharpening Upstream AI's extraction prompts so the
              confidence gating actually reflects what a supplier sent us.
            </p>
          </Block>

          <Block label="Learning">
            <p>
              German, A1, with respect for the dative case. I'm using
              Anki for vocabulary and a tutor once a week.
            </p>
          </Block>

          <Block label="Reading & writing">
            <p>
              Reading: Chip Huyen's writing on ML systems, and the EU AI Act
              guidance as it lands. Writing: a Think With Deeksha piece on
              what an LLM eval actually needs to do in a regulated workflow,
              and a shorter one on why "confidence-gated" beats "human in the
              loop" as a design principle.
            </p>
          </Block>

          <Block label="Lining up">
            <p>
              Conversations with teams shipping AI into regulated workflows.
              If that's you and we haven't met, the contact page is the
              fastest route.
            </p>
          </Block>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 hairline-t pt-8">
      <div className="md:col-span-3">
        <h2 className="font-mono text-[0.72rem] tracking-widest uppercase text-petrol">
          {label}
        </h2>
      </div>
      <div className="md:col-span-9 text-[1.02rem] leading-[1.8] text-foreground/85">
        {children}
      </div>
    </div>
  );
}
