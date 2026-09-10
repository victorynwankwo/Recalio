import React from "react";
import { pricingPlans } from "../Data/data";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ScrollReveal from "./ScrollReveal";

const Pricing: React.FC = () => {
  const { setSectionRef } = useAuth();

  return (
    <section
      id="pricing"
      ref={setSectionRef("pricing")}
      className="scroll-mt-20 mx-auto mb-32 max-w-container-max px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter"
    >
      <ScrollReveal className="mb-16 text-center">
        <h2 className="font-display text-headline-md text-navy mb-4">
          Simple, transparent pricing
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Start for free, upgrade when you need more power.
        </p>
      </ScrollReveal>

      <div className="mx-auto flex max-w-4xl flex-col justify-center gap-8 max-[320px]:gap-4 lg:flex-row">
        {pricingPlans.map((plan) => (
          <ScrollReveal key={plan.name} delay={pricingPlans.indexOf(plan) * 120} className="flex flex-1">
          <div
            key={plan.name}
            className={`relative flex flex-1 flex-col rounded-2xl p-8 text-center max-[320px]:rounded-xl max-[320px]:p-4 md:text-left ${
              plan.isPopular
                ? "bg-navy text-white shadow-xl transform md:-translate-y-4"
                : "border border-outline-variant/30 bg-surface-container-lowest"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-gradient-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Most Popular
              </div>
            )}
            <h3
              className={`font-headline-md mb-2 text-2xl font-semibold ${
                plan.isPopular ? "text-white" : "text-navy"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`font-body-md mb-6 ${
                plan.isPopular ? "text-blue-200" : "text-on-surface-variant"
              }`}
            >
              {plan.description}
            </p>
            <div className="mb-8">
              <span
                className={`font-display text-4xl font-bold ${
                  plan.isPopular ? "text-white" : "text-navy"
                }`}
              >
                {plan.price}
              </span>
              <span
                className={`font-body-md ${
                  plan.isPopular ? "text-blue-200" : "text-on-surface-variant"
                }`}
              >
                {plan.period}
              </span>
            </div>
            <ul className="mb-8 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center justify-center gap-3 md:justify-start">
                  <span
                    className={`material-symbols-outlined text-sm ${
                      plan.isPopular ? "text-secondary-fixed" : "text-secondary"
                    }`}
                  >
                    check
                  </span>
                  <span
                    className={`font-body-md text-sm ${
                      plan.isPopular ? "text-white" : "text-on-surface"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/login"
              className={`w-full cursor-pointer rounded-lg py-3 font-semibold transition-colors ${
                plan.isPopular
                  ? "bg-gradient-primary text-white hover:shadow-ambient"
                  : "border border-outline-variant/50 bg-surface text-navy hover:bg-surface-variant"
              }`}
            >
              {plan.buttonText}
            </Link>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
