import React from "react";

export function DecisionEngineDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white shadow-2xs font-mono text-xs"
      aria-label="Agentic Decision Engine Conceptual Architecture: from raw model predictions through severity extraction, risk fusion, criticality adjustment, uncertainty weighting, policy checks, to final action determination."
    >
      <div className="sr-only">
        Decision Engine Flow: Dual heads provide binary confidence and multiclass probabilities. These yield Instantaneous Severity and Temporal Severity (weighted with exponential decay λ=0.85). Risk Fusion computes a weighted composite (β=0.4, γ=0.4). This baseline risk is modulated by Criticality Adjustment and Uncertainty Adjustment. The adjusted score is evaluated against policy rules and thresholds (α=0.3, θ₁=0.6, θ₂=0.8) to yield an ALLOW, MONITOR, or BLOCK operational verdict.
      </div>

      <div className="max-w-xl mx-auto space-y-3.5">
        {/* Step 1: Model Outputs */}
        <div className="p-3.5 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] text-center">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            INPUT SIGNALS
          </span>
          <p className="font-bold text-[#16181B] text-sm mt-0.5">
            Model Prediction Heads
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className="p-2 rounded bg-white border border-[#DADCD8]">
              <span className="font-mono text-[#18835B] font-semibold block">P(Malicious)</span>
              Binary intrusion probability
            </div>
            <div className="p-2 rounded bg-white border border-[#DADCD8]">
              <span className="font-mono text-[#3157D5] font-semibold block">P(Class Vector)</span>
              Multiclass probability distribution
            </div>
          </div>
        </div>

        <div className="text-center text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Step 2: Severity Formulation */}
        <div className="p-3.5 rounded-lg border border-[#DADCD8] bg-white text-center">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            COMPONENT EXTRACTION
          </span>
          <p className="font-bold text-[#16181B] text-xs mt-0.5">
            Instantaneous Severity + Temporal Severity + Binary Confidence
          </p>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans text-left">
            <div className="p-2 rounded bg-[#F7F7F3] border border-[#DADCD8]">
              <p className="font-mono font-semibold text-[#16181B] text-[10px]">Instantaneous Severity (S_inst)</p>
              <p className="text-[#65686D] text-[11px] mt-0.5">Maximum probability observed across attack classes for the current flow record</p>
            </div>
            <div className="p-2 rounded bg-[#F7F7F3] border border-[#DADCD8]">
              <p className="font-mono font-semibold text-[#16181B] text-[10px]">Temporal Severity (S_temp)</p>
              <p className="text-[#65686D] text-[11px] mt-0.5">Historical severity accumulated across recent turns with exponential decay (λ = 0.85)</p>
            </div>
          </div>
        </div>

        <div className="text-center text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Step 3: Risk Fusion */}
        <div className="p-3.5 rounded-lg border border-[#3157D5]/40 bg-[#3157D5]/5 text-center">
          <span className="text-[10px] text-[#3157D5] uppercase tracking-wider block font-semibold">
            STAGE 1 · RISK FUSION
          </span>
          <p className="font-bold text-[#16181B] text-xs mt-0.5">
            Weighted Composite Risk Calculation
          </p>
          <p className="text-[11px] text-[#65686D] font-mono mt-1">
            Risk_base = (1 - β - γ) · P_binary + β · S_inst + γ · S_temp
          </p>
          <p className="text-[10px] text-[#65686D] font-sans mt-0.5">
            Experimental weights: β = 0.4, γ = 0.4
          </p>
        </div>

        <div className="text-center text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Step 4: Adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 rounded-lg border border-[#DADCD8] bg-white text-center">
            <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
              STAGE 2 · CRITICALITY
            </span>
            <p className="font-bold text-[#16181B] text-xs mt-0.5">
              Asset Priority Scaling
            </p>
            <p className="text-[11px] text-[#65686D] font-sans mt-0.5">
              System criticality contributes to the risk adjustment
            </p>
          </div>
          <div className="p-3 rounded-lg border border-[#DADCD8] bg-white text-center">
            <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
              STAGE 3 · UNCERTAINTY
            </span>
            <p className="font-bold text-[#16181B] text-xs mt-0.5">
              Confidence Modulation
            </p>
            <p className="text-[11px] text-[#65686D] font-sans mt-0.5">
              Model uncertainty contributes to the risk adjustment
            </p>
          </div>
        </div>

        <div className="text-center text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Step 5: Policy & Threshold Evaluation */}
        <div className="p-3.5 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] text-center">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            STAGE 4 · DECISION LOGIC
          </span>
          <p className="font-bold text-[#16181B] text-xs mt-0.5">
            Policy Override &amp; Multi-Threshold Classification
          </p>
          <p className="text-[11px] text-[#65686D] font-sans mt-0.5">
            Policy rules and empirically chosen thresholds determine the response
          </p>
        </div>

        <div className="text-center text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Step 6: Final Tri-State Action */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
          <div className="p-3 rounded-lg border border-[#18835B]/40 bg-[#18835B]/10 space-y-1">
            <span className="font-bold text-sm text-[#18835B] block">ALLOW</span>
            <span className="text-[10px] font-mono text-[#18835B] font-semibold block">Score &lt; α (0.3)</span>
            <p className="text-[11px] text-[#65686D] font-sans">Normal benign flow; standard packet transmission permitted</p>
          </div>
          <div className="p-3 rounded-lg border border-amber-300 bg-amber-50 space-y-1">
            <span className="font-bold text-sm text-amber-800 block">MONITOR</span>
            <span className="text-[10px] font-mono text-amber-800 font-semibold block">0.3 ≤ Score &lt; 0.6</span>
            <p className="text-[11px] text-[#65686D] font-sans">Moderate risk or uncertainty; marked for monitoring</p>
          </div>
          <div className="p-3 rounded-lg border border-red-300 bg-red-50 space-y-1">
            <span className="font-bold text-sm text-red-700 block">BLOCK</span>
            <span className="text-[10px] font-mono text-red-700 font-semibold block">Score ≥ θ₁ (0.6)</span>
            <p className="text-[11px] text-[#65686D] font-sans">High-risk or policy-triggered response; decision logged</p>
          </div>
        </div>
      </div>
    </div>
  );
}
