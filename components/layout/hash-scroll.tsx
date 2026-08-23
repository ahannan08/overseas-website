"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scrollToHash = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    };

    const timer = window.setTimeout(scrollToHash, 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
