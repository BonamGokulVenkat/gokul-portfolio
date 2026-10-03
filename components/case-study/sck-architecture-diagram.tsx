import React from "react";

export function SckArchitectureDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-[#111418] text-[#F7F7F3] space-y-6"
      aria-label="SCK Wellness Platform Architecture Diagram"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] block">
            UNIFIED NEXT.JS APPLICATION ARCHITECTURE · NOT MICROSERVICES
          </span>
          <p className="text-xs text-[#DADCD8]/60 mt-0.5">
            Single Next.js App Router process serving public UI, client portal, server route handlers, and database operations
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Next.js App Router
          </span>
          <span className="inline-flex items-center gap-1.5 text-sky-400">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            Drizzle ORM
          </span>
        </div>
      </div>

      {/* Architecture Pipeline */}
      <div className="space-y-4 font-mono text-xs">
        {/* Tier 1: Client Presentation Layer */}
        <div className="p-4 rounded-lg border border-white/15 bg-white/5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
                01 · Client Presentation Layer (Browser)
              </span>
              <p className="text-sm font-semibold text-white">React Client Components & Interactive Surfaces</p>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-[#DADCD8]/80">
              <span className="bg-white/10 px-2 py-0.5 rounded">React</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">TypeScript</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Framer Motion</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-sky-300 font-medium block">Public Wellness & SKY</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Breathing guides, ChakraMeditation UI, dynamic offerings catalog</p>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-sky-300 font-medium block">Booking Funnel & Drafts</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Multi-step slot selection, dynamic forms, receipt upload</p>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-sky-300 font-medium block">User & Admin Dashboards</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Booking lifecycle views, schedule manager, inquiry console</p>
            </div>
          </div>
        </div>

        {/* Direction Arrow */}
        <div className="flex justify-center text-white/40 text-xs select-none">
          ↓ HTTP Fetch / Server Actions / NextAuth session / authenticated requests
        </div>

        {/* Tier 2: Next.js Server Core */}
        <div className="p-5 rounded-xl border-2 border-[#3157D5] bg-[#1a233a]/70 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#3157D5]/30 pb-2">
            <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider">
              02 · Next.js Server Runtime (Route Handlers & Server Actions)
            </span>
            <span className="text-[10px] text-white/70 bg-[#3157D5]/30 px-2 py-0.5 rounded self-start sm:self-auto">
              Unified Node.js App Runtime
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-[11px]">
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-white font-semibold block">Auth.js / NextAuth</span>
              <p className="text-[10px] text-[#DADCD8]/60">
                Credentials provider, bcrypt passwords, JWT session verification, role guard (USER / ADMIN)
              </p>
            </div>
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-white font-semibold block">Booking Route Handlers</span>
              <p className="text-[10px] text-[#DADCD8]/60">
                Core payload validation, slot status lookups, draft reconciliation, cancellation handler
              </p>
            </div>
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-white font-semibold block">Admin & Offerings API</span>
              <p className="text-[10px] text-[#DADCD8]/60">
                Offering configuration, dynamic intake questionnaires, location & slot scheduling
              </p>
            </div>
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-white font-semibold block">Communication Dispatcher</span>
              <p className="text-[10px] text-[#DADCD8]/60">
                Best-effort WhatsApp triggers, Nodemailer SMTP transport, scheduled broadcast triggers
              </p>
            </div>
          </div>
        </div>

        {/* Direction Arrow */}
        <div className="flex justify-center text-white/40 text-xs select-none">
          ↓ Drizzle ORM Type-Safe Query Builder
        </div>

        {/* Tier 3: Persistence & Database Layer */}
        <div className="p-4 rounded-lg border border-white/15 bg-white/5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
                03 · Relational Persistence Layer
              </span>
              <p className="text-sm font-semibold text-white">PostgreSQL via Drizzle ORM</p>
            </div>
            <span className="text-[11px] text-emerald-400 font-mono">ACID Transactions (Multi-Statement BEGIN ... COMMIT)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-[#DADCD8]/80">
            <div className="p-2 rounded bg-black/30 border border-white/5">
              <span className="font-semibold text-white block">users & accounts</span>
              <span>Credentials, profile, role</span>
            </div>
            <div className="p-2 rounded bg-black/30 border border-white/5">
              <span className="font-semibold text-white block">offerings & slots</span>
              <span>Programs, timing, capacity</span>
            </div>
            <div className="p-2 rounded bg-black/30 border border-white/5">
              <span className="font-semibold text-white block">bookings & drafts</span>
              <span>Intake details, status</span>
            </div>
            <div className="p-2 rounded bg-black/30 border border-white/5">
              <span className="font-semibold text-white block">inquiries & campaigns</span>
              <span>Lead forms, outreach state</span>
            </div>
          </div>
        </div>

        {/* Side Integrations Banner */}
        <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5 space-y-2">
          <span className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold block">
            Side Integrations & Asynchronous Subsystems
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px]">
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-amber-200 font-medium block">Supabase Realtime</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Postgres Changes pub/sub for client cache invalidation & UI freshness</p>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-amber-200 font-medium block">Cloudinary</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Payment receipts, program media, and dynamic gallery asset CDN</p>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-amber-200 font-medium block">WhatsApp Gateway</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Best-effort OTP verification, inquiry pings, and booking status notifications</p>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/10">
              <span className="text-amber-200 font-medium block">Nodemailer (SMTP)</span>
              <p className="text-[10px] text-[#DADCD8]/60 mt-0.5">Email-based password recovery and reset behavior</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
