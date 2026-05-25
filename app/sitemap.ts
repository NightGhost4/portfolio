import type { MetadataRoute } from "next";
import { workItems } from "@/lib/workData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tylernorcross.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...workItems.map((w) => ({
      url: `${SITE_URL}/work/${w.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
