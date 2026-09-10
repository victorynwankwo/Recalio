export interface NavLink {
  label: string;
  href: string;
}

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
  iconBgClass: string;
  iconColorClass: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  icon?: string;
  isHighlighted?: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  isPopular?: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const problemsData: ProblemItem[] = [
  {
    icon: "description",
    title: "Too Many PDFs",
    description:
      "Drowning in endless reading materials, lecture slides, and notes with no clear summary.",
    iconBgClass: "bg-error-container/50",
    iconColorClass: "text-error",
  },
  {
    icon: "psychology_alt",
    title: "Information Overload",
    description:
      "Struggling to identify what's actually important for the exam amidst the noise.",
    iconBgClass: "bg-secondary-container/50",
    iconColorClass: "text-secondary",
  },
  {
    icon: "timer_off",
    title: "Wasted Time",
    description:
      "Spending hours creating flashcards and study guides instead of actually studying them.",
    iconBgClass: "bg-tertiary-fixed-dim/50",
    iconColorClass: "text-tertiary",
  },
];

export const howItWorksSteps: StepItem[] = [
  {
    step: 1,
    title: "Upload",
    description: "Drop in your PDFs, slides, or raw text notes.",
  },
  {
    step: 2,
    title: "AI Understands",
    description: "Our engine reads and extracts key concepts instantly.",
    icon: "auto_awesome",
    isHighlighted: true,
  },
  {
    step: 3,
    title: "Generate Tools",
    description: "Get flashcards, quizzes, and formatted study guides.",
  },
  {
    step: 4,
    title: "Study Smarter",
    description: "Review efficiently and track your mastery over time.",
  },
];

export const featuresData: FeatureItem[] = [
  {
    icon: "summarize",
    title: "AI Summary",
    description:
      "Condense 100-page readings into 5-minute summaries that capture all key concepts.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "school",
    title: "AI Tutor",
    description:
      "Ask questions about your documents and get instant, accurate explanations.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: "style",
    title: "Smart Flashcards",
    description:
      "Automatically generated spaced-repetition flashcards from your uploaded materials.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: "quiz",
    title: "Quiz Generator",
    description:
      "Test your knowledge with custom multiple-choice and short-answer quizzes.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: "menu_book",
    title: "Study Guides",
    description:
      "Beautifully formatted, comprehensive study guides ready for print or tablet.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "monitoring",
    title: "Progress Tracking",
    description:
      "Visualize your learning journey and identify areas where you need more focus.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$0",
    period: "/forever",
    description: "Perfect for getting started.",
    buttonText: "Get Started Free",
    isPopular: false,
    features: [
      "3 Document uploads per month",
      "Basic AI summaries",
      "Standard flashcards",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For serious students who want top grades.",
    buttonText: "Upgrade to Pro",
    isPopular: true,
    features: [
      "Unlimited Document uploads",
      "Advanced AI summaries & tutor",
      "Custom Quiz generation",
      "Detailed progress analytics",
    ],
  },
];

export const faqData: FAQItem[] = [
  {
    question: "What file types do you support?",
    answer:
      "We currently support PDF, DOCX, TXT, and PPTX files up to 50MB in size. We're working on adding support for audio transcripts soon.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All uploaded documents are encrypted at rest and in transit. We do not use your private study materials to train our AI models.",
  },
  {
    question: "Can I cancel my Pro subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. You'll retain Pro features until the end of your billing cycle.",
  },
];

export const footerLinks: FooterLink[] = [
  { label: "Product", href: "#" },
  { label: "Company", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
];
