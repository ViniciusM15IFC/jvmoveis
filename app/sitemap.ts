import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jvmoveis.netlify.app/sitemap",
      lastModified: new Date(),
    },
  ];
}
