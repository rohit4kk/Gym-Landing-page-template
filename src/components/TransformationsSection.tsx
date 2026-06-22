"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TransformationStory {
  id: string;
  name: string;
  role: string;
  story: string;
  metrics: { label: string; before: string; after: string; highlight?: boolean }[];
  beforeImage: string;
  afterImage: string;
  isReversed?: boolean;
}

const stories: TransformationStory[] = [
  {
    id: "04",
    name: "MARCUS CHEN",
    role: "HYBRID ATHLETE",
    story: "Marcus came to the lab with persistent knee tendonitis and static force generation. Over 16 weeks of progressive loading and nervous system decompression, he restored joint mechanics while rewriting his absolute strength numbers.",
    metrics: [
      { label: "BODY MASS", before: "92 KG", after: "86 KG" },
      { label: "BODY FAT", before: "18.5%", after: "10.2%", highlight: true },
      { label: "DEADLIFT", before: "180 KG", after: "235 KG" },
      { label: "CNS RECOVERY RATE", before: "LOW", after: "OPTIMAL", highlight: true },
    ],
    beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    isReversed: false,
  },
  {
    id: "08",
    name: "CLARA VANDELA",
    role: "SPRINT & HYPERMEGACYCLE",
    story: "Clara wanted to transition from generic fitness to specialized speed endurance. Our tactical programming focused on peak mechanical output and metabolic threshold adaptations, elevating her aerobic floor and acceleration capabilities.",
    metrics: [
      { label: "VO2 MAX", before: "44 ML/MIN", after: "56 ML/MIN", highlight: true },
      { label: "BODY FAT", before: "22%", after: "14%" },
      { label: "100M SPRINT", before: "14.2s", after: "12.1s", highlight: true },
      { label: "CNS METRIC", before: "VARIABLE", after: "STABILIZED" },
    ],
    beforeImage: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    isReversed: true,
  },
];

function BeforeAfterSlider({ beforeImage, afterImage, name }: { beforeImage: string; afterImage: string; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderX(x);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderX(x);
  };

  const pct = containerRef.current && sliderX !== null
    ? (sliderX / containerRef.current.getBoundingClientRect().width) * 100
    : 50;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group cursor-ew-resize select-none"
    >
      {/* Before Image (Base state, grayscale, darker background layer) */}
      <div className="absolute inset-0 z-0 filter grayscale brightness-50">
        <Image
          src={beforeImage}
          alt={`${name} Before`}
          fill
          className="object-cover"
          sizes="400px"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/85 border border-white/10 font-mono text-[8px] font-black text-white/50 tracking-widest">
          BASE STAGGER // 0.00
        </div>
      </div>

      {/* After Image (Adapted state, colors, foreground layout) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)` }}
      >
        <div className="absolute inset-0 w-full h-full filter contrast-[1.05] brightness-90">
          <Image
            src={afterImage}
            alt={`${name} After`}
            fill
            className="object-cover"
            sizes="400px"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded bg-brand-red border border-white/10 font-mono text-[8px] font-black text-white tracking-widest shadow-lg">
            ADAPTED STIMULUS // 1.00
          </div>
        </div>
      </div>

      {/* Technical HUD Overlay viewfinders */}
      <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-2xl z-20">
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/30" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/30" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/30" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/30" />
      </div>

      {/* Slider Split Line */}
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-brand-red z-30 pointer-events-none flex items-center justify-center"
        style={{ left: `${pct}%` }}
      >
        {/* Glow Line effect */}
        <div className="absolute inset-0 w-[3px] -left-[1px] bg-brand-red shadow-[0_0_12px_#E51E2A] opacity-75" />
        
        {/* Technical Slider Handle */}
        <div className="w-8 h-8 rounded-full bg-brand-red border-2 border-white/90 text-white flex items-center justify-center shadow-2xl relative z-40 transform -translate-x-1/2">
          <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>

        {/* Live coordinate percentage read-out */}
        <div className="absolute -bottom-8 bg-black/90 border border-brand-red/35 px-2 py-0.5 rounded text-[7px] font-mono text-brand-red tracking-widest whitespace-nowrap">
          BIOMETRIC REVEAL: {Math.round(pct)}%
        </div>
      </div>
    </div>
  );
}

export default function TransformationsSection() {
  return (
    <section
      id="transformations"
      className="relative bg-near-black w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Title area */}
        <div className="flex flex-col items-start mb-20 lg:mb-28">
          <div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold uppercase tracking-widest text-brand-red">
            <span>●</span> DATA LABS
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-white">
            ATHLETIC <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>SHIFTS</span>
            <span className="font-display text-brand-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase block sm:inline-block ml-0 sm:ml-4 rotate-[-4deg]">
              transformations
            </span>
          </h2>
        </div>

        {/* Stories list */}
        <div className="flex flex-col gap-24 lg:gap-36">
          {stories.map((item, storyIndex) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                item.isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Text / Metrics Column */}
              <div className={`col-span-1 lg:col-span-6 flex flex-col justify-center ${
                item.isReversed ? "lg:col-start-7 lg:order-2" : ""
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-brand-red text-xs font-black tracking-widest">
                    SYSTEM CASE // {item.id}
                  </span>
                  <span className="text-white/20 font-mono text-xs">/</span>
                  <span className="font-mono text-white/50 text-[10px] font-bold tracking-widest uppercase">
                    {item.role}
                  </span>
                </div>
                
                <h3 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-6">
                  {item.name}
                </h3>
                
                <p className="text-supporting-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  {item.story}
                </p>

                {/* Metrics Sticker Grid */}
                <div className="grid grid-cols-2 gap-4 max-w-lg">
                  {item.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border flex flex-col justify-between ${
                        metric.highlight
                          ? "bg-brand-red/5 border-brand-red/30 text-white"
                          : "bg-white/[0.02] border-white/10 text-supporting-white/80"
                      }`}
                    >
                      <span className="font-mono text-[9px] font-bold tracking-widest text-supporting-white/40 uppercase mb-2">
                        {metric.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs line-through opacity-40 font-mono">{metric.before}</span>
                        <span className="text-xs text-brand-red">→</span>
                        <span className="text-sm font-black font-sans tracking-tight text-white">
                          {metric.after}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlapping Image Visual Column */}
              <div className={`col-span-1 lg:col-span-6 flex justify-center items-center relative py-10 lg:py-0 ${
                item.isReversed ? "lg:col-start-1 lg:order-1" : ""
              }`}>
                
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  name={item.name}
                />

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
