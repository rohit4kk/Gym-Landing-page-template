"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

interface PolaroidItem {
  title: string;
  tag: string;
  image: string;
  rotation: string;
  translate: string;
}

const polaroids: PolaroidItem[] = [
  {
    title: "CHALK DUST & IRON",
    tag: "SYS-01 DEB",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop",
    rotation: "rotate-[-4deg]",
    translate: "lg:translate-x-[-20px] lg:translate-y-[10px]",
  },
  {
    title: "CNS RECOVERY CELL",
    tag: "SYS-03 LAB",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=500&auto=format&fit=crop",
    rotation: "rotate-[5deg]",
    translate: "lg:translate-x-[15px] lg:translate-y-[-30px]",
  },
  {
    title: "METCON COMPLIANCE",
    tag: "SYS-02 ZONE",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=500&auto=format&fit=crop",
    rotation: "rotate-[-2deg]",
    translate: "lg:translate-x-[30px] lg:translate-y-[40px]",
  },
  {
    title: "POST-STIMULUS SHIFT",
    tag: "LAB TEAM",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=500&auto=format&fit=crop",
    rotation: "rotate-[3deg]",
    translate: "lg:translate-x-[-10px] lg:translate-y-[80px]",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative bg-near-black w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Title Block */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
          <div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold uppercase tracking-widest text-brand-red">
            <span>●</span> CULTURE WALL
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-white">
            THE LAB <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>COMMUNITY</span>
            <span className="font-display text-brand-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase block rotate-[-3deg] mt-2">
              culture
            </span>
          </h2>
          <p className="max-w-md text-supporting-white/60 text-xs sm:text-sm mt-6 leading-relaxed">
            No corporate desk agents, no air-conditioned lobby talk. Just raw training output, post-stimulus high fives, and shared performance restoration.
          </p>
        </div>

        {/* Polaroid Collage Area */}
        <div className="relative flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 lg:gap-16 py-12">
          
          {polaroids.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? -1 : 1, zIndex: 30 }}
              className={`w-[260px] bg-zinc-950 border border-white/10 p-4 pb-8 shadow-2xl rounded-sm transform transition-all duration-300 pointer-events-auto cursor-pointer ${item.rotation} ${item.translate}`}
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-square bg-zinc-900 rounded-xs overflow-hidden mb-4 filter grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Polaroid Footer */}
              <div className="flex flex-col">
                <span className="font-mono text-[7px] text-white/30 tracking-widest block mb-0.5">
                  {item.tag} // STIMULUS STAMP
                </span>
                <span className="font-sans font-black text-sm text-white tracking-tight">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}

          {/* BACKGROUND STICKER WALL (Overlayed stickers) */}

          {/* Sticker 1: Not Corporate warning */}
          <div className="absolute top-[8%] left-[8%] hidden lg:block z-20 pointer-events-auto">
            <Magnetic>
              <div className="px-4 py-2 border-2 border-dashed border-brand-red bg-zinc-950 text-brand-red text-[8px] font-mono font-black uppercase tracking-widest rotate-[-12deg] shadow-lg peel-sticker cursor-pointer">
                ⚠️ WARNING: NOT A CORPORATE GYM
              </div>
            </Magnetic>
          </div>

          {/* Sticker 2: Raw Energy Stamp */}
          <div className="absolute bottom-[10%] right-[10%] hidden lg:block z-20 pointer-events-auto">
            <Magnetic>
              <div className="w-20 h-20 rounded-full border border-white/20 bg-brand-red text-white flex flex-col items-center justify-center font-sans font-black text-[9px] uppercase tracking-tighter rotate-[15deg] shadow-2xl peel-sticker cursor-pointer">
                <span>99% RAW</span>
                <span>STIMULUS</span>
              </div>
            </Magnetic>
          </div>

          {/* Sticker 3: Move Different badge */}
          <div className="absolute top-[15%] right-[18%] hidden lg:block z-20 pointer-events-auto">
            <Magnetic>
              <div className="px-3.5 py-1.5 bg-white text-zinc-950 text-[9px] font-mono font-black uppercase tracking-wider rounded-lg rotate-[8deg] shadow-xl peel-sticker cursor-pointer">
                MOVE DIFFERENT ⚡️
              </div>
            </Magnetic>
          </div>

          {/* Sticker 4: Target barcode */}
          <div className="absolute bottom-[20%] left-[15%] hidden lg:block z-20 pointer-events-auto">
            <Magnetic>
              <div className="p-3 bg-zinc-900 border border-white/10 rounded flex flex-col items-center shadow-md rotate-[-6deg] peel-sticker cursor-pointer">
                <div className="w-16 h-6 bg-white flex flex-col justify-center items-center px-1">
                  <div className="w-full h-4 bg-[repeating-linear-gradient(90deg,black,black_1px,transparent_1px,transparent_4px)]" />
                </div>
                <span className="font-mono text-[5px] text-white/50 mt-1">ATHLETIC LAB // 04221</span>
              </div>
            </Magnetic>
          </div>

        </div>

      </div>

      {/* Hand-drawn Doodles */}
      
      {/* Target Marker */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-[6%] w-12 h-12 text-white/5 pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="3">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="10" />
          <path d="M50 0 L50 100 M0 50 L100 50" />
        </svg>
      </motion.div>

      {/* Scribbled Speech Bubble */}
      <div className="absolute bottom-[15%] right-[22%] text-brand-red/50 pointer-events-none hidden lg:block">
        <svg className="w-20 h-16" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 10 C30 5, 80 5, 85 35 C90 60, 40 60, 30 55 C20 62, 10 70, 8 72 C12 60, 10 50, 10 45 C5 30, 8 15, 10 10" />
          <path d="M30 30 L45 25 M30 40 L55 35" />
        </svg>
        <div className="absolute top-4 left-6 font-display text-[9px] text-white rotate-[-2deg] uppercase">
          PR DAY!
        </div>
      </div>
      
    </section>
  );
}
