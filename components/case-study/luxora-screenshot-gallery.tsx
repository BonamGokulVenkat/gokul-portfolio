import React from "react";

interface ScreenshotItem {
  id: string;
  title: string;
  caption: string;
  mockContent: React.ReactNode;
}

export function ScreenshotGallery() {
  const screenshots: ScreenshotItem[] = [
    {
      id: "discovery",
      title: "Marketplace Discovery Experience",
      caption: "Public property listing discovery with responsive filter controls, pricing formats, and builder links.",
      mockContent: (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#DADCD8]">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#16181B] text-base">Luxora Estates</span>
              <span className="text-xs text-[#65686D] bg-[#F7F7F3] px-2 py-0.5 rounded">Bangalore Properties</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-[#3157D5] text-white">Find Homes</span>
              <span className="px-2.5 py-1 rounded border border-[#DADCD8] text-[#16181B]">Post Property</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "Sobha Palm Court", loc: "Yelahanka, Bangalore", price: "₹1.45 Cr - ₹1.85 Cr", type: "3 BHK Apartment" },
              { name: "Prestige Lakeside", loc: "Whitefield, Bangalore", price: "Starting at ₹92 L", type: "2 BHK Luxury" },
              { name: "Brigade Cornerstone", loc: "Sarjapur Road, Bangalore", price: "Contact for Price", type: "4 BHK Villa" },
            ].map((prop) => (
              <div key={prop.name} className="p-3 rounded border border-[#DADCD8] bg-[#F7F7F3] space-y-1.5">
                <div className="h-20 rounded bg-[#DADCD8]/60 flex items-center justify-center text-xs text-[#65686D] font-mono">
                  [Property Image Preview]
                </div>
                <p className="font-semibold text-xs text-[#16181B] truncate">{prop.name}</p>
                <p className="text-[11px] text-[#65686D] truncate">{prop.loc}</p>
                <p className="text-xs font-mono font-bold text-[#3157D5]">{prop.price}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "advisor",
      title: "Conversational Property Advisor",
      caption: "Natural-language property search interface translating queries to structured constraints and database-grounded cards.",
      mockContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-2.5 rounded bg-[#F7F7F3] border border-[#DADCD8] max-w-md">
            <span className="text-[#3157D5] font-semibold">User:</span> Need a 3 BHK near Whitefield under ₹1.5 Cr with clubhouse and power backup.
          </div>
          <div className="p-2.5 rounded bg-white border border-[#3157D5] space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#65686D] border-b border-[#DADCD8] pb-1">
              <span>Intent: Property Search</span>
              <span className="text-[#18835B]">PostgreSQL Grounded · 3 Matches</span>
            </div>
            <p className="text-xs text-[#16181B] font-sans">
              Found 3 verified properties in Whitefield matching your budget under ₹1.5 Cr with clubhouse amenities:
            </p>
            <div className="p-2 rounded bg-[#F7F7F3] border border-[#DADCD8] flex items-center justify-between text-[11px]">
              <div>
                <p className="font-bold text-[#16181B]">Sumadhura Silver Ripples</p>
                <p className="text-[#65686D]">Whitefield · ₹1.38 Cr · 3 BHK</p>
              </div>
              <span className="bg-[#18835B]/15 text-[#18835B] px-2 py-0.5 rounded font-semibold">Score: 94/100</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "admin",
      title: "Administrative Overview",
      caption: "Platform oversight interface for monitoring submission queues, active builder subscriptions, and system health.",
      mockContent: (
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
            <div className="p-2.5 rounded border border-[#DADCD8] bg-[#F7F7F3]">
              <span className="text-[10px] text-[#65686D]">PENDING REVIEWS</span>
              <p className="text-lg font-bold text-[#16181B]">14</p>
            </div>
            <div className="p-2.5 rounded border border-[#DADCD8] bg-[#F7F7F3]">
              <span className="text-[10px] text-[#65686D]">ACTIVE LISTINGS</span>
              <p className="text-lg font-bold text-[#18835B]">348</p>
            </div>
            <div className="p-2.5 rounded border border-[#DADCD8] bg-[#F7F7F3]">
              <span className="text-[10px] text-[#65686D]">EDIT REQUESTS</span>
              <p className="text-lg font-bold text-[#3157D5]">6</p>
            </div>
            <div className="p-2.5 rounded border border-[#DADCD8] bg-[#F7F7F3]">
              <span className="text-[10px] text-[#65686D]">SUBSCRIBED BUILDERS</span>
              <p className="text-lg font-bold text-[#16181B]">42</p>
            </div>
          </div>
          <div className="p-2.5 rounded border border-[#DADCD8] bg-white text-[11px] text-[#65686D]">
            Admin operations: Plan limits management, user role assignments, moderation queue processing.
          </div>
        </div>
      ),
    },
    {
      id: "moderation",
      title: "Property Moderation Screen",
      caption: "Detailed inspection view where moderators review property specifications, ownership claims, and media before approval.",
      mockContent: (
        <div className="space-y-2.5 text-xs font-mono">
          <div className="p-3 rounded border border-[#DADCD8] bg-[#F7F7F3] flex items-center justify-between">
            <div>
              <p className="font-bold text-[#16181B]">Submission #1084 — Godrej Air</p>
              <p className="text-[11px] text-[#65686D]">Builder: Godrej Properties · Hoodi, Bangalore</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 font-semibold text-[10px]">
              PENDING REVIEW
            </span>
          </div>
          <div className="flex gap-2">
            <button type="button" className="px-3 py-1.5 rounded bg-[#18835B] text-white font-sans text-xs">
              Approve Listing
            </button>
            <button type="button" className="px-3 py-1.5 rounded bg-red-600 text-white font-sans text-xs">
              Reject Listing
            </button>
            <button type="button" className="px-3 py-1.5 rounded border border-[#DADCD8] bg-white text-[#16181B] font-sans text-xs">
              Request Info
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "users",
      title: "User Management Screen",
      caption: "Role and account management separating individual searchers, builder subscription profiles, and platform administrators.",
      mockContent: (
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded border border-[#DADCD8] bg-white flex items-center justify-between">
            <div>
              <p className="font-bold text-[#16181B]">User: builder_corp_01</p>
              <p className="text-[11px] text-[#65686D]">Role: BUILDER · Tier: Professional (15/20 Listings)</p>
            </div>
            <span className="text-[#18835B] text-[11px] font-semibold">Active Subscription</span>
          </div>
          <div className="p-2.5 rounded border border-[#DADCD8] bg-white flex items-center justify-between">
            <div>
              <p className="font-bold text-[#16181B]">User: individual_buyer_44</p>
              <p className="text-[11px] text-[#65686D]">Role: INDIVIDUAL · Saved: 12 Favorites</p>
            </div>
            <span className="text-[#65686D] text-[11px]">Free Tier</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8" aria-label="Luxora Estates product interface gallery">
      <div className="grid grid-cols-1 gap-8">
        {screenshots.map((s, index) => (
          <div
            key={s.id}
            className="rounded-xl border border-[#DADCD8] bg-white overflow-hidden shadow-2xs"
          >
            {/* Restrained Browser Chrome Header */}
            <div className="px-4 py-2.5 bg-[#F7F7F3] border-b border-[#DADCD8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DADCD8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#DADCD8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#DADCD8]" />
                <span className="ml-2 font-mono text-[11px] text-[#65686D]">
                  luxora.app/{s.id}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#65686D] uppercase">
                0{index + 1} / INTERFACE
              </span>
            </div>

            {/* Interface Content Surface */}
            <div className="p-5 sm:p-6 bg-white min-h-[160px]">
              {s.mockContent}
            </div>

            {/* Caption Footer */}
            <div className="px-5 py-3 bg-[#F7F7F3] border-t border-[#DADCD8] text-xs">
              <p className="font-semibold text-[#16181B]">{s.title}</p>
              <p className="text-[#65686D] mt-0.5">{s.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
