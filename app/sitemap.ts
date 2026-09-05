import type { MetadataRoute } from "next";
import { destinations } from "@/content/destinations";
import { getDestinationsByVisaType } from "@/lib/destinations";
import { siteConfig } from "@/content/site";

const staticRoutes = [
  "",
  "/overseas",
  "/overseas/visit-visa",
  "/overseas/student-visa",
  "/overseas/business-visa",
  "/academy",
  "/academy/ielts",
  "/academy/pte",
  "/academy/gre",
  "/study-abroad",
  "/destinations",
  "/about",
  "/success-stories",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const destinationPages = destinations.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const visitVisaCountryPages = getDestinationsByVisaType("visit").map((d) => ({
    url: `${baseUrl}/overseas/visit-visa/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const studentVisaCountryPages = getDestinationsByVisaType("student").map((d) => ({
    url: `${baseUrl}/overseas/student-visa/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...destinationPages,
    ...visitVisaCountryPages,
    ...studentVisaCountryPages,
  ];
}
