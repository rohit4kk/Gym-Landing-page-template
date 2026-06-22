"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

interface ProgramCardProps {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  index: number;
  colSpan: string;
  rotateClass: string;
  translateClass?: string;
  stickerText: string;
  stickerBg: string;
  stickerTextClass: string;
}

function ProgramCard({
  id,
  title,
  tag,
  description,
  image,
  index,
  colSpan,
  rotateClass,
  translateClass = "",
  stickerText,
  stickerBg,
  stickerTextClass,
}: ProgramCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse Motion Values (normalized to card boundaries)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Springs to smooth out movements
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  
  // 3D rotations based on mouse position
  const tiltX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  
  // Multi-layered depth translation shifts (Parallax Depth)
  const layerBgX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const layerBgY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  
  const layerTextX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const layerTextY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates: -0.5 is left/top edge, 0.5 is right/bottom edge
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.15 }}
      className={`relative rounded-3xl overflow-visible border border-white/10 bg-zinc-950/40 backdrop-blur-sm group select-none ${colSpan} ${rotateClass} ${translateClass}`}
      style={{ perspective: 1000 }}
    >
      {/* 3D Tilted Card Body */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full min-h-[420px] sm:min-h-[460px] lg:min-h-[480px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-3xl"
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        {/* Background Image Layer (Deep recessed layer) */}
        <motion.div
          style={{
            x: layerBgX,
            y: layerBgY,
            translateZ: "-15px",
          }}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] z-0 filter brightness-[0.25] contrast-[1.1] grayscale group-hover:brightness-[0.4] group-hover:scale-[1.02] transition-all duration-700 pointer-events-none"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          {/* Bottom vignette inside card */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
        </motion.div>

        {/* Viewfinder corner brackets (technical frame) */}
        <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-2xl z-10 transition-colors duration-300 group-hover:border-white/10">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/25 group-hover:border-brand-red/60" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/25 group-hover:border-brand-red/60" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/25 group-hover:border-brand-red/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/25 group-hover:border-brand-red/60" />
        </div>

        {/* Top Header Layer */}
        <div className="w-full flex justify-between items-start z-20" style={{ transform: "translateZ(30px)" }}>
          {/* Sticker Label (Magnetic element) */}
          <Magnetic>
            <div className={`px-4 py-2.5 rounded-lg font-mono text-[9px] font-black uppercase tracking-widest shadow-xl cursor-pointer select-none transition-transform duration-300 ${stickerBg} ${stickerTextClass} rotate-[-5deg] hover:rotate-[3deg]`}>
              {stickerText}
              <div className="w-full h-[1px] bg-current opacity-15 mt-1" />
              <div className="flex justify-between items-center text-[6px] opacity-70 mt-0.5">
                <span>ATH-LAB</span>
                <span>// SYS-PROTO</span>
              </div>
            </div>
          </Magnetic>

          {/* Big Outline card index number */}
          <span
            className="text-5xl font-sans font-black text-transparent select-none leading-none -mt-1"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
          >
            {id}
          </span>
        </div>

        {/* Bottom content layer */}
        <motion.div
          style={{
            x: layerTextX,
            y: layerTextY,
            translateZ: "20px",
            transformStyle: "preserve-3d",
          }}
          className="mt-16 z-20"
        >
          <span className="font-mono text-brand-red text-[10px] font-black tracking-widest uppercase block mb-1">
            {tag}
          </span>
          <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-white mb-3">
            {title}
          </h3>
          <p className="text-supporting-white/60 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
            {description}
          </p>
          
          {/* Tech link overlay */}
          <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-brand-red group-hover:opacity-100 transition-all duration-300">
            <span>INITIATE PROTOCOL</span>
            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative bg-near-black w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5"
    >
      {/* Editorial Watermark Text (Low Opacity Backdrop) */}
      <div className="absolute right-0 top-10 pointer-events-none select-none text-[20vw] font-sans font-black text-transparent opacity-[0.02] tracking-widest uppercase leading-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>
        CORE
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          
          <div className="flex flex-col items-start">
            {/* Active section marker */}
            <div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold uppercase tracking-widest text-brand-red">
              <span>●</span> SYSTEM FLOW
            </div>
            
            <h2 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-white">
              TRAINING <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>SYSTEMS</span>
              <span className="font-display text-brand-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase block sm:inline-block ml-0 sm:ml-4 rotate-[-4deg]">
                protocols
              </span>
            </h2>
          </div>

          <div className="max-w-md text-supporting-white/60 relative md:pb-3">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Three modular methodologies engineered to unlock progressive athletic adaptation. No gimmicks, no placeholders—just clinical stimulus and tactical nervous system restoration.
            </p>
            
            {/* Doodle: Hand-drawn arrow pointing down towards cards */}
            <svg
              className="absolute -bottom-16 right-12 w-20 h-14 text-brand-red/70 hidden lg:block"
              viewBox="0 0 100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <motion.path
                d="M10,10 C45,5 55,20 62,38 M62,38 L50,34 M62,38 L58,24"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 }}
              />
            </svg>
          </div>
        </div>

        {/* Asymmetrical Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12">
          
          {/* Card 1: Strength */}
          <ProgramCard
            id="01"
            title="STRENGTH"
            tag="PROGRESSIVE OVERLOAD"
            description="Barbell, velocity-based, and structural resistance training engineered to maximize absolute force, cross-sectional muscle density, and durable joint integrity."
            image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
            index={0}
            colSpan="col-span-1 lg:col-span-7"
            rotateClass="lg:-rotate-[1.2deg]"
            stickerText="SYS-01 // FORCE"
            stickerBg="bg-brand-red"
            stickerTextClass="text-white"
          />

          {/* Card 2: Conditioning */}
          <ProgramCard
            id="02"
            title="CONDITION"
            tag="METABOLIC CAPACITANCE"
            description="High-intensity intervals, aerobic thresholds, and anaerobic power pacing designed to push cellular energy efficiency, cardiac stroke volume, and rapid recoverability."
            image="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop"
            index={1}
            colSpan="col-span-1 lg:col-span-5"
            rotateClass="lg:rotate-[1.5deg]"
            translateClass="lg:translate-y-12"
            stickerText="SYS-02 // METCON"
            stickerBg="bg-white"
            stickerTextClass="text-zinc-950"
          />

          {/* Card 3: Recovery */}
          <ProgramCard
            id="03"
            title="RECOVERY"
            tag="TISSUE DECOMPRESSION"
            description="Tactical contrast protocols, soft tissue decompression, active mobility sequences, and nervous system down-regulation to accelerate recovery cycles."
            image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop"
            index={2}
            colSpan="col-span-1 lg:col-span-8 lg:col-start-3"
            rotateClass="lg:-rotate-[0.8deg]"
            translateClass="mt-4 lg:mt-20"
            stickerText="SYS-03 // RESET"
            stickerBg="bg-zinc-800"
            stickerTextClass="text-supporting-white/90"
          />

        </div>

      </div>

      {/* Background Decorative Doodles */}
      
      {/* Target Marker near Recovery card */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-16 left-[5%] w-16 h-16 text-white/5 pointer-events-none select-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5" strokeDasharray="5 5">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="20" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
        </svg>
      </motion.div>

      {/* Hand-drawn Star near Strength card */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-[10%] w-10 h-10 text-white/10 pointer-events-none select-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="4">
          <path d="M50 10 L78 85 L10 38 L90 38 L22 85 Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Technical camera metrics watermark */}
      <div className="absolute left-6 bottom-6 text-[8px] font-mono text-white/15 tracking-widest uppercase pointer-events-none select-none hidden md:block">
        CAMERA REC STBY // ISO 640 // FOCUS MULTI-ZONE // SHUTTER 1/120
      </div>
      
    </section>
  );
}
