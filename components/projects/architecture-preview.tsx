import React from "react";

export function RexArchitecturePreview() {
  const steps = [
    { id: "01", label: "HR System", note: "Source data" },
    { id: "02", label: "Scheduled Sync", note: "Cron batch trigger" },
    { id: "03", label: "Batch Processing", note: "Paged processing" },
    { id: "04", label: "Validation & Roles", note: "Rules & mapping" },
    { id: "05", label: "PostgreSQL", note: "Transactional write" },
    { id: "06", label: "Acknowledgement", note: "Audit logging" },
  ];

  return (
    <div
      className="p-5 sm:p-6 rounded-lg border border-[#DADCD8] bg-[#111418] text-[#F7F7F3] shadow-xs"
      aria-label="REX batch synchronization pipeline architecture diagram"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DADCD8]/15">
        <span className="font-mono text-xs text-[#DADCD8]/70 tracking-wider uppercase">
          SYNTHETIC ARCHITECTURE · GENERIC NON-CONFIDENTIAL
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#18835B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#18835B]"></span>
          PROD BATCH SYNC
        </span>
      </div>

      {/* Grid flow for desktop, stacked for mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <span className="font-mono text-xs font-semibold text-[#3157D5] shrink-0">
              {step.id}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-white truncate">
                {step.label}
              </p>
              <p className="text-[11px] font-mono text-[#DADCD8]/60 truncate">
                {step.note}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <span className="hidden lg:inline text-white/30 text-xs shrink-0 select-none">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResearchArchitecturePreview() {
  const pipeline = [
    { label: "UNSW-NB15", sub: "Raw Network Flows" },
    { label: "Preprocessing", sub: "Scaling & Encoding" },
    { label: "Feature Selection", sub: "Mutual Information" },
    { label: "Shared Representation", sub: "Deep Feature Space" },
    { label: "Dual Classification", sub: "Binary + Multiclass" },
    { label: "Agentic Decision Engine", sub: "Confidence & Risk Rules" },
    { label: "Action Response", sub: "ALLOW / MONITOR / BLOCK" },
  ];

  return (
    <div
      className="p-5 sm:p-6 rounded-lg border border-[#DADCD8] bg-white text-[#16181B]"
      aria-label="Agentic AI IDS Research pipeline flow diagram"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DADCD8]">
        <span className="font-mono text-xs text-[#65686D] uppercase tracking-wider">
          EVALUATION PIPELINE
        </span>
        <span className="font-mono text-[11px] text-[#3157D5] font-semibold bg-[#3157D5]/10 px-2 py-0.5 rounded-sm">
          96.6% BINARY ACCURACY
        </span>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
        {pipeline.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex-1 min-w-[130px] p-2.5 rounded border border-[#DADCD8] bg-[#F7F7F3]/70">
              <p className="text-xs font-semibold text-[#16181B] leading-tight">
                {item.label}
              </p>
              <p className="text-[10px] font-mono text-[#65686D] mt-0.5">
                {item.sub}
              </p>
            </div>
            {index < pipeline.length - 1 && (
              <span className="hidden sm:inline text-[#65686D]/40 font-mono text-xs select-none">
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function LuxoraPlaceholderVisual() {
  return (
    <div
      className="p-5 sm:p-6 rounded-lg border border-[#DADCD8] bg-white text-[#16181B]"
      aria-label="Luxora Estates conversational query translation diagram"
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DADCD8]">
        <span className="font-mono text-xs text-[#65686D] uppercase tracking-wider">
          CONVERSATIONAL RETRIEVAL FLOW
        </span>
        <span className="font-mono text-[11px] text-[#65686D]">
          GROUNDED RELATIONAL QUERY
        </span>
      </div>
      <div className="space-y-2.5 font-mono text-xs">
        <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8]">
          <span className="text-[#3157D5] font-semibold">User Prompt:</span>{" "}
          <span className="text-[#16181B]">
            &quot;3 BHK near Whitefield under ₹1.5 Cr with clubhouse&quot;
          </span>
        </div>
        <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8] flex flex-wrap gap-2 text-[11px]">
          <span className="bg-white px-2 py-0.5 rounded border border-[#DADCD8] text-[#16181B]">
            Type: 3 BHK
          </span>
          <span className="bg-white px-2 py-0.5 rounded border border-[#DADCD8] text-[#16181B]">
            Loc: Whitefield
          </span>
          <span className="bg-white px-2 py-0.5 rounded border border-[#DADCD8] text-[#16181B]">
            Max Price: 15,000,000
          </span>
          <span className="bg-white px-2 py-0.5 rounded border border-[#DADCD8] text-[#16181B]">
            Amenity: Clubhouse
          </span>
        </div>
        <div className="p-2.5 rounded bg-[#111418] text-[#F7F7F3] text-[11px]">
          <span className="text-[#18835B]">PostgreSQL Result:</span> Parameterized
          match · Deterministic ranking · Guarded response
        </div>
      </div>
    </div>
  );
}
