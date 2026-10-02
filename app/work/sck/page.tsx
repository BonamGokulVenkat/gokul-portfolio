import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { SckArchitectureDiagram } from "@/components/case-study/sck-architecture-diagram";
import { SckConcurrencyComparison } from "@/components/case-study/sck-concurrency-comparison";
import { SckScreenshotGallery } from "@/components/case-study/sck-screenshot-gallery";

export const metadata: Metadata = {
  title: "SCK Full-Stack Engineering Case Study | Gokul Venkat",
  description:
    "A collaborative full-stack engineering case study covering SCK, including direct frontend contributions, booking workflow collaboration, PostgreSQL transactions, realtime updates, and concurrency lessons.",
  openGraph: {
    title: "SCK Full-Stack Engineering Case Study | Gokul Venkat",
    description:
      "A collaborative full-stack engineering case study covering SCK, including direct frontend contributions, booking workflow collaboration, PostgreSQL transactions, realtime updates, and concurrency lessons.",
    type: "article",
    url: "https://gokulvenkat.dev/work/sck",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCK Full-Stack Engineering Case Study | Gokul Venkat",
    description:
      "Collaborative full-stack case study covering SCK: direct frontend work, booking workflow collaboration, PostgreSQL transactions, and concurrency lessons.",
  },
};

