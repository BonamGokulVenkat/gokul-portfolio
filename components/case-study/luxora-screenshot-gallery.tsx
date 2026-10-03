import React from "react";
import Image, { type StaticImageData } from "next/image";

import marketplaceImg from "@/public/luxora/Screenshot 2026-10-02 120440.png";
import advisorImg from "@/public/luxora/Screenshot 2026-10-02 120508.png";
import adminOverviewImg from "@/public/luxora/Screenshot 2026-10-02 120617.png";
import propertyModerationImg from "@/public/luxora/Screenshot 2026-10-02 120648.png";
import userManagementImg from "@/public/luxora/Screenshot 2026-10-02 120633.png";

interface ScreenshotItem {
  id: string;
  urlPath: string;
  title: string;
  caption: string;
  alt: string;
  image: StaticImageData;
}

export function ScreenshotGallery() {
  const screenshots: ScreenshotItem[] = [
    {
      id: "marketplace",
      urlPath: "marketplace",
      title: "Marketplace discovery experience",
      caption:
        "Public luxury property discovery featuring tiered regional search, multi-currency support, and available listing collections.",
      alt: "Luxora Estates marketplace homepage showcasing luxury villa hero banner, country, city, and property-type search filters, and curated listings.",
      image: marketplaceImg,
    },
    {
      id: "advisor",
      urlPath: "advisor",
      title: "Conversational property search",
      caption:
        "Interactive Luxora AI conversational assistant translating natural-language buyer preferences into database-grounded property recommendations.",
      alt: "Luxora AI conversational property advisor slideout interface displaying ready status and prompt suggestions over featured properties.",
      image: advisorImg,
    },
    {
      id: "admin-overview",
      urlPath: "admin/overview",
      title: "Administrative overview",
      caption:
        "Executive dashboard monitoring total registered members, active public listings, total portfolio valuation, and recent registrations.",
      alt: "Luxora administrative portal overview dashboard displaying platform intelligence metrics, total user count, active listings, and portfolio valuation.",
      image: adminOverviewImg,
    },
    {
      id: "property-moderation",
      urlPath: "admin/properties",
      title: "Listing moderation workflow",
      caption:
        "Property management interface separating active marketplace listings from pending submissions and builder modification requests.",
      alt: "Luxora admin property management screen showing listing review queues, valuation figures, and builder ownership records.",
      image: propertyModerationImg,
    },
    {
      id: "user-management",
      urlPath: "admin/users",
      title: "User and role administration",
      caption:
        "Identity and access management view separating builder subscription profiles, individual searchers, and administrative controls.",
      alt: "Luxora identity management table displaying user accounts, role allocations for builders and individuals, and moderation controls.",
      image: userManagementImg,
    },
  ];

  return (
    <div className="space-y-8" aria-label="Luxora Estates product interface gallery">
      <div className="grid grid-cols-1 gap-8">
        {screenshots.map((s, index) => (
          <figure
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
                  Luxora Estates / {s.urlPath || "home"}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#65686D] uppercase">
                0{index + 1} / INTERFACE
              </span>
            </div>

            {/* Interface Content Surface */}
            <div className="relative bg-[#0A1118]">
              <Image
                src={s.image}
                alt={s.alt}
                placeholder="blur"
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority={index === 0}
              />
            </div>

            {/* Caption Footer */}
            <figcaption className="px-5 py-3 bg-[#F7F7F3] border-t border-[#DADCD8] text-xs">
              <p className="font-semibold text-[#16181B]">{s.title}</p>
              <p className="text-[#65686D] mt-0.5">{s.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
