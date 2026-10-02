import React from "react";

export function LuxoraArchitectureDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-[#111418] text-[#F7F7F3] space-y-6"
      aria-label="Luxora Estates Modular Monolith Architecture"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] block">
            MODULAR MONOLITH ARCHITECTURE · NOT MICROSERVICES
          </span>
          <p className="text-xs text-[#DADCD8]/60 mt-0.5">
            Full-stack marketplace across Next.js, NestJS, and relational data layer
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-[#3157D5]">
            <span className="w-2 h-2 rounded-full bg-[#3157D5]" />
            NestJS Modular Core
          </span>
        </div>
      </div>

      {/* Architecture Layers */}
      <div className="space-y-4 font-mono text-xs">
        {/* Tier 1: Client Layer */}
        <div className="p-4 rounded-lg border border-white/15 bg-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
              01 · Presentation Layer
            </span>
            <p className="text-sm font-semibold text-white">Browser Client / Next.js (App Router)</p>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-[#DADCD8]/80">
            <span className="bg-white/10 px-2 py-0.5 rounded">React</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">TypeScript</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">TanStack Query</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">Zustand</span>
          </div>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓ HTTPS REST APIs</div>

        {/* Tier 2: NestJS Modular Core */}
        <div className="p-5 rounded-xl border-2 border-[#3157D5] bg-[#1a233a]/70 space-y-3">
          <div className="flex items-center justify-between border-b border-[#3157D5]/30 pb-2">
            <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider">
              02 · NestJS Modular Monolith API
            </span>
            <span className="text-[10px] text-white/70 bg-[#3157D5]/30 px-2 py-0.5 rounded">
              Single Process Backend
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-[11px]">
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-[#3157D5] font-semibold block">Auth Module</span>
              <p className="text-[10px] text-[#DADCD8]/60">JWT, Passwords, OAuth Handlers (Google/LinkedIn)</p>
            </div>
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-[#3157D5] font-semibold block">Properties Module</span>
              <p className="text-[10px] text-[#DADCD8]/60">Listings, Moderation, Edit Snapshots, Deletion</p>
            </div>
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-[#3157D5] font-semibold block">Advisor Module</span>
              <p className="text-[10px] text-[#DADCD8]/60">Constraint Parsing, Context Merge, DB Grounding</p>
            </div>
            <div className="p-3 rounded bg-black/40 border border-white/10 space-y-1">
              <span className="text-[#3157D5] font-semibold block">Subscription Module</span>
              <p className="text-[10px] text-[#DADCD8]/60">Listing Quotas, Razorpay Orders, HMAC Verify</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓ TypeORM Persistence</div>

        {/* Tier 3: Data Layer */}
        <div className="p-4 rounded-lg border border-white/15 bg-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
              03 · Primary Data Layer
            </span>
            <p className="text-sm font-semibold text-white">PostgreSQL</p>
          </div>
          <span className="text-[11px] text-[#18835B] bg-[#18835B]/15 px-2.5 py-1 rounded font-semibold">
            Relational Entities &amp; Schemas
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓ Integrated External Services</div>

        {/* Tier 4: Supporting Integrations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-white/10 bg-white/5 space-y-1">
            <span className="text-xs font-semibold text-white block">Supabase Storage</span>
            <p className="text-[10px] text-[#DADCD8]/60">Property images and document media storage</p>
          </div>
          <div className="p-3 rounded-lg border border-white/10 bg-white/5 space-y-1">
            <span className="text-xs font-semibold text-white block">Groq / Ollama</span>
            <p className="text-[10px] text-[#DADCD8]/60">Guarded query parsing &amp; streaming property Q&amp;A</p>
          </div>
          <div className="p-3 rounded-lg border border-white/10 bg-white/5 space-y-1">
            <span className="text-xs font-semibold text-white block">Razorpay</span>
            <p className="text-[10px] text-[#DADCD8]/60">Subscription order generation and HMAC verification</p>
          </div>
        </div>
      </div>
    </div>
  );
}