export default function SckCaseStudyPage() {
  const journeys = [
    {
      group: "VISITORS",
      color: "text-sky-600",
      points: [
        "Browse public wellness content & guided philosophies",
        "Explore dynamic offerings catalog & practitioner credentials",
        "Submit general inquiries & contact requests",
        "Access targeted campaign intake forms",
      ],
    },
    {
      group: "USERS",
      color: "text-emerald-600",
      points: [
        "Register & login with credentials; verify phone via OTP",
        "Recover forgotten passwords via email token reset",
        "Choose offerings; select slots, format (in-person/online), & location",
        "Submit booking/registration with intake answers & optional receipts",
        "View active & past bookings; request cancellation; submit session feedback",
      ],
    },
    {
      group: "ADMINS",
      color: "text-indigo-600",
      points: [
        "Configure offerings, dynamic intake questions, locations, & slot schedules",
        "Manage booking approvals, status updates, & cancellation requests",
        "Manage user accounts & phone verification statuses",
        "Review inbound inquiries, update public content, & launch campaigns",
        "Trigger & monitor communication workflows (WhatsApp / Nodemailer)",
      ],
    },
  ];

  const contributions = [
    {
      num: "01",
      title: "SKY EXPERIENCE",
      summary:
        "Implemented the Sudarshan Kriya Yoga (SKY) public experience, including the interactive ChakraMeditation UI and breathing sequence presentation.",
    },
    {
      num: "02",
      title: "RESPONSIVE UX",
      summary:
        "Improved layout behavior across mobile and desktop breakpoints, ensuring high readability and clean tap targets across small viewport devices.",
    },
    {
      num: "03",
      title: "NAVIGATION",
      summary:
        "Added and refined navigation paths around SKY, gallery, and public content to ensure seamless transition into offerings and booking funnels.",
    },
    {
      num: "04",
      title: "CONFIGURABLE CONTENT",
      summary:
        "Added environment-configured program linking and UI improvements including testimonial carousel presentation and media rendering.",
    },
  ];

  const lessons = [
    {
      title: "TRANSACTIONS ≠ CONCURRENCY SAFETY",
      body: "Atomic multi-statement writes guarantee all-or-nothing execution, but they do not prevent race conditions if availability is checked before the transaction and the slot update lacks conditional guards or locking.",
    },
    {
      title: "BACKEND VALIDATION MUST MATCH UI RULES",
      body: "Client-side form requirements and step indicators are merely user experience conveniences. If the server API accepts weaker payloads, unauthorized or corrupted state will enter the database.",
    },
    {
      title: "REALTIME IS NOT CONSISTENCY",
      body: "WebSocket pub/sub subscriptions improve interface freshness and perceived speed, but they provide zero transactional guarantees. Distributed data consistency belongs in the database, not in client event listeners.",
    },
    {
      title: "AUTHORIZATION MUST EXIST AT THE API",
      body: "Hiding admin buttons or redirecting unauthenticated users in the browser provides no security boundary. Every API route handler must strictly verify session JWTs and record ownership independently.",
    },
    {
      title: "EXTERNAL EFFECTS NEED FAILURE DESIGN",
      body: "Third-party network calls (WhatsApp gateway, Nodemailer SMTP, Cloudinary uploads) cannot be rolled back by PostgreSQL transactions. Side effects require best-effort handling or durable outbox patterns.",
    },
  ];

  const techStack = [
    {
      category: "APPLICATION",
      items: ["Next.js (App Router)", "React 18", "TypeScript"],
    },
    {
      category: "DATA",
      items: ["PostgreSQL", "Drizzle ORM", "ACID Transactions"],
    },
    {
      category: "AUTH",
      items: ["Auth.js / NextAuth", "bcrypt Password Hashing", "JWT Sessions"],
    },
    {
      category: "REALTIME",
      items: ["Supabase Postgres Changes", "WebSocket Channels"],
    },
    {
      category: "INTEGRATIONS",
      items: [
        "Cloudinary (Media CDN)",
        "WhatsApp Gateway (OTP & Alerts)",
        "Nodemailer / SMTP (Password Reset)",
      ],
    },
    {
      category: "UI",
      items: [
        "Tailwind CSS",
        "Radix / shadcn-style Components",
        "Framer Motion",
      ],
    },
  ];

  const hardeningPriorities = [
    {
      num: "01",
      title: "Make slot claim atomic",
      desc: "Implement UPDATE offering_slots SET status = 'booked' WHERE id = ? AND status = 'available' RETURNING id, rolling back if 0 rows are returned.",
    },
    {
      num: "02",
      title: "Add database invariant preventing duplicate active bookings per slot",
      desc: "Create a PostgreSQL partial unique index on bookings(slot_id) WHERE status IN ('pending', 'confirmed') as a hard database-level constraint.",
    },
    {
      num: "03",
      title: "Enforce valid booking state transitions centrally",
      desc: "Replace ad-hoc status updates with a centralized state machine rejecting invalid jumps (e.g., cancelled → confirmed).",
    },
    {
      num: "04",
      title: "Move all required form/slot/location validation to the server",
      desc: "Enforce Zod schema validation on route handlers so the API strictly rejects incomplete intakes regardless of client UI rules.",
    },
    {
      num: "05",
      title: "Add idempotency for booking submission",
      desc: "Support client-generated idempotency keys to safely prevent accidental double-submits from rapid network retries.",
    },
    {
      num: "06",
      title: "Harden communication APIs and scheduled-job authorization",
      desc: "Secure background trigger endpoints and webhook routes with timing-safe HMAC secret headers rather than simple bearer tokens.",
    },
    {
      num: "07",
      title: "Add durable notification delivery/outbox handling",
      desc: "Persist outbound communication events to an outbox table in the same transaction as the booking, decoupling external HTTP calls from HTTP response time.",
    },
    {
      num: "08",
      title: "Improve realtime authorization and reconnect reconciliation",
      desc: "Add row-level security tokens to Supabase channel subscriptions and reconcile stale client state via full timestamp refetch upon reconnect.",
    },
    {
      num: "09",
      title: "Add targeted integration/concurrency tests",
      desc: "Build automated test suites with parallel worker threads attempting simultaneous bookings on identical slots to verify race prevention.",
    },
    {
      num: "10",
      title: "Add production observability before claiming scale/reliability",
      desc: "Incorporate structured JSON logging, OpenTelemetry tracing, and database connection pool metrics prior to making high-availability claims.",
    },
  ];

  return (
    <article className="min-h-screen">
      {/* 1. Case-study hero */}
      <CaseStudyHero
        label="CASE STUDY / 03"
        title="SCK Wellness Platform"
        subtitle="Collaborative Full-Stack Development in a 3-Person Team"
        summary="SCK is a wellness and booking platform combining public content, configurable offerings, user accounts, bookings, administration, communication workflows, campaigns, and realtime updates. I directly implemented frontend and responsive features and collaborated with the other two developers on booking workflows, debugging, testing, integration, and feature completion."
        metaItems={[
          { label: "ROLE", value: "Full-Stack Developer" },
          { label: "TEAM", value: "3-person development team" },
          { label: "FOCUS", value: "Frontend + Workflow Collaboration" },
          {
            label: "STACK",
            value: "Next.js · TypeScript · PostgreSQL · Drizzle ORM",
          },
        ]}
        backHref="/#work"
        backLabel="Back to selected work"
      />

      {/* 2. Product context */}
      <section
        aria-labelledby="product-context-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                01 / PRODUCT CONTEXT
              </span>
              <h2
                id="product-context-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                A configurable wellness and booking platform
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                SCK serves as a centralized hub for holistic wellness offerings, combining public editorial content, interactive breathwork guidance, and self-service booking with administrative scheduling, communication triggers, and campaign coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {journeys.map((j) => (
                <div
                  key={j.group}
                  className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#DADCD8] pb-2">
                    <h3 className={`font-mono text-xs font-bold uppercase tracking-wider ${j.color}`}>
                      {j.group}
                    </h3>
                    <span className="font-mono text-[10px] text-[#65686D]">Journey</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#16181B]">
                    {j.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="text-[#3157D5] font-bold">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Team & ownership */}
      <section
        aria-labelledby="team-ownership-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                02 / TEAM &amp; OWNERSHIP
              </span>
              <h2
                id="team-ownership-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Working in a 3-person development team
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Building SCK was a collaborative effort with three engineers sharing responsibility across the stack. To reflect engineering contributions accurately, this case study clearly differentiates direct code ownership, collaborative integration, and broader platform infrastructure built by teammates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Direct Implementation */}
              <div className="p-6 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#3157D5]/30 pb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5]">
                    DIRECT IMPLEMENTATION
                  </span>
                  <span className="font-mono text-[10px] bg-[#3157D5] text-white px-2 py-0.5 rounded">
                    Sole Author
                  </span>
                </div>
                <p className="text-xs text-[#65686D]">
                  Directly committed features supported by repository Git history:
                </p>
                <ul className="space-y-2 text-xs text-[#16181B] font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5]">✓</span>
                    <span>SKY page &amp; public experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5]">✓</span>
                    <span>ChakraMeditation component</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5]">✓</span>
                    <span>Responsive SKY layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5]">✓</span>
                    <span>Navigation additions &amp; paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5]">✓</span>
                    <span>Configurable program linking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5]">✓</span>
                    <span>Testimonials carousel &amp; UI work</span>
                  </li>
                </ul>
              </div>

              {/* Collaborative Contribution */}
              <div className="p-6 rounded-lg border border-amber-500/40 bg-amber-500/5 space-y-3">
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">
                    COLLABORATIVE CONTRIBUTION
                  </span>
                  <span className="font-mono text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded">
                    Co-Developed
                  </span>
                </div>
                <p className="text-xs text-[#65686D]">
                  Cross-functional collaboration with the other two developers:
                </p>
                <ul className="space-y-2 text-xs text-[#16181B] font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">↔</span>
                    <span>Booking-workflow support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">↔</span>
                    <span>Debugging API/client integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">↔</span>
                    <span>End-to-end user journey testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">↔</span>
                    <span>Route handler payload wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">↔</span>
                    <span>Helping teammates complete flows</span>
                  </li>
                </ul>
              </div>

              {/* Broader Team System */}
              <div className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <div className="flex items-center justify-between border-b border-[#DADCD8] pb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#65686D]">
                    BROADER TEAM SYSTEM
                  </span>
                  <span className="font-mono text-[10px] bg-gray-200 text-[#65686D] px-2 py-0.5 rounded">
                    Teammate Led
                  </span>
                </div>
                <p className="text-xs text-[#65686D]">
                  System foundations designed and maintained by the wider team:
                </p>
                <ul className="space-y-2 text-xs text-[#65686D] font-mono">
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>Booking APIs &amp; controllers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>Database schema &amp; Drizzle migrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>Slot scheduling &amp; capacity rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>Admin oversight consoles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>Supabase Realtime pub/sub infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>WhatsApp gateway &amp; Nodemailer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>·</span>
                    <span>Campaign &amp; inquiry engine</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#F7F7F3] border border-[#DADCD8] text-xs text-[#65686D]">
              <strong className="text-[#16181B]">Ownership Boundary: </strong>
              I do not claim sole authorship of the booking backend, database schema, all booking APIs, concurrency control, or the platform as a whole. My role spanned dedicated frontend execution, UI subsystem design, and collaborative feature integration across booking and user touchpoints.
            </div>
          </div>
        </Container>
      </section>

      {/* 4. My direct contributions */}
      <section
        aria-labelledby="direct-contributions-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                03 / DIRECT CONTRIBUTIONS
              </span>
              <h2
                id="direct-contributions-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What I directly implemented
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Four key editorial areas committed directly to the repository codebase, covering interactive wellness modules, cross-device responsiveness, navigation hierarchy, and configurable UI components.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contributions.map((c) => (
                <div
                  key={c.num}
                  className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#DADCD8] pb-2">
                    <span className="font-mono text-xs font-bold text-[#3157D5]">
                      {c.num} — {c.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#65686D]">
                      Direct Implementation
                    </span>
                  </div>
                  <p className="text-sm text-[#16181B] leading-relaxed">
                    {c.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Collaborative booking contribution */}
      <section
        aria-labelledby="collaborative-booking-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                04 / COLLABORATIVE CONTRIBUTION
              </span>
              <h2
                id="collaborative-booking-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Helping complete the booking workflow
              </h2>
            </div>

            <blockquote className="p-6 rounded-lg border-l-4 border-[#3157D5] bg-[#F7F7F3] text-sm sm:text-base text-[#16181B] leading-relaxed italic">
              &ldquo;Beyond my directly committed frontend work, I collaborated with the other two developers on the booking workflow. My contribution included helping reason through the user journey, debugging integration issues, testing flows, and supporting feature completion across booking-related screens and APIs.&rdquo;
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#65686D] leading-relaxed">
              <p>
                In a three-person team, feature delivery rarely occurs in strict isolation. While teammates established the foundational Drizzle schemas and API controllers, I participated actively in verifying that the multi-step booking funnel operated reliably from the user’s perspective.
              </p>
              <p>
                This collaborative work involved diagnosing payload discrepancies between client forms and route handlers, testing how draft state persisted across browser refreshes, reviewing cancellation edge cases, and ensuring that slot selection feedback rendered cleanly on both desktop and mobile viewports.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. System architecture */}
      <section
        aria-labelledby="architecture-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                05 / SYSTEM ARCHITECTURE
              </span>
              <h2
                id="architecture-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Unified Next.js application architecture
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                SCK was engineered as a unified Next.js App Router application rather than a distributed microservice setup. A single runtime coordinates React client rendering, server route handlers, database transactions via Drizzle ORM, and asynchronous side-service integrations.
              </p>
            </div>

            <SckArchitectureDiagram />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#65686D]">
              <div className="p-4 rounded-lg bg-white border border-[#DADCD8] space-y-1">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Unified Process Benefits
                </span>
                <p>
                  Zero cross-service network overhead for server components, collocated route handlers, unified TypeScript type sharing between Drizzle schema and client views, and simplified containerized deployments.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#DADCD8] space-y-1">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Asynchronous Integrations
                </span>
                <p>
                  Supabase Realtime provides pub/sub channels for UI cache invalidation, Cloudinary offloads image and receipt CDN hosting, and WhatsApp/Nodemailer handle best-effort communication triggers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Booking workflow */}
      <section
        aria-labelledby="booking-workflow-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                06 / BOOKING WORKFLOW
              </span>
              <h2
                id="booking-workflow-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                How the booking flow works
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                The booking journey takes users from initial program selection through dynamic intake questionnaires and slot reservation to post-submission status tracking.
              </p>
            </div>

            {/* End-to-End Pipeline Card */}
            <div className="p-6 rounded-xl border border-[#DADCD8] bg-[#F7F7F3] space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                END-TO-END BOOKING REQUEST LIFECYCLE
              </span>

              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">1. User Selects Offering</span>
                  <span className="text-[#65686D]">CST, Rakkenho, Music Therapy, or SKY</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 2 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">2. Slot / Format / Location</span>
                  <span className="text-[#65686D]">Choose time window, in-person center or virtual link</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 3 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">3. Dynamic Intake Questions</span>
                  <span className="text-[#65686D]">Custom questionnaire fields configured per offering</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 4 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">4. Optional Receipt Upload</span>
                  <span className="text-[#65686D]">Direct Cloudinary upload if payment proof is required</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 5 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">5. Client Submits Request</span>
                  <span className="text-[#65686D]">POST /api/bookings with auth session cookie</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 6 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">6. Server Validates Core Fields</span>
                  <span className="text-[#65686D]">Ensure offering exists, slot is active, user is valid</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 7 */}
                <div className="p-4 rounded bg-[#111418] text-white border border-[#3157D5] space-y-2">
                  <div className="flex items-center justify-between text-[#3157D5] font-bold">
                    <span>7. DATABASE TRANSACTION (BEGIN ... COMMIT)</span>
                    <span className="text-[10px] bg-[#3157D5]/20 text-sky-300 px-2 py-0.5 rounded">PostgreSQL tx</span>
                  </div>
                  <div className="text-[11px] text-[#DADCD8]/80 space-y-1 pl-2 border-l border-white/20">
                    <p>• Insert new record into bookings table with status = &apos;pending&apos;</p>
                    <p>• Update offering_slots SET status = &apos;booked&apos; WHERE id = ?</p>
                    <p>• Delete transient draft record from booking_drafts table</p>
                  </div>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 8 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">8. Notification Attempt</span>
                  <span className="text-[#65686D]">Best-effort WhatsApp / email trigger outside transaction</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 9 */}
                <div className="p-3 rounded bg-emerald-50 border border-emerald-300 text-emerald-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold">9. Thank-You &amp; Booking Details</span>
                  <span className="text-emerald-700">Client displays confirmation; redirects to user bookings dashboard</span>
                </div>
              </div>
            </div>

            {/* Lifecycle & Cancellation Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  STANDARD STATUS PROGRESSION
                </span>
                <div className="flex items-center gap-2 font-mono text-xs text-[#16181B]">
                  <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-semibold">pending</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-semibold">confirmed</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-semibold">completed</span>
                </div>
                <p className="text-xs text-[#65686D] leading-relaxed">
                  Bookings begin in a pending state awaiting review or payment verification. Once approved by an administrator, the booking shifts to confirmed, and is marked completed following session delivery.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600 block">
                  CANCELLATION WORKFLOW
                </span>
                <div className="flex items-center gap-1.5 flex-wrap font-mono text-xs text-[#16181B]">
                  <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">pending / confirmed</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800">cancellation_pending</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800">cancelled</span>
                </div>
                <p className="text-xs text-[#65686D] leading-relaxed">
                  Users can initiate a cancellation request. If denied by an admin, the status reverts to confirmed; if approved, the slot status is returned to available.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-900 leading-relaxed">
              <strong className="font-semibold">Important Distinction: </strong>
              This pipeline represents the <em>normal UI flow</em> supported across frontend forms and route handlers. It is not currently backed by a strictly enforced finite state machine in the database layer.
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Transaction vs concurrency */}
      <section
        aria-labelledby="concurrency-deepdive-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                07 / ENGINEERING DEEP-DIVE
              </span>
              <h2
                id="concurrency-deepdive-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                A transaction does not automatically prevent double booking
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                One of the most valuable engineering insights gained from auditing the SCK booking flow is that wrapping multi-statement writes inside a database transaction does not by itself solve concurrent race conditions.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-4 text-sm sm:text-base text-[#16181B] leading-relaxed">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5]">
                ANATOMY OF THE CHECK-THEN-WRITE RACE CONDITION
              </h3>
              <p>
                In the current implementation, slot availability is verified through an application-level <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">SELECT</code> query prior to starting the database transaction. Once the availability check passes, a PostgreSQL transaction opens to insert the booking, update the slot record, and delete the draft:
              </p>

              <div className="p-4 rounded-lg bg-[#111418] text-white font-mono text-xs space-y-1">
                <p className="text-amber-400">{`// 1. Pre-check executed in application code before transaction`}</p>
                <p>const slot = await db.query.offeringSlots.findFirst({`{ where: eq(offeringSlots.id, slotId) }`});</p>
                <p>if (slot.status !== &apos;available&apos;) return error(&quot;Slot taken&quot;);</p>
                <p className="text-white/40 pt-2">{`// 2. Transaction opened`}</p>
                <p className="text-sky-300">await db.transaction(async (tx) =&gt; {`{`}</p>
                <p className="pl-4">await tx.insert(bookings).values({`{ slotId, userId, status: &apos;pending&apos; }`});</p>
                <p className="pl-4 text-red-400">{`// Unconditional update by primary key only`}</p>
                <p className="pl-4 text-red-400">await tx.update(offeringSlots).set({`{ status: &apos;booked&apos; }`}).where(eq(offeringSlots.id, slotId));</p>
                <p className="pl-4">await tx.delete(bookingDrafts).where(eq(bookingDrafts.id, draftId));</p>
                <p className="text-sky-300">{`}`});</p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#65686D]">
                <p>
                  <strong>Why simultaneous requests race:</strong>
                </p>
                <ul className="space-y-2 pl-4 list-disc text-[#16181B]">
                  <li>
                    <strong>No row-level locking:</strong> The initial check is a non-locking read. There is no explicit <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">SELECT ... FOR UPDATE</code> to block concurrent readers on that slot row.
                  </li>
                  <li>
                    <strong>Unconditional update:</strong> Inside the transaction, the <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">UPDATE</code> statement targets <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">WHERE id = ?</code> rather than checking whether <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">status = &apos;available&apos;</code> at the moment of execution.
                  </li>
                  <li>
                    <strong>Missing unique constraint:</strong> There is no partial unique index or exclusion constraint on the bookings table preventing more than one active record for a given <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">slot_id</code>.
                  </li>
                </ul>

                <p className="pt-2">
                  Under parallel load, if Request A and Request B arrive within milliseconds of each other, both read <code className="font-mono text-xs text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">status === &apos;available&apos;</code>. Both proceed into their respective transactions under standard PostgreSQL <em>Read Committed</em> isolation. Both transactions commit cleanly, resulting in two separate pending booking records referencing the exact same slot.
                </p>
                <p className="italic text-[#65686D]">
                  Note: This is characterized as an architectural code-level race condition identified during technical review, not an outage that occurred in production traffic.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Current implementation vs proposed improvement */}
      <section
        aria-labelledby="concurrency-comparison-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                08 / CONCURRENCY REMEDIATION
              </span>
              <h2
                id="concurrency-comparison-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Current implementation vs proposed improvement
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                A side-by-side analysis contrasting the existing non-conditional slot assignment against an atomic conditional claim backed by database-level constraints.
              </p>
            </div>

            <SckConcurrencyComparison />

            <div className="space-y-4 text-xs sm:text-sm text-[#65686D] leading-relaxed">
              <p>
                <strong>The Atomic Conditional Claim Pattern:</strong> By combining the availability check and the state transition into a single SQL statement (<code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded text-[#16181B]">UPDATE ... WHERE id = :slotId AND status = &apos;available&apos; RETURNING id</code>), PostgreSQL takes an exclusive row lock as part of the write.
              </p>
              <p>
                The first transaction to reach the row updates it and receives one returned ID row. Any competing transaction queued behind it on that same row immediately re-evaluates the <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded text-[#16181B]">WHERE status = &apos;available&apos;</code> predicate, finds that the condition no longer holds, and returns 0 rows. The application can immediately abort with an explicit HTTP 409 Conflict without creating orphaned booking records.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Realtime updates */}
      <section
        aria-labelledby="realtime-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                09 / REALTIME ARCHITECTURE
              </span>
              <h2
                id="realtime-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Keeping views fresh with database change subscriptions
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                SCK utilizes Supabase Postgres Changes subscriptions to push live updates to connected browser clients, ensuring administrators and users see status adjustments without manual page reloads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  SHARED CHANNELS
                </span>
                <p className="text-xs text-[#65686D] leading-relaxed">
                  Clients subscribe to shared per-table channels for <code className="font-mono text-[11px] bg-gray-100 px-1 py-0.5 rounded">bookings</code> and <code className="font-mono text-[11px] bg-gray-100 px-1 py-0.5 rounded">offering_slots</code>, listening for INSERT and UPDATE event payloads.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  BACKOFF &amp; JITTER
                </span>
                <p className="text-xs text-[#65686D] leading-relaxed">
                  Subscription managers implement exponential backoff with randomized jitter to prevent reconnect storms from overwhelming server resources after transient network drops.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  REFETCH ON CHANGE
                </span>
                <p className="text-xs text-[#65686D] leading-relaxed">
                  Event handlers typically trigger targeted HTTP refetches rather than mutating client state in-place, preventing out-of-order event payloads from corrupting local memory.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-amber-300 bg-amber-50 space-y-2 text-xs sm:text-sm text-amber-950">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800 block">
                CRITICAL SYSTEM BOUNDARY: FRESHNESS VS CONSISTENCY
              </span>
              <p>
                <strong>Realtime updates improve freshness; they do not provide transaction locking or booking consistency.</strong> A WebSocket event notifies a client that a slot changed state, but it cannot prevent two active users from submitting bookings at the same moment before the event arrives. Furthermore, certain subscription channels currently lack granular authorization filters and require hardening to avoid broadcasting private tenant events.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Authentication & authorization */}
      <section
        aria-labelledby="auth-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                10 / AUTHENTICATION &amp; ACCESS CONTROL
              </span>
              <h2
                id="auth-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                UI access and API authorization are different
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Authentication in SCK is implemented via Auth.js / NextAuth credentials provider, utilizing bcrypt password hashing and signed JSON Web Tokens (JWT) stored in HTTP-only cookies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  ROLE &amp; OWNERSHIP CHECKS
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#16181B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span><strong>User Role:</strong> Regular authenticated users can submit bookings, view their own booking history, request cancellations on owned records, and submit post-session feedback.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span><strong>Admin Role:</strong> Administrative users possess global authority to configure offerings, modify slot schedules, approve or deny cancellations, and trigger broadcasts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span><strong>Record Ownership:</strong> Detail endpoints verify that <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded">booking.userId === session.user.id</code> before returning sensitive intake details.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  AUTHORIZATION AT THE API BOUNDARY
                </span>
                <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                  A central takeaway from code review is that client-side UI restrictions (such as hiding administrative menus or redirecting unauthenticated visitors) are merely navigational enhancements, not security boundaries.
                </p>
                <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                  While core user and admin mutation routes enforce session roles, not every endpoint was initially built with identical authorization rigor. Comprehensive route-level middleware and strict input validation schemas are required to guarantee total API perimeter safety.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. Notifications & communication */}
      <section
        aria-labelledby="notifications-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                11 / COMMUNICATION PIPELINES
              </span>
              <h2
                id="notifications-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Best-effort communication workflows
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                SCK incorporates automated communication touchpoints across user registration, booking milestones, and practitioner outreach.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  WhatsApp OTP &amp; Verification
                </span>
                <p className="text-xs text-[#65686D]">
                  Phone verification messages dispatched via external WhatsApp gateway to confirm participant contact numbers upon registration.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Booking Confirmation Alerts
                </span>
                <p className="text-xs text-[#65686D]">
                  Automated notification pings dispatched to user and practitioner WhatsApp channels following successful booking transaction commits.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Inquiry Follow-Up
                </span>
                <p className="text-xs text-[#65686D]">
                  Direct messaging integration allowing administrators to review and respond to general wellness questions submitted through contact forms.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Manual Broadcast Messages
                </span>
                <p className="text-xs text-[#65686D]">
                  Admin console capability to trigger targeted group updates, schedule shifts, or community announcements.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Scheduled Birthday Greets
                </span>
                <p className="text-xs text-[#65686D]">
                  Automated background cron triggers dispatching personalized wellness wishes to active community members.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Email Password Recovery
                </span>
                <p className="text-xs text-[#65686D]">
                  Secure password reset token generation dispatched through Nodemailer SMTP transport to verified email accounts.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#DADCD8] text-xs text-[#65686D] leading-relaxed">
              <strong className="text-[#16181B]">Delivery Semantics: </strong>
              These are <em>best-effort notification and scheduled communication workflows</em>. The system does not implement guaranteed delivery, exactly-once processing, or durable transactional outbox queuing. If an external API timeout occurs after a database transaction commits, the booking remains valid while the notification failure is logged.
            </div>
          </div>
        </Container>
      </section>

      {/* 13. Engineering audit / lessons */}
      <section
        aria-labelledby="audit-lessons-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                12 / ENGINEERING AUDIT
              </span>
              <h2
                id="audit-lessons-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What reviewing the system taught me
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Analyzing our team’s implementation provided valuable lessons in system design, the difference between relational atomicity and concurrency control, and the discipline required to build resilient multi-user web platforms.
              </p>
            </div>

            <div className="space-y-4">
              {lessons.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#3157D5]">
                      LESSON 0{index + 1}
                    </span>
                    <span className="text-[#65686D]">·</span>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#16181B]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 14. Technology used */}
      <section
        aria-labelledby="tech-stack-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                13 / SYSTEM STACK
              </span>
              <h2
                id="tech-stack-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Technology used
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                The technical stack powering the SCK platform, structured by architectural domain. (Reflects the team codebase; not all tools were personally introduced.)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.category}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] border-b border-[#DADCD8] pb-1.5 block">
                    {tech.category}
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#16181B]">
                    {tech.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 15. Screenshots */}
      <section
        aria-labelledby="screenshots-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                14 / PRODUCT INTERFACE
              </span>
              <h2
                id="screenshots-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Visual product experience
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Screenshots captured from the running SCK platform, demonstrating the public wellness presence, the Sudarshan Kriya Yoga experience, configurable offerings, and interactive community interfaces.
              </p>
            </div>

            <SckScreenshotGallery />
          </div>
        </Container>
      </section>

      {/* 16. What I would improve */}
      <section
        aria-labelledby="hardening-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                15 / FUTURE HARDENING
              </span>
              <h2
                id="hardening-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What I would harden next
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Ten prioritized architectural improvements proposed to transition the platform from an effective team product into an enterprise-grade, concurrency-safe production deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hardeningPriorities.map((item) => (
                <div
                  key={item.num}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#3157D5]">
                      {item.num}
                    </span>
                    <span className="text-[#65686D]">·</span>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#16181B]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#65686D] leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#DADCD8] text-xs text-[#65686D]">
              <strong className="text-[#16181B]">Status: </strong>
              These architectural enhancements are documented as technical recommendations derived from comprehensive code audit and are <em>not currently implemented in the live deployment</em>.
            </div>
          </div>
        </Container>
      </section>

      {/* 17. Next navigation */}
      <nav
        aria-label="Portfolio case study navigation"
        className="py-16 sm:py-20 border-t border-[#DADCD8] bg-white"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-[#DADCD8] pb-8">
              <div className="space-y-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                  FINAL CASE STUDY · SELECTED WORK COMPLETE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#16181B] tracking-tight">
                  Explore other engineering projects
                </h3>
                <p className="text-sm text-[#65686D]">
                  Return to selected work overview, navigate to the portfolio home, or review the comprehensive resume.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/#work"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#3157D5] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2645af] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                >
                  Back to selected work →
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#DADCD8] bg-[#F7F7F3] px-5 py-2.5 text-sm font-medium text-[#16181B] hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                >
                  Back to home
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#DADCD8] bg-white px-5 py-2.5 text-sm font-medium text-[#16181B] hover:bg-[#F7F7F3] transition-colors focus-visible:outline-2 focus-visible:outline-[#3157D5]"
                >
                  View Resume ↗
                </a>
              </div>
            </div>

            {/* Quick Links to All Case Studies */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <Link
                href="/work/rex"
                className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] hover:border-[#3157D5] hover:bg-white transition-colors space-y-1 group"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#65686D] group-hover:text-[#3157D5]">
                  CASE STUDY / 01
                </span>
                <p className="text-sm font-bold text-[#16181B]">REX Sync Engine</p>
                <p className="text-xs text-[#65686D]">Offline-first, CRDT &amp; SQLite</p>
              </Link>

              <Link
                href="/work/luxora"
                className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] hover:border-[#3157D5] hover:bg-white transition-colors space-y-1 group"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#65686D] group-hover:text-[#3157D5]">
                  CASE STUDY / 02
                </span>
                <p className="text-sm font-bold text-[#16181B]">Luxora Estates</p>
                <p className="text-xs text-[#65686D]">Full-stack marketplace &amp; search</p>
              </Link>

              <Link
                href="/research/agentic-ids"
                className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] hover:border-[#3157D5] hover:bg-white transition-colors space-y-1 group"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#65686D] group-hover:text-[#3157D5]">
                  RESEARCH / 01
                </span>
                <p className="text-sm font-bold text-[#16181B]">Agentic AI IDS</p>
                <p className="text-xs text-[#65686D]">Deep learning intrusion detection</p>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </article>
  );
}
