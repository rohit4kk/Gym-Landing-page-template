"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Community", href: "#community" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-near-black/80 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo - Stacked like Hero Reference */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl tracking-tight text-white transition-transform group-hover:scale-105 duration-300">
              ATHLETIC
            </span>
            <span className="font-display text-lg md:text-xl tracking-tight text-white flex items-center gap-1 transition-transform group-hover:scale-105 duration-300">
              LAB <span className="text-brand-red font-bold">+</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-xs md:text-sm font-medium uppercase tracking-widest text-supporting-white/80 hover:text-white transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Magnetic Join Button */}
            <div className="hidden sm:block">
              <Magnetic>
                <Link
                  href="#cta"
                  className="px-6 py-3 bg-brand-red text-white text-xs md:text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-brand-red/90 transition-colors duration-300 flex items-center gap-2 group shadow-lg shadow-brand-red/10"
                >
                  Join Now
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Magnetic>
            </div>

            {/* Circular Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 group z-50"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Slide Down Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 bg-near-black z-40 flex flex-col justify-between p-8 md:p-16"
          >
            {/* Background Accent Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 100 Q 300 200 500 100 T 900 300"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            <div className="flex justify-between items-start mt-20">
              <div className="flex flex-col gap-6">
                <span className="text-xs uppercase tracking-widest text-soft-gray font-medium">
                  Menu Navigation
                </span>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-4xl md:text-6xl text-white hover:text-brand-red transition-colors duration-300 block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-6 max-w-sm">
                <span className="text-xs uppercase tracking-widest text-soft-gray font-medium">
                  Our Mission
                </span>
                <p className="font-sans text-sm text-supporting-white/80 leading-relaxed">
                  Athletic Lab is designed to inspire movement through creativity, passion, and premium coaching. We make fitness fun, playful, and accessible.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <span className="text-xs text-soft-gray">CONTACT</span>
                  <a href="mailto:info@athleticlab.com" className="text-sm text-white hover:text-brand-red transition-colors">
                    info@athleticlab.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 border-t border-white/10">
              <div className="flex gap-6">
                <a href="#" className="text-xs text-soft-gray hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="text-xs text-soft-gray hover:text-white transition-colors">YOUTUBE</a>
                <a href="#" className="text-xs text-soft-gray hover:text-white transition-colors">TWITTER</a>
              </div>
              <span className="text-xs text-soft-gray">
                © {new Date().getFullYear()} ATHLETIC LAB. ALL RIGHTS RESERVED.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
