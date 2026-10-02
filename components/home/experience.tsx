import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Saptarishi Solutions",
      dates: "Dec 2025 – Present",
      context: "REX — Employee Expense, Receipt, Invoice & Event Management Platform",
      summary: "Working on a production Java/Spring Boot backend.",
      bullets: [
        "Contributed backend functionality across HR synchronization, receipts, events, invoices, and approval workflows.",
        "Worked with Spring Data JPA, Hibernate, PostgreSQL, Flyway, scheduled jobs, transactions, API testing, and tenant-aware application behavior.",
        "Participated in code reviews, QA issue resolution, Postman testing, Swagger/OpenAPI documentation, Agile/Scrum, and GitLab CI/CD.",
      ],
      caseStudyHref: "/work/rex",
    },
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-16"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            03 / EXPERIENCE
          </span>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Experience
          </h2>
          <p className="text-base text-[#65686D] leading-relaxed">
            Direct production contributions, enterprise backend engineering, and workflow systems.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-10 border-l border-[#DADCD8] pl-6 sm:pl-8 ml-2">
          {experiences.map((exp) => (
            <article key={exp.company} className="relative space-y-4">
              {/* Timeline marker */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#16181B] bg-white"
                aria-hidden="true"
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-xl font-bold text-[#16181B]">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-[#3157D5]">
                    {exp.company}
                  </p>
                </div>
                <span className="font-mono text-xs sm:text-sm text-[#65686D]">
                  {exp.dates}
                </span>
              </div>

              <div className="rounded-md border border-[#DADCD8] bg-white p-4 space-y-3">
                <p className="font-mono text-xs font-medium text-[#16181B]">
                  {exp.context}
                </p>
                <p className="text-sm font-medium text-[#16181B]">
                  {exp.summary}
                </p>

                <ul className="space-y-2 text-sm text-[#65686D] list-disc list-outside pl-4">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href={exp.caseStudyHref}
                    className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#3157D5] hover:text-[#2645af] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                  >
                    Explore REX case study →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
