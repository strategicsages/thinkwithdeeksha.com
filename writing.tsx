import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, LINKS } from "@/components/SiteLayout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing - Deeksha Sharma" },
      {
        name: "description",
        content:
          "Think With Deeksha on Substack: memory, agents, evals, and the unglamorous parts of shipping AI in regulated industries.",
      },
      { property: "og:title", content: "Writing - Deeksha Sharma" },
      {
        property: "og:description",
        content:
          "Newsletter, essays, and a community of 120+ operators and founders working on AI workflows.",
      },
      { property: "og:url", content: "https://thinkwithdeeksha.com/writing" },
      { property: "og:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
      { property: "og:image:alt", content: "Deeksha Sharma" },
      { name: "twitter:title", content: "Writing - Deeksha Sharma" },
      {
        name: "twitter:description",
        content:
          "Newsletter, essays, and a community of 120+ operators and founders working on AI workflows.",
      },
      { name: "twitter:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
    ],
    links: [{ rel: "canonical", href: "https://thinkwithdeeksha.com/writing" }],
  }),
  component: WritingPage,
});

// EDIT: add more Substack posts as cards in this array.
const POSTS: { title: string; venue: string; year: string; href: string; blurb: string }[] = [
  {
    title: "Beauty, Bias, and Algorithm: AI Beauty Tools and the Amplification of Inequality",
    venue: "Feminism in India",
    year: "2026",
    href: "#", // EDIT: link to the published piece
    blurb:
      "On algorithmic bias and consent in generative AI image systems.",
  },
];

// Older essays on Medium (deeksha0708.medium.com).
const MEDIUM_POSTS: { title: string; year: string; href: string }[] = [
  {
    title: "Data Mesh: A Simple Guide for Data Product Managers",
    year: "2024",
    href: "https://deeksha0708.medium.com/data-mesh-a-simple-guide-for-data-product-managers-5db2c4ccc051",
  },
  {
    title: "The number game!",
    year: "2024",
    href: "https://deeksha0708.medium.com/the-number-game-2a8ff0b0ce37",
  },
  {
    title: "Why Exploratory Data Analysis is pre-eminent?",
    year: "2020",
    href: "https://deeksha0708.medium.com/why-exploratory-data-analysis-is-pre-eminent-f9ec9ab600b3",
  },
  {
    title: "DEVSTACK: My approach on infrastructure arrangement for a small college project",
    year: "2020",
    href: "https://deeksha0708.medium.com/devstack-my-aproach-on-infrastructure-arrangement-for-a-small-college-project-9ac1c195646c",
  },
  {
    title: "Influence of Hybrid Cloud",
    year: "2017",
    href: "https://deeksha0708.medium.com/influence-of-hybrid-cloud-b1c7c9f6ad4f",
  },
];

function WritingPage() {
  return (
    <SiteLayout>
      <section className="pt-10 md:pt-14 pb-6">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="eyebrow">Writing</div>
          <h1 className="font-display mt-6 text-5xl md:text-7xl leading-[1] tracking-tight">
            Writing<span className="text-amber-warm">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-foreground/75 leading-relaxed">
            I write Think With Deeksha on Substack about memory, agents,
            evals, and the unglamorous parts of shipping AI in regulated
            industries. No prompts. No hype. Just what breaks.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={LINKS.substack}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-petrol text-primary-foreground px-5 py-3 text-sm tracking-wide hover:bg-petrol-hover transition"
            >
              Read Think With Deeksha <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={LINKS.medium}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hairline bg-background text-foreground px-5 py-3 text-sm tracking-wide hover:bg-[color:var(--color-surface)] transition"
            >
              Older posts on Medium <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 hairline-t">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="font-mono text-[0.72rem] tracking-widest uppercase text-petrol mb-10">
            Published
          </div>
          <div className="space-y-4">
            {POSTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block hairline bg-background p-6 md:p-7 group hover:bg-[color:var(--color-surface)] transition"
              >
                <div className="font-mono text-[0.7rem] tracking-widest uppercase text-foreground/55">
                  {p.venue} · {p.year}
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl md:text-2xl tracking-tight leading-snug">
                    {p.title}
                  </h2>
                  <ArrowUpRight className="h-4 w-4 mt-1 text-foreground/40 group-hover:text-petrol transition" />
                </div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {p.blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 hairline-t">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="flex items-baseline justify-between gap-4 mb-10">
            <div className="font-mono text-[0.72rem] tracking-widest uppercase text-petrol">
              From the archive · Medium
            </div>
            <a
              href={LINKS.medium}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[0.7rem] tracking-widest uppercase text-foreground/60 hover:text-petrol transition"
            >
              All posts <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <ul className="divide-y divide-[color:var(--color-hairline)] hairline-t hairline-b">
            {MEDIUM_POSTS.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="font-display text-base md:text-lg tracking-tight leading-snug group-hover:text-petrol transition">
                    {p.title}
                  </span>
                  <span className="font-mono text-[0.7rem] tracking-widest uppercase text-foreground/55 shrink-0 inline-flex items-center gap-2">
                    {p.year}
                    <ArrowUpRight className="h-3 w-3 text-foreground/40 group-hover:text-petrol transition" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>



      <section className="py-10 md:py-14 hairline-t bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="font-mono text-[0.72rem] tracking-widest uppercase text-petrol mb-6">
            Community
          </div>
          <div className="hairline bg-background p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl tracking-tight">
              AI-Ops community
            </h2>
            <p className="mt-4 text-foreground/75 leading-relaxed max-w-2xl">
              I organize a community of 120+ operators and founders{" "}
              {/* [confirm the number you want public] */}
              focused on AI workflow automation and tooling. We trade what
              actually shipped this week, what broke, and what the eval said.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
