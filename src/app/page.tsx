import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import TransformationsSection from "@/components/TransformationsSection";
import CoachesSection from "@/components/CoachesSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HudSectionDivider from "@/components/HudSectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <HudSectionDivider label="PROG-SECTOR" code="SYS-FLOW-01" />
        <ProgramsSection />
        <HudSectionDivider label="AUDIT-SECTOR" code="CASE-STUDY-02" />
        <TransformationsSection />
        <HudSectionDivider label="COACH-SECTOR" code="PERSONNEL-03" />
        <CoachesSection />
        <HudSectionDivider label="CULTURE-SECTOR" code="COMMUNITY-04" />
        <CommunitySection />
        <HudSectionDivider label="MEMBER-SECTOR" code="TESTIMONIALS-05" />
        <TestimonialsSection />
        <HudSectionDivider label="CONVERSION-SECTOR" code="SECURE-ACCESS-06" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
// Hot-reload trigger comment

