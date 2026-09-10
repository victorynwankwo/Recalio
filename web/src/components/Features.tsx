import React from "react";
import { featuresData } from "../Data/data";

const Features: React.FC = () => {
  return (
    <section
      className="mx-auto mb-32 max-w-container-max px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter"
      id="features"
    >
      <div className="mb-16 text-center max-[320px]:mb-8">
        <h2 className="font-display text-headline-md mb-4 text-navy max-[320px]:text-xl">
          Everything you need to ace your exams
        </h2>
        <p className="font-body-lg text-body-lg mx-auto max-w-2xl text-on-surface-variant max-[320px]:text-xs">
          Powerful AI tools designed specifically for students and lifelong
          learners.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {featuresData.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-shadow hover:shadow-md sm:p-6"
          >
            <div
              className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center ${feature.iconColor} mb-4`}
            >
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <h3 className="font-headline-md text-lg text-navy font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
