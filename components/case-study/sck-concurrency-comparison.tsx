import React from "react";

export function SckConcurrencyComparison() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-[#111418] text-[#F7F7F3] space-y-6"
      aria-label="Booking Transaction vs Concurrency Control Comparison"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5] block">
            SLOT RESERVATION · CODE-LEVEL CONCURRENCY ANALYSIS
          </span>
          <p className="text-xs text-[#DADCD8]/60 mt-0.5">
            Why database transactions alone do not prevent race conditions without conditional locking or uniqueness constraints
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded">
            Current: Non-Conditional Update
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
            Proposed: Atomic Conditional Claim
          </span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-xs">
        {/* CURRENT IMPLEMENTATION */}
        <div className="p-5 rounded-lg border border-red-500/30 bg-red-950/20 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-2">
              <span className="text-red-400 font-bold uppercase tracking-wider">
                Current Implementation
              </span>
              <span className="text-[10px] text-red-300/80 bg-red-900/40 px-2 py-0.5 rounded">
                Unprotected Race Window
              </span>
            </div>

            <p className="text-[11px] text-[#DADCD8]/80 font-sans leading-relaxed">
              Availability is evaluated in an application-level query prior to opening the database transaction. Once inside the transaction, the slot is updated directly by primary key without verifying that its status is still <code className="text-red-300">available</code>.
            </p>

            {/* Sequence Steps */}
            <div className="space-y-2 pt-2">
              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span>1. Read slot availability</span>
                <span className="text-[10px] text-amber-300">SELECT WHERE id = ?</span>
              </div>
              <div className="text-center text-white/30 text-xs select-none">↓ Pre-check passes for User A & User B</div>
              <div className="p-2.5 rounded bg-red-950/50 border border-red-500/30">
                <div className="flex justify-between items-center text-red-300 font-semibold mb-1">
                  <span>2. BEGIN TRANSACTION</span>
                  <span className="text-[10px] text-red-400">Postgres tx</span>
                </div>
                <div className="text-[11px] text-[#DADCD8]/70 space-y-1 pl-2 border-l border-red-500/30">
                  <p>• INSERT INTO bookings (status = &apos;pending&apos;)</p>
                  <p className="text-red-300">• UPDATE offering_slots SET status = &apos;booked&apos; WHERE id = ?</p>
                  <p>• DELETE FROM booking_drafts WHERE id = ?</p>
                </div>
              </div>
              <div className="text-center text-white/30 text-xs select-none">↓ Both commits succeed sequentially</div>
              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span>3. COMMIT</span>
                <span className="text-[10px] text-red-400 font-semibold">Race commits 2 bookings</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-[11px] text-red-200 font-sans">
            <strong>Vulnerability:</strong> Because the slot update unconditionally targets <code className="text-red-300 font-mono">id = ?</code> without an exclusion constraint or conditional status guard, two parallel requests both observe an available slot and both successfully write duplicate active bookings.
          </div>
        </div>

        {/* PROPOSED IMPROVEMENT */}
        <div className="p-5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="text-emerald-400 font-bold uppercase tracking-wider">
                Proposed Improvement
              </span>
              <span className="text-[10px] text-emerald-300/90 bg-emerald-900/40 px-2 py-0.5 rounded font-bold">
                PROPOSED — NOT CURRENTLY IMPLEMENTED
              </span>
            </div>

            <p className="text-[11px] text-[#DADCD8]/80 font-sans leading-relaxed">
              Eliminate the race condition by turning slot claim into an atomic conditional write directly inside the transaction, complemented by a database-level partial unique constraint.
            </p>

            {/* Sequence Steps */}
            <div className="space-y-2 pt-2">
              <div className="p-2.5 rounded bg-emerald-950/50 border border-emerald-500/30">
                <span className="text-emerald-300 font-semibold block mb-1">1. BEGIN TRANSACTION</span>
                <div className="p-2 rounded bg-black/60 border border-emerald-500/20 text-[11px] text-emerald-300 space-y-0.5">
                  <p className="text-emerald-400 font-bold">UPDATE offering_slots</p>
                  <p className="pl-3">SET status = &apos;booked&apos;</p>
                  <p className="pl-3">WHERE id = :slotId</p>
                  <p className="pl-6 text-emerald-200 font-bold">AND status = &apos;available&apos;</p>
                  <p className="pl-3">RETURNING id;</p>
                </div>
              </div>

              <div className="text-center text-white/30 text-xs select-none">↓ Evaluate row count returned</div>

              <div className="p-2.5 rounded bg-black/40 border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">2. Exactly one row claimed?</span>
                  <span className="text-[10px] text-emerald-400">Atomic branch</span>
                </div>
                <div className="text-[11px] text-[#DADCD8]/70 space-y-0.5 pl-2 border-l border-emerald-500/30">
                  <p className="text-red-300">├─ No (0 rows) → ROLLBACK &amp; return 409 Conflict</p>
                  <p className="text-emerald-300">└─ Yes (1 row) → Proceed to insert booking &amp; delete draft</p>
                </div>
              </div>

              <div className="text-center text-white/30 text-xs select-none">↓ Guaranteed exclusive ownership</div>

              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span>3. COMMIT TRANSACTION</span>
                <span className="text-[10px] text-emerald-400 font-semibold">Conflict-free booking</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-200 font-sans space-y-1">
            <p>
              <strong>Defense in Depth:</strong> In addition to the atomic conditional update, add a PostgreSQL partial unique index:
            </p>
            <p className="font-mono text-[10px] text-emerald-300 bg-black/40 p-1.5 rounded">
              CREATE UNIQUE INDEX uq_active_slot_booking ON bookings (slot_id) WHERE status IN (&apos;pending&apos;, &apos;confirmed&apos;);
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
