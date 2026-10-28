"use client";

import AboutSection from "@/components/organisms/AboutSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import FaqSection from "@/components/organisms/FaqSection";
import Hero from "@/components/organisms/Hero";
import JournalSection from "@/components/organisms/JournalSection";
import MethodSection from "@/components/organisms/MethodSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import ContactModal from "@/components/organisms/ContactModal";
import { ContactProvider } from "@/components/organisms/ContactModal/ContactContext";
import SiteFooter from "@/components/organisms/SiteFooter";
import SiteHeader from "@/components/organisms/SiteHeader";
import { Main } from "./styles";

export default function HomeTemplate() {
  return (
    <ContactProvider>
      <SiteHeader />
      <Main id="main">
        <Hero />
        <AboutSection />
        <ArchiveSection />
        <MethodSection />
        <JournalSection />
        <ProcessSection />
        <ServicesSection />
        <FaqSection />
      </Main>
      <SiteFooter />
      <ContactModal />
    </ContactProvider>
  );
}
