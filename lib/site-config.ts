export interface SiteConfig {
  url: string;
  name: string;
  shortName: string;
  role: string;
  secondaryRole: string;
  status: string;
  location: string;
  phone: string;
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
    phone: string;
    resume: string;
  };
  navItems: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export const siteConfig: SiteConfig = {
  // Retains the site origin already configured in the application metadata.
  url: "https://gokulvenkat.dev",
  name: "Bonam Gokul Venkat",
  shortName: "Gokul Venkat",
  role: "Backend Software Engineer",
  secondaryRole: "Backend-focused Full-Stack Engineer",
  status: "Open to entry-level Backend Software Engineer and backend-focused Full-Stack Engineer opportunities.",
  location: "Bengaluru, India · Open to relocation",
  phone: "+91 73820 27673",
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
    github: "https://github.com/BonamGokulVenkat",
    linkedin: "https://linkedin.com/in/bonam-gokul-venkat/",
    leetcode: "https://leetcode.com/u/Gokul_Venkat1",
    email: "mailto:bonamgokul@gmail.com",
    phone: "tel:+917382027673",
    resume: "/resume.pdf",
  },
  navItems: [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Research", href: "/#research" },
    { label: "About", href: "/#about" },
    { label: "Resume ↗", href: "/resume.pdf", isExternal: true },
  ],
};
