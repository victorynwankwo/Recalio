import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="mx-auto mb-16 w-full max-w-container-max px-margin-mobile pt-6 max-[320px]:mb-10 max-[320px]:px-2 max-[320px]:pt-4 sm:mb-20 sm:pt-10 md:px-gutter">
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-low px-4 py-1.5 max-[320px]:mb-5 max-[320px]:gap-1 max-[320px]:px-2 max-[320px]:py-1">
          <span
            className="material-symbols-outlined text-secondary text-sm"
            data-icon="auto_awesome"
          >
            auto_awesome
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant max-[320px]:text-[10px]">
            Recalio AI 2.0 is now live
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0a1128] max-[320px]:text-3xl max-[320px]:leading-tight sm:text-6xl lg:text-7xl">
          Turn your notes into <br />
          <span className="text-[#02a9ff]">knowledge</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 max-[320px]:mb-6 max-[320px]:text-xs sm:text-base lg:text-lg">
          Transform overwhelming PDFs, lecture notes, and study materials into
          concise summaries, intelligent flashcards, and personalized quizzes in
          seconds.
        </p>

        <div className="mb-12 flex w-full flex-col items-center justify-center gap-3 max-[320px]:mb-8 max-[320px]:gap-2 sm:mb-16 sm:w-auto sm:flex-row">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#02a9ff] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0096e6] hover:shadow-md max-[320px]:px-3 max-[320px]:py-2.5 max-[320px]:text-xs sm:w-auto sm:text-base"
            to="/login"
          >
            Start Learning Free
            <span className="text-lg leading-none">→</span>
          </Link>
          <Link
            className="flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 max-[320px]:px-3 max-[320px]:py-2.5 max-[320px]:text-xs sm:w-auto sm:text-base"
            to="#how-it-works"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
