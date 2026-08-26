"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckEligibilityButton } from "@/components/forms/check-eligibility-button";
import { heroVideoSrc } from "@/content/gallery";

export function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until user interaction
      }
    };

    if (video.readyState >= 2) {
      void playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
    }

    return () => video.removeEventListener("loadeddata", playVideo);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          src={heroVideoSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background/90" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center lg:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-xl font-bold italic text-accent-light md:text-2xl"
        >
          Transforming Lives
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-5xl font-bold uppercase tracking-wide md:text-6xl lg:text-7xl"
        >
          Your Gateway
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 font-serif text-3xl font-bold italic text-accent-light md:text-4xl"
        >
          to the World
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          Expert visa consultancy and test preparation in Hyderabad. From visit
          visas to student visas, IELTS to GRE — end-to-end support for your
          global journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <CheckEligibilityButton variant="outline" />
          <Link
            href="/destinations"
            className="inline-flex h-11 items-center rounded-full px-6 text-sm font-bold text-accent-light transition hover:text-accent"
          >
            Explore Destinations →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
