"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative bg-near-black w-full py-16 sm:py-24 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/5">
          
          {/* Logo & Info column */}
          <div className="col-span-1 md:col-span-6 flex flex-col items-start justify-between gap-6">
            <div>
              <span className="font-sans font-black text-2xl tracking-tighter text-white uppercase block">
                ATHLETIC <span className="text-brand-red">LAB +</span>
              </span>
              <p className="text-supporting-white/40 text-xs mt-3 leading-relaxed max-w-sm">
                A premium creative fitness brand. We construct custom physical and central nervous system adaptation programs for dedicated athletes.
              </p>
            </div>

            {/* Status light info */}
            <div className="flex items-center gap-2 font-mono text-[9px] text-white/30 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LAB SERVER ONLINE // v2.0.4</span>
            </div>
          </div>

          {/* Directory Links columns */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Systems */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[9px] font-bold text-white/40 tracking-wider uppercase">
                SYSTEMS
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-supporting-white/60">
                <li><a href="#programs" className="hover:text-brand-red transition-colors">STRENGTH 01</a></li>
                <li><a href="#programs" className="hover:text-brand-red transition-colors">CONDITION 02</a></li>
                <li><a href="#programs" className="hover:text-brand-red transition-colors">RECOVERY 03</a></li>
              </ul>
            </div>

            {/* Column 2: Labs */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[9px] font-bold text-white/40 tracking-wider uppercase">
                LABS
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-supporting-white/60">
                <li><a href="#transformations" className="hover:text-brand-red transition-colors">RESULTS</a></li>
                <li><a href="#coaches" className="hover:text-brand-red transition-colors">COACHING</a></li>
                <li><a href="#community" className="hover:text-brand-red transition-colors">CULTURE</a></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <span className="font-mono text-[9px] font-bold text-white/40 tracking-wider uppercase">
                SOCIAL
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-supporting-white/60">
                <li><a href="#" className="hover:text-brand-red transition-colors">INSTAGRAM</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">YOUTUBE</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">SPOTIFY</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Bottom Metadata stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[8px] text-white/20 tracking-widest uppercase">
          <div>
            © 2026 ATHLETIC LAB. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-2">
            <a href="#" className="hover:text-white/40">PRIVACY PROTOCOLS</a>
            <span>//</span>
            <a href="#" className="hover:text-white/40">TERMS OF USE</a>
            <span>//</span>
            <span className="text-white/10">SYS ACCESS ONLY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
