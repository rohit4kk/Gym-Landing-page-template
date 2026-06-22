"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Orb 1: Pulsing Red/Rose Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-brand-red/5 via-brand-red/[0.02] to-transparent filter blur-[100px]"
      />

      {/* Orb 2: Drifting Indigo Glow */}
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -90, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/[0.03] via-blue-500/[0.01] to-transparent filter blur-[110px]"
      />

      {/* Orb 3: Deep Red Low-Center Glow */}
      <motion.div
        animate={{
          x: [0, 60, -50, 0],
          y: [0, 110, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-red/4 via-brand-red/[0.01] to-transparent filter blur-[90px]"
      />

    </div>
  );
}
