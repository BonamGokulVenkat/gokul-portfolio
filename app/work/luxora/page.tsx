import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { LuxoraArchitectureDiagram } from "@/components/case-study/luxora-architecture-diagram";
import {
  SearchPipelineDiagram,
  ModerationWorkflowDiagram,
} from "@/components/case-study/luxora-search-diagram";
import { ScreenshotGallery } from "@/components/case-study/luxora-screenshot-gallery";
import { NextProject } from "@/components/case-study/next-project";

export const metadata: Metadata = {
  title: { absolute: "Luxora Estates Full-Stack Engineering Case Study | Gokul Venkat" },
  description:
    "A full-stack engineering case study covering Luxora Estates, including conversational property search, PostgreSQL-backed retrieval, moderation workflows, authentication, structured pricing, subscriptions, and engineering trade-offs.",
  openGraph: {
    title: "Luxora Estates Full-Stack Engineering Case Study | Gokul Venkat",
    description:
      "A full-stack engineering case study covering Luxora Estates, including conversational property search, PostgreSQL-backed retrieval, moderation workflows, authentication, structured pricing, and subscriptions.",
    type: "article",
    url: "/work/luxora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxora Estates Full-Stack Engineering Case Study | Gokul Venkat",
    description:
      "Full-stack marketplace engineering case study featuring natural-language constraint parsing, TypeORM/PostgreSQL retrieval, moderation workflows, and subscriptions.",
  },
  alternates: { canonical: "/work/luxora" },
};

