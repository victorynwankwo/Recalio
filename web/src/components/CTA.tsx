import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CTA: React.FC = () => {
  return (
    <section className="mx-auto mb-16 max-w-container-max px-margin-mobile max-[320px]:px-2 md:px-gutter">
      <ScrollReveal>
      <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-navy p-6 text-center text-white shadow-2xl max-[320px]:rounded-xl max-[320px]:p-4 sm:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="font-display mb-4 text-4xl font-bold max-[320px]:text-xl md:text-5xl">
            Ready to ace your next exam?
          </h2>
          <p className="font-body-lg mx-auto mb-8 max-w-2xl text-xl text-blue-100 max-[320px]:text-xs">
            Join thousands of students who study less and learn more.
          </p>
          <Link
            to="/login"
            className="inline-block cursor-pointer rounded-xl bg-gradient-primary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-1 sm:px-10 sm:py-4 sm:text-lg"
          >
            Get Started Free
          </Link>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default CTA;
