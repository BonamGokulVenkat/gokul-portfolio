import { PlaceholderCaseStudy } from "@/components/projects/placeholder-case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic AI IDS Research | Bonam Gokul Venkat",
  description: "Deep learning network intrusion detection and automated response research presented at SCI-2026.",
};

export default function AgenticIdsPage() {
  return (
    <PlaceholderCaseStudy
      title="Agentic AI Driven Intrusion Detection and Automated Response System"
      category="Academic Research · Cybersecurity"
      subtitle="Final-year research presented at SCI-2026, Swinburne Vietnam, Hanoi."
      summary="Explored multi-task deep learning architectures on UNSW-NB15 with mutual-information feature selection and an agentic risk decision engine generating ALLOW, MONITOR, and BLOCK responses. MLP achieved 96.6% accuracy."
    />
  );
}
