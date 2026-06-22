"use client";

import React from "react";
import { motion } from "framer-motion";

interface HudSectionDividerProps {
  label: string;
  code: string;
}

export default function HudSectionDivider({ label, code }: HudSectionDividerProps) {
  return (
    <div className="relative w-full bg-near-black py-6 overflow-hidden select-none border-y border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between font-mono text-[8px] text-white/20 tracking-widest uppercase">
        
        {/* Left Side: System indicator & coordinate */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
            <span className="text-white/40">{label}</span>
          </div>
          <span className="hidden sm:inline text-white/10">//</span>
          <span className="hidden sm:inline">LOC. [45.109 // -122.680]</span>
        </div>

        {/* Center: Dotted Divider Line with bracket crosshairs */}
        <div className="flex-1 mx-8 border-t border-dashed border-white/10 hidden md:block relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/15 flex items-center justify-center bg-near-black rounded-sm">
            <span className="text-[6px] text-brand-red font-bold">+</span>
          </div>
        </div>

        {/* Right Side: Code stamp & mini barcode */}
        <div className="flex items-center gap-4">
          <span>{code}</span>
          
          {/* Mini Barcode */}
          <div className="flex gap-[1px] h-3 items-end opacity-20">
            <div className="w-[1px] h-[90%] bg-white" />
            <div className="w-[2px] h-[70%] bg-white" />
            <div className="w-[1px] h-full bg-white" />
            <div className="w-[1px] h-[40%] bg-white" />
            <div className="w-[3px] h-[80%] bg-white" />
            <div className="w-[1px] h-[50%] bg-white" />
          </div>
        </div>

      </div>
    </div>
  );
}
