import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { ResearchArchitectureDiagram } from "@/components/case-study/research-architecture-diagram";
import { DecisionEngineDiagram } from "@/components/case-study/decision-engine-diagram";
import { ModelComparisonTable } from "@/components/case-study/model-comparison-table";
import { NextProject } from "@/components/case-study/next-project";

export const metadata: Metadata = {
  title: { absolute: "Agentic AI Intrusion Detection Research | Gokul Venkat" },
  description:
    "Research case study on a deep-learning intrusion detection system using UNSW-NB15, multi-task binary and multiclass classification, and a risk-aware agentic decision engine for automated response.",
  openGraph: {
    title: "Agentic AI Intrusion Detection Research | Gokul Venkat",
    description:
      "A deep-learning intrusion detection framework combining binary detection, multiclass classification, and an agentic risk decision engine on UNSW-NB15.",
    type: "article",
    url: "/research/agentic-ids",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Intrusion Detection Research | Gokul Venkat",
    description:
      "Deep learning intrusion detection and automated threat response research presented at SCI-2026.",
  },
  alternates: { canonical: "/research/agentic-ids" },
};

export default function AgenticIdsResearchPage() {
  const lessons = [
    {
      title: "MODEL COMPLEXITY SHOULD FOLLOW THE DATA",
      body: "More complex sequence architectures are not automatically better for tabular network-flow features.",
    },
    {
      title: "METRICS NEED CONTEXT",
      body: "Accuracy alone can hide important behavior in imbalanced classification.",
    },
    {
      title: "DETECTION AND RESPONSE ARE DIFFERENT PROBLEMS",
      body: "A classifier predicts; an operational decision layer must reason about confidence, severity, and policy.",
    },
    {
      title: "RESEARCH CLAIMS NEED BOUNDARIES",
      body: "Benchmark results should not be presented as production security guarantees.",
    },
    {
      title: "EXPERIMENT DESIGN MATTERS",
      body: "Preprocessing, feature grouping, feature selection, thresholds, and class imbalance all influence outcomes.",
    },
  ];

  const authors = [
    "Ravi Kiran Varma Penmatsa",
    "Ram Sai Chinchinada",
    "Pavan Aditya Kumar Gorrela",
    "Gokul Venkat Bonam",
    "Vinay Konda Reddy Goluguri",
  ];

  return (
    <article className="min-h-screen">
      {/* 1. Research hero */}
      <CaseStudyHero
        label="RESEARCH / 01"
        title="Agentic AI Driven Intrusion Detection"
        subtitle="Deep Learning Detection + Autonomous Threat Response"
        summary="Final-year research exploring a deep-learning intrusion detection framework that combines binary attack detection, multiclass attack classification, and a risk-aware decision engine capable of selecting ALLOW, MONITOR, or BLOCK responses."
        metaItems={[
          { label: "TYPE", value: "Final-Year Research" },
          { label: "DOMAIN", value: "Deep Learning · Cybersecurity" },
          { label: "DATASET", value: "UNSW-NB15" },
          { label: "STATUS", value: "Presented at SCI-2026 · Publication forthcoming" },
        ]}
        backHref="/#work"
        backLabel="Back to selected work"
      />

      {/* 2. Research motivation */}
      <section
        aria-labelledby="motivation-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                01 / PROBLEM CONTEXT
              </span>
              <h2
                id="motivation-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                From detecting threats to deciding how to respond
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                Signature-based intrusion detection depends on known patterns and can be effective for previously identified threats, but it may become less effective when attack behavior changes or previously unseen patterns emerge.
              </p>
              <p className="text-sm sm:text-base text-[#65686D]">
                Deep-learning models can learn complex patterns from high-dimensional network-flow features. Detection and classification alone, however, do not determine what operational action should follow. This research therefore combines deep-learning flow detection, multiclass attack classification, and a risk-aware decision layer that selects ALLOW, MONITOR, or BLOCK actions within the experimental framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] block uppercase">
                  Signature Limitations
                </span>
                <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                  Rule-based detection is tied to predefined patterns and can be less adaptable when attack behavior changes.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] block uppercase">
                  Passive Classification Gap
                </span>
                <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                  Predicting an attack label does not dictate how to act when model uncertainty or system criticality varies.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] block uppercase">
                  Unified Agentic Response
                </span>
                <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                  Fuses multi-task probabilities, severity accumulation, and policy thresholds into operational decisions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. System architecture */}
      <section
        aria-labelledby="architecture-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                02 / SYSTEM ARCHITECTURE
              </span>
              <h2
                id="architecture-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                End-to-End Pipeline Architecture
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Structured flow from raw network flow records to preprocessed representations, multi-task deep feature extraction, and risk-weighted agentic action determination:
              </p>
            </div>

            <ResearchArchitectureDiagram />
          </div>
        </Container>
      </section>

      {/* 4. Dataset & preprocessing */}
      <section
        aria-labelledby="dataset-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                03 / DATA FOUNDATION
              </span>
              <h2
                id="dataset-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Preparing network-flow data for learning
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                The experimental pipeline relies strictly on standardized tabular flow records from the UNSW-NB15 benchmark dataset:
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-5">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#16181B]">
                Data Pipeline &amp; Transformation Protocol
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-[#F7F7F3] border border-[#DADCD8] space-y-2">
                  <span className="font-mono font-bold text-[#3157D5] block">
                    Dataset Consolidation &amp; Partitioning
                  </span>
                  <ul className="space-y-1.5 text-[#65686D]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3157D5] font-bold">·</span>
                      <span>Raw training and testing splits were combined and randomly shuffled to eliminate temporal ordering artifacts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3157D5] font-bold">·</span>
                      <span>Data was partitioned into 80% training and 20% test sets using strict label stratification.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3157D5] font-bold">·</span>
                      <span>A deterministic subset of the training partition was isolated as an internal validation holdout.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[#F7F7F3] border border-[#DADCD8] space-y-2">
                  <span className="font-mono font-bold text-[#3157D5] block">
                    Feature Encoding &amp; Rare Class Grouping
                  </span>
                  <ul className="space-y-1.5 text-[#65686D]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3157D5] font-bold">·</span>
                      <span>Categorical network attributes (protocol, service, state) were numerically mapped via label encoding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3157D5] font-bold">·</span>
                      <span>Numerical features were standardized using Z-score normalization so that values were centered around a mean of 0 with a standard deviation of 1.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3157D5] font-bold">·</span>
                      <span>Sparse, severe attack classes (Analysis, Backdoor, Shellcode, Worms) were grouped into an aggregated <code className="font-mono text-xs">OTHER</code> category to mitigate severe class imbalance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] font-mono text-xs text-[#65686D]">
                <span className="font-semibold text-[#16181B]">Dual-Label Targets:</span> Each flow vector is supervised by two simultaneous ground-truth labels: a binary flag (<code className="text-[#18835B]">Normal vs. Attack</code>) and a grouped multiclass attack designation.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Feature selection */}
      <section
        aria-labelledby="features-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                04 / FEATURE SELECTION
              </span>
              <h2
                id="features-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Reducing dimensionality with mutual information
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                Raw UNSW-NB15 flow data includes 42 descriptive features spanning connection metrics, packet lengths, inter-arrival times, and protocol-related attributes. Mutual-information (MI) ranking was used to reduce the input feature set while retaining features with stronger relationships to the prediction targets.
              </p>
              <p className="text-sm sm:text-base text-[#65686D]">
                Mutual information measures dependence between individual features and the target label without assuming a purely linear relationship. The experimental pipeline retained the top 25 ranked features, reducing the model input from 42 features to 25.
              </p>
            </div>

            {/* Critical Nuance Callout */}
            <div className="p-5 rounded-xl border border-amber-300 bg-amber-50/50 space-y-2 text-xs sm:text-sm text-[#16181B]">
              <div className="flex items-center gap-2 font-mono font-bold text-amber-900 uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span>Empirical Nuance: Feature Selection vs. Raw Accuracy</span>
              </div>
              <p className="text-[#65686D] leading-relaxed">
                Feature selection did not universally improve raw prediction accuracy. As documented in the experimental results, post-selection model accuracies were lower across all four evaluated architectures than the corresponding pre-selection results. Its clearest demonstrated effect in this experiment was reducing the model input from 42 features to 25 rather than maximizing benchmark accuracy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Multi-task deep-learning architecture */}
      <section
        aria-labelledby="multitask-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                05 / MODEL DESIGN
              </span>
              <h2
                id="multitask-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                One representation, two prediction tasks
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                The framework uses a shared representation that branches into two related prediction heads:
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-6">
              <div className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] font-mono text-xs text-center space-y-2">
                <span className="text-[#3157D5] font-semibold block">SHARED LATENT REPRESENTATION</span>
                <p className="text-[#16181B] font-bold text-sm">Common Dense Feature Space</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded bg-white border border-[#DADCD8]">
                    <span className="text-[#18835B] font-bold block">Head A: Binary</span>
                    <p className="text-[#65686D] text-[11px] font-sans mt-0.5">
                      Sigmoid output: Normal flow vs. malicious attack presence
                    </p>
                  </div>
                  <div className="p-3 rounded bg-white border border-[#DADCD8]">
                    <span className="text-[#3157D5] font-bold block">Head B: Multiclass</span>
                    <p className="text-[#65686D] text-[11px] font-sans mt-0.5">
                      Softmax vector: Specific attack categorization across classes
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#65686D] leading-relaxed">
                <p>
                  <strong className="text-[#16181B]">Architectural Rationale:</strong> Binary intrusion detection and attack-type classification are related tasks. A shared representation allows both prediction heads to learn from common network-flow features while producing separate binary and multiclass outputs.
                </p>
                <p>
                  <strong className="text-[#16181B]">Evaluated Model Families:</strong> Four distinct neural network architectures were evaluated on this multi-task objective: Multilayer Perceptron (MLP), 1D Convolutional Neural Network (CNN), Gated Recurrent Unit (GRU), and Long Short-Term Memory (LSTM). Internal layer counts, kernel configurations, and hidden units varied appropriately across the four families.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Model comparison */}
      <section
        aria-labelledby="comparison-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                06 / COMPARATIVE EVALUATION
              </span>
              <h2
                id="comparison-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Model Performance &amp; Dimensionality Trade-offs
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Empirical binary classification accuracy across architectures before and after mutual-information feature reduction:
              </p>
            </div>

            <ModelComparisonTable />
          </div>
        </Container>
      </section>

      {/* 8. Agentic decision engine */}
      <section
        aria-labelledby="engine-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                07 / RESPONSE AUTOMATION
              </span>
              <h2
                id="engine-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Converting model predictions into actions
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Raw probabilities are insufficient to make operational security decisions. The agentic decision engine acts as an autonomous reasoning layer, fusing model outputs, context, and operational policies:
              </p>
            </div>

            <DecisionEngineDiagram />
          </div>
        </Container>
      </section>

      {/* 9. Risk reasoning */}
      <section
        aria-labelledby="reasoning-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                08 / DECISION MATHEMATICS
              </span>
              <h2
                id="reasoning-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                How the decision score is constructed
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                Rather than treating classification thresholds as static cutoffs, the engine synthesizes an aggregated risk metric through multi-component fusion:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase block">
                  1. Instantaneous Severity
                </span>
                <p className="text-[#65686D] leading-relaxed">
                  Extracted as the maximum probability across the multiclass attack vector, reflecting immediate threat severity identified in the current flow record.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase block">
                  2. Temporal Severity
                </span>
                <p className="text-[#65686D] leading-relaxed">
                  Incorporates historical severity using an exponential decay factor (parameter <code className="font-mono">λ = 0.85</code>) so that recent observations retain more influence than older ones.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase block">
                  3. Risk Fusion Formulation
                </span>
                <p className="text-[#65686D] leading-relaxed">
                  Computes a weighted composite: binary attack probability is balanced against instantaneous severity (<code className="font-mono">β = 0.4</code>) and temporal severity (<code className="font-mono">γ = 0.4</code>).
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2">
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase block">
                  4. Criticality &amp; Uncertainty Modulation
                </span>
                <p className="text-[#65686D] leading-relaxed">
                  Baseline risk is adjusted using system criticality and model uncertainty so that the decision layer can account for operational context in addition to prediction confidence.
                </p>
              </div>
            </div>

            {/* Threshold Callout */}
            <div className="p-5 rounded-xl border border-[#DADCD8] bg-[#F7F7F3] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#DADCD8] pb-2">
                <span className="font-bold text-[#16181B] uppercase">
                  Experimental Parameters (Settings Used in the Paper)
                </span>
                <span className="text-[#65686D] text-[10px]">Benchmark Empirical Setup</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[#16181B]">
                <div>
                  <span className="text-[10px] text-[#65686D] block">SEVERITY WEIGHT (β)</span>
                  <span className="font-bold text-sm">0.40</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#65686D] block">TEMPORAL WEIGHT (γ)</span>
                  <span className="font-bold text-sm">0.40</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#65686D] block">DECAY FACTOR (λ)</span>
                  <span className="font-bold text-sm">0.85</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#65686D] block">ALLOW THRESHOLD (α)</span>
                  <span className="font-bold text-sm text-[#18835B]">0.30</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#65686D] block">BLOCK THRESHOLD (θ₁)</span>
                  <span className="font-bold text-sm text-red-600">0.60</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#65686D] block">ESCALATION THRESHOLD (θ₂)</span>
                  <span className="font-bold text-sm text-red-800">0.80</span>
                </div>
              </div>
              <p className="text-[11px] text-[#65686D] font-sans pt-1">
                * Note: These threshold and weight values were chosen empirically for evaluation on the UNSW-NB15 benchmark and are not presented as universal optimal values for production networks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Evaluation methodology */}
      <section
        aria-labelledby="methodology-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                09 / METHODOLOGY
              </span>
              <h2
                id="methodology-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Why accuracy alone was not enough
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                Network intrusion detection datasets exhibit severe natural class imbalance—benign background flows substantially outnumber attacks, and specific attack types appear in tiny frequencies. A naive model predicting benign for every flow can register deceptively high accuracy while completely failing to detect actual breaches.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              {[
                { name: "Precision & Recall", desc: "Balancing detection sensitivity against false alarm rates" },
                { name: "F1-Score", desc: "Harmonic mean accounting for label skew" },
                { name: "ROC-AUC", desc: "Discrimination capacity across all decision thresholds" },
                { name: "Confusion Matrices", desc: "Granular verification of per-class error distributions" },
              ].map((m) => (
                <div key={m.name} className="p-3.5 rounded-lg border border-[#DADCD8] bg-white space-y-1">
                  <span className="font-bold text-[#3157D5] block">{m.name}</span>
                  <p className="text-[11px] text-[#65686D] font-sans leading-normal">{m.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#65686D] leading-relaxed">
              In intrusion detection, <strong>false negatives</strong> can be especially consequential because malicious activity may be classified as normal, while <strong>false positives</strong> can unnecessarily disrupt legitimate traffic. Precision, recall, F1-score, ROC-AUC, Precision-Recall behavior, and confusion matrices therefore provide useful context beyond accuracy alone.
            </p>
          </div>
        </Container>
      </section>

      {/* 11. Results */}
      <section
        aria-labelledby="results-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                10 / EXPERIMENTAL RESULTS
              </span>
              <h2
                id="results-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Empirical Evaluation Results
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Quantitative benchmark outcomes recorded across models post-feature selection:
              </p>
            </div>

            {/* Binary Classification Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3157D5]">
                  MLP Architecture
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">Accuracy:</span>
                    <span className="font-bold text-[#16181B]">96.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">ROC-AUC:</span>
                    <span className="font-bold text-[#3157D5]">0.9966</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">Precision:</span>
                    <span className="font-bold text-[#16181B]">0.959</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">Recall:</span>
                    <span className="font-bold text-[#16181B]">0.969</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
                  CNN Architecture
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">Accuracy:</span>
                    <span className="font-bold text-[#16181B]">94.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">ROC-AUC:</span>
                    <span className="font-bold text-[#3157D5]">0.9892</span>
                  </div>
                  <div className="flex justify-between text-[#65686D]">
                    <span>Features:</span>
                    <span>25 MI</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
                  LSTM Architecture
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">Accuracy:</span>
                    <span className="font-bold text-[#16181B]">90.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">ROC-AUC:</span>
                    <span className="font-bold text-[#3157D5]">0.9752</span>
                  </div>
                  <div className="flex justify-between text-[#65686D]">
                    <span>Features:</span>
                    <span>25 MI</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#65686D]">
                  GRU Architecture
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">Accuracy:</span>
                    <span className="font-bold text-[#16181B]">89.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#65686D]">ROC-AUC:</span>
                    <span className="font-bold text-[#3157D5]">0.9834</span>
                  </div>
                  <div className="flex justify-between text-[#65686D]">
                    <span>Features:</span>
                    <span>25 MI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Distribution Block */}
            <div className="p-6 rounded-xl border border-[#DADCD8] bg-[#F7F7F3] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#DADCD8] pb-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#16181B]">
                  Observed Agentic Response Distribution (Test Benchmark Partition)
                </h3>
                <span className="font-mono text-[11px] text-[#65686D]">
                  Total Evaluated Flows: 51,535
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                <div className="p-4 rounded-lg bg-white border border-red-300 space-y-1">
                  <span className="text-[10px] text-red-700 uppercase font-semibold">BLOCK DECISIONS</span>
                  <p className="text-xl sm:text-2xl font-bold text-red-700">20,991</p>
                  <p className="text-[11px] text-[#65686D] font-sans">40.7% of evaluated flow records</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#18835B]/40 space-y-1">
                  <span className="text-[10px] text-[#18835B] uppercase font-semibold">ALLOW DECISIONS</span>
                  <p className="text-xl sm:text-2xl font-bold text-[#18835B]">19,641</p>
                  <p className="text-[11px] text-[#65686D] font-sans">38.1% of evaluated flow records</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-amber-300 space-y-1">
                  <span className="text-[10px] text-amber-800 uppercase font-semibold">MONITOR DECISIONS</span>
                  <p className="text-xl sm:text-2xl font-bold text-amber-800">10,903</p>
                  <p className="text-[11px] text-[#65686D] font-sans">21.2% of evaluated flow records</p>
                </div>
              </div>

              <p className="text-xs text-[#65686D] leading-relaxed">
                * Note on Scope: These counts represent the response distribution produced by the decision engine over the static test partition in our experimental setup. They describe benchmark evaluation outcomes, not live operational block counts in a production network.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. Interpretation */}
      <section
        aria-labelledby="interpretation-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                11 / ANALYSIS
              </span>
              <h2
                id="interpretation-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What the experiment suggests
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#16181B] leading-relaxed">
              <p>
                The MLP configuration performed strongly on this tabular benchmark, registering 96.6% accuracy and 0.9966 ROC-AUC following feature selection.
              </p>
              <p className="text-sm sm:text-base text-[#65686D]">
                In this benchmark, the recurrent GRU and LSTM configurations did not outperform the MLP after feature selection. Because the experiment used tabular network-flow features, the additional sequence-model complexity did not provide an advantage in this particular setup.
              </p>
              <p className="text-sm sm:text-base text-[#65686D]">
                Importantly, this does not establish that MLP is universally superior across network intrusion detection tasks. The reported comparison applies to the UNSW-NB15 experimental setup and preprocessing used in this study.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 13. Limitations */}
      <section
        aria-labelledby="limitations-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                12 / BOUNDARIES &amp; VALIDITY
              </span>
              <h2
                id="limitations-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What this work does not establish
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Academic integrity requires clearly delineating experimental simulation from production reality:
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#DADCD8] bg-white space-y-3">
              <ul className="space-y-3 text-xs sm:text-sm text-[#16181B]">
                {[
                  "Dataset Specificity: All experiments were conducted strictly on the UNSW-NB15 benchmark dataset. The findings do not prove equivalent accuracy across live enterprise network traffic.",
                  "Absence of Hardware Integration: Interaction with firewall devices was not demonstrated in this study; response actions were evaluated within the experimental setup.",
                  "Throughput and Latency Constraints: The study evaluated offline classification efficacy. Low-latency operational requirements were not benchmarked.",
                  "Empirical Decision Thresholds: Parameters for risk fusion (β, γ) and action thresholds (α, θ₁, θ₂) were empirically chosen for this benchmark and would require environment-specific calibration.",
                  "Concept Drift & Novel Attacks: The models assume a stationary statistical distribution between train and test partitions. Adapting to concept drift and novel attack modes remains unaddressed.",
                  "Availability vs. Security Trade-offs: Automated blocking can inadvertently create self-inflicted denial-of-service conditions if false-positive rates spike against critical business workflows.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#3157D5] font-mono font-bold shrink-0">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    <span className="leading-relaxed text-[#65686D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 14. Future work */}
      <section
        aria-labelledby="future-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                13 / RESEARCH ROADMAP
              </span>
              <h2
                id="future-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Where the research could go next
              </h2>
              <p className="text-base text-[#65686D] leading-relaxed">
                Key extensions and open research questions identified for future investigation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Reinforcement Learning in the Agentic Decision Layer",
                  desc: "Investigating reinforcement learning techniques in the autonomous decision layer to dynamically adapt threat response policies and action selection beyond static threshold equations.",
                },
                {
                  title: "Real-Time / Live Network Traffic Capture",
                  desc: "Extending evaluation beyond static benchmark records to real-time and live network traffic capture to validate detection and response behavior on dynamic network streams.",
                },
                {
                  title: "Low-Latency Inference & Interaction with Firewall Devices",
                  desc: "Optimizing multi-task model inference to satisfy low-latency operational requirements and supporting interaction with firewall devices for automated action execution.",
                },
                {
                  title: "Online & Incremental Learning",
                  desc: "Developing online learning and incremental learning pipelines to continuously incorporate newly observed traffic data without requiring full retraining cycles.",
                },
                {
                  title: "Adaptation to Concept Drift & Novel Attack Modes",
                  desc: "Designing adaptive mechanisms to recognize shifting network traffic distributions and handle novel, previously unseen attack modes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-lg border border-[#DADCD8] bg-white space-y-2"
                >
                  <span className="font-mono text-xs font-bold text-[#3157D5] uppercase block">
                    {item.title}
                  </span>
                  <p className="text-xs sm:text-sm text-[#65686D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-[#65686D]">
              * Note: These items represent proposed research directions and are not currently implemented.
            </p>
          </div>
        </Container>
      </section>

      {/* 15. What I learned */}
      <section
        aria-labelledby="lessons-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                14 / RETROSPECTIVE
              </span>
              <h2
                id="lessons-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                What this research taught me
              </h2>
            </div>

            <div className="divide-y divide-[#DADCD8] border-y border-[#DADCD8]">
              {lessons.map((item) => (
                <div
                  key={item.title}
                  className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline"
                >
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

      {/* 16. Presentation / publication details */}
      <section
        aria-labelledby="publication-heading"
        className="py-16 sm:py-20 border-b border-[#DADCD8] bg-[#F7F7F3]"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
                15 / PUBLICATION RECORD
              </span>
              <h2
                id="publication-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
              >
                Research presentation
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-[#DADCD8] bg-white space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#3157D5] font-semibold uppercase tracking-wider">
                  Paper Title
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#16181B] tracking-tight leading-snug">
                  Agentic AI Driven Intrusion Detection and Automated Response System Using Deep Learning
                </h3>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#DADCD8]">
                <span className="font-mono text-xs text-[#65686D] uppercase tracking-wider block">
                  Authors
                </span>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-[#16181B]">
                  {authors.map((author, index) => (
                    <span
                      key={author}
                      className={`inline-flex items-center px-3 py-1 rounded border font-medium ${
                        author === "Gokul Venkat Bonam"
                          ? "border-[#3157D5] bg-[#3157D5]/10 text-[#3157D5] font-semibold"
                          : "border-[#DADCD8] bg-[#F7F7F3] text-[#16181B]"
                      }`}
                    >
                      {author}
                      {index < authors.length - 1 && <span className="ml-1 text-[#DADCD8]">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-[#DADCD8] font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-[#65686D] uppercase">CONFERENCE</span>
                  <p className="font-bold text-[#16181B]">SCI-2026</p>
                  <p className="text-[11px] text-[#65686D] font-sans">Smart Computing &amp; Informatics</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#65686D] uppercase">VENUE &amp; DATES</span>
                  <p className="font-bold text-[#16181B]">Swinburne Vietnam, Hanoi</p>
                  <p className="text-[11px] text-[#65686D] font-sans">28–29 April 2026</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#65686D] uppercase">STATUS</span>
                  <p className="font-bold text-[#18835B]">Publication forthcoming</p>
                  <p className="text-[11px] text-[#65686D] font-sans">Presented at conference</p>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#65686D] border-t border-[#DADCD8]">
                <span className="font-semibold text-[#16181B]">Institutional Affiliation: </span>
                Sagi Rama Krishnam Raju Engineering College, Bhimavaram, Andhra Pradesh, India.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 17. Next project navigation */}
      <NextProject
        label="NEXT CASE STUDY / 04"
        title="SCK Wellness Platform"
        subtitle="Collaborative Full-Stack Development"
        href="/work/sck"
      />
    </article>
  );
}
