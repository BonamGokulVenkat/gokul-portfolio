import { PlaceholderCaseStudy } from "@/components/projects/placeholder-case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REX Case Study | Bonam Gokul Venkat",
  description: "Production Java/Spring Boot backend engineering for employee expense and management platform.",
};

export default function RexPage() {
  return (
    <PlaceholderCaseStudy
      title="REX — Employee Expense, Receipt & Event Management Platform"
      category="Professional Experience · Proprietary System"
      subtitle="Production Java/Spring Boot backend engineering at Saptarishi Solutions."
      summary="Contributed backend features across receipts, corporate/team events, approval state transitions, and scheduled HRLink synchronization. Full case study write-up coming in the next phase."
    />
  );
}
