import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

// EDIT: contact & social links live here, used by header + footer.
export const LINKS = {
  linkedin: "https://linkedin.com/in/deekshasharma-pm",
  substack: "https://thinkwithdeeksha.com",
  medium: "https://deeksha0708.medium.com/",
  github: "https://github.com/strategicsages",
  email: "deeksha.official07@gmail.com",
};

export const LOCATION_LINE =
  "Based in India. Working across US and EU time zones.";

export const TAGLINE =
  "Senior PM building AI-powered decision systems people trust.";

type NavItem = { to: string; label: string };

const NAV: readonly NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/case-studies", label: "Projects" },
  { to: "/now", label: "Now" },
  { to: "/writing", label: "Writing" },
  { to: "/contact", label: "Contact" },
] as const;


export function SiteLayout({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 hairline-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-petrol text-xl md:text-2xl tracking-tight leading-none">
            Deeksha Sharma<span className="text-amber-warm">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => {
              const active =
                n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-1.5 text-[0.82rem] tracking-wide transition-colors ${
                    active
                      ? "text-petrol"
                      : "text-foreground/70 hover:text-petrol"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="block h-px bg-amber mt-0.5" style={{ backgroundColor: "var(--color-amber)" }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-[0.82rem] tracking-wide px-4 py-2 bg-petrol text-primary-foreground hover:bg-petrol-hover transition"
            >
              Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-petrol"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden hairline-t bg-background">
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-foreground"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 py-2 px-3 text-sm bg-petrol text-primary-foreground w-fit"
              >
                Let's talk
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children ?? <Outlet />}</main>

      <footer className="mt-20 hairline-t bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-12 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="font-display text-petrol text-3xl leading-none tracking-tight">
              Deeksha Sharma<span className="text-amber-warm">.</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/75 max-w-xs">
              {TAGLINE}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-foreground/60 max-w-xs">
              {LOCATION_LINE}
            </p>
          </div>
          <div className="text-sm">
            <div className="eyebrow mb-4">Index</div>
            <ul className="space-y-2.5 text-foreground/75">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-petrol transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm">
            <div className="eyebrow mb-4">Elsewhere</div>
            <ul className="space-y-2.5 text-foreground/75">
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-petrol inline-flex items-center gap-1">
                  LinkedIn <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href={LINKS.substack} target="_blank" rel="noreferrer" className="hover:text-petrol inline-flex items-center gap-1">
                  Substack <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-petrol inline-flex items-center gap-1">
                  GitHub <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href={`mailto:${LINKS.email}`} className="hover:text-petrol">
                  {LINKS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline-t">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-foreground/55 font-mono">
            <div>© {new Date().getFullYear()} Deeksha Sharma</div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
