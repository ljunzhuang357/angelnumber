import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/og"],
        disallow: ["/api/*", "/*?*"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/blog/"],
        disallow: ["/api/*"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/blog/"],
        disallow: ["/api/*"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/blog/"],
        disallow: ["/api/*"],
      },
      {
        userAgent: "CCBot",
        allow: ["/", "/blog/"],
        disallow: ["/api/*"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/blog/"],
        disallow: ["/api/*"],
      },
      {
        userAgent: "Claude-Web",
        allow: ["/", "/blog/"],
        disallow: ["/api/*"],
      },
    ],
    sitemap: "https://angelnumber.space/sitemap.xml",
  };
}
