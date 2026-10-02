import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function Footer() {
  const footerLinks = [
    { label: "GitHub", href: siteConfig.links.github },
    { label: "LinkedIn", href: siteConfig.links.linkedin },
    { label: "LeetCode", href: siteConfig.links.leetcode },
    { label: "Email", href: siteConfig.links.email },
  ];

  return (
    <footer className="w-full border-t border-[#DADCD8] bg-[#F7F7F3] pt-14 pb-12 transition-colors">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-[#DADCD8]">
          {/* Identity */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-[#16181B]">
              {siteConfig.shortName}
            </h2>
            <p className="text-sm text-[#65686D]">{siteConfig.role}</p>
            <p className="font-mono text-xs text-[#65686D] pt-1">
              {siteConfig.location}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
              Connect & Profiles
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex min-h-[36px] items-center text-[#16181B] hover:text-[#3157D5] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5] rounded-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-[#65686D]">
          <p>Built with Next.js & TypeScript.</p>
          <p className="font-mono text-[11px] text-[#65686D]/80">
            Clean Architecture · Technical Editorial Design
          </p>
        </div>
      </Container>
    </footer>
  );
}
