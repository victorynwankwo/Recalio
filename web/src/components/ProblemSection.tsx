import React from "react";
import { problemsData } from "../Data/data";
import { useAuth } from "../context/AuthContext";
import ScrollReveal from "./ScrollReveal";

const ProblemSection: React.FC = () => {
  const { setSectionRef } = useAuth();

  return (
    <section ref={setSectionRef("about")} className="scroll-mt-20 mx-auto mb-32 max-w-container-max px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter">
      <ScrollReveal className="mb-12 text-center max-[320px]:mb-8">
        <h2 className="font-display text-headline-md mb-4 text-navy max-[320px]:text-xl">
          The Struggle is Real
        </h2>
        <p className="font-body-lg text-body-lg mx-auto max-w-2xl text-on-surface-variant max-[320px]:text-xs">
          Studying shouldn't feel like fighting through a jungle of information.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {problemsData.map((problem) => (
          <ScrollReveal key={problem.title} delay={problemsData.indexOf(problem) * 100}>
          <div
            key={problem.title}
            className="rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-5 text-center shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-8 md:text-left"
          >
            <div
              className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full ${problem.iconBgClass} ${problem.iconColorClass} md:mx-0`}
            >
              <span className="material-symbols-outlined">{problem.icon}</span>
            </div>
            <h3 className="font-headline-md text-xl text-navy font-semibold mb-3">
              {problem.title}
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {problem.description}
            </p>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
