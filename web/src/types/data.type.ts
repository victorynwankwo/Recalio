import type { SectionId } from "./auth.types";

export interface NavLink {
  label: string;
  section: SectionId;
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
