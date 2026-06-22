"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Doodle {
  id: number;
  x: number;
  y: number;
  path: string;
  color: string;
  size: number;
  rotate: number;
}

const DOODLE_PATHS = [
  // Star
  "M 50 12 L 62 38 L 90 38 L 68 54 L 76 80 L 50 64 L 24 80 L 32 54 L 10 38 L 38 38 Z",
  // Lightning
  "M 45 10 L 20 55 L 48 55 L 30 90 L 80 40 L 52 40 Z",
  // Heart
  "M 50 82 Q 50 82 20 55 C 8 40 18 15 38 25 Q 50 32 62 25 C 82 15 92 40 80 55 Z",
  // Arrow
  "M 15 20 Q 55 10 80 50 M 80 50 L 65 42 M 80 50 L 72 65",
  // Cross / Plus
  "M 50 15 L 50 85 M 15 50 L 85 50",
  // Swirl Loop
  "M 20 70 Q 50 10 80 30 T 40 80 T 60 50"
];

export default function DoodlePlayground() {
  const [doodles, setDoodles] = useState<Doodle[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Exclude interactive elements so clicks function normally
      const target = e.target as HTMLElement;
      if (
        !target ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        return;
      }

      const size = Math.random() * 30 + 35; // 35px to 65px
      const index = Math.floor(Math.random() * DOODLE_PATHS.length);
      const rotate = Math.random() * 60 - 30; // -30 to 30 deg
      const colors = ["#E51E2A", "#FFFFFF", "#3B82F6"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const newDoodle: Doodle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        path: DOODLE_PATHS[index],
        color,
        size,
        rotate,
      };

      setDoodles((prev) => [...prev, newDoodle]);

      // Remove after animation finishes
      setTimeout(() => {
        setDoodles((prev) => prev.filter((d) => d.id !== newDoodle.id));
      }, 1600);
    };

    window.addEventListener("mousedown", handleGlobalClick);
    return () => window.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      <AnimatePresence>
        {doodles.map((doodle) => (
          <motion.svg
            key={doodle.id}
            viewBox="0 0 100 100"
            className="absolute fill-none select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            style={{
              x: doodle.x - doodle.size / 2,
              y: doodle.y - doodle.size / 2,
              width: doodle.size,
              height: doodle.size,
            }}
            initial={{ scale: 0, rotate: doodle.rotate - 15, opacity: 1 }}
            animate={{
              scale: [0, 1.25, 1],
              rotate: doodle.rotate + 10,
              y: -70,
              opacity: [1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
          >
            <motion.path
              d={doodle.path}
              stroke={doodle.color}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          </motion.svg>
        ))}
      </AnimatePresence>
    </div>
  );
}
