import React from "react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HiringCta() {
  return (
    <section
      aria-labelledby="hiring-cta-heading"
      className="py-20 sm:py-28 bg-[#111418] text-[#F7F7F3] border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
            11 / OPPORTUNITIES
          </span>

          <h2
            id="hiring-cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Looking for an engineer who wants to grow into system ownership?
          </h2>

          <p className="text-base sm:text-lg text-[#DADCD8]/80 leading-relaxed">
            I’m currently looking for entry-level Backend Software Engineer and
            backend-focused Full-Stack Engineer opportunities.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <ButtonLink
              href={siteConfig.links.email}
              variant="primary"
            >
              Email me
            </ButtonLink>
            <ButtonLink
              href={siteConfig.links.linkedin}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </ButtonLink>
            <ButtonLink
              href={siteConfig.links.resume}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume ↗
            </ButtonLink>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm font-mono text-[#DADCD8]/60">
            <span className="inline-block w-2 h-2 rounded-full bg-[#18835B]"></span>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
