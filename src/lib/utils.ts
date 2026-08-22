import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPageMetadata(title: string, description: string) {
  return {
    title: `${title} | Liberty Overseas`,
    description,
    openGraph: {
      title: `${title} | Liberty Overseas`,
      description,
      siteName: "Liberty Overseas",
      type: "website" as const,
    },
  };
}
