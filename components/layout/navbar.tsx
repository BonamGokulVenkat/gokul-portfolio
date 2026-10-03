"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function getSubpageTitle(path: string): string {
  if (path.includes("/work/luxora")) return "Luxora Estates";
  if (path.includes("/work/rex")) return "REX";
  if (path.includes("/work/sck")) return "SCK Wellness Platform";
  if (path.includes("/research/agentic-ids")) return "Agentic AI IDS";
  if (path.startsWith("/work")) return "Case Study";
  if (path.startsWith("/research")) return "Research";
  return "";
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeActiveSection, setHomeActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const subpageTitle = getSubpageTitle(pathname);

  // Close the mobile menu after navigation.
  useEffect(() => {
    const timer = window.setTimeout(() => setMobileMenuOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  // Derive active section directly for subpages without needing setState
  const activeSection = isHome
    ? homeActiveSection
    : pathname.startsWith("/work")
    ? "work"
    : pathname.startsWith("/research")
    ? "research"
    : "";

  // Handle scroll to hash when navigating from a case study back to home
  useEffect(() => {
    if (isHome && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setHomeActiveSection(hash);
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [isHome, pathname]);

  // Scrollspy to detect active section on home page via IntersectionObserver
  useEffect(() => {
    if (!isHome) return;

    const sections = ["work", "experience", "research", "about"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHomeActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isHome]);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.includes("#") ? href.split("#")[1] : "";
    setMobileMenuOpen(false);

    if (isHome && hash) {
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
          setHomeActiveSection(hash);
        }
      }, 80);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#DADCD8] bg-[#F7F7F3]/95 backdrop-blur-md transition-colors">
        <Container className="flex h-16 items-center justify-between gap-4">
          {/* Logo / Name & Breadcrumbs */}
          <div className="flex items-center gap-2.5 min-w-0">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-medium text-[#16181B] text-base tracking-tight hover:text-[#3157D5] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5] py-2 rounded-sm shrink-0"
              aria-label="Bonam Gokul Venkat - Homepage"
            >
              <span className="font-semibold text-[#16181B] group-hover:text-[#3157D5] transition-colors">
                {siteConfig.shortName}
              </span>
            </Link>

            {/* Context breadcrumb when on a case study or research subpage */}
            {!isHome && subpageTitle && (
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#65686D] min-w-0">
                <span className="text-[#DADCD8]">/</span>
                <Link
                  href={pathname.startsWith("/work") ? "/#work" : "/#research"}
                  className="hover:text-[#3157D5] transition-colors shrink-0"
                >
                  {pathname.startsWith("/work") ? "Work" : "Research"}
                </Link>
                <span className="text-[#DADCD8]">/</span>
                <span className="text-[#16181B] font-medium truncate max-w-[180px] md:max-w-[260px] lg:max-w-[340px]">
                  {subpageTitle}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation (visible on lg and above: >= 1024px) */}
          <nav
            className="hidden lg:flex items-center gap-7 shrink-0"
            aria-label="Main Navigation"
          >
            <div className="flex items-center gap-6 text-sm font-medium">
              {siteConfig.navItems.map((item) => {
                const hash = item.href.includes("#") ? item.href.split("#")[1] : "";
                const isActive =
                  (isHome && hash && activeSection === hash) ||
                  (!isHome && pathname.startsWith("/work") && item.label === "Work") ||
                  (!isHome && pathname.startsWith("/research") && item.label === "Research");

                if (item.isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1 text-[#65686D] transition-colors hover:text-[#16181B] focus-visible:outline-2 focus-visible:outline-[#3157D5] rounded-sm"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative py-1 transition-colors hover:text-[#16181B] focus-visible:outline-2 focus-visible:outline-[#3157D5] rounded-sm ${
                      isActive ? "text-[#16181B] font-semibold" : "text-[#65686D]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3157D5] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div
              className="h-4 w-px bg-[#DADCD8]"
              role="separator"
              aria-orientation="vertical"
            />

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
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

          {/* Mobile Right Controls (visible on screens < 1024px) */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            {!isHome && (
              <Link
                href={pathname.startsWith("/work") ? "/#work" : "/#research"}
                className="inline-flex min-h-[44px] items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium text-[#3157D5] bg-[#3157D5]/10 rounded border border-[#3157D5]/20 hover:bg-[#3157D5]/15 transition-colors"
              >
                <span>←</span>
                <span>{pathname.startsWith("/work") ? "Work" : "Home"}</span>
              </Link>
            )}

            {/* Mobile Menu Button with guaranteed touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-[#16181B] hover:bg-[#DADCD8]/40 focus-visible:outline-2 focus-visible:outline-[#3157D5] transition-colors"
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
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu (visible below lg: < 1024px) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div
            id="mobile-nav"
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[#F7F7F3] border-t border-[#DADCD8] px-6 py-8 flex flex-col justify-between overflow-y-auto shadow-xl"
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {siteConfig.navItems.map((item) => {
                const hash = item.href.includes("#") ? item.href.split("#")[1] : "";
                const isActive =
                  (isHome && hash && activeSection === hash) ||
                  (!isHome && pathname.startsWith("/work") && item.label === "Work") ||
                  (!isHome && pathname.startsWith("/research") && item.label === "Research");

                if (item.isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-lg font-medium text-[#16181B] py-3 border-b border-[#DADCD8]/60 hover:text-[#3157D5] transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-[#65686D]">EXT</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between text-lg py-3 border-b border-[#DADCD8]/60 transition-colors ${
                      isActive
                        ? "text-[#3157D5] font-semibold"
                        : "text-[#16181B] font-medium hover:text-[#3157D5]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />}
                      <span>{item.label}</span>
                    </span>
                    <span className="font-mono text-xs text-[#65686D]">
                      {isActive ? "ACTIVE" : "SECTION"}
                    </span>
                  </Link>
                );
              })}
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
        </>
      )}
    </>
  );
}
