import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAllCaseStudies, deleteCaseStudy } from "@/lib/cms";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminIndex,
});

function AdminIndex() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "case-studies"],
    queryFn: fetchAllCaseStudies,
  });

  const del = useMutation({
    mutationFn: deleteCaseStudy,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "case-studies"] });
      qc.invalidateQueries({ queryKey: ["case-studies", "published"] });
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Case studies</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Edit titles, metrics, sections, and publish state.
          </p>
        </div>
        <Link
          to="/admin/case-studies/$slug"
          params={{ slug: "new" }}
          className="inline-flex items-center gap-1 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> New case study
        </Link>
      </div>

      <div className="mt-8 rounded-xl hairline overflow-hidden">
        {isLoading && <div className="p-6 text-sm text-muted-foreground">Loading…</div>}
        {data?.map((cs) => (
          <div
            key={cs.id}
            className="flex items-center justify-between px-5 py-4 border-b border-border last:border-0 bg-background"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold truncate">{cs.title}</span>
                {cs.published ? (
                  <span className="text-[10px] uppercase tracking-wider text-accent inline-flex items-center gap-1">
                    <Eye className="h-3 w-3" /> Published
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1">
                    <EyeOff className="h-3 w-3" /> Draft
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground truncate mt-0.5">
                /{cs.slug} · {cs.company} · {cs.year}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/admin/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="inline-flex items-center gap-1 text-xs rounded-md hairline px-3 py-1.5 hover:bg-surface"
              >
                <Pencil className="h-3 w-3" /> Edit
              </Link>
              <button
                onClick={() => {
                  if (confirm(`Delete "${cs.title}"? This cannot be undone.`))
                    del.mutate(cs.id);
                }}
                className="inline-flex items-center gap-1 text-xs rounded-md hairline px-3 py-1.5 hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
        {data?.length === 0 && (
          <div className="p-10 text-center text-sm text-muted-foreground">
            No case studies yet. Create your first one.
          </div>
        )}
      </div>
    </div>
  );
}
