import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

interface CaseStudyHeroProps {
  label: string;
  title: string;
  subtitle: string;
  summary: string;
  metadata: {
    role: string;
    context: string;
    focus: string;
    stack: string;
  };
  backHref?: string;
  backLabel?: string;
}

export function CaseStudyHero({
  label,
  title,
  subtitle,
  summary,
  metadata,
  backHref = "/#work",
  backLabel = "Back to selected work",
}: CaseStudyHeroProps) {
  return (
    <header className="pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-[#DADCD8] bg-[#F7F7F3]">
      <Container>
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
              {label}
            </span>
            <Link
              href={backHref}
              className="inline-flex min-h-[44px] items-center text-xs sm:text-sm font-mono text-[#3157D5] hover:text-[#2645af] focus-visible:outline-2 focus-visible:outline-[#3157D5] rounded-sm"
            >
              ← {backLabel}
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#16181B] leading-[1.15]">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#3157D5] leading-snug">
              {subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#65686D] leading-relaxed max-w-3xl">
            {summary}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#DADCD8]">
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#65686D] block">
                ROLE
              </span>
              <p className="text-sm font-semibold text-[#16181B]">
                {metadata.role}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#65686D] block">
                CONTEXT
              </span>
              <p className="text-sm font-semibold text-[#16181B]">
                {metadata.context}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#65686D] block">
                FOCUS
              </span>
              <p className="text-sm font-semibold text-[#16181B]">
                {metadata.focus}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#65686D] block">
                STACK
              </span>
              <p className="text-sm font-semibold text-[#16181B]">
                {metadata.stack}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
