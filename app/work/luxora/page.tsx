import { PlaceholderCaseStudy } from "@/components/projects/placeholder-case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxora Estates Case Study | Bonam Gokul Venkat",
  description: "Full-stack real estate marketplace and conversational property search.",
};

export default function LuxoraPage() {
  return (
    <PlaceholderCaseStudy
      title="Luxora Estates — Real Estate Marketplace"
      category="Full-Stack Product"
      subtitle="Full-Stack product architecture and conversational property search."
      summary="Contributed to a team-built real-estate marketplace using Next.js, NestJS, TypeScript, PostgreSQL, and TypeORM. Engineered conversational search with natural-language constraint parsing and database-grounded retrieval."
    />
  );
}