export default function LuxoraCaseStudyPage() {
  const actors = [
    {
      role: "BUYERS / INDIVIDUALS",
      points: [
        "Browse and search multi-tier property listings",
        "Save favorite properties and track updates",
        "Inspect builder profiles and published portfolio information",
        "Engage with the conversational property advisor",
      ],
    },
    {
      role: "BUILDERS",
      points: [
        "Create and manage residential/commercial listing submissions",
        "Manage owned inventory and property inquiries",
        "Request property edits and deletions via review queues",
        "Operate within active plan listing quotas",
      ],
    },
    {
      role: "ADMINISTRATORS",
      points: [
        "Review initial property submissions across states",
        "Approve or reject edit and deletion requests",
        "Manage user accounts and role allocations",
        "Configure subscription tiers, plan limits, and global settings",
      ],
    },
  ];

  const contributions = [
    {
      num: "01",
      title: "PROPERTY WORKFLOWS",
      summary:
        "Moderation review, administrative operations, edit/delete request workflows, and lifecycle state management.",
    },
    {
      num: "02",
      title: "AUTHENTICATION & ACCESS",
      summary:
        "JWT access/refresh token flows, OAuth integration wiring, and role-based access control behaviors.",
    },
    {
      num: "03",
      title: "PRICING & SUBSCRIPTIONS",
      summary:
        "Structured multi-format price support, subscription tiers, listing limit enforcements, and payment-related flows.",
    },
    {
      num: "04",
      title: "CONVERSATIONAL SEARCH",
      summary:
        "Query constraint parsing, session context tracking, structured filtering, result grounding, streaming, and regression test coverage.",
    },
    {
      num: "05",
      title: "FRONTEND PRODUCT WORK",
      summary:
        "Property discovery feeds, administrative oversight interfaces, interactive chat advisor UX, and responsive product flows.",
    },
  ];

  const lessons = [
    {
      title: "Structured Data Before Generation",
      body: "Property recommendations should remain grounded in canonical database records. Natural language is most useful for interpreting intent and presenting verified listing facts clearly.",
    },
    {
      title: "Authorization Is Domain Logic",
      body: "Role checks and record ownership are part of business correctness, not only interface behavior. Access rules need to be enforced where application actions are executed.",
    },
    {
      title: "Workflow State Needs Clear Modeling",
      body: "Moderation becomes easier to reason about when pending edits and delete requests are represented explicitly instead of silently mutating live listing data.",
    },
    {
      title: "Payments Connect to Entitlements",
      body: "A checkout flow is only one part of subscription design; application access, plan limits, and listing entitlements also need clear server-side state.",
    },
    {
      title: "Search Should Be Explainable",
      body: "Structured constraints and deterministic preference scoring make property recommendations easier to inspect, test, and keep grounded in inventory data.",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand"],
    },
    {
      category: "Backend",
      items: ["NestJS", "TypeScript", "REST APIs", "Passport"],
    },
    {
      category: "Data",
      items: ["PostgreSQL", "TypeORM"],
    },
    {
      category: "Integrations",
      items: [
        "Supabase Storage",
        "Google OAuth",
        "LinkedIn OAuth",
        "Razorpay",
        "Groq / Ollama",
        "Geo/Location Providers",
      ],
    },
    {
      category: "Testing / Quality",
      items: ["Jest", "TypeScript", "Regression Test Suites"],
    },
  ];

  return (
    <article className="min-h-screen">
      {/* 1. Case-study hero */}
      <CaseStudyHero
        label="CASE STUDY / 02"
        title="Luxora Estates"
        subtitle="Building a Marketplace Around Search, Moderation & Product Workflows"
        summary="Luxora is a team-built real-estate marketplace supporting property discovery, builders, administrators, subscriptions, moderation workflows, and a conversational property advisor. I contributed across the Next.js frontend, NestJS backend, authentication, property workflows, pricing, subscriptions, administrative features, and conversational search."
        metadata={{
          role: "Full-Stack Software Engineer",
          context: "Team Project",
          focus: "Full-Stack Product Engineering",
          stack: "Next.js · NestJS · TypeScript · PostgreSQL",
        }}
      />

      {/* 2. Product context */}
      <section
        aria-labelledby="actors-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                01 / PRODUCT ACTORS
              </span>
              <h2
                id="actors-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                More than a listing website
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                A role-based marketplace connecting three distinct user groups with tailored permissions, interfaces, and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actors.map((actor) => (
                <div
                  key={actor.role}
                  className="p-6 rounded-lg border border-[#DADCD8] bg-white space-y-3"
                >
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3157D5] border-b border-[#DADCD8] pb-2">
                    {actor.role}
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#16181B]">
                    {actor.points.map((pt) => (
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

      {/* 3. My contribution / contribution evidence */}
      <section
        aria-labelledby="contributions-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                02 / ENGINEERING CONTRIBUTION
              </span>
              <h2
                id="contributions-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Where I contributed
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                Contributed substantially to a team-built real-estate marketplace across frontend, backend, moderation, authentication, pricing, subscriptions, payments, and conversational property search.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {contributions.map((c) => (
                <div
                  key={c.num}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#3157D5]">
                      {c.num}
                    </span>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#16181B]">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                    {c.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. System architecture */}
      <section
        aria-labelledby="architecture-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                03 / SYSTEM ARCHITECTURE
              </span>
              <h2
                id="architecture-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Full-Stack Architecture
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Structured as a modular monolith in NestJS backed by PostgreSQL and TypeORM, serving a Next.js App Router client with external storage, payment, and language model integrations.
              </p>
            </div>

            <LuxoraArchitectureDiagram />
          </div>
        </Container>
      </section>

      {/* 5. Featured story — conversational property search */}
      <section
        aria-labelledby="search-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                04 / FEATURED STORY
              </span>
              <h2
                id="search-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Turning natural language into constrained property retrieval
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                The current advisor does not perform vector similarity search or semantic embedding calculations. Instead, it translates conversational requests into structured constraints, combines them with session context, executes parameterized PostgreSQL retrieval, ranks eligible properties using explicit preference weights, and renders facts from canonical database records.
              </p>
            </div>

            {/* 15-stage narrative breakdown */}
            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#16181B]">
                Conversational Search Pipeline Execution Stages
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                {[
                  "01. Validate request & session ownership",
                  "02. Rate admission & abuse check",
                  "03. Restore conversational session state",
                  "04. Detect user intent (Search vs General Q&A)",
                  "05. Parse natural language constraints",
                  "06. Resolve inventory-aware location entities",
                  "07. Merge current turn with prior context",
                  "08. Separate required vs preferred constraints",
                  "09. Execute parameterized PostgreSQL query",
                  "10. Apply deterministic preference scoring",
                  "11. Rehydrate & revalidate property records",
                  "12. Emit structured property cards",
                  "13. Optionally invoke LLM for response plan",
                  "14. Render canonical database facts",
                  "15. Persist successful conversational state",
                ].map((stage) => (
                  <div
                    key={stage}
                    className="p-3 rounded bg-[#F7F7F3] border border-[#DADCD8] text-[#16181B]"
                  >
                    {stage}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Search request lifecycle */}
      <section
        aria-labelledby="lifecycle-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                05 / PIPELINE LIFECYCLE
              </span>
              <h2
                id="lifecycle-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Search Request Lifecycle
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Deterministic request flow from client prompt to database-grounded response cards designed to keep listing facts tied to canonical records.
              </p>
            </div>

            <SearchPipelineDiagram />
          </div>
        </Container>
      </section>

      {/* 7. Property moderation workflow */}
      <section
        aria-labelledby="moderation-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                06 / MODERATION ARCHITECTURE
              </span>
              <h2
                id="moderation-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Keeping live listings separate from pending changes
              </h2>
              <p className="text-base sm:text-lg text-[#65686D] leading-relaxed">
                For listing moderation, pending edits should remain separate from the currently visible property record until review is complete. The project represents edit requests as independent snapshot records rather than directly mutating the live listing row.
              </p>
            </div>

            <ModerationWorkflowDiagram />
          </div>
        </Container>
      </section>

      {/* 8. Structured pricing */}
      <section
        aria-labelledby="pricing-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                07 / DOMAIN MODELING
              </span>
              <h2
                id="pricing-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Representing real-world property prices
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                Property pricing rarely conforms to a single scalar numeric column. Real-world properties are marketed as fixed amounts, starting prices, negotiable brackets, or bespoke builder consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
              {[
                { type: "Fixed Price", example: "₹1,25,00,000", desc: "Exact single figure with precise budget boundary checking" },
                { type: "Starting Price", example: "Starting at ₹85 L", desc: "Open-ended baseline pricing common for new developments" },
                { type: "Price Range", example: "₹1.4 Cr – ₹1.9 Cr", desc: "Multi-unit bracket matching user search ceilings" },
                { type: "Contact for Price", example: "Price on Request", desc: "Luxury/commercial inquiries without public monetary value" },
              ].map((p) => (
                <div key={p.type} className="p-4 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                  <span className="text-[#3157D5] font-bold block">{p.type}</span>
                  <p className="text-sm font-semibold text-[#16181B]">{p.example}</p>
                  <p className="text-[11px] text-[#65686D] leading-normal">{p.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#65686D] leading-relaxed">
              * Note: Budget comparisons convert formats into approximate numeric search ranges for filtering, while preserving the exact human-readable pricing string for presentation.
            </p>
          </div>
        </Container>
      </section>

      {/* 9. Authentication & authorization */}
      <section
        aria-labelledby="auth-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                08 / ACCESS CONTROL
              </span>
              <h2
                id="auth-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Authentication is only one part of access control
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                The platform implements JWT access and refresh token cycles alongside Google and LinkedIn OAuth handlers. However, authentication verifies identity; authorization determines permissible business actions.
              </p>
              <p className="text-[#65686D]">
                Roles (<code>INDIVIDUAL</code>, <code>BUILDER</code>, <code>ADMIN</code>) are validated at the backend route level via NestJS guards. Crucially, UI visibility is not an access control boundary—ownership checks verify that a builder can only update or request changes on their own properties.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Subscription / payment flow */}
      <section
        aria-labelledby="payments-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                09 / MONETIZATION
              </span>
              <h2
                id="payments-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Subscription and payment integration
              </h2>
            </div>

            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-4 font-mono text-xs">
              <span className="text-[11px] text-[#65686D] uppercase tracking-wider block">
                Razorpay Checkout Lifecycle
              </span>
              <div className="space-y-2 text-[#16181B]">
                <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8]">
                  1. Builder selects subscription plan (e.g. 20 property listings limit)
                </div>
                <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8]">
                  2. Backend creates Razorpay order with corresponding amount &amp; currency
                </div>
                <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8]">
                  3. Client executes checkout modal and receives payment signature
                </div>
                <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8]">
                  4. Backend validates HMAC-SHA256 signature using secret key
                </div>
                <div className="p-2.5 rounded bg-[#3157D5]/10 border border-[#3157D5] text-[#3157D5] font-semibold">
                  5. Updates builder subscription tier and expands property posting quota
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Engineering lessons */}
      <section
        aria-labelledby="lessons-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                11 / RETROSPECTIVE
              </span>
              <h2
                id="lessons-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What Luxora taught me
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
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 12. Technology used */}
      <section
        aria-labelledby="tech-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                12 / TECH STACK
              </span>
              <h2
                id="tech-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Technology Used
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

      {/* 14. Screenshots */}
      <section
        aria-labelledby="screenshots-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                14 / INTERFACES &amp; FLOWS
              </span>
              <h2
                id="screenshots-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Product Experience
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Real project interfaces demonstrating property discovery, conversational search, moderation, and administration:
              </p>
            </div>

            <ScreenshotGallery />
          </div>
        </Container>
      </section>

      {/* 16. Next project */}
      <NextProject
        label="NEXT CASE STUDY / 03"
        title="Agentic AI Intrusion Detection"
        subtitle="Deep Learning &amp; Cybersecurity Research"
        href="/research/agentic-ids"
      />
    </article>
  );
}
