export type SignupForm ={
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SectionId = "about" | "features" | "howItWorks" | "pricing" | "faq";

export type AuthContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setSectionRef: (section: SectionId) => (element: HTMLElement | null) => void;
  scrollToSection: (section: SectionId) => void;
  scrollToTop: () => void;
};
