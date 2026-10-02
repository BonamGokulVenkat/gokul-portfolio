import React from "react";

interface ModelRecord {
  model: string;
  type: string;
  preAccuracy: number;
  postAccuracy: number;
  diff: number;
  auc: number;
}

export function ModelComparisonTable() {
  const models: ModelRecord[] = [
    {
      model: "Multilayer Perceptron (MLP)",
      type: "Feedforward Dense Network",
      preAccuracy: 97.1,
      postAccuracy: 96.6,
      diff: -0.5,
      auc: 0.9966,
    },
    {
      model: "Convolutional Neural Network (CNN)",
      type: "1D Temporal Convolutional",
      preAccuracy: 96.6,
      postAccuracy: 94.6,
      diff: -2.0,
      auc: 0.9892,
    },
    {
      model: "Long Short-Term Memory (LSTM)",
      type: "Recurrent Gated Sequence",
      preAccuracy: 97.0,
      postAccuracy: 90.2,
      diff: -6.8,
      auc: 0.9752,
    },
    {
      model: "Gated Recurrent Unit (GRU)",
      type: "Lightweight Recurrent Sequence",
      preAccuracy: 96.9,
      postAccuracy: 89.8,
      diff: -7.1,
      auc: 0.9834,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#DADCD8] bg-white overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#F7F7F3] border-b border-[#DADCD8] font-mono text-xs text-[#65686D]">
                <th className="p-3 sm:p-4 uppercase tracking-wider">Model Architecture</th>
                <th className="p-3 sm:p-4 uppercase tracking-wider text-right">
                  Pre-Selection (42 Features)
                </th>
                <th className="p-3 sm:p-4 uppercase tracking-wider text-right">
                  Post-Selection (Top 25 MI)
                </th>
                <th className="p-3 sm:p-4 uppercase tracking-wider text-right">
                  Accuracy Shift
                </th>
                <th className="p-3 sm:p-4 uppercase tracking-wider text-right">
                  ROC-AUC (Post)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCD8] font-mono">
              {models.map((m) => (
                <tr key={m.model} className="hover:bg-[#F7F7F3]/50 transition-colors">
                  <td className="p-3 sm:p-4">
                    <span className="font-bold text-[#16181B] block">{m.model}</span>
                    <span className="font-sans text-[11px] text-[#65686D]">{m.type}</span>
                  </td>
                  <td className="p-3 sm:p-4 text-right text-[#16181B]">
                    {m.preAccuracy.toFixed(1)}%
                  </td>
                  <td className="p-3 sm:p-4 text-right font-bold text-[#16181B]">
                    {m.postAccuracy.toFixed(1)}%
                  </td>
                  <td className="p-3 sm:p-4 text-right text-[#65686D]">
                    {m.diff > 0 ? `+${m.diff.toFixed(1)}%` : `${m.diff.toFixed(1)}%`}
                  </td>
                  <td className="p-3 sm:p-4 text-right text-[#3157D5] font-semibold">
                    {m.auc.toFixed(4)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-[#DADCD8] bg-[#F7F7F3] text-xs text-[#65686D] space-y-1.5 leading-relaxed">
        <p className="font-semibold text-[#16181B]">
          Experimental Takeaway on Dimensionality Reduction:
        </p>
        <p>
          Mutual information reduced feature dimensions by 40.5% (retaining 25 of 42 features) to reduce model complexity and computational overhead. However, empirical accuracy marginally declined across all four architectures (most notably on recurrent networks like GRU and LSTM). This illustrates that feature selection provides compactness and training efficiency rather than an automatic boost to raw benchmark accuracy.
        </p>
      </div>
    </div>
  );
}
