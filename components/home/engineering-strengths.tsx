import React from "react";
import { Container } from "@/components/layout/container";

export function EngineeringStrengths() {
  const strengths = [
    {
      num: "01",
      title: "DATA INTEGRITY",
      description:
        "Designing workflows where database state stays valid across validation, updates, failures, and retries.",
    },
    {
      num: "02",
      title: "BUSINESS WORKFLOWS",
      description:
        "Turning real processes into explicit API validation, state transitions, and persistence behavior.",
    },
    {
      num: "03",
      title: "SYSTEM INTEGRATION",
      description:
        "Connecting internal data models with external systems while reasoning about synchronization, retries, and partial failures.",
    },
    {
      num: "04",
      title: "SEARCH & RETRIEVAL",
      description:
        "Translating user intent into structured constraints and returning database-backed results without allowing generated output to invent application facts.",
    },
  ];

  return (
    <section
      aria-labelledby="strengths-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            04 / CORE COMPETENCIES
          </span>
          <h2
            id="strengths-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            What I Like Solving
          </h2>
          <p className="text-base text-[#65686D] leading-relaxed">
            Engineering challenges where backend architecture and operational resilience matter most.
          </p>
        </div>

        {/* Large numbered editorial rows */}
        <div className="divide-y divide-[#DADCD8] border-y border-[#DADCD8]">
          {strengths.map((item) => (
            <div
              key={item.num}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-white/40 transition-colors px-2 sm:px-4"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#3157D5]">
                  {item.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-mono text-base sm:text-lg font-bold tracking-wider text-[#16181B] uppercase">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
