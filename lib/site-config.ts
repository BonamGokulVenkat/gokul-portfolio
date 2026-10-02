export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  secondaryRole: string;
  status: string;
  location: string;
  availability: string;
  tagline: string;
  statement: string;
  summary: string;
  techStack: string[];
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
    resume: string;
  };
  navItems: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Bonam Gokul Venkat",
  shortName: "Gokul Venkat",
  role: "Backend Software Engineer",
  secondaryRole: "Backend-focused Full-Stack Engineer",
  status: "Open to entry-level Backend Software Engineer and backend-focused Full-Stack Engineer opportunities.",
  location: "Bengaluru, India · Open to relocation",
  availability: "Open to entry-level backend and backend-focused full-stack roles.",
  tagline: "01 / BACKEND ENGINEERING",
  statement:
    "I build backend systems where data integrity, business rules, integrations, and real-world workflows matter.",
  summary:
    "2026 AI & Data Science graduate with hands-on experience contributing to production Java/Spring Boot systems and building full-stack products with PostgreSQL, TypeScript, Next.js, and NestJS.",
  techStack: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
    "TypeScript",
    "Next.js",
  ],
  links: {
    github: "https://github.com/bonamgokul",
    linkedin: "https://linkedin.com/in/bonamgokul",
    leetcode: "https://leetcode.com/bonamgokul",
    email: "mailto:bonamgokul@example.com",
    resume: "/resume.pdf",
  },
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "About", href: "#about" },
    { label: "Resume ↗", href: "/resume.pdf", isExternal: true },
  ],
};
