import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export function ResearchSection() {
  const modelAccuracies = [
    { model: "MLP", accuracy: "96.6%", highlight: true },
    { model: "CNN", accuracy: "94.6%" },
    { model: "LSTM", accuracy: "90.2%" },
    { model: "GRU", accuracy: "89.8%" },
  ];

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-16 sm:py-24 border-b border-[#DADCD8] scroll-mt-16"
    >
      <Container>
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[#65686D]">
            06 / ACADEMIC CONTRIBUTION
          </span>
          <h2
            id="research-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181B]"
          >
            Research & Publication
          </h2>
          <p className="text-base text-[#65686D] leading-relaxed">
            Applied deep learning research bridging neural classification and automated security response.
          </p>
        </div>

        {/* Editorial technical-paper layout */}
        <div className="rounded-xl border border-[#DADCD8] bg-white p-6 sm:p-10 shadow-2xs space-y-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#18835B] bg-[#18835B]/10 px-2 py-0.5 rounded-sm">
                Conference Paper
              </span>
              <span className="font-mono text-xs text-[#65686D]">
                SCI-2026 · Swinburne Vietnam, Hanoi
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#16181B] tracking-tight leading-snug">
              Agentic AI Driven Intrusion Detection and Automated Response System Using Deep Learning
            </h3>

            <p className="text-sm sm:text-base text-[#65686D] leading-relaxed">
              Final-year research exploring multi-task deep learning for network intrusion detection and an
              autonomous decision layer for threat response. Evaluated dual-output deep-learning models for
              binary intrusion detection and multiclass attack classification on the UNSW-NB15 benchmark.
            </p>
          </div>

          {/* Model Evaluation Grid */}
          <div className="pt-2">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#16181B] mb-3">
              Post-Feature-Selection Binary Accuracy
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {modelAccuracies.map((item) => (
                <div
                  key={item.model}
                  className={`p-4 rounded-lg border ${
                    item.highlight
                      ? "border-[#18835B] bg-[#18835B]/5"
                      : "border-[#DADCD8] bg-[#F7F7F3]"
                  }`}
                >
                  <p className="font-mono text-xs text-[#65686D]">{item.model}</p>
                  <p
                    className={`text-xl sm:text-2xl font-bold font-mono mt-1 ${
                      item.highlight ? "text-[#18835B]" : "text-[#16181B]"
                    }`}
                  >
                    {item.accuracy}
                  </p>
                  {item.highlight && (
                    <span className="font-mono text-[10px] text-[#18835B] font-medium block mt-1">
                      Top Performance
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Metadata & Forthcoming badge */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#DADCD8] text-xs font-mono text-[#65686D]">
            <div>
              <p>Presented at SCI-2026, Swinburne Vietnam, Hanoi</p>
              <p className="text-[#18835B] font-semibold mt-0.5">
                Status: Publication forthcoming
              </p>
            </div>

            <Link
              href="/research/agentic-ids"
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#18835B] hover:text-[#116243] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#18835B]"
            >
              Explore methodology and results →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
