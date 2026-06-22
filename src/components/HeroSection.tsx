"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, cubicBezier } from "framer-motion";
import Magnetic from "@/components/Magnetic";

interface SplitWordProps {
  text: string;
  delayOffset: number;
}

function SplitWord({ text, delayOffset }: SplitWordProps) {
  const letters = text.split("");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delayOffset,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "115%", rotate: 6 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.85,
        ease: cubicBezier(0.16, 1, 0.3, 1),
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-flex overflow-hidden"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block origin-bottom-left"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax values utilizing Framer Motion springs (prevents React re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Perspective translation layers for parallax depth
  const athleteX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const athleteY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  // 3D tilt effects for the athlete card
  const tiltX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const bgBrushX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const bgBrushY = useTransform(springY, [-0.5, 0.5], [-25, 25]);

  const doodleArrowX = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const doodleArrowY = useTransform(springY, [-0.5, 0.5], [-35, 35]);

  const doodleBadgeX = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const doodleBadgeY = useTransform(springY, [-0.5, 0.5], [20, -20]);

  const doodleStarX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const doodleStarY = useTransform(springY, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Normalize mouse coordinates from -0.5 to 0.5
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset spring to center
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen lg:h-screen lg:max-h-[900px] w-full bg-near-black flex flex-col justify-center items-center py-20 lg:py-0 px-6 md:px-12 lg:px-20 overflow-hidden select-none"
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Decorative radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-near-black to-near-black pointer-events-none" />

      {/* Background outline marquee text - moving automatically */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none flex flex-col justify-center gap-24 opacity-[0.03] z-0">
        <div className="w-full whitespace-nowrap overflow-hidden flex">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="text-[12vw] font-sans font-black uppercase tracking-widest text-transparent select-none flex gap-12"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
          >
            <span>ATHLETIC LAB</span>
            <span>•</span>
            <span>TRAIN WITH JOY</span>
            <span>•</span>
            <span>UNLEASH ENERGY</span>
            <span>•</span>
            <span>ATHLETIC LAB</span>
            <span>•</span>
            <span>TRAIN WITH JOY</span>
            <span>•</span>
            <span>UNLEASH ENERGY</span>
          </motion.div>
        </div>
      </div>

      {/* Rotating Badge */}
      <motion.div
        style={{ x: doodleBadgeX, y: doodleBadgeY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-8 right-8 lg:top-12 lg:right-12 w-28 h-28 hidden md:block pointer-events-none select-none z-20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/10 fill-current">
            <path
              id="textPath-badge"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
              stroke="none"
            />
            <text className="text-[7.2px] font-sans font-black tracking-[2.8px] uppercase fill-white/20">
              <textPath href="#textPath-badge" startOffset="0%">
                • ATHLETIC LAB • PLAY PLAYFUL • TRAIN HARD
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-brand-red text-lg font-bold">
            +
          </div>
        </motion.div>
      </motion.div>

      {/* Main Grid Content */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        
        {/* Left Side: Headline & CTAs */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start text-left relative">

          {/* Large Editorial Typography */}
          <h1 className="flex flex-col items-start leading-[0.8] select-none tracking-tighter">
            {/* Line 1: Solid Word */}
            <div className="overflow-hidden py-1">
              <span className="block font-sans font-black text-[12vw] sm:text-[9vw] lg:text-[8vw] xl:text-[7.5vw] uppercase text-white">
                <SplitWord text="TRAIN" delayOffset={0.1} />
              </span>
            </div>

            {/* Line 2: Outline Word */}
            <div className="overflow-hidden py-1">
              <span 
                className="block font-sans font-black text-[12vw] sm:text-[9vw] lg:text-[8vw] xl:text-[7.5vw] uppercase text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)" }}
              >
                <SplitWord text="WITH" delayOffset={0.3} />
              </span>
            </div>

            {/* Line 3: Accent Handwritten Word "JOY" */}
            <div className="overflow-hidden py-2.5 relative flex items-center">
              <span className="block font-display text-[14vw] sm:text-[11vw] lg:text-[10vw] xl:text-[9vw] text-brand-red relative leading-[0.75] origin-bottom-left rotate-[-2deg]">
                <SplitWord text="JOY" delayOffset={0.5} />
                {/* Hand-drawn scribble underline SVG */}
                <svg
                  className="absolute -bottom-3 left-0 w-[110%] h-6 text-brand-red pointer-events-none"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M10,8 C60,15 120,12 190,10 C130,7 70,5 20,12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </div>
          </h1>

          {/* Description / Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-6 font-sans text-supporting-white/70 text-sm sm:text-base md:text-md max-w-md leading-relaxed"
          >
            A modern fitness playground built for dynamic movement, community vibes, and premium coaching. Break patterns, raise parameters, and discover what your body can truly do.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-6 relative"
          >
            {/* Primary Magnetic CTA */}
            <div className="relative">
              <Magnetic>
                <a
                  href="#cta"
                  className="relative z-10 px-8 py-4 bg-brand-red text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-red/90 transition-colors duration-300 flex items-center gap-3 group shadow-xl shadow-brand-red/20"
                >
                  Start Your Journey
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Magnetic>

              {/* Hand-drawn Highlighter Circle SVG surrounding primary CTA */}
              <svg
                viewBox="0 0 240 76"
                className="absolute -inset-x-4 -inset-y-3.5 w-[calc(100%+32px)] h-[calc(100%+28px)] text-brand-red/50 pointer-events-none select-none"
                fill="none"
              >
                <motion.path
                  d="M 12, 12 C 70, 7, 170, 10, 228, 16 C 235, 34, 230, 54, 222, 62 C 165, 68, 55, 65, 18, 60 C 10, 48, 9, 23, 14, 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                />
              </svg>
            </div>

            {/* Secondary Magnetic CTA */}
            <Magnetic>
              <button className="flex items-center gap-3.5 font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-white/95 hover:text-white transition-colors duration-300 group py-2">
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white group-hover:fill-brand-red transition-all duration-300 ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Video
              </button>
            </Magnetic>

            {/* Hand-drawn sketchy arrow pointing from description to CTA */}
            <motion.div
              style={{ x: doodleArrowX, y: doodleArrowY }}
              className="absolute -top-16 -left-16 w-16 h-16 text-white/20 pointer-events-none select-none hidden xl:block"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="3" strokeLinecap="round">
                <motion.path
                  d="M 20,20 Q 50,20 60,60 T 40,85"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
                <motion.path
                  d="M 30,75 L 40,85 L 52,78"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.8, duration: 0.3, ease: "easeOut" }}
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Micro-guarantee value prop under CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-supporting-white/40"
          >
            <span>⚡️ 7-Day Free Pass</span>
            <span className="text-white/20">•</span>
            <span>No contracts</span>
            <span className="text-white/20">•</span>
            <span>Cancel anytime</span>
          </motion.div>

          {/* Doodle: Hand-drawn white star at bottom left */}
          <motion.div
            style={{ x: doodleStarX, y: doodleStarY }}
            animate={{ y: [0, 8, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-16 left-0 md:-left-12 w-10 h-10 text-white/30 pointer-events-none select-none hidden sm:block"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 L78 85 L10 38 L90 38 L22 85 Z" />
            </svg>
          </motion.div>

        </div>

        {/* Right Side: Athlete Image Viewfinder Poster with Mouse Parallax & 3D Tilt */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center relative py-6 lg:py-0">
          
          {/* Active status widget */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-bold uppercase tracking-wider text-supporting-white/70 backdrop-blur-md z-20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            142 Athletes training right now
          </motion.div>

          {/* Athlete Card Container with mouse parallax and 3D Tilt */}
          <div className="relative flex items-center justify-center" style={{ perspective: 1000 }}>
            
            {/* Background Red Paint Splatter SVG (rotating & pulsing behind) */}
            <motion.div
              style={{ x: bgBrushX, y: bgBrushY }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full -z-10 scale-125 opacity-70 blur-[1px] pointer-events-none"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full text-brand-red/90 fill-current drop-shadow-[0_0_40px_rgba(229,30,42,0.3)]">
                <path d="M12,175 C34,142 82,90 145,65 C212,38 290,48 340,95 C388,140 382,215 352,275 C320,338 250,380 180,382 C108,384 45,335 22,270 C4,218 -2,201 12,175 Z" />
              </svg>
            </motion.div>

            {/* Viewfinder Card Wrapper */}
            <motion.div
              style={{ x: athleteX, y: athleteY, rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative w-[290px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[350px] md:h-[460px] bg-zinc-950/40 border border-white/10 rounded-2xl p-3 overflow-visible shadow-2xl backdrop-blur-sm cursor-pointer select-none"
            >
              {/* Camera Viewfinder Overlay Elements */}
              <div className="absolute inset-3 border border-white/5 pointer-events-none rounded-xl" />
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />
              
              {/* Viewfinder HUD */}
              <div className="absolute top-5 left-7 flex items-center gap-1.5 text-[8px] font-mono tracking-wider text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                REC [RAW]
              </div>
              <div className="absolute top-5 right-7 text-[8px] font-mono tracking-wider text-white/50">
                60 FPS • 4K
              </div>
              <div className="absolute bottom-5 left-7 text-[8px] font-mono tracking-wider text-white/40 flex flex-col leading-none">
                <span>F/2.8</span>
                <span className="text-[6px] text-white/20">ISO 400</span>
              </div>
              <div className="absolute bottom-5 right-7 text-[8px] font-mono tracking-wider text-white/50">
                00:14:59:02
              </div>

              {/* Viewfinder crosshair in center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4 h-[1px] bg-white/20" />
                <div className="h-4 w-[1px] bg-white/20" />
              </div>

              {/* Athlete Portrait image */}
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-950 flex items-end justify-center">
                <Image
                  src="/images/hero-athlete.webp"
                  alt="Athletic Lab Athlete"
                  fill
                  priority
                  sizes="(max-width: 640px) 290px, (max-width: 768px) 320px, 350px"
                  className="object-cover object-bottom select-none pointer-events-none scale-[1.03]"
                />
              </div>

              {/* Doodle: Smiley face speech bubble floating near athlete */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-6 md:-right-8 w-14 h-14 text-white pointer-events-none select-none z-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 50 10 A 40 40 0 1 1 20 80 L 10 95 L 28 88 A 40 40 0 0 1 50 10 Z" fill="black" />
                  <circle cx="38" cy="45" r="4.5" fill="currentColor" />
                  <circle cx="62" cy="45" r="4.5" fill="currentColor" />
                  <path d="M 38 60 Q 50 72 62 60" />
                </svg>
              </motion.div>

              {/* Doodle: Red lightning bolt floating at bottom right */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-5 w-12 h-12 text-brand-red pointer-events-none select-none z-20"
              >
                <svg viewBox="0 0 80 100" className="w-full h-full fill-none stroke-current" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M40 10 L15 50 L35 50 L15 90 L60 40 L40 40 Z" fill="black" />
                </svg>
              </motion.div>

              {/* Doodle: Handwritten label note pointing to the card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-1/2 -left-20 text-right pointer-events-none select-none z-20 hidden md:block"
              >
                <div className="font-display text-brand-red text-sm rotate-[-8deg] uppercase tracking-wider">
                  Coach Brandon ⚡️
                </div>
                <svg viewBox="0 0 50 20" className="w-10 h-6 text-brand-red/60 ml-auto -mt-1 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 40, 5 Q 10, 5 5, 15" />
                  <circle cx="40" cy="5" r="2.5" fill="currentColor" />
                </svg>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
