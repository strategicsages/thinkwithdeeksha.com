import { supabase } from "@/integrations/supabase/client";

export type CaseStudyMetric = { label: string; value: string };
export type CaseStudyResult = { label: string; value: string; note?: string };
export type CaseStudyRoadmap = { phase: string; detail: string };

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  company: string;
  year: string;
  role: string;
  hero: string;
  hero_image: string | null;
  metrics: CaseStudyMetric[];
  problem: string;
  opportunity: string;
  research: string[];
  insights: string[];
  decisions: string[];
  roadmap: CaseStudyRoadmap[];
  execution: string[];
  results: CaseStudyResult[];
  learnings: string[];
  stack: string[];
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
};

const SELECT = "*";

export async function fetchPublishedCaseStudies(): Promise<CaseStudy[]> {
  const { data, error } = await supabase
    .from("case_studies")
    .select(SELECT)
    .eq("published", true)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as unknown as CaseStudy[];
}

export async function fetchAllCaseStudies(): Promise<CaseStudy[]> {
  const { data, error } = await supabase
    .from("case_studies")
    .select(SELECT)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as unknown as CaseStudy[];
}

export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const { data, error } = await supabase
    .from("case_studies")
    .select(SELECT)
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return (data as unknown as CaseStudy | null) ?? null;
}

export async function upsertCaseStudy(cs: Partial<CaseStudy> & { slug: string; title: string }) {
  const { data, error } = await supabase
    .from("case_studies")
    .upsert(cs as never, { onConflict: "slug" })
    .select()
    .single();
  if (error) throw error;
  return data as unknown as CaseStudy;
}

export async function deleteCaseStudy(id: string) {
  const { error } = await supabase.from("case_studies").delete().eq("id", id);
  if (error) throw error;
}

export const EMPTY_CASE_STUDY: Omit<CaseStudy, "id" | "created_at" | "updated_at"> = {
  slug: "",
  title: "",
  subtitle: "",
  tag: "",
  company: "",
  year: "",
  role: "",
  hero: "",
  hero_image: null,
  metrics: [],
  problem: "",
  opportunity: "",
  research: [],
  insights: [],
  decisions: [],
  roadmap: [],
  execution: [],
  results: [],
  learnings: [],
  stack: [],
  sort_order: 100,
  published: true,
};
