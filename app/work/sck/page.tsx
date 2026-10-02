import { PlaceholderCaseStudy } from "@/components/projects/placeholder-case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCK Platform Case Study | Bonam Gokul Venkat",
  description: "Collaborative full-stack wellness and booking platform.",
};

export default function SckPage() {
  return (
    <PlaceholderCaseStudy
      title="SCK — Wellness, Booking & Administration Platform"
      category="Collaborative Full-Stack Project"
      subtitle="Collaborative full-stack development within a 3-person team."
      summary="Contributed to a Next.js, TypeScript, PostgreSQL, and Drizzle ORM platform. Focused on the SKY experience, responsive navigation, UI systems, and booking integrations."
    />
  );
}
