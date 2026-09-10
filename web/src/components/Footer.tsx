import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../Data/data";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface dark:bg-inverse-surface border-t border-outline-variant/20 dark:border-outline/20 w-full py-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2" to="#">
            <img
              alt="Recalio Logo"
              className="h-6 w-6 object-contain grayscale opacity-70"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Wx3twVRRNYeuQcMRzwucEyty7RTwEoLjx_3MICTYLtGsYVEgBUis0QZ5XQ-5DLSFKYGXGM09a9ZkAuNvYj3jtvDaZy0iySmn0bWSRus5bBkoBJ5kCyBIURrTdYZbQY5vgr1nqbgVPzFK2VCinmbyfnsgrK32hVJm7u00wUsJIbCaug8Gi5idHqIdjUS6NwK2Ljity44LO2xF2gtOE9x2y37V6vBTV2LC9dtDi_dkU4YWGrAJI-LvuNyA"
            />
            <span className="font-display text-headline-md font-bold text-navy dark:text-inverse-primary tracking-tight text-xl opacity-80">
              Recalio
            </span>
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant">
            © 2024 Recalio AI. Built for focus.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 font-body-md text-body-md">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              className="text-on-surface-variant dark:text-surface-variant hover:text-navy dark:hover:text-on-primary transition-colors hover:underline"
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
