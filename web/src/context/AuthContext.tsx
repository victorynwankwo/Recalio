import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { type AuthContextType, type SectionId } from "../types/auth.types";




const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    about: aboutRef,
    features: featuresRef,
    howItWorks: howItWorksRef,
    pricing: pricingRef,
    faq: faqRef,
  };

  const scrollToSection = (section: SectionId) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const setSectionRef = (section: SectionId) => (element: HTMLElement | null) => {
    sectionRefs[section].current = element;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AuthContext.Provider
      value={{ loading, setLoading, setSectionRef, scrollToSection, scrollToTop }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
