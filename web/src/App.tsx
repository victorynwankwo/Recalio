import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  FileText,
  Flame,
  GraduationCap,
  Layers,
  ListChecks,
  Menu,
  MessageSquare,
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Upload,
  X,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

const PROBLEMS = [
  {
    icon: FileText,
    title: "Too many PDFs",
    body: "Hundreds of pages of slides, papers and readings piling up before every exam.",
  },
  {
    icon: Brain,
    title: "Difficult concepts",
    body: "Dense material with no one to explain it in a way that actually clicks.",
  },
  {
    icon: Layers,
    title: "Information overload",
    body: "Endless highlights and notes, but no clear signal on what truly matters.",
  },
  {
    icon: Flame,
    title: "Poor revision habits",
    body: "Cramming the night before instead of steady, spaced, confident practice.",
  },
] as const;

const WORKFLOW = [
  { icon: Upload, title: "Upload Materials", body: "PDFs, notes, links and slides." },
  { icon: Brain, title: "AI Understands Content", body: "Structure, topics and key ideas." },
  { icon: Sparkles, title: "Generate Study Tools", body: "Summaries, cards, quizzes, plans." },
  { icon: GraduationCap, title: "Study Smarter", body: "Retain more in far less time." },
] as const;

const FEATURES = [
  {
    icon: FileText,
    title: "AI PDF Summary",
    body: "Turn a 90-page lecture deck into a crisp, structured summary you can read in minutes.",
  },
  {
    icon: MessageSquare,
    title: "AI Tutor Chat",
    body: "Ask anything about your material and get grounded answers with citations to your source.",
  },
  {
    icon: Layers,
    title: "Smart Flashcards",
    body: "Spaced-repetition cards generated automatically from what you actually need to learn.",
  },
  {
    icon: ListChecks,
    title: "Quiz Generator",
    body: "Exam-style questions with instant explanations that target your weakest topics.",
  },
  {
    icon: BookOpen,
    title: "Study Guides",
    body: "Complete, organised guides per topic — definitions, formulas, examples and recaps.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    body: "Mastery scores, streaks and analytics so you always know where you stand.",
  },
] as const;

const STEPS = [
  {
    step: "01",
    title: "Upload learning materials",
    body: "Drop in PDFs, lecture notes, websites or your own writing. Recalio reads and organises everything for you.",
  },
  {
    step: "02",
    title: "AI creates personalized study resources",
    body: "Summaries, flashcards, quizzes and study plans are generated around your syllabus and exam date.",
  },
  {
    step: "03",
    title: "Study smarter and improve retention",
    body: "Practice in short sessions, track mastery and let spaced repetition lock knowledge in for good.",
  },
] as const;

const PLANS = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "Everything you need to try a smarter way of studying.",
    features: [
      "5 documents per month",
      "AI summaries & key points",
      "100 flashcards",
      "Basic quizzes",
      "Study streak tracking",
    ],
    cta: "Start Learning Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    cadence: "per month",
    description: "For students who are serious about their results.",
    features: [
      "Unlimited documents & uploads",
      "AI Tutor Chat with citations",
      "Unlimited flashcards & quizzes",
      "Personalized study plans",
      "Full learning analytics",
      "Priority AI processing",
    ],
    cta: "Go Pro",
    featured: true,
  },
] as const;

const FAQS = [
  {
    q: "What file types can I upload to Recalio?",
    a: "PDFs, lecture slides, Word documents, plain text notes and public web pages. Recalio extracts the structure and understands headings, figures and definitions.",
  },
  {
    q: "How accurate are the AI summaries and quizzes?",
    a: "Every summary, flashcard and quiz answer is grounded in your uploaded material and linked back to the exact source passage, so you can verify anything in one click.",
  },
  {
    q: "Is Recalio useful outside university?",
    a: "Absolutely. Exam candidates, professional certification students and lifelong learners use Recalio for any material they need to genuinely retain.",
  },
  {
    q: "Do you train AI models on my documents?",
    a: "No. Your materials stay private to your account, are encrypted at rest, and are never used to train models.",
  },
  {
    q: "Can I cancel my Pro plan at any time?",
    a: "Yes. Pro is month-to-month, cancel in two clicks, and you keep access until the end of your billing period.",
  },
] as const;

const FOOTER_COLUMNS = [
  { title: "Product", links: ["Overview", "Features", "Pricing", "Changelog"] },
  { title: "Resources", links: ["FAQ", "Study guides", "Blog", "Help center"] },
  { title: "Company", links: ["Contact", "Careers", "Privacy Policy", "Terms"] },
] as const;

