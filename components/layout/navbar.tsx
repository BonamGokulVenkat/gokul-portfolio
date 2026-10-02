"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#DADCD8] bg-[#F7F7F3]/90 backdrop-blur-md transition-colors">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-medium text-[#16181B] text-base tracking-tight hover:text-[#3157D5] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5] py-2 rounded-sm"
          aria-label="Bonam Gokul Venkat - Homepage"
        >
          <span className="font-semibold text-[#16181B] group-hover:text-[#3157D5] transition-colors">
            {siteConfig.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          <div className="flex items-center gap-6 text-sm font-medium text-[#65686D]">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="py-1 transition-colors hover:text-[#16181B] focus-visible:outline-2 focus-visible:outline-[#3157D5] rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            className="h-4 w-px bg-[#DADCD8]"
            role="separator"
            aria-orientation="vertical"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-md text-[#65686D] hover:text-[#16181B] hover:bg-[#DADCD8]/30 transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-md text-[#65686D] hover:text-[#16181B] hover:bg-[#DADCD8]/30 transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
            >
              <LinkedInIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-md text-[#16181B] hover:bg-[#DADCD8]/40 focus-visible:outline-2 focus-visible:outline-[#3157D5] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#F7F7F3] border-t border-[#DADCD8] px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between text-lg font-medium text-[#16181B] py-2 border-b border-[#DADCD8]/60 hover:text-[#3157D5] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#65686D]">
                  {item.isExternal ? "EXT" : "SECTION"}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#DADCD8]">
            <p className="font-mono text-xs uppercase tracking-wider text-[#65686D] mb-4">
              Social Links
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#DADCD8] bg-white px-4 py-2 text-sm font-medium text-[#16181B] hover:border-[#3157D5] transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#DADCD8] bg-white px-4 py-2 text-sm font-medium text-[#16181B] hover:border-[#3157D5] transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
