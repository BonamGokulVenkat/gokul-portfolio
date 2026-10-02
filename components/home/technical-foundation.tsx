import React from "react";
import { Container } from "@/components/layout/container";

export function TechnicalFoundation() {
  const categories = [
    {
      label: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "NestJS",
        "Node.js",
        "REST APIs",
      ],
    },
    {
      label: "Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++"],
    },
    {
      label: "Data",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "TypeORM",
        "Drizzle ORM",
        "Flyway",
      ],
    },
    {
      label: "Frontend",
      skills: ["Next.js", "React", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      label: "Engineering",
      skills: [
        "API Design",
        "Transactions",
        "Validation",
        "Authentication",
        "RBAC",
        "Scheduled Jobs",
        "Database Modeling",
        "Workflow Design",
        "Debugging",
      ],
    },
    {
      label: "Tools",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Postman",
        "Maven",
        "Swagger/OpenAPI",
        "GitLab CI/CD",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="technical-foundation-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8]"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            05 / CAPABILITIES
          </span>
          <h2
            id="technical-foundation-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Technical Foundation
          </h2>
          <p className="text-base text-[#65686D] leading-relaxed">
            Technologies, libraries, and engineering practices applied across production systems and projects.
          </p>
        </div>

        {/* Grouped typography layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {categories.map((category) => (
            <div
              key={category.label}
              className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] border-b border-[#DADCD8] pb-2">
                {category.label}
              </h3>
              <ul className="space-y-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-medium text-[#16181B] flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#DADCD8]"
                      aria-hidden="true"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
