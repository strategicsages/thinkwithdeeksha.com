import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, LINKS, LOCATION_LINE } from "@/components/SiteLayout";
import { ArrowUpRight, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Deeksha Sharma" },
      {
        name: "description",
        content:
          "Get in touch about senior AI PM roles, founding PM work, or shipping AI in regulated domains.",
      },
      { property: "og:title", content: "Contact - Deeksha Sharma" },
      {
        property: "og:description",
        content:
          "Email, LinkedIn, or Substack. Based in India. Working across US and EU time zones.",
      },
      { property: "og:url", content: "https://thinkwithdeeksha.com/contact" },
      { property: "og:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
      { property: "og:image:alt", content: "Deeksha Sharma" },
      { name: "twitter:title", content: "Contact - Deeksha Sharma" },
      {
        name: "twitter:description",
        content:
          "Email, LinkedIn, or Substack. Based in India. Working across US and EU time zones.",
      },
      { name: "twitter:image", content: "https://thinkwithdeeksha.com/__l5e/assets-v1/b39663e1-af5a-40cd-949b-30e3f73d6d86/deeksha-headshot.png" },
    ],
    links: [{ rel: "canonical", href: "https://thinkwithdeeksha.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="pt-10 md:pt-14 pb-10 md:pb-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10 w-full text-center">
          <div className="eyebrow">Contact</div>
          <h1 className="font-display mt-7 text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            Let's build something{" "}
            <span className="italic text-petrol font-light">worth trusting.</span>
          </h1>
          <p className="mt-7 max-w-xl mx-auto text-foreground/75 leading-relaxed">
            The fastest way to reach me is email. I read every message and
            reply within a couple of days.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 bg-petrol text-primary-foreground px-5 py-3 text-sm tracking-wide hover:bg-petrol-hover transition"
            >
              <Mail className="h-4 w-4" /> {LINKS.email}
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hairline px-5 py-3 text-sm tracking-wide hover:bg-[color:var(--color-surface)] transition"
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
          </div>

          <div className="mt-10 font-mono text-[0.72rem] tracking-widest uppercase text-foreground/55">
            {LOCATION_LINE}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
