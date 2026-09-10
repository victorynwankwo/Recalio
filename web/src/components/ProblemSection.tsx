import React from "react";
import { problemsData } from "../Data/data";

const ProblemSection: React.FC = () => {
  return (
    <section className="mx-auto mb-32 max-w-container-max px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter">
      <div className="mb-12 text-center max-[320px]:mb-8">
        <h2 className="font-display text-headline-md mb-4 text-navy max-[320px]:text-xl">
          The Struggle is Real
        </h2>
        <p className="font-body-lg text-body-lg mx-auto max-w-2xl text-on-surface-variant max-[320px]:text-xs">
          Studying shouldn't feel like fighting through a jungle of information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {problemsData.map((problem) => (
          <div
            key={problem.title}
            className="rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-8"
          >
            <div
              className={`w-12 h-12 rounded-full ${problem.iconBgClass} flex items-center justify-center ${problem.iconColorClass} mb-6`}
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
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
