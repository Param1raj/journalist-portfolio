import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/static/"],
    },
    // TODO: Need to fix the sitemap with actual domain and make sure it is updated
    sitemap: "https://prashantpal9.wordpress.com/sitemap.xml",
  };
}
