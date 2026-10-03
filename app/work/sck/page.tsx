import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { SckArchitectureDiagram } from "@/components/case-study/sck-architecture-diagram";
import { SckScreenshotGallery } from "@/components/case-study/sck-screenshot-gallery";

export const metadata: Metadata = {
  title: { absolute: "SCK Full-Stack Engineering Case Study | Gokul Venkat" },
  description:
    "A collaborative full-stack engineering case study covering SCK, including direct frontend contributions, booking workflow collaboration, PostgreSQL transactions, realtime updates, and architecture insights.",
  openGraph: {
    title: "SCK Full-Stack Engineering Case Study | Gokul Venkat",
    description:
      "A collaborative full-stack engineering case study covering SCK, including direct frontend contributions, booking workflow collaboration, PostgreSQL transactions, realtime updates, and architecture insights.",
    type: "article",
    url: "/work/sck",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCK Full-Stack Engineering Case Study | Gokul Venkat",
    description:
      "Collaborative full-stack case study covering SCK: direct frontend work, booking workflow collaboration, PostgreSQL transactions, and architecture insights.",
  },
  alternates: { canonical: "/work/sck" },
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
      title: "TEAM OWNERSHIP",
      body: "Working in a small team required coordinating changes across frontend, APIs, data models, and integrations.",
    },
    {
      title: "TRANSACTIONAL WORKFLOWS",
      body: "Related database changes should be grouped around coherent business operations to maintain reliable record states.",
    },
    {
      title: "FRONTEND AND BACKEND CONTRACTS",
      body: "Booking flows depend on consistent payloads, validation, and state representation across both client and server boundaries.",
    },
    {
      title: "REALTIME UX",
      body: "Database change subscriptions can keep administrative and user views fresh without requiring users to manually refresh the page.",
    },
    {
      title: "EXTERNAL INTEGRATIONS",
      body: "Media storage, messaging, email, and realtime services require clean boundaries and decoupling from core application logic.",
    },
    {
      title: "RESPONSIVE PRODUCT DELIVERY",
      body: "Public-facing content and booking journeys need to remain usable, legible, and visually balanced across different screen sizes and devices.",
    },
  ];

  const techStack = [
    {
      category: "APPLICATION",
      items: ["Next.js (App Router)", "React 19.2.4", "TypeScript"],
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

  return (
    <article className="min-h-screen">
      {/* 1. Hero */}
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

      {/* 2. Product Context */}
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

      {/* 3. Team & Ownership */}
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
                    Direct Contribution
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
                    Collaborative
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
                    <span>Booking-flow integration support</span>
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
              I do not claim sole authorship of the booking backend, database schema, all booking APIs, or the platform as a whole. My role spanned dedicated frontend execution, UI subsystem design, and collaborative feature integration across booking and user touchpoints.
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Direct Contributions */}
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

      {/* 5. Collaborative Booking Contribution */}
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
                In a three-person team, feature delivery rarely occurs in strict isolation. While teammates established the foundational Drizzle schemas and API controllers, I participated in testing the multi-step booking funnel from the user’s perspective.
              </p>
              <p>
                This collaborative work focused on helping connect the booking journey end to end, debugging integration issues, testing user flows, and supporting teammates as booking-related features were completed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. System Architecture */}
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
                  Keeping the application in one Next.js codebase avoids a separate application-service network hop for collocated server logic and makes it easier to share TypeScript types and conventions across server and client code.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#DADCD8] space-y-1">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Asynchronous Integrations
                </span>
                <p>
                  Supabase Realtime provides pub/sub channels for UI cache invalidation, Cloudinary offloads image and receipt CDN hosting, and WhatsApp/Nodemailer handle communication workflows.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Booking Experience */}
      <section
        aria-labelledby="booking-experience-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                06 / BOOKING EXPERIENCE
              </span>
              <h2
                id="booking-experience-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Helping deliver the booking experience
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                The booking journey takes users from initial program selection through dynamic intake questionnaires and slot selection to post-submission status tracking and admin schedule management.
              </p>
            </div>

            {/* End-to-End Pipeline Card */}
            <div className="p-6 rounded-xl border border-[#DADCD8] bg-[#F7F7F3] space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  END-TO-END BOOKING REQUEST LIFECYCLE
                </span>
                <p className="text-xs text-[#65686D]">
                  Booking creation groups related database writes within a PostgreSQL transaction, including booking persistence, slot-state updates, and draft cleanup.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">1. Select Offering</span>
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
                  <span className="text-[#65686D]">POST /api/bookings with authenticated session</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 6 */}
                <div className="p-3 rounded bg-white border border-[#DADCD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#16181B]">6. Server Validates Core Fields</span>
                  <span className="text-[#65686D]">Validate core booking fields and related records</span>
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
                  <span className="font-semibold text-[#16181B]">8. Notification Trigger</span>
                  <span className="text-[#65686D]">Dispatch pending acknowledgement / booking-status notification</span>
                </div>
                <div className="text-center text-[#65686D] select-none text-xs">↓</div>

                {/* Step 9 */}
                <div className="p-3 rounded bg-emerald-50 border border-emerald-300 text-emerald-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold">9. Submission Acknowledgement &amp; User View</span>
                  <span className="text-emerald-700">Display submission details &amp; update user dashboard</span>
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
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
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
                  Users can initiate a cancellation request directly from their dashboard. If reviewed and approved by an administrator, the booking moves to cancelled and the corresponding slot is updated back to available.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Realtime Product Experience */}
      <section
        aria-labelledby="realtime-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                07 / REALTIME PRODUCT EXPERIENCE
              </span>
              <h2
                id="realtime-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Keeping views fresh with database change subscriptions
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Supabase-backed Postgres change subscriptions were used to refresh selected booking, administrative, and public views when underlying data changed.
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
                  Subscription managers implement exponential backoff with randomized jitter to manage reconnect attempts smoothly across transient network interruptions.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  REFETCH ON CHANGE
                </span>
                <p className="text-xs text-[#65686D] leading-relaxed">
                  Event handlers trigger targeted HTTP refetches to retrieve authoritative database records, keeping local client UI state cleanly aligned with server data.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Authentication & Roles */}
      <section
        aria-labelledby="auth-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                08 / AUTHENTICATION &amp; ROLES
              </span>
              <h2
                id="auth-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Authentication and role-based flows
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Authentication in SCK uses Auth.js / NextAuth credentials authentication with bcrypt password hashing and JWT-backed sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  USER ROLE &amp; OWNERSHIP-AWARE FLOWS
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#16181B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Submit offering bookings and registration requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>View owned booking history and updated booking statuses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Request session cancellations with record-ownership checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Submit post-session reflections and feedback</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] block">
                  ADMINISTRATIVE ACCESS CHECKS
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#16181B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Configure offerings, dynamic intake questions, &amp; session locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Manage calendar schedules and individual slot availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Review booking submissions and uploaded payment receipts, &amp; process cancellations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold">·</span>
                    <span>Manage public content updates and broadcast communication triggers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Communication Integrations */}
      <section
        aria-labelledby="notifications-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                09 / COMMUNICATION INTEGRATIONS
              </span>
              <h2
                id="notifications-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Integrated communication workflows
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Integrated communication flows included WhatsApp-based OTP and booking notifications, scheduled messaging workflows, and email-based password recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  WhatsApp OTP Verification
                </span>
                <p className="text-xs text-[#65686D]">
                  Phone verification messages dispatched via external WhatsApp gateway to confirm participant contact numbers upon registration.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Booking Status Notifications
                </span>
                <p className="text-xs text-[#65686D]">
                  WhatsApp notifications support booking-related status communication between the platform, users, and practitioners.
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
                  Scheduled Messages
                </span>
                <p className="text-xs text-[#65686D]">
                  Background scheduling routines support scheduled broadcasts and birthday messages for community communication.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-semibold text-[#16181B] block">
                  Email Password Recovery
                </span>
                <p className="text-xs text-[#65686D]">
                  Password-reset tokens are delivered through Nodemailer SMTP as part of the account-recovery flow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Engineering Lessons */}
      <section
        aria-labelledby="audit-lessons-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                10 / ENGINEERING LESSONS
              </span>
              <h2
                id="audit-lessons-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Engineering lessons from collaborative delivery
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Reflecting on our 3-person team experience building SCK yielded valuable insights into collaborative architecture, data integrity, and cross-functional feature completion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lessons.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#3157D5]">
                      0{index + 1}
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

      {/* 12. Technology Used */}
      <section
        aria-labelledby="tech-stack-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                11 / SYSTEM STACK
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

      {/* 13. Product Screenshots */}
      <section
        aria-labelledby="screenshots-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                12 / PRODUCT INTERFACE
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

      {/* 14. Final Navigation */}
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
                <p className="text-sm font-bold text-[#16181B]">REX</p>
                <p className="text-xs text-[#65686D]">Java · Spring Boot · PostgreSQL backend engineering</p>
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
