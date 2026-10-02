import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { ConfidentialityNote } from "@/components/case-study/confidentiality-note";
import { RexSyncDiagram } from "@/components/case-study/rex-sync-diagram";
import { NextProject } from "@/components/case-study/next-project";

export const metadata: Metadata = {
  title: { absolute: "REX Backend Engineering Case Study | Gokul Venkat" },
  description:
    "A confidentiality-safe case study of my Java/Spring Boot backend contributions to REX, covering HR synchronization, workflow logic, validation, relational data, and system integration.",
  openGraph: {
    title: "REX Backend Engineering Case Study | Gokul Venkat",
    description:
      "Production Java/Spring Boot backend engineering case study covering HR batch synchronization, receipt validation, event workflow changes, and invoice responsibility delegation.",
    type: "article",
    url: "/work/rex",
  },
  twitter: {
    card: "summary_large_image",
    title: "REX Backend Engineering Case Study | Gokul Venkat",
    description:
      "Production Java/Spring Boot backend engineering case study covering HR batch synchronization, receipt validation, event workflow changes, and invoice responsibility delegation.",
  },
  alternates: { canonical: "/work/rex" },
};

export default function RexCaseStudyPage() {
  const contributions = [
    {
      num: "01",
      title: "HR SYNCHRONIZATION",
      summary:
        "Implemented the initial scheduled HR synchronization integration and later refined successful-record acknowledgement and role-validation behavior within the team-maintained pipeline.",
    },
    {
      num: "02",
      title: "RECEIPT WORKFLOWS",
      summary:
        "Extended receipt behavior with validation and access-rule changes, including consistency between create/edit flows and distinctions between ownership, submission, and delegated access.",
    },
    {
      num: "03",
      title: "EVENT WORKFLOWS",
      summary:
        "Implemented event-management workflow changes, including booking closure, participant handling, correction flows, and preservation of workflow history.",
    },
    {
      num: "04",
      title: "INVOICE RESPONSIBILITY",
      summary:
        "Implemented invoice responsibility delegation and extended responses with active assignment information while validating state, tenant, and target conditions.",
    },
  ];

  const failurePrinciples = [
    {
      title: "BATCHING",
      body: "Processing data in bounded groups keeps the synchronization workflow manageable and makes individual failures easier to isolate without overloading database connections or memory.",
    },
    {
      title: "PARTIAL FAILURES",
      body: "A multi-record synchronization can contain both successful and failed records. Completion acknowledgement should correspond to records that actually completed successfully rather than assuming the whole batch succeeded or discarding valid work.",
    },
    {
      title: "RETRIES",
      body: "External-system acknowledgements create a distributed consistency problem: local persistence and remote acknowledgement cannot be treated as one database transaction. Designing for retries requires cautious ordering.",
    },
    {
      title: "ROLE VALIDATION",
      body: "Incoming role information needs validation against supported application roles before relationships are persisted, ensuring external anomalies do not corrupt local authorization structures.",
    },
    {
      title: "ORGANIZATION HISTORY",
      body: "Organizational information is versioned rather than blindly overwritten, allowing active/current data to be distinguished from previous records for auditing and retrospective reporting.",
    },
    {
      title: "TRANSACTION BOUNDARIES",
      body: "Transactions are placed deliberately around coherent local database operations, while explicitly acknowledging that HTTP calls to an external system cannot participate in the same PostgreSQL transaction.",
    },
  ];

  const lessons = [
    {
      title: "Working With Existing Architecture",
      takeaway:
        "Production engineering often means extending established patterns rather than introducing a new architecture for every feature.",
    },
    {
      title: "Database Correctness",
      takeaway:
        "Business rules frequently span several related entities, making transaction scope and relational consistency important.",
    },
    {
      title: "Distributed Failure Modes",
      takeaway:
        "An external API and a local database cannot be committed atomically, so acknowledgement and retry design matter.",
    },
    {
      title: "Authorization Is Domain Logic",
      takeaway:
        "Ownership, delegated access, role checks, and tenant context are part of backend correctness, not merely route protection.",
    },
    {
      title: "History Matters",
      takeaway:
        "For workflow and organizational records, preserving previous state can be more valuable than destructive updates.",
    },
  ];

  const techStack = [
    {
      category: "Application",
      items: ["Java 21", "Spring Boot", "Spring MVC"],
    },
    {
      category: "Persistence",
      items: ["Spring Data JPA", "Hibernate", "PostgreSQL", "Flyway"],
    },
    {
      category: "Integration",
      items: ["Spring Scheduling", "Spring RestClient"],
    },
    {
      category: "Development",
      items: ["Maven", "Git", "GitLab", "Postman", "Swagger/OpenAPI"],
    },
  ];

  const futureImprovements = [
    "Explicit idempotency strategy for synchronization acknowledgements across network retries",
    "Stronger retry and exponential backoff policies with dead-letter handling for repeatedly failing records",
    "A durable, queryable synchronization audit trail and operational metrics alerting",
    "Distributed lock/concurrency protection if multiple scheduler instances can execute simultaneously",
  ];

  return (
    <article className="min-h-screen">
      {/* 1. Case-study hero */}
      <CaseStudyHero
        label="CASE STUDY / 01"
        title="REX"
        subtitle="Contributing to a Production Employee Expense Backend"
        summary="During my internship, I contributed Java/Spring Boot backend features to a team-maintained employee expense platform. My work included HR synchronization, receipt validation and access rules, event workflows, and invoice responsibility delegation."
        metadata={{
          role: "Software Engineering Intern",
          context: "Production · Team-maintained · Proprietary",
          focus: "Backend Engineering",
          stack: "Java · Spring Boot · PostgreSQL · JPA/Hibernate",
        }}
      />

      <div className="py-12 border-b border-[#DADCD8] bg-[#F7F7F3]">
        <Container>
          <ConfidentialityNote />
        </Container>
      </div>

      {/* 2. Project context */}
      <section
        aria-labelledby="context-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                01 / OPERATIONAL ENVIRONMENT
              </span>
              <h2
                id="context-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Working inside an existing production system
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                Unlike a greenfield personal project, REX required me to work within an existing backend architecture, data model, authorization model, and team development process.
              </p>
              <p className="text-[#65686D]">
                My responsibility was not to redesign the entire system. I implemented and modified specific backend features while respecting established application conventions, relational models, tenant-aware behavior, and existing shared services.
              </p>
            </div>

            {/* Scope Comparison: Platform vs Contributed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
                  EXISTING PLATFORM CONTEXT
                </span>
                <p className="text-xs text-[#65686D]">
                  Supplied by the core platform infrastructure:
                </p>
                <ul className="space-y-2 text-sm text-[#65686D]">
                  {[
                    "JWT authentication & session infrastructure",
                    "Tenant and user context resolution",
                    "Shared authorization services & policies",
                    "Notification delivery infrastructure",
                    "Storage infrastructure & binary asset handling",
                    "Existing persistence & database migration baseline",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#DADCD8] select-none font-bold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/5 space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                  MY CONTRIBUTIONS
                </span>
                <p className="text-xs text-[#16181B] font-medium">
                  Direct backend implementations in Java &amp; Spring Boot:
                </p>
                <ul className="space-y-2 text-sm text-[#16181B]">
                  {[
                    "Scheduled HR batch synchronization pipeline",
                    "Receipt validation & ownership/deputy access controls",
                    "Event workflow changes & booking closure rules",
                    "Invoice responsibility delegation & active assignments",
                    "Data-change support for the contributed workflows",
                    "Integration testing and implementation documentation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#3157D5] select-none font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. My contribution */}
      <section
        aria-labelledby="contributions-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                02 / WORK COMPLETED
              </span>
              <h2
                id="contributions-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What I worked on
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contributions.map((c) => (
                <div
                  key={c.num}
                  className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#3157D5]">
                      {c.num}
                    </span>
                    <h3 className="font-mono text-sm font-bold tracking-wider text-[#16181B] uppercase">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#65686D] leading-relaxed">
                    {c.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Featured story — HR synchronization */}
      <section
        aria-labelledby="hr-sync-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                03 / FEATURED STORY
              </span>
              <h2
                id="hr-sync-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Synchronizing employee data across system boundaries
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                One of my main backend tasks was implementing the initial synchronization flow between an external HR system and REX.
              </p>
              <p className="text-[#65686D]">
                The integration needed to retrieve pending employee records, process them in batches, update several related local entities, validate application roles, preserve organizational-history semantics, and acknowledge successfully processed records back to the external system.
              </p>
            </div>

            {/* Narrative flow steps */}
            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#16181B]">
                Integration Pipeline Sequence
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#16181B] font-mono">
                {[
                  "1. Query external HR system for pending-count / pending records",
                  "2. Trigger scheduled job via Spring Scheduling",
                  "3. Partition incoming payload into bounded batches",
                  "4. Process individual staff record within transactional boundary",
                  "5. Create / update beneficiary record",
                  "6. Create / update application user when roles require it",
                  "7. Version organizational records to preserve history",
                  "8. Validate incoming role mappings against local permissions",
                  "9. Collect verified successful record identifiers",
                  "10. Transmit completion acknowledgement to external HR system",
                ].map((step) => (
                  <div
                    key={step}
                    className="p-3 rounded bg-[#F7F7F3] border border-[#DADCD8] text-xs leading-normal"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Synchronization architecture */}
      <section
        aria-labelledby="architecture-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                04 / SYSTEM DESIGN
              </span>
              <h2
                id="architecture-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Synchronization Architecture
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Clear separation between external HTTP coordination and transactional database updates.
              </p>
            </div>

            <RexSyncDiagram />
          </div>
        </Container>
      </section>

      {/* 6. Failure handling and consistency reasoning */}
      <section
        aria-labelledby="failure-handling-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                05 / ENGINEERING REASONING
              </span>
              <h2
                id="failure-handling-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                The interesting part was not the happy path
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Navigating partial failures, external network barriers, and database integrity without assuming perfect conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {failurePrinciples.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-2.5"
                >
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#65686D] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Additional backend contributions */}
      <section
        aria-labelledby="additional-contributions-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                06 / EXTENDED SCOPE
              </span>
              <h2
                id="additional-contributions-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Beyond synchronization
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Core enterprise features spanning financial receipt validation, event workflow changes, and invoice responsibility delegation.
              </p>
            </div>

            {/* Subsection A: Receipt correctness */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                A · RECEIPT CORRECTNESS &amp; VALIDATION
              </span>
              <h3 className="text-xl font-bold text-[#16181B]">
                Financial Validation &amp; Access Controls
              </h3>
              <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                Receipts in an expense system require strict alignment between creation, modification, and approval. I implemented and normalized validation logic across financial amounts, date ranges, and contextual rate rules, ensuring identical validation holds whether a record is initially created or later amended.
              </p>
              <div className="pt-2 text-sm text-[#16181B] space-y-2 bg-[#F7F7F3] p-4 rounded border border-[#DADCD8]">
                <p className="font-semibold font-mono text-xs text-[#65686D] uppercase">
                  Authorization Distinctions:
                </p>
                <p className="text-xs leading-relaxed text-[#65686D]">
                  Separated owner permissions (the employee who accrued the expense) from submitter permissions (an administrative assistant filing on their behalf) and deputy/delegated approvals. Enforced tenant boundaries on every lookup to guarantee complete isolation.
                </p>
              </div>
            </div>

            {/* Subsection B: Event lifecycle behavior */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                B · EVENT WORKFLOW &amp; LIFECYCLE BEHAVIOR
              </span>
              <h3 className="text-xl font-bold text-[#16181B]">
                Lifecycle Operations &amp; History Preservation
              </h3>
              <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                Contributed event-management workflow changes for team and corporate events, focusing on operational behavior. My work included booking closure, participant removal, correction handling, and preserving workflow history across changes.
              </p>
              {/* Behavior-oriented workflow diagram */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#111418] text-white font-mono text-xs space-y-3">
                <span className="text-[11px] text-[#DADCD8]/60 uppercase tracking-wider block">
                  EVENT WORKFLOW OPERATIONS
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 text-[11px]">
                  <div className="bg-white/10 px-3 py-2 rounded border border-white/20">
                    Event lifecycle handling
                  </div>
                  <span className="hidden sm:inline text-white/40">→</span>
                  <div className="bg-white/10 px-3 py-2 rounded border border-white/20">
                    Participant / booking operations
                  </div>
                  <span className="hidden sm:inline text-white/40">→</span>
                  <div className="bg-white/10 px-3 py-2 rounded border border-white/20">
                    Correction handling
                  </div>
                  <span className="hidden sm:inline text-white/40">→</span>
                  <div className="bg-white/10 px-3 py-2 rounded border border-white/20">
                    Closure processing
                  </div>
                  <span className="hidden sm:inline text-white/40">→</span>
                  <div className="bg-[#18835B]/30 text-[#18835B] px-3 py-2 rounded border border-[#18835B]/50 font-semibold">
                    Status/history preservation
                  </div>
                </div>
                <p className="text-[11px] text-[#DADCD8]/60 pt-1">
                  Preserved workflow history and applied business constraints across participant adjustments and closure events.
                </p>
              </div>
            </div>

            {/* Subsection C: Invoice responsibility delegation */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                C · INVOICE RESPONSIBILITY DELEGATION
              </span>
              <h3 className="text-xl font-bold text-[#16181B]">
                Dynamic Responsibility Assignment
              </h3>
              <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                In complex organizations, invoice ownership frequently transfers when an employee is on leave, changes departments, or exceeds local sign-off limits. I implemented backend logic to delegate invoice review responsibility safely.
              </p>
              <ul className="space-y-2 text-sm text-[#65686D]">
                <li className="flex items-start gap-2">
                  <span className="text-[#3157D5] font-bold">·</span>
                  <span><strong>Target Validation:</strong> Verified that the delegated user possesses active status, proper organizational role, and belongs to the exact matching tenant.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3157D5] font-bold">·</span>
                  <span><strong>Eligibility Checks:</strong> Restricted delegation to invoices that remained eligible for reassignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3157D5] font-bold">·</span>
                  <span><strong>Enriched Responses:</strong> Extended retrieval DTOs to surface active delegation records and previous assignment history for transparent operational visibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Engineering decisions and lessons */}
      <section
        aria-labelledby="lessons-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                07 / RETROSPECTIVE
              </span>
              <h2
                id="lessons-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What this project taught me
              </h2>
            </div>

            <div className="divide-y divide-[#DADCD8] border-y border-[#DADCD8]">
              {lessons.map((item) => (
                <div key={item.title} className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline">
                  <div className="md:col-span-5">
                    <h3 className="font-mono text-sm font-bold text-[#16181B] uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
                      {item.takeaway}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Technology used */}
      <section
        aria-labelledby="tech-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                08 / TECH STACK
              </span>
              <h2
                id="tech-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Technology Used
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((group) => (
                <div
                  key={group.category}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3"
                >
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] border-b border-[#DADCD8] pb-2">
                    {group.category}
                  </h3>
                  <ul className="space-y-1.5 font-mono text-xs text-[#16181B]">
                    {group.items.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DADCD8]" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 10. What I would improve / explore further */}
      <section
        aria-labelledby="future-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                09 / FUTURE ARCHITECTURE
              </span>
              <h2
                id="future-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                If I were extending the integration further
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Areas I would evaluate as the integration grows to handle larger enterprise scales and higher concurrency:
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-3">
              <ul className="space-y-3 text-sm text-[#16181B]">
                {futureImprovements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#3157D5] font-mono font-bold">→</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Back navigation / next-project CTA */}
      <NextProject
        label="NEXT CASE STUDY / 02"
        title="Luxora Estates"
        subtitle="Full-Stack Product &amp; Conversational Property Search"
        href="/work/luxora"
      />
    </article>
  );
}
