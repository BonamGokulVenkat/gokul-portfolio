import React from "react";
import Image, { type StaticImageData } from "next/image";

import publicHeroImg from "@/public/sck/Screenshot 2026-10-02 114112.png";
import skyPageImg from "@/public/sck/Screenshot 2026-10-02 114234.png";
import offeringsImg from "@/public/sck/Screenshot 2026-10-02 114251.png";
import galleryImg from "@/public/sck/Screenshot 2026-10-02 114153.png";
import testimonialsImg from "@/public/sck/Screenshot 2026-10-02 114218.png";
import aboutImg from "@/public/sck/Screenshot 2026-10-02 114131.png";

interface ScreenshotItem {
  id: string;
  urlPath: string;
  title: string;
  caption: string;
  alt: string;
  badge?: string;
  image: StaticImageData;
}

export function SckScreenshotGallery() {
  const screenshots: ScreenshotItem[] = [
    {
      id: "public-hero",
      urlPath: "",
      title: "Public wellness experience",
      caption:
        "Public wellness experience featuring responsive navigation, philosophy introduction, and interactive breathwork guidance.",
      alt: "SCK platform homepage displaying calm wellness banner, top navigation bar, and interactive mindful breathing interface.",
      image: publicHeroImg,
    },
    {
      id: "sky-page",
      urlPath: "sky",
      title: "SKY experience — direct contribution",
      caption:
        "Direct frontend contribution: Sudarshan Kriya Yoga (SKY) discovery experience with guided typography, responsive layout, and program initiation.",
      alt: "SCK Sudarshan Kriya Yoga public page featuring meditation instructor portrait, rhythmic breathwork description, and primary journey CTA button.",
      badge: "Direct Contribution",
      image: skyPageImg,
    },
    {
      id: "offerings",
      urlPath: "offerings",
      title: "Configurable offerings and booking entry point",
      caption:
        "Configurable offerings and booking entry point showing CranioSacral, Rakkenho, and Music Therapy program cards with dynamic slot booking triggers.",
      alt: "SCK offerings catalog grid with session duration tags, 1-on-1 labels, therapy descriptions, and View Available Slots buttons.",
      image: offeringsImg,
    },
    {
      id: "gallery",
      urlPath: "gallery",
      title: "Responsive public content experience",
      caption:
        "Responsive public content experience highlighting community gatherings, workshop documentation, and responsive visual layout.",
      alt: "SCK Wall of Transformation gallery grid displaying community retreat photography and workshop sessions.",
      image: galleryImg,
    },
    {
      id: "testimonials",
      urlPath: "#testimonials",
      title: "Testimonials presentation & carousel UI",
      caption:
        "Direct frontend contribution: Responsive testimonials carousel UI designed for verified participant reflections without exaggerated metrics.",
      alt: "SCK testimonials section showcasing interactive review cards with participant reflections and pagination indicators.",
      badge: "Direct Contribution",
      image: testimonialsImg,
    },
    {
      id: "about",
      urlPath: "about",
      title: "Practitioner background & credentials",
      caption:
        "Practitioner profile providing certified therapy credentials, lineage context, and holistic methodology explanations.",
      alt: "SCK about section detailing practitioner biography, therapeutic experience, and community service background.",
      image: aboutImg,
    },
  ];

  return (
    <div className="space-y-8" aria-label="SCK Wellness Platform product interface gallery">
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
                  sckwellness.com/{s.urlPath}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {s.badge && (
                  <span className="font-mono text-[10px] font-semibold text-[#3157D5] bg-[#3157D5]/10 px-2 py-0.5 rounded">
                    {s.badge}
                  </span>
                )}
                <span className="font-mono text-[10px] text-[#65686D] uppercase">
                  0{index + 1} / INTERFACE
                </span>
              </div>
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
