import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import {
  RexArchitecturePreview,
  ResearchArchitecturePreview,
  LuxoraPlaceholderVisual,
} from "@/components/projects/architecture-preview";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            02 / SELECTED WORK
          </span>
          <h2
            id="work-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Selected Engineering Work
          </h2>
          <p className="text-base text-[#65686D] leading-relaxed">
            A selection of systems where I worked through backend logic, data models,
            integrations, workflows, and product constraints.
          </p>
        </div>

        {/* Projects Stream */}
        <div className="space-y-12 sm:space-y-16">
          {/* PROJECT 01 — REX (Strongest prominence) */}
          <article className="p-6 sm:p-8 md:p-10 rounded-xl border border-[#DADCD8] bg-white shadow-2xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCD8] pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                Professional Experience · Proprietary System
              </span>
              <span className="font-mono text-xs text-[#65686D]">
                FEATURED BACKEND SYSTEM
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#16181B] tracking-tight">
                    REX
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#3157D5] mt-1">
                    Production Backend Engineering
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                  Contributed Java/Spring Boot backend features to an internal employee expense platform,
                  including HR synchronization, receipt validation, event workflows, and invoice
                  responsibility delegation.
                </p>

                <div className="pt-2">
                  <span className="font-mono text-xs text-[#65686D] block mb-1">
                    TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#16181B]">
                    {["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Flyway"].map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#F7F7F3] border border-[#DADCD8] px-2.5 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/work/rex"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#3157D5] hover:text-[#2645af] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>

              {/* REX Visual Preview */}
              <div className="lg:col-span-6 w-full">
                <RexArchitecturePreview />
              </div>
            </div>
          </article>

          {/* PROJECT 02 — LUXORA ESTATES */}
          <article className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white shadow-2xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCD8] pb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
                Full-Stack Marketplace
              </span>
              <span className="font-mono text-xs text-[#65686D]">
                TEAM PROJECT
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#16181B] tracking-tight">
                    Luxora Estates
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#16181B] mt-1">
                    Full-Stack Product & Conversational Property Search
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                  Contributed to a team-built real-estate marketplace with property discovery, conversational
                  search, moderation workflows, authentication, subscriptions, and administrative tooling.
                </p>

                <p className="text-xs sm:text-sm text-[#16181B] font-medium border-l-2 border-[#3157D5] pl-3 py-0.5">
                  Built across a Next.js frontend, NestJS backend, and PostgreSQL data layer.
                </p>

                <div className="pt-2">
                  <span className="font-mono text-xs text-[#65686D] block mb-1">
                    TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#16181B]">
                    {["Next.js", "NestJS", "TypeScript", "PostgreSQL", "REST APIs"].map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#F7F7F3] border border-[#DADCD8] px-2.5 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/work/luxora"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#3157D5] hover:text-[#2645af] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>

              {/* Conversational query visual block */}
              <div className="lg:col-span-6 w-full">
                <LuxoraPlaceholderVisual />
              </div>
            </div>
          </article>

          {/* PROJECT 03 — RESEARCH (Academic / Deep Learning) */}
          <article className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white shadow-2xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCD8] pb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#18835B]">
                Research & Academic Contribution
              </span>
              <span className="font-mono text-xs text-[#65686D]">
                SCI-2026 SWINBURNE VIETNAM
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#16181B] tracking-tight">
                    Agentic AI Intrusion Detection
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#18835B] mt-1">
                    Final-Year Research · Deep Learning & Cybersecurity
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                  Co-authored a deep-learning intrusion detection framework combining binary attack detection,
                  multiclass attack classification, and an autonomous decision engine for ALLOW, MONITOR, or BLOCK responses.
                </p>

                <div className="text-xs font-mono text-[#65686D] bg-[#F7F7F3] p-2.5 rounded border border-[#DADCD8]">
                  Presented at SCI-2026, Swinburne Vietnam, Hanoi · Publication forthcoming
                </div>

                <div className="pt-2">
                  <span className="font-mono text-xs text-[#65686D] block mb-1">
                    TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#16181B]">
                    {["Python", "TensorFlow", "Deep Learning", "Cybersecurity"].map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#F7F7F3] border border-[#DADCD8] px-2.5 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/research/agentic-ids"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#18835B] hover:text-[#116243] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#18835B]"
                  >
                    View research →
                  </Link>
                </div>
              </div>

              {/* Research Architecture Preview */}
              <div className="lg:col-span-6 w-full">
                <ResearchArchitecturePreview />
              </div>
            </div>
          </article>

          {/* PROJECT 04 — SCK (Slightly lower visual prominence) */}
          <article className="p-6 sm:p-7 rounded-xl border border-[#DADCD8] bg-white/70 shadow-2xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCD8] pb-3">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#65686D]">
                3-Person Team
              </span>
              <span className="font-mono text-xs text-[#65686D]">
                WELLNESS & BOOKING
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-[#16181B] tracking-tight">
                    SCK Wellness Platform
                  </h3>
                  <p className="text-sm font-medium text-[#65686D] mt-0.5">
                    Collaborative Full-Stack Development
                  </p>
                </div>

                <p className="text-sm text-[#65686D] leading-relaxed">
                  Worked in a three-person development team on a wellness platform covering public experiences,
                  configurable offerings, booking workflows, and administration.
                </p>

                <p className="text-xs sm:text-sm text-[#16181B] leading-relaxed">
                  My direct contributions included the SKY experience, responsive improvements, navigation,
                  and UI work, while I also collaborated with teammates on booking workflows.
                </p>

                <div className="pt-2">
                  <span className="font-mono text-xs text-[#65686D] block mb-1">
                    TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#16181B]">
                    {["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"].map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#F7F7F3] border border-[#DADCD8] px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex md:flex-col justify-start md:items-end pt-2">
                <Link
                  href="/work/sck"
                  className="inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-[#3157D5] hover:text-[#2645af] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                >
                  Read case study →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
