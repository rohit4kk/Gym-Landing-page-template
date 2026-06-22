"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

interface CoachCardProps {
  name: string;
  role: string;
  specialty: string;
  image: string;
  stats: { label: string; value: number }[];
  index: number;
  rotation: string;
}

function CoachCard({ name, role, specialty, image, stats, index, rotation }: CoachCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  
  const tiltX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  
const glareBg = useTransform(
  [springX, springY],
  (values) => {
    const x = Number(values[0] ?? 0);
    const y = Number(values[1] ?? 0);

    const pctX = (x + 0.5) * 100;
    const pctY = (y + 0.5) * 100;

    return `radial-gradient(
      circle at ${pctX}% ${pctY}%,
      rgba(255,255,255,0.12) 0%,
      transparent 60%
    )`;
  }
);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.15 }}
      className={`relative w-full max-w-[340px] aspect-[2/3] rounded-3xl overflow-visible border border-white/10 bg-zinc-950/50 backdrop-blur-md p-4 group select-none ${rotation}`}
      style={{ perspective: 1000 }}
    >
      {/* Holographic collectible card style body */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between p-5 border border-white/5"
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        {/* glint / glare reflection overlay */}
        <motion.div
          style={{
            background: glareBg,
            translateZ: "5px",
          }}
          className="absolute inset-0 z-10 pointer-events-none"
        />

        {/* Coach Portrait Background */}
        <div className="absolute inset-0 w-full h-full z-0 filter brightness-[0.35] contrast-[1.05] grayscale group-hover:brightness-[0.45] transition-all duration-500">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          {/* technical viewfinder coordinates */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />
        </div>

        {/* Card Header Info */}
        <div className="w-full flex justify-between items-start z-10" style={{ transform: "translateZ(20px)" }}>
          <div className="flex flex-col">
            <span className="font-mono text-[7px] text-white/40 tracking-wider">LAB OPERATOR</span>
            <span className="font-mono text-[9px] font-black text-brand-red tracking-widest">{role}</span>
          </div>
          <span className="font-mono text-[8px] border border-white/10 px-1.5 py-0.5 rounded bg-black/60 text-white/50">
            SYS // {index + 1}
          </span>
        </div>

        {/* Stats & Title Bottom Wrapper */}
        <div className="z-10 flex flex-col gap-4" style={{ transform: "translateZ(30px)" }}>
          
          {/* Card Technical Stats */}
          <div className="flex flex-col gap-2 bg-black/40 border border-white/5 p-3 rounded-xl backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <div className="flex justify-between items-center text-[7px] font-mono text-white/50 font-bold uppercase tracking-wider">
                  <span>{stat.label}</span>
                  <span>{stat.value}%</span>
                </div>
                {/* Stats Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full bg-brand-red rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Coach Name & Spec */}
          <div>
            <span className="font-mono text-[8px] text-supporting-white/60 tracking-wider block mb-0.5 uppercase">
              {specialty}
            </span>
            <h3 className="font-sans font-black text-2xl uppercase tracking-tighter text-white">
              {name}
            </h3>
          </div>
        </div>

        {/* Trading card frame focus edges */}
        <div className="absolute inset-2 border border-white/5 pointer-events-none rounded-xl">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
        </div>

        {/* Barcode / Stamp watermark */}
        <div className="absolute top-1/2 right-4 transform rotate-90 origin-right font-mono text-[6px] text-white/10 tracking-[3px] uppercase z-10 hidden sm:block">
          ATH-LAB CARD COLLECTIBLE // {name.split(" ")[0]}
        </div>

      </motion.div>
    </motion.div>
  );
}

export const coachesList = [
  {
    name: "BRANDON KANE",
    role: "HEAD OF STRENGTH",
    specialty: "SYSTEM-01 / FORCE adaptation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    stats: [
      { label: "STRENGTH LOADING", value: 98 },
      { label: "CNS MANAGEMENT", value: 92 },
      { label: "STRUCTURAL MOBILITY", value: 88 },
    ],
    rotation: "lg:-rotate-[1.5deg]",
  },
  {
    name: "SARAH LINDEN",
    role: "METABOLIC DIRECTOR",
    specialty: "SYSTEM-02 / MITOCHONDRIA CAPACITY",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    stats: [
      { label: "METABOLIC THRESHOLD", value: 99 },
      { label: "ENERGY PACING", value: 95 },
      { label: "RECOVERY RATE", value: 90 },
    ],
    rotation: "lg:rotate-[1.2deg]",
  },
  {
    name: "MARCUS TORRES",
    role: "CNS RESTORATION LEADER",
    specialty: "SYSTEM-03 / SYMPATHETIC SHIFT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    stats: [
      { label: "TISSUE THERAPEUTICS", value: 96 },
      { label: "CNS DECOMPRESSION", value: 98 },
      { label: "PASSIVE RANGES", value: 94 },
    ],
    rotation: "lg:-rotate-[0.8deg]",
  },
];

export default function CoachesSection() {
  return (
    <section
      id="coaches"
      className="relative bg-near-black w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5"
    >
      {/* Editorial Watermark */}
      <div className="absolute left-0 bottom-10 pointer-events-none select-none text-[18vw] font-sans font-black text-transparent opacity-[0.015] tracking-widest uppercase leading-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>
        ELITE
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-28">
          <div className="flex flex-col items-start">
            <div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold uppercase tracking-widest text-brand-red">
              <span>●</span> EXPERT CREW
            </div>
            <h2 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-white">
              ATHLETIC <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>MASTERS</span>
              <span className="font-display text-brand-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase block sm:inline-block ml-0 sm:ml-4 rotate-[-4deg]">
                coaches
              </span>
            </h2>
          </div>

          <div className="max-w-md text-supporting-white/60 relative md:pb-3">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Our coaching staff are elite sports scientists, hybrid athletes, and recovery specialists. They don't run circuits—they architect systemic physiological changes.
            </p>
            {/* Doodle: handwritten annotation tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 -right-8 font-display text-brand-red text-xs rotate-[8deg] uppercase tracking-wider hidden lg:block"
            >
              100% Certified Operators ⚡️
            </motion.div>
          </div>
        </div>

        {/* Coaches Cards Grid */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 lg:gap-12 mt-12">
          {coachesList.map((coach, index) => (
            <CoachCard
              key={index}
              name={coach.name}
              role={coach.role}
              specialty={coach.specialty}
              image={coach.image}
              stats={coach.stats}
              index={index}
              rotation={coach.rotation}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
