import React from "react";
import { faqData } from "../Data/data";
import { useAuth } from "../context/AuthContext";
import ScrollReveal from "./ScrollReveal";

const FAQ: React.FC = () => {
  const { setSectionRef } = useAuth();

  return (
    <section
      id="faq"
      ref={setSectionRef("faq")}
      className="scroll-mt-20 mx-auto mb-32 max-w-3xl px-margin-mobile max-[320px]:mb-20 max-[320px]:px-2 md:px-gutter"
    >
      <ScrollReveal className="mb-12 text-center max-[320px]:mb-8">
        <h2 className="font-display text-headline-md mb-4 text-navy max-[320px]:text-xl">
          Frequently Asked Questions
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <ScrollReveal key={faq.question} delay={faqData.indexOf(faq) * 100}>
          <details
            key={faq.question}
            className="group cursor-pointer rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 sm:p-6"
            open={faq.defaultOpen}
          >
            <summary className="flex list-none items-center justify-between gap-4 font-headline-md text-base font-semibold text-navy sm:text-lg">
              <span>{faq.question}</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined">
                expand_more
              </span>
            </summary>
            <p className="text-on-surface-variant font-body-md mt-4">
              {faq.answer}
            </p>
          </details>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
