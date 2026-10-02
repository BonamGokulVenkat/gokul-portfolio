import React from "react";
import { Container } from "@/components/layout/container";

export function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  return (
    <section
      aria-labelledby="education-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            09 / ACADEMIC BACKGROUND
          </span>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Education
          </h2>
        </div>

        {/* Structured education row */}
        <div className="rounded-xl border border-[#DADCD8] bg-white p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-[#DADCD8] pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#16181B]">
                Bachelor of Technology in Artificial Intelligence & Data Science
              </h3>
              <p className="text-base font-medium text-[#3157D5] mt-0.5">
                SRKR Engineering College
              </p>
            </div>
            <div className="flex items-center gap-4 font-mono text-sm">
              <span className="text-[#65686D]">2022–2026</span>
              <span className="bg-[#18835B]/10 text-[#18835B] font-semibold px-2.5 py-0.5 rounded-sm">
                CGPA: 8.45 / 10
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D] mb-3">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="font-mono text-xs bg-[#F7F7F3] border border-[#DADCD8] px-3 py-1 rounded-sm text-[#16181B]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
