import React from "react";
import { featuresData } from "../Data/data";
import { useAuth } from "../context/AuthContext";
import ScrollReveal from "./ScrollReveal";

const Features: React.FC = () => {
  const { setSectionRef } = useAuth();

  return (
    <section
      id="features"
      ref={setSectionRef("features")}
      className="scroll-mt-20 mx-auto mb-32 max-w-container-max px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter"
    >
      <ScrollReveal className="mb-16 text-center max-[320px]:mb-8">
        <h2 className="font-display text-headline-md mb-4 text-navy max-[320px]:text-xl">
          Everything you need to ace your exams
        </h2>
        <p className="font-body-lg text-body-lg mx-auto max-w-2xl text-on-surface-variant max-[320px]:text-xs">
          Powerful AI tools designed specifically for students and lifelong
          learners.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {featuresData.map((feature) => (
          <ScrollReveal key={feature.title} delay={featuresData.indexOf(feature) * 90}>
          <div
            key={feature.title}
            className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 text-center transition-shadow hover:shadow-md sm:p-6 md:text-left"
          >
            <div
              className={`mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.iconBg} ${feature.iconColor} md:mx-0`}
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
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Features;
