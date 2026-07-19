import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchCaseStudyBySlug,
  upsertCaseStudy,
  EMPTY_CASE_STUDY,
  type CaseStudy,
} from "@/lib/cms";
import { ArrowLeft, Save, Plus, X } from "lucide-react";

export const Route = createFileRoute("/admin/case-studies/$slug")({
  component: EditCaseStudy,
});

type FormState = Omit<CaseStudy, "id" | "created_at" | "updated_at"> & {
  id?: string;
};

function EditCaseStudy() {
  const { slug } = Route.useParams();
  const isNew = slug === "new";
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [form, setForm] = useState<FormState | null>(
    isNew ? { ...EMPTY_CASE_STUDY } : null,
  );
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  const { data: loaded, isLoading } = useQuery({
    queryKey: ["admin", "case-study", slug],
    queryFn: () => fetchCaseStudyBySlug(slug),
    enabled: !isNew,
  });

  useEffect(() => {
    if (loaded && !form) setForm(loaded);
  }, [loaded, form]);

  const save = useMutation({
    mutationFn: async (f: FormState) => upsertCaseStudy(f),
    onSuccess: (res) => {
      setSavedMsg("Saved");
      setTimeout(() => setSavedMsg(null), 2000);
      qc.invalidateQueries({ queryKey: ["admin", "case-studies"] });
      qc.invalidateQueries({ queryKey: ["case-studies", "published"] });
      qc.invalidateQueries({ queryKey: ["case-study", res.slug] });
      if (isNew) navigate({ to: "/admin/case-studies/$slug", params: { slug: res.slug } });
    },
    onError: (e: Error) => setSavedMsg(`Error: ${e.message}`),
  });

  if (!isNew && isLoading) return <div className="text-sm text-muted-foreground">Loading…</div>;
  if (!form) return <div className="text-sm text-muted-foreground">Not found.</div>;

  function set<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((f) => (f ? { ...f, [key]: val } : f));
  }

  function setList(key: "research" | "insights" | "decisions" | "execution" | "learnings" | "stack", val: string) {
    set(key, val.split("\n").map((s) => s.trim()).filter(Boolean));
  }

  return (
    <div className="max-w-3xl">
      <Link
        to="/admin"
        className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
      >
        <ArrowLeft className="h-3 w-3" /> All case studies
      </Link>
      <div className="mt-3 flex items-start justify-between gap-4">
        <h1 className="font-display text-2xl font-bold">
          {isNew ? "New case study" : form.title || "Untitled"}
        </h1>
        <div className="flex items-center gap-3">
          {savedMsg && <span className="text-xs text-muted-foreground">{savedMsg}</span>}
          <button
            onClick={() => save.mutate(form)}
            disabled={save.isPending || !form.slug || !form.title}
            className="inline-flex items-center gap-1 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            <Save className="h-4 w-4" /> {save.isPending ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Slug (URL)">
          <input
            value={form.slug}
            onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
            className={inputCls}
            placeholder="my-case-study"
          />
        </Field>
        <Field label="Title">
          <input value={form.title} onChange={(e) => set("title", e.target.value)} className={inputCls} />
        </Field>
        <Field label="Tag" hint="e.g. AI Agents & Automation">
          <input value={form.tag} onChange={(e) => set("tag", e.target.value)} className={inputCls} />
        </Field>
        <Field label="Company">
          <input value={form.company} onChange={(e) => set("company", e.target.value)} className={inputCls} />
        </Field>
        <Field label="Year">
          <input value={form.year} onChange={(e) => set("year", e.target.value)} className={inputCls} />
        </Field>
        <Field label="Role">
          <input value={form.role} onChange={(e) => set("role", e.target.value)} className={inputCls} />
        </Field>
        <Field label="Sort order" hint="lower = appears first">
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => set("sort_order", Number(e.target.value) || 0)}
            className={inputCls}
          />
        </Field>
        <Field label="Published">
          <label className="inline-flex items-center gap-2 text-sm mt-2">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => set("published", e.target.checked)}
            />
            Visible on public site
          </label>
        </Field>
        <Field label="Hero image URL" full hint="Optional. Paste any public image URL.">
          <input
            value={form.hero_image ?? ""}
            onChange={(e) => set("hero_image", e.target.value || null)}
            className={inputCls}
            placeholder="https://…"
          />
        </Field>
        <Field label="Subtitle" full>
          <textarea
            rows={2}
            value={form.subtitle}
            onChange={(e) => set("subtitle", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="Hero line" full hint="Italic line under the subtitle">
          <input value={form.hero} onChange={(e) => set("hero", e.target.value)} className={inputCls} />
        </Field>
      </div>

      <Section title="Metrics (hero strip)">
        <PairList
          items={form.metrics}
          onChange={(v) => set("metrics", v)}
          keys={["label", "value"]}
          placeholders={["Adoption in 6 months", "45%"]}
        />
      </Section>

      <Section title="Problem">
        <textarea rows={3} value={form.problem} onChange={(e) => set("problem", e.target.value)} className={inputCls} />
      </Section>

      <Section title="Opportunity">
        <textarea rows={3} value={form.opportunity} onChange={(e) => set("opportunity", e.target.value)} className={inputCls} />
      </Section>

      <BulletSection label="Research" value={form.research} onChange={(v) => setList("research", v)} />
      <BulletSection label="Insights" value={form.insights} onChange={(v) => setList("insights", v)} />
      <BulletSection label="Decisions" value={form.decisions} onChange={(v) => setList("decisions", v)} />

      <Section title="Roadmap">
        <PairList
          items={form.roadmap}
          onChange={(v) => set("roadmap", v)}
          keys={["phase", "detail"]}
          placeholders={["M1, Foundation", "Deal model, pricing engine spec"]}
        />
      </Section>

      <BulletSection label="Execution" value={form.execution} onChange={(v) => setList("execution", v)} />

      <Section title="Results">
        <PairList
          items={form.results}
          onChange={(v) => set("results", v)}
          keys={["label", "value", "note"]}
          placeholders={["Adoption", "45%", "in 6 months"]}
        />
      </Section>

      <BulletSection label="Learnings" value={form.learnings} onChange={(v) => setList("learnings", v)} />
      <BulletSection label="Tech stack tags" value={form.stack} onChange={(v) => setList("stack", v)} />

      <div className="mt-10 flex justify-end">
        <button
          onClick={() => save.mutate(form)}
          disabled={save.isPending || !form.slug || !form.title}
          className="inline-flex items-center gap-1 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
        >
          <Save className="h-4 w-4" /> {save.isPending ? "Saving…" : "Save case study"}
        </button>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-md hairline bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Field({
  label,
  hint,
  full,
  children,
}: {
  label: string;
  hint?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-xs font-medium">{label}</label>
      {hint && <div className="text-[11px] text-muted-foreground mb-1">{hint}</div>}
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function BulletSection({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string[];
  onChange: (v: string) => void;
}) {
  return (
    <Section title={label}>
      <div className="text-[11px] text-muted-foreground mb-1">One per line.</div>
      <textarea
        rows={Math.max(3, value.length + 1)}
        value={value.join("\n")}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls}
      />
    </Section>
  );
}

function PairList<T extends Record<string, string | undefined>>({
  items,
  onChange,
  keys,
  placeholders,
}: {
  items: T[];
  onChange: (v: T[]) => void;
  keys: string[];
  placeholders: string[];
}) {
  function update(i: number, k: string, v: string) {
    const next = items.slice();
    next[i] = { ...next[i], [k]: v };
    onChange(next);
  }
  function add() {
    const blank: Record<string, string> = {};
    keys.forEach((k) => (blank[k] = ""));
    onChange([...items, blank as unknown as T]);
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="grid flex-1 gap-2" style={{ gridTemplateColumns: `repeat(${keys.length}, 1fr)` }}>
            {keys.map((k, ki) => (
              <input
                key={k}
                value={(it[k] as string | undefined) ?? ""}
                onChange={(e) => update(i, k, e.target.value)}
                placeholder={placeholders[ki]}
                className={inputCls}
              />
            ))}
          </div>
          <button
            onClick={() => remove(i)}
            className="mt-1 p-1.5 text-muted-foreground hover:text-destructive"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1 text-xs rounded-md hairline px-3 py-1.5 hover:bg-surface"
      >
        <Plus className="h-3 w-3" /> Add row
      </button>
    </div>
  );
}
