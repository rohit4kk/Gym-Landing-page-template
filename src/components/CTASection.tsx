"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative bg-near-black w-full py-32 sm:py-40 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5 flex flex-col items-center justify-center text-center"
    >
      {/* Background massive grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Backdrop glowing red orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto z-10 relative flex flex-col items-center">
        
        {/* Subtitle tag */}
        <div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold uppercase tracking-widest text-brand-red">
          <span>●</span> STIMULUS REGISTER
        </div>

        {/* Massive Headline */}
        <h2 className="font-sans font-black text-6xl sm:text-8xl md:text-[9vw] lg:text-[8vw] uppercase tracking-tighter leading-[0.8] text-white text-center mb-12">
          MOVE DIFFERENT. <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.25)" }}>TRAIN HARDER.</span>
        </h2>

        {/* Call to Action Button */}
        <div className="relative mt-4">
          <Magnetic>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-brand-red text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-700 transition-colors shadow-2xl z-10 relative cursor-pointer"
            >
              SECURE SYSTEM ACCESS
            </motion.button>
          </Magnetic>

          {/* Doodle: Highlighter circle doodle behind button */}
          <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] text-white/5 pointer-events-none select-none" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <ellipse cx="100" cy="50" rx="90" ry="40" strokeDasharray="6 6" />
          </svg>

          {/* Doodle: Hand-drawn sketchy arrow pointing to button */}
          <svg className="absolute -top-16 -left-20 w-16 h-16 text-brand-red hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <motion.path
              d="M10,10 C50,15 70,45 80,75 M80,75 L68,70 M80,75 L74,60"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </svg>
        </div>

        {/* Micro Guarantee Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-[9px] font-mono text-white/30 tracking-widest uppercase">
          <span>NO INITIATION FEE</span>
          <span>●</span>
          <span>CAPACITY PRECISELY LIMITED</span>
          <span>●</span>
          <span>100% CLINICAL RESULTS</span>
        </div>

      </div>

      {/* Floating Sparkle/Star Doodle */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[12%] w-8 h-8 text-white/10 pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="4">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </motion.div>

    </section>
  );
}
