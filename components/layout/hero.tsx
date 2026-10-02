import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-6">
          {/* Subtle mono label */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#65686D] uppercase">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#16181B] leading-[1.15]"
          >
            {siteConfig.role}
          </h1>

          {/* Main statement */}
          <p className="text-xl sm:text-2xl font-medium text-[#16181B] leading-snug">
            {siteConfig.statement}
          </p>

          {/* Supporting paragraph */}
          <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
            {siteConfig.summary}
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ButtonLink href="#work" variant="primary">
              Explore my work
            </ButtonLink>
            <ButtonLink
              href={siteConfig.links.resume}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume ↗
            </ButtonLink>
          </div>

          {/* Tech stack metadata & availability */}
          <div className="pt-6 sm:pt-8 border-t border-[#DADCD8] space-y-4">
            {/* Tech stack pill line */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-medium text-[#65686D] mr-1">
                STACK:
              </span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm text-[#16181B]">
                {siteConfig.techStack.map((tech, index) => (
                  <span key={tech} className="inline-flex items-center">
                    <span className="bg-white border border-[#DADCD8] px-2 py-0.5 rounded-sm">
                      {tech}
                    </span>
                    {index < siteConfig.techStack.length - 1 && (
                      <span className="text-[#DADCD8] ml-2 select-none">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <div className="inline-flex items-center gap-2.5 rounded-md border border-[#DADCD8] bg-white px-3.5 py-1.5 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18835B]"></span>
              </span>
              <span className="font-mono text-xs sm:text-[13px] text-[#16181B] font-medium">
                {siteConfig.availability}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
