import { Hero } from "@/components/layout/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Experience } from "@/components/home/experience";
import { EngineeringStrengths } from "@/components/home/engineering-strengths";
import { TechnicalFoundation } from "@/components/home/technical-foundation";
import { ResearchSection } from "@/components/home/research";
import { ProblemSolving } from "@/components/home/problem-solving";
import { Leadership } from "@/components/home/leadership";
import { Education } from "@/components/home/education";
import { About } from "@/components/home/about";
import { HiringCta } from "@/components/home/hiring-cta";

export default function Home() {
  return (
    <>
      {/* 01 / Homepage Hero */}
      <Hero />

      {/* 02 / Selected Engineering Work */}
      <SelectedWork />

      {/* 03 / Professional Experience */}
      <Experience />

      {/* 04 / Engineering Strengths (What I Like Solving) */}
      <EngineeringStrengths />

      {/* 05 / Technical Foundation */}
      <TechnicalFoundation />

      {/* 06 / Research & Publication */}
      <ResearchSection />

      {/* 07 / Problem Solving (LeetCode) */}
      <ProblemSolving />

      {/* 08 / Leadership & Communication (Beyond Code) */}
      <Leadership />

      {/* 09 / Education */}
      <Education />

      {/* 10 / About */}
      <About />

      {/* 11 / Final Hiring CTA */}
      <HiringCta />
    </>
  );
}
