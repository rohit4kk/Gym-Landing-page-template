"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  duration: string;
  system: string;
  rotation: string;
  alignLeft?: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    id: "MEMBER // 104",
    quote: "THE LAB REWIRED MY ENTIRE PERCEPTION OF PHYSICAL STIMULUS. MY CNS HAS NEVER DECOMPRESSED THIS QUICKLY.",
    author: "KIRK DOUGLAS",
    duration: "18 MONTHS ACTIVE",
    system: "SYS-01 + SYS-03 COMPLIANT",
    rotation: "lg:rotate-[1deg]",
    alignLeft: true,
  },
  {
    id: "MEMBER // 208",
    quote: "NOT A GYM. A CLINICAL ENVIRONMENT OF PHYSIOLOGICAL SHIFTS. ACCELERATION AND ENDURANCE LEVELS ARE REDEFINED.",
    author: "AMELIA ROSS",
    duration: "11 MONTHS ACTIVE",
    system: "SYS-02 ACCREDITED",
    rotation: "lg:-rotate-[1.2deg]",
    alignLeft: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-near-black w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5"
    >
      {/* Target Backdrop Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full border border-white/[0.015] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full border border-white/[0.02] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20 lg:mb-28">
          <div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold uppercase tracking-widest text-brand-red">
            <span>●</span> AUDIT STAMP
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-white">
            MEMBER <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>AUDITS</span>
            <span className="font-display text-brand-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase block sm:inline-block ml-0 sm:ml-4 rotate-[-4deg]">
              testimonials
            </span>
          </h2>
        </div>

        {/* Testimonials List */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col w-full relative ${
                item.alignLeft ? "items-start" : "items-end"
              }`}
            >
              
              {/* Massive Quote Text block */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className={`max-w-5xl ${item.alignLeft ? "text-left" : "text-right"}`}
              >
                {/* Big opening quote mark */}
                <span className="font-sans font-black text-6xl sm:text-8xl md:text-9xl text-brand-red/20 block leading-none h-6 sm:h-10 -ml-2 select-none">
                  “
                </span>
                
                <h3 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[1.05] text-white">
                  {item.quote}
                </h3>
              </motion.div>

              {/* Layered Profile Card stamp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
                className={`mt-8 p-6 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-xl flex flex-col sm:flex-row gap-6 items-start sm:items-center ${item.rotation}`}
              >
                {/* Technical stats metadata */}
                <div className="flex flex-col">
                  <span className="font-mono text-[7px] text-white/30 tracking-widest uppercase">
                    {item.id}
                  </span>
                  <span className="font-sans font-black text-lg tracking-tight text-white mt-0.5">
                    {item.author}
                  </span>
                  <span className="font-mono text-[8px] text-brand-red font-bold tracking-widest mt-1 uppercase">
                    {item.system}
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-[1px] h-10 bg-white/10" />

                {/* Sub info */}
                <div className="flex flex-col">
                  <span className="font-mono text-[7px] text-white/30 tracking-widest uppercase">
                    MEMBERSHIP TENURE
                  </span>
                  <span className="font-mono text-[9px] font-black text-white/80 tracking-wider mt-0.5">
                    {item.duration}
                  </span>
                  
                  {/* Miniature indicator barcode */}
                  <div className="flex gap-0.5 h-3 items-end mt-1.5 opacity-40">
                    <div className="w-[1px] h-full bg-white" />
                    <div className="w-[2px] h-[80%] bg-white" />
                    <div className="w-[1px] h-[40%] bg-white" />
                    <div className="w-[1px] h-full bg-white" />
                    <div className="w-[3px] h-[60%] bg-white" />
                    <div className="w-[1px] h-[90%] bg-white" />
                  </div>
                </div>

              </motion.div>

            </div>
          ))}
        </div>

      </div>

      {/* Floating Target circle doodle */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 right-[12%] w-10 h-10 text-white/5 pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="4">
          <circle cx="50" cy="50" r="40" />
          <line x1="10" y1="50" x2="90" y2="50" />
        </svg>
      </motion.div>
      
    </section>
  );
}
