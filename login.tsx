import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin sign in" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate({ to: "/admin" });
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-md px-6 py-16">
        <div className="rounded-2xl hairline bg-background p-8 shadow-elevated">
          <div className="h-10 w-10 rounded-lg bg-surface grid place-items-center text-brand">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="mt-5 font-display text-2xl font-bold">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Restricted area. Owner access only.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md hairline bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md hairline bg-background px-3 py-2 text-sm"
              />
            </div>
            {error && <div className="text-sm text-destructive">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
          <p className="mt-6 text-xs text-muted-foreground">
            No account? Create one in the Cloud → Users dashboard, then sign in here.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block text-xs text-muted-foreground hover:text-foreground"
          >
            ← Back to site
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
