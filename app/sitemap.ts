import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = ["", "/work/rex", "/work/luxora", "/research/agentic-ids", "/work/sck"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
