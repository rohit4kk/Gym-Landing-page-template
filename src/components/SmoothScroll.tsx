"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger in a browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<any>(null);

  useEffect(() => {
    if (!lenis) return;

    // Direct ScrollTrigger to recalculate metrics on smooth scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // Feed Lenis frame-ticks into GSAP ticker so scroll and animation ticks sync
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, lerp: 0.1, duration: 1.2 }}
      ref={(node: any) => {
        if (node && node.lenis) {
          setLenis(node.lenis);
        }
      }}
    >
      {children}
    </ReactLenis>
  );
}
