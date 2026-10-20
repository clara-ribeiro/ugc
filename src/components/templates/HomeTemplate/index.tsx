"use client";

import AboutSection from "@/components/organisms/AboutSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import FaqSection from "@/components/organisms/FaqSection";
import Hero from "@/components/organisms/Hero";
import JournalSection from "@/components/organisms/JournalSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import SiteFooter from "@/components/organisms/SiteFooter";
import SiteHeader from "@/components/organisms/SiteHeader";

export default function HomeTemplate() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <AboutSection />
        <ArchiveSection />
        <JournalSection />
        <ProcessSection />
        <ServicesSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
