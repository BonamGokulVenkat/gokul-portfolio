import React from "react";

export function SearchPipelineDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-[#111418] text-[#F7F7F3] space-y-6"
      aria-label="Conversational Property Search Pipeline Lifecycle"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] block">
            CONVERSATIONAL PROPERTY SEARCH PIPELINE
          </span>
          <p className="text-xs text-[#DADCD8]/60 mt-0.5">
            Deterministic natural-language constraint parsing and database-grounded retrieval
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#18835B] bg-[#18835B]/15 px-2.5 py-1 rounded font-semibold">
          NO VECTOR / NO EMBEDDINGS
        </span>
      </div>

      {/* Pipeline Sequence */}
      <div className="max-w-2xl mx-auto space-y-2.5 font-mono text-xs">
        {[
          { step: "01", title: "User Message & Session Validation", desc: "Rate admission, session ownership verification" },
          { step: "02", title: "Intent Routing", desc: "Classify search query vs general property question" },
          { step: "03", title: "Constraint Parser & Location Resolution", desc: "Extract budget, BHK, amenities, inventory-aware location" },
          { step: "04", title: "Session Context Merge", desc: "Blend active user turn with prior conversational filters" },
          { step: "05", title: "Required vs Preferred Split", desc: "Separate hard constraints from soft preference factors" },
          { step: "06", title: "Parameterized PostgreSQL Query", desc: "TypeORM parameterized execution against available listings" },
          { step: "07", title: "Preference Scoring & Rehydration", desc: "Deterministic weighted rank on canonical database records" },
          { step: "08", title: "Emit UI Property Cards", desc: "Structured property cards with stored prices and media" },
          { step: "09", title: "Guarded LLM Narrative Response", desc: "LLM synthesizes response bound strictly to returned records" },
        ].map((item, idx) => (
          <React.Fragment key={item.step}>
            <div className="p-3 rounded-lg border border-white/15 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#3157D5]">{item.step}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-[11px] text-[#DADCD8]/60">{item.desc}</p>
                </div>
              </div>
            </div>
            {idx < 8 && <div className="flex justify-center text-white/30 text-xs select-none">↓</div>}
          </React.Fragment>
        ))}

        {/* Diagnostic Relaxation Branch */}
        <div className="mt-4 p-4 rounded-lg border border-white/20 bg-white/10 space-y-1">
          <span className="text-[11px] text-[#3157D5] font-semibold uppercase tracking-wider block">
            Side Branch · Zero Matches Fallback
          </span>
          <p className="text-xs text-[#DADCD8]/80 leading-relaxed">
            Diagnostic relaxation checks isolate over-constrained parameters (e.g. price ceiling vs locality) and return explicit supported alternatives rather than hallucinating listings.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ModerationWorkflowDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white text-[#16181B] space-y-6"
      aria-label="Property Moderation and Lifecycle Workflow Diagram"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCD8] pb-3">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] block">
            MODERATION &amp; SNAPSHOT ISOLATION WORKFLOW
          </span>
          <p className="text-xs text-[#65686D] mt-0.5">
            Live listings remain available while builder edit requests stay in separate snapshots
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#65686D] bg-[#F7F7F3] border border-[#DADCD8] px-2 py-0.5 rounded">
          STORED STATUSES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
        {/* Branch 1: New Submission */}
        <div className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-3">
          <span className="font-semibold text-[#16181B] block">1. New Property</span>
          <div className="p-2 rounded bg-white border border-[#DADCD8] text-center font-bold text-[#65686D]">
            PENDING
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="p-1.5 rounded bg-white border border-[#DADCD8] text-[#18835B]">
              ├─ Approve → AVAILABLE
            </div>
            <div className="p-1.5 rounded bg-white border border-[#DADCD8] text-red-600">
              └─ Reject → REJECTED
            </div>
          </div>
        </div>

        {/* Branch 2: Edit Request */}
        <div className="p-4 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/5 space-y-3">
          <span className="font-semibold text-[#3157D5] block">2. Edit Request (Snapshot)</span>
          <div className="p-2 rounded bg-white border border-[#3157D5] text-center font-bold text-[#3157D5]">
            EDIT_PENDING (Snapshot)
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="p-1.5 rounded bg-white border border-[#DADCD8] text-[#18835B]">
              ├─ Approve → copy to original → AVAILABLE
            </div>
            <div className="p-1.5 rounded bg-white border border-[#DADCD8] text-[#65686D]">
              └─ Reject → discard snapshot → original stays AVAILABLE
            </div>
          </div>
        </div>

        {/* Branch 3: Delete Request */}
        <div className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-3">
          <span className="font-semibold text-[#16181B] block">3. Deletion Request</span>
          <div className="p-2 rounded bg-white border border-[#DADCD8] text-center font-bold text-red-600">
            DELETE_PENDING
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="p-1.5 rounded bg-white border border-[#DADCD8] text-red-600">
              ├─ Approve → Delete property record
            </div>
            <div className="p-1.5 rounded bg-white border border-[#DADCD8] text-[#18835B]">
              └─ Reject → AVAILABLE
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#65686D] leading-relaxed pt-1">
        * Note: A <code>SOLD</code> status exists in the relational schema, but there is no complete seller sale-transaction workflow in the current platform.
      </p>
    </div>
  );
}
