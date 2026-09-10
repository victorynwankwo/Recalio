import React from "react";
import { howItWorksSteps } from "../Data/data";
import { useAuth } from "../context/AuthContext";
import ScrollReveal from "./ScrollReveal";

const HowItWorks: React.FC = () => {
  const { setSectionRef } = useAuth();

  return (
    <section
      id="how-it-works"
      ref={setSectionRef("howItWorks")}
      className="scroll-mt-20 mx-auto mb-32 max-w-container-max px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter"
    >
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-ambient max-[320px]:rounded-xl max-[320px]:p-3 sm:p-8 lg:p-16">
        <ScrollReveal className="mb-10 text-center sm:mb-16">
          <h2 className="font-display text-headline-md mb-4 text-navy max-[320px]:text-xl">
            How Recalio Works
          </h2>
          <p className="font-body-lg text-body-lg mx-auto max-w-2xl text-on-surface-variant max-[320px]:text-xs">
            A streamlined path from raw data to retained knowledge.
          </p>
        </ScrollReveal>

        <div className="relative flex flex-col items-center justify-between lg:flex-row lg:items-start">
          <div className="absolute left-12 right-12 top-8 z-0 hidden h-0.5 bg-outline-variant/30 lg:block"></div>

          {howItWorksSteps.map((step) => (
            <ScrollReveal key={step.step} delay={step.step * 100} className="relative z-10 mb-8 flex w-full max-w-xl flex-1 flex-col items-center px-2 text-center last:mb-0 max-[320px]:mb-6 max-[320px]:px-0 sm:px-4 lg:mb-0 lg:max-w-none">
            <div
              key={step.step}
              className="flex flex-col items-center"
            >
              {step.isHighlighted ? (
                <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xl mb-4 shadow-md transform hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-surface text-secondary flex items-center justify-center font-bold text-xl mb-4 shadow-sm">
                  {step.step}
                </div>
              )}
              <h4 className="font-headline-md text-lg text-navy font-semibold mb-2">
                {step.title}
              </h4>
              <p className="font-body-md text-on-surface-variant text-sm">
                {step.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
