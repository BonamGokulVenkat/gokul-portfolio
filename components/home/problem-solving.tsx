import React from "react";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export function ProblemSolving() {
  return (
    <section
      aria-labelledby="problem-solving-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            07 / ALGORITHMS & RIGOR
          </span>
          <h2
            id="problem-solving-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Problem Solving
          </h2>
        </div>

        {/* Editorial stat block */}
        <div className="rounded-xl border border-[#DADCD8] bg-white p-6 sm:p-8 md:p-10 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Stat column */}
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#DADCD8] pb-6 md:pb-0 md:pr-8">
              <span className="font-mono text-4xl sm:text-5xl font-bold text-[#16181B] tracking-tight block">
                350+
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3157D5] mt-1 block">
                LeetCode Problems Solved
              </span>
            </div>

            {/* Copy column */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#16181B] leading-relaxed">
                Regular practice across arrays, strings, linked lists, trees, graphs, recursion, backtracking,
                dynamic programming, greedy algorithms, binary search, and other core data-structure and algorithm patterns.
              </p>

              <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed italic">
                I use DSA primarily to strengthen reasoning, complexity analysis, and technical interview problem solving.
              </p>

              <div className="pt-2">
                <a
                  href={siteConfig.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#3157D5] hover:text-[#2645af] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                >
                  LeetCode ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
