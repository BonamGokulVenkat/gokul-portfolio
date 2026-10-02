import React from "react";
import { Container } from "@/components/layout/container";

export function Leadership() {
  const items = [
    {
      role: "Vice Chair",
      organization: "Computer Society of India",
      copy: "Organized workshops for 200+ students, led 15 volunteers, and coordinated a DevOps Hackathon with 150+ participants.",
    },
    {
      role: "Master Orator Semi-finalist",
      organization: "Toastmasters International",
      copy: "Developed structured communication, presentation, and public-speaking skills through competitive speaking and Toastmasters activities.",
    },
  ];

  return (
    <section
      aria-labelledby="leadership-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            08 / LEADERSHIP & INITIATIVE
          </span>
          <h2
            id="leadership-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Beyond Code
          </h2>
          <p className="text-base text-[#65686D] leading-relaxed">
            Community leadership, team coordination, and structured technical communication.
          </p>
        </div>

        {/* Compact editorial columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.organization}
              className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#3157D5]">
                  {item.role}
                </span>
                <h3 className="text-lg font-bold text-[#16181B] mt-1">
                  {item.organization}
                </h3>
              </div>
              <p className="text-sm text-[#65686D] leading-relaxed">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
