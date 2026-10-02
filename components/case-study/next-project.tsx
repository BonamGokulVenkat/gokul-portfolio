import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

interface NextProjectProps {
  label?: string;
  title: string;
  subtitle: string;
  href: string;
}

export function NextProject({
  label = "NEXT PROJECT",
  title,
  subtitle,
  href,
}: NextProjectProps) {
  return (
    <nav
      aria-label="Next case study"
      className="py-16 sm:py-20 border-t border-[#DADCD8] bg-[#F7F7F3]"
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
              {label}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#16181B] tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-[#65686D]">{subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={href}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#3157D5] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2645af] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
            >
              Read case study →
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#DADCD8] bg-white px-5 py-2.5 text-sm font-medium text-[#16181B] hover:bg-[#F7F7F3] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
