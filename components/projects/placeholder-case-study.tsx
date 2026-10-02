import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

interface PlaceholderCaseStudyProps {
  title: string;
  category: string;
  subtitle: string;
  summary: string;
}

export function PlaceholderCaseStudy({
  title,
  category,
  subtitle,
  summary,
}: PlaceholderCaseStudyProps) {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
              {category}
            </span>
            <span className="text-[#DADCD8]">/</span>
            <span className="font-mono text-xs text-[#3157D5] bg-[#3157D5]/10 px-2 py-0.5 rounded-sm">
              Case Study In Progress
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#16181B]">
            {title}
          </h1>

          <p className="text-lg text-[#16181B] font-medium leading-relaxed">
            {subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
            {summary}
          </p>

          <div className="p-4 rounded-md border border-[#DADCD8] bg-white text-xs font-mono text-[#65686D] space-y-1">
            <p className="font-semibold text-[#16181B]">
              Detailed architectural write-up coming in Phase 3.
            </p>
            <p>
              This route placeholder prevents broken internal links during Phase 2 development.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/#work"
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#3157D5] hover:text-[#2645af] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3157D5]"
            >
              ← Back to Selected Work
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
