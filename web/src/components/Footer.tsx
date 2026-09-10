import React from "react";
import { Link } from "react-router-dom";
import RecalioLogo from "../assets/Recalio.jpeg";
import { footerLinks } from "../Data/data";
import { useAuth } from "../context/AuthContext";

const Footer: React.FC = () => {
  const { scrollToTop } = useAuth();

  return (
    <footer className="bg-surface dark:bg-inverse-surface border-t border-outline-variant/20 dark:border-outline/20 w-full py-12">
      <div className="max-w-container-max mx-auto flex flex-col justify-between gap-8 px-margin-mobile text-center md:flex-row md:text-left md:px-gutter">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <button
            type="button"
            aria-label="Back to the top of the page"
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <img
              alt="Recalio Logo"
              className="h-8 w-8 object-cover rounded-lg"
              src={RecalioLogo}
            />
            <span className="font-display text-headline-md font-bold text-navy dark:text-inverse-primary tracking-tight text-xl opacity-80">
              Recalio
            </span>
          </button>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant">
            © 2024 Recalio AI. Built for focus.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-body-md text-body-md md:justify-start">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              className="cursor-pointer text-on-surface-variant transition-colors hover:text-navy hover:underline dark:text-surface-variant dark:hover:text-on-primary"
              to={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
