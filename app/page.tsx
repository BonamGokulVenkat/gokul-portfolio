import { Hero } from "@/components/layout/hero";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <>
      {/* Homepage Hero */}
      <Hero />

      {/* Clean section anchors for Phase 2 implementation */}
      <section
        id="work"
        tabIndex={-1}
        className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-20 focus:outline-none"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
              02 / SELECTED WORK
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-[#16181B]">
              Featured Projects & Systems
            </h2>
            <p className="text-sm text-[#65686D]">
              Production backend services, distributed systems, and full-stack
              applications. Case studies coming in Phase 2.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="experience"
        tabIndex={-1}
        className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-20 focus:outline-none"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
              03 / BACKGROUND & TRACK RECORD
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-[#16181B]">
              Experience & Production Impact
            </h2>
            <p className="text-sm text-[#65686D]">
              Hands-on engineering contributions, production Java/Spring Boot
              services, and architectural improvements. Coming in Phase 2.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="research"
        tabIndex={-1}
        className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-20 focus:outline-none"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
              04 / RESEARCH
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-[#16181B]">
              AI & Data Science Research
            </h2>
            <p className="text-sm text-[#65686D]">
              Applied machine learning publications and system evaluation
              benchmarks. Coming in Phase 2.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="about"
        tabIndex={-1}
        className="py-16 sm:py-24 scroll-mt-20 focus:outline-none"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
              05 / ABOUT
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-[#16181B]">
              Engineering Philosophy & Context
            </h2>
            <p className="text-sm text-[#65686D]">
              Detailing technical interests, core values, system design
              principles, and contact details. Coming in Phase 2.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
