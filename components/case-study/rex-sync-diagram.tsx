import React from "react";

export function RexSyncDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-[#111418] text-[#F7F7F3] space-y-6"
      aria-label="REX HR Data Synchronization Flow Diagram"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] block">
            SYNTHETIC ARCHITECTURE · GENERALIZED SPECIFICATION
          </span>
          <p className="text-xs text-[#DADCD8]/60 mt-0.5">
            Boundary flow between external HR system and local REX backend
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-white/70">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            Existing Platform
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#3157D5]">
            <span className="w-2 h-2 rounded-full bg-[#3157D5]" />
            My Implementation
          </span>
        </div>
      </div>

      {/* Main Flow: Vertical with clear step arrows */}
      <div className="max-w-2xl mx-auto space-y-3 font-mono text-xs">
        {/* Step 1: External Source */}
        <div className="p-3.5 rounded-lg border border-white/15 bg-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
              01 · External Boundary
            </span>
            <p className="text-sm font-semibold text-white">External HR System</p>
          </div>
          <span className="text-[11px] text-[#DADCD8]/60 bg-white/10 px-2 py-1 rounded">
            External data source
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 2: Scheduled Trigger (My Implementation) */}
        <div className="p-3.5 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#3157D5] uppercase tracking-wider font-semibold block">
              02 · Scheduled Integration (My Scope)
            </span>
            <p className="text-sm font-semibold text-white">
              Scheduled Synchronization Job
            </p>
          </div>
          <span className="text-[11px] text-[#3157D5] bg-[#3157D5]/20 px-2 py-1 rounded font-semibold">
            Spring @Scheduled
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 3: Pending Records Retrieval */}
        <div className="p-3.5 rounded-lg border border-white/15 bg-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
              03 · Fetch Stage
            </span>
            <p className="text-sm font-semibold text-white">Pending Records</p>
          </div>
          <span className="text-[11px] text-[#DADCD8]/60">Paged Retrieval</span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 4: Batch Processor (My Implementation) */}
        <div className="p-3.5 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#3157D5] uppercase tracking-wider font-semibold block">
              04 · Partitioning (My Scope)
            </span>
            <p className="text-sm font-semibold text-white">Batch Processor</p>
          </div>
          <span className="text-[11px] text-[#3157D5] bg-[#3157D5]/20 px-2 py-1 rounded font-semibold">
            Chunk Partitioning
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 5: Core Processing Box (My Implementation) */}
        <div className="p-5 rounded-xl border-2 border-[#3157D5] bg-[#1a233a]/80 space-y-3">
          <div className="flex items-center justify-between border-b border-[#3157D5]/30 pb-2">
            <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider">
              05 · Process Staff Record
            </span>
            <span className="text-[10px] text-white/70 bg-[#3157D5]/30 px-2 py-0.5 rounded">
              @Transactional
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-black/40 border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18835B]" />
              <span>Validate identity &amp; tenant</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18835B]" />
              <span>Create / update beneficiary</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18835B]" />
              <span>Create / update user when roles require</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18835B]" />
              <span>Version organizational data</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/10 flex items-center gap-2 sm:col-span-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18835B]" />
              <span>Validate against supported application roles &amp; mappings</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 6: PostgreSQL Storage */}
        <div className="p-3.5 rounded-lg border border-white/15 bg-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
              06 · Local Persistence
            </span>
            <p className="text-sm font-semibold text-white">PostgreSQL</p>
          </div>
          <span className="text-[11px] text-[#18835B] bg-[#18835B]/15 px-2 py-1 rounded font-semibold">
            ACID Local Commit
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 7: Successful Record Collection (My Scope) */}
        <div className="p-3.5 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#3157D5] uppercase tracking-wider font-semibold block">
              07 · Result Aggregation (My Scope)
            </span>
            <p className="text-sm font-semibold text-white">
              Successful Record Collection
            </p>
          </div>
          <span className="text-[11px] text-[#3157D5] bg-[#3157D5]/20 px-2 py-1 rounded font-semibold">
            Filtered Success Identifiers
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 8: Completion Acknowledgement (My Scope) */}
        <div className="p-3.5 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#3157D5] uppercase tracking-wider font-semibold block">
              08 · Upstream Sync Acknowledgement (My Scope)
            </span>
            <p className="text-sm font-semibold text-white">
              Completion Acknowledgement
            </p>
          </div>
          <span className="text-[11px] text-[#3157D5] bg-[#3157D5]/20 px-2 py-1 rounded font-semibold">
            Completion signal
          </span>
        </div>

        <div className="flex justify-center text-white/40 text-sm select-none">↓</div>

        {/* Step 9: Completed external cycle */}
        <div className="p-3.5 rounded-lg border border-white/15 bg-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#DADCD8]/50 uppercase tracking-wider block">
              09 · Upstream Mark
            </span>
            <p className="text-sm font-semibold text-white">External HR System</p>
          </div>
          <span className="text-[11px] text-[#18835B] bg-[#18835B]/15 px-2 py-1 rounded">
            Records Marked Synchronized
          </span>
        </div>
      </div>
    </div>
  );
}
