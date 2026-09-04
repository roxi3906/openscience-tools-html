import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://open-science.app/sitemap.xml",
    host: "https://open-science.app",
  };
}
