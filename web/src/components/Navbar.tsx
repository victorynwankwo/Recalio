import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import RecalioLogo from "../assets/Recalio.jpeg";

import { navLinks } from "../Data/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 max-[320px]:h-12 max-[320px]:gap-2 max-[320px]:px-2 sm:px-8"
      >
        <Link
          to="#top"
          className="flex min-w-0 items-center gap-2.5 max-[320px]:gap-1.5"
        >
          <img
            src={RecalioLogo}
            alt="Recalio Logo"
            className="h-9 w-9 shrink-0 rounded-lg object-cover max-[320px]:h-7 max-[320px]:w-7"
          />
          <span className="truncate text-lg font-semibold tracking-tight text-navy max-[320px]:text-base">
            Recalio
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="#login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Link
            to="#cta"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-ambient transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start Learning Free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-slate-100 max-[320px]:h-8 max-[320px]:w-8 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="animate-fade-in border-t border-border/60 bg-background/95 px-5 py-4 max-[320px]:px-2 max-[320px]:py-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <Link
              to="#login"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-navy"
            >
              Login
            </Link>
            <Link
              to="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-ambient transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start Learning Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
