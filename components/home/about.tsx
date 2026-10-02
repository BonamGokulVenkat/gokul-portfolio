import React from "react";
import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-16"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            10 / CONTEXT
          </span>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            About
          </h2>
        </div>

        {/* Editorial bio statement */}
        <div className="max-w-3xl space-y-6 text-base sm:text-lg text-[#16181B] leading-relaxed">
          <p>
            I started with AI & Data Science, but during my engineering work I became increasingly
            interested in the systems behind products: APIs, databases, authorization, integrations,
            workflow state, and the failure cases that appear when software meets real users.
          </p>

          <p className="text-[#65686D]">
            My internship gave me experience contributing to an existing Java/Spring Boot production
            codebase, while projects such as Luxora and SCK exposed me to end-to-end product development
            and collaborative engineering.
          </p>

          <p className="text-[#65686D]">
            I’m currently deepening my backend engineering skills while continuing to strengthen system
            design, database reasoning, DSA, and applied AI.
          </p>
        </div>
      </Container>
    </section>
  );
}