/* -------------------------------------------------------------------------- */
/*                              LANDING PAGE                                  */
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground antialiased">
      {/* ---------------------------------------------------------------- */}
      {/* NAVBAR                                                           */}
      {/* ---------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-gradient shadow-glow">
              <Sparkles className="h-[18px] w-[18px] text-primary-foreground" strokeWidth={2.2} />
            </span>
            <span className="truncate text-lg font-semibold tracking-tight">Recalio</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </a>
            <a href="#cta" className="group btn-primary">
              Start Learning Free
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="animate-fade-in border-t border-border/60 bg-background/95 px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <a href="#login" className="btn-ghost w-full justify-center">
                Login
              </a>
              <a href="#cta" className="group btn-primary w-full justify-center">
                Start Learning Free
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* -------------------------------------------------------------- */}
        {/* HERO                                                           */}
        {/* -------------------------------------------------------------- */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-hero-glow" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />

          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pb-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
                <Zap className="h-3.5 w-3.5 text-primary" />
                AI study companion for serious students
              </span>

              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Turn your notes into{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent">knowledge.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Recalio reads your PDFs, lecture notes, websites and learning materials, then turns
                them into AI summaries, flashcards, quizzes, study guides and a personalized study
                plan built around your exam date.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#cta" className="group btn-primary w-full sm:w-auto">
                  Start Learning Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
                  See How It Works
                </a>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Free forever plan · No credit card required
              </p>
            </div>

            {/* Dashboard mockup */}
            <div className="relative mx-auto mt-14 max-w-5xl sm:mt-20">
              <div className="absolute -inset-x-8 -top-6 bottom-0 rounded-[2rem] bg-brand-gradient opacity-[0.12] blur-3xl" />
              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* PROBLEM                                                        */}
        {/* -------------------------------------------------------------- */}
        <section className="border-t border-border/60 bg-secondary/40 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="The problem"
              title="Studying today is broken"
              subtitle="More material than ever, less clarity than ever. Recalio was built for the four things that quietly wreck results."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROBLEMS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="card-surface group p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* SOLUTION WORKFLOW                                              */}
        {/* -------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="The solution"
              title="One clean workflow, end to end"
              subtitle="From raw material to real mastery in four steps."
            />
            <ol className="mt-12 grid gap-4 md:grid-cols-4">
              {WORKFLOW.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="relative">
                  <div className="card-surface h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                  {i < WORKFLOW.length - 1 && (
                    <ChevronDown
                      aria-hidden
                      className="mx-auto my-2 h-5 w-5 text-primary/50 md:absolute md:-right-[18px] md:top-1/2 md:my-0 md:-translate-y-1/2 md:-rotate-90"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* FEATURES                                                       */}
        {/* -------------------------------------------------------------- */}
        <section id="features" className="scroll-mt-20 border-y border-border/60 bg-secondary/40 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Features"
              title="Everything you need to master a subject"
              subtitle="A complete study system generated from the material you already have."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <article key={title} className="card-surface group relative overflow-hidden p-7">
                  <span className="absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* HOW IT WORKS                                                   */}
        {/* -------------------------------------------------------------- */}
        <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="Three steps to better grades"
              subtitle="No setup, no templates, no busywork. Upload and start."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {STEPS.map(({ step, title, body }) => (
                <article key={step} className="card-surface group p-8">
                  <span className="bg-brand-gradient bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
                    {step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* DASHBOARD PREVIEW                                              */}
        {/* -------------------------------------------------------------- */}
        <section className="border-y border-border/60 bg-secondary/40 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Dashboard"
              title="Your entire semester, in one place"
              subtitle="Recent documents, AI summaries, flashcards, quiz results, streaks and learning analytics."
            />
            <div className="mt-12">
              <DashboardMockup expanded />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* PRICING                                                        */}
        {/* -------------------------------------------------------------- */}
        <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple pricing, student friendly"
              subtitle="Start free. Upgrade only when Recalio has already earned it."
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {PLANS.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    plan.featured
                      ? "border-primary/40 bg-card shadow-elegant"
                      : "card-surface"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-glow">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.cadence}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className={`group ${plan.featured ? "btn-primary" : "btn-secondary"} mt-8 w-full justify-center`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* FAQ                                                            */}
        {/* -------------------------------------------------------------- */}
        <section id="faq" className="scroll-mt-20 border-t border-border/60 bg-secondary/40 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionHeading eyebrow="FAQ" title="Questions, answered" />
            <div className="mt-12 space-y-3">
              {FAQS.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-border/70 bg-card/70 backdrop-blur transition-shadow hover:shadow-soft"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-medium sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          open ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* FINAL CTA                                                      */}
        {/* -------------------------------------------------------------- */}
        <section id="cta" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card px-6 py-16 text-center shadow-elegant sm:px-16">
              <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80" />
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.3]" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Start building better study habits today.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
                  Join students who replaced cramming with a system that actually remembers for
                  them.
                </p>
                <div className="mt-9 flex justify-center">
                  <a href="#top" className="group btn-primary">
                    Start Learning Free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------------- */}
      {/* FOOTER                                                           */}
      {/* ---------------------------------------------------------------- */}
      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <Sparkles className="h-[18px] w-[18px] text-primary-foreground" />
                </span>
                <span className="text-lg font-semibold tracking-tight">Recalio</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The AI study companion that helps you understand, remember and master what you
                learn.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#top"
                    aria-label="Recalio social link"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold tracking-tight">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Recalio. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Built for students who care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            INLINE HELPERS                                  */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Realistic product mockup — pure markup, no screenshots. */
function DashboardMockup({ expanded = false }: { expanded?: boolean }) {
  const documents = [
    { name: "Neuroanatomy — Lecture 07.pdf", meta: "42 pages · summarized", pct: 100 },
    { name: "Organic Chemistry Reader.pdf", meta: "128 pages · 68% processed", pct: 68 },
    { name: "Macroeconomics Notes.docx", meta: "18 pages · summarized", pct: 100 },
  ];

  return (
    <div className="relative rounded-2xl border border-border/70 bg-card/80 p-2 shadow-elegant backdrop-blur-xl sm:rounded-3xl sm:p-3">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-background sm:rounded-2xl">
        {/* window bar */}
        <div className="flex items-center gap-3 border-b border-border/60 bg-secondary/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-2/50" />
          </div>
          <div className="mx-auto hidden rounded-md border border-border/60 bg-background px-3 py-1 text-[11px] text-muted-foreground sm:block">
            app.recalio.com/dashboard
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.5fr_1fr]">
          {/* left column */}
          <div className="space-y-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight">Recent Documents</p>
                <p className="truncate text-xs text-muted-foreground">Updated 4 minutes ago</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-gradient px-3 py-1.5 text-[11px] font-medium text-primary-foreground shadow-glow">
                <Upload className="h-3 w-3" /> Upload
              </span>
            </div>

            <ul className="space-y-2">
              {documents.map((doc) => (
                <li
                  key={doc.name}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-3 py-2.5 transition-colors hover:border-primary/30"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{doc.name}</p>
                    <p className="truncate text-[11px] text-muted-foreground">{doc.meta}</p>
                  </div>
                  <div className="hidden h-1.5 w-20 shrink-0 overflow-hidden rounded-full bg-secondary sm:block">
                    <span
                      className="block h-full rounded-full bg-brand-gradient"
                      style={{ width: `${doc.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <p className="text-xs font-semibold tracking-tight">AI Summary</p>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                The limbic system regulates emotion, memory and motivation. Key structures: the
                hippocampus (memory consolidation), the amygdala (threat appraisal) and the
                hypothalamus (autonomic control).
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Hippocampus", "Amygdala", "Consolidation"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {expanded && (
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <p className="text-xs font-semibold tracking-tight">Learning Analytics</p>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {[38, 55, 42, 70, 61, 88, 76].map((h, i) => (
                    <div key={i} className="flex-1">
                      <div
                        className="w-full rounded-t-md bg-brand-gradient transition-all duration-500 hover:opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* right column */}
          <div className="space-y-4">
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-tight">Flashcards</p>
                <span className="text-[10px] text-muted-foreground">24 due today</span>
              </div>
              <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-[10px] uppercase tracking-widest text-primary">Question</p>
                <p className="mt-1.5 text-xs font-medium leading-relaxed">
                  Which structure consolidates short-term into long-term memory?
                </p>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["Again", "Good", "Easy"].map((label) => (
                  <span
                    key={label}
                    className="rounded-md border border-border/60 py-1 text-center text-[10px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-xs font-semibold tracking-tight">Quiz Results</p>
              <div className="mt-3 space-y-2.5">
                {[
                  { topic: "Limbic system", score: 92 },
                  { topic: "Neurotransmitters", score: 74 },
                  { topic: "Cortical layers", score: 58 },
                ].map((r) => (
                  <div key={r.topic}>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-muted-foreground">{r.topic}</span>
                      <span className="font-medium">{r.score}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="block h-full rounded-full bg-brand-gradient"
                        style={{ width: `${r.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                <Flame className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">18 day streak</p>
                <p className="truncate text-[11px] text-muted-foreground">
                  Best streak this semester
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
