import React from "react";

export function ConfidentialityNote() {
  return (
    <aside
      aria-label="Confidentiality and proprietary disclaimer"
      className="p-4 sm:p-5 rounded-lg border border-[#DADCD8] bg-white text-xs text-[#65686D] space-y-1.5"
    >
      <div className="flex items-center gap-2 text-[#16181B] font-mono font-semibold text-[11px] uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-[#3157D5]" aria-hidden="true" />
        <span>Confidentiality & Provenance Notice</span>
      </div>
      <p className="leading-relaxed">
        REX is a proprietary team-maintained system. This case study describes only my contributions using generalized terminology and synthetic diagrams. No source code, customer data, credentials, or internal API contracts are included.
      </p>
    </aside>
  );
}
