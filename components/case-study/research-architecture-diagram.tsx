import React from "react";

export function ResearchArchitectureDiagram() {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white shadow-2xs font-mono text-xs"
      aria-label="Research System Architecture: from raw UNSW-NB15 flow data through preprocessing, mutual-information feature selection, multi-task deep representation, and agentic decision engine to automated response actions."
    >
      <div className="sr-only">
        System Architecture flow description: The pipeline ingests UNSW-NB15 network flow data, performs numeric encoding, Z-score normalization, and stratified splitting. Next, mutual-information feature selection extracts the top 25 features. These are passed to a shared deep-learning feature representation that branches into two heads: binary detection (normal vs attack) and multiclass classification (attack categories). Their joint prediction confidence and severity vectors feed into the agentic decision engine, which fuses instantaneous severity, temporal severity, system criticality, and uncertainty to select an ALLOW, MONITOR, or BLOCK action, concluding with decision logging and alerting.
      </div>

      <div className="flex flex-col items-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
        {/* Stage 1: Data Input */}
        <div className="w-full text-center p-3.5 rounded-lg border border-[#DADCD8] bg-[#F7F7F3]">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            01 / INGESTION
          </span>
          <p className="font-bold text-[#16181B] text-sm mt-0.5">
            UNSW-NB15 Network Flow Records
          </p>
          <p className="text-[11px] text-[#65686D] mt-0.5 font-sans">
            Combined train/test partitions · 42 raw tabular traffic features
          </p>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 2: Preprocessing */}
        <div className="w-full text-center p-3.5 rounded-lg border border-[#DADCD8] bg-white">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            02 / PREPROCESSING
          </span>
          <p className="font-bold text-[#16181B] text-sm mt-0.5">
            Data Cleaning, Z-Score Normalization &amp; Categorical Encoding
          </p>
          <p className="text-[11px] text-[#65686D] mt-0.5 font-sans">
            Stratified 80/20 train-test split · Rare attacks mapped to OTHER
          </p>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 3: Feature Selection */}
        <div className="w-full text-center p-3.5 rounded-lg border border-[#3157D5]/40 bg-[#3157D5]/5">
          <span className="text-[10px] text-[#3157D5] uppercase tracking-wider block font-semibold">
            03 / DIMENSIONALITY REDUCTION
          </span>
          <p className="font-bold text-[#16181B] text-sm mt-0.5">
            Mutual-Information Feature Selection
          </p>
          <p className="text-[11px] text-[#65686D] mt-0.5 font-sans">
            Top 25 highest information-gain features retained to mitigate overfitting
          </p>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 4: Shared Feature Representation */}
        <div className="w-full text-center p-4 rounded-lg border-2 border-[#16181B] bg-[#16181B] text-white">
          <span className="text-[10px] text-[#DADCD8] uppercase tracking-wider block font-semibold">
            04 / CORE BACKBONE
          </span>
          <p className="font-bold text-base mt-0.5">
            Shared Feature Representation
          </p>
          <p className="text-[11px] text-[#DADCD8] mt-0.5 font-sans">
            Multi-task dense latent space learned across evaluation backbones (MLP, CNN, GRU, LSTM)
          </p>
        </div>

        {/* Branching indicator */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Head A: Binary Detection */}
          <div className="p-3.5 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-1 text-center">
            <span className="text-[10px] text-[#18835B] uppercase tracking-wider block font-bold">
              HEAD A · BINARY
            </span>
            <p className="font-bold text-[#16181B] text-xs">
              Intrusion Detection
            </p>
            <p className="text-[11px] text-[#65686D] font-sans">
              Normal vs. Attack probability (<span className="font-mono">P_binary</span>)
            </p>
          </div>

          {/* Head B: Multiclass Classification */}
          <div className="p-3.5 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] space-y-1 text-center">
            <span className="text-[10px] text-[#3157D5] uppercase tracking-wider block font-bold">
              HEAD B · MULTICLASS
            </span>
            <p className="font-bold text-[#16181B] text-xs">
              Attack Category Classification
            </p>
            <p className="text-[11px] text-[#65686D] font-sans">
              Multiclass probability distribution across attack types
            </p>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 5: Prediction Confidence / Severity */}
        <div className="w-full text-center p-3.5 rounded-lg border border-[#DADCD8] bg-white">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            05 / SIGNAL EXTRACTION
          </span>
          <p className="font-bold text-[#16181B] text-xs mt-0.5">
            Prediction Confidence &amp; Instantaneous Severity Vector
          </p>
          <p className="text-[11px] text-[#65686D] mt-0.5 font-sans">
            Entropy-derived uncertainty · Maximum attack class probability
          </p>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 6: Agentic Decision Engine */}
        <div className="w-full text-center p-4 rounded-lg border-2 border-[#3157D5] bg-[#3157D5]/10">
          <span className="text-[10px] text-[#3157D5] uppercase tracking-wider block font-bold">
            06 / AUTONOMOUS REASONING
          </span>
          <p className="font-bold text-[#16181B] text-sm mt-0.5">
            Agentic Threat Response Decision Engine
          </p>
          <p className="text-[11px] text-[#65686D] mt-0.5 font-sans">
            Risk fusion (binary + instantaneous + temporal) adjusted by system criticality &amp; model uncertainty
          </p>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 7: Action Selection */}
        <div className="w-full grid grid-cols-3 gap-2">
          <div className="p-3 rounded-lg border border-[#18835B]/30 bg-[#18835B]/10 text-center">
            <span className="font-bold text-xs text-[#18835B] block">ALLOW</span>
            <span className="text-[10px] text-[#65686D] font-sans">Score &lt; α</span>
          </div>
          <div className="p-3 rounded-lg border border-amber-300 bg-amber-50 text-center">
            <span className="font-bold text-xs text-amber-800 block">MONITOR</span>
            <span className="text-[10px] text-[#65686D] font-sans">α ≤ Score &lt; θ₁</span>
          </div>
          <div className="p-3 rounded-lg border border-red-300 bg-red-50 text-center">
            <span className="font-bold text-xs text-red-700 block">BLOCK</span>
            <span className="text-[10px] text-[#65686D] font-sans">Score ≥ θ₁ or Policy</span>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="text-[#3157D5] font-bold text-xs" aria-hidden="true">↓</div>

        {/* Stage 8: Decision Logging & Alerting */}
        <div className="w-full text-center p-3 rounded-lg border border-[#DADCD8] bg-[#F7F7F3]">
          <span className="text-[10px] text-[#65686D] uppercase tracking-wider block font-semibold">
            07 / AUDIT &amp; OBSERVABILITY
          </span>
          <p className="font-semibold text-[#16181B] text-xs mt-0.5">
            Decision Logging, Telemetry &amp; Operator Alerting
          </p>
        </div>
      </div>
    </div>
  );
}
