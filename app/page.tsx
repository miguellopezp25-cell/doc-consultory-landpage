"use client"

import { useState } from "react"
import { Header } from "@/components/clinic/header"
import { HeroSection } from "@/components/clinic/hero-section"
import { AboutSection } from "@/components/clinic/about-section"
import { ServicesSection } from "@/components/clinic/services-section"
import { GallerySection } from "@/components/clinic/gallery-section"
import { TestimonialsSection } from "@/components/clinic/testimonials-section"
import { ContactSection } from "@/components/clinic/contact-section"
import { FaqSection } from "@/components/clinic/faq-section"
import { Footer } from "@/components/clinic/footer"

export type TabType = "inicio" | "servicios" | "instalaciones" | "contacto"

export default function ClinicPage() {
  const [activeTab, setActiveTab] = useState<TabType>("inicio")

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeTab={activeTab} 
        onTabChange={(tab) => setActiveTab(tab as TabType)} 
      />
      
      <main>
        {activeTab === "inicio" && (
          <>
            {/* Agregamos la prop que faltaba para vincular el botón del Hero con el estado */}
            <HeroSection onContactClick={() => setActiveTab("contacto")} />
            <AboutSection />
          </>
        )}
        
        {activeTab === "servicios" && (
          <ServicesSection />
        )}
        
        {activeTab === "instalaciones" && (
          <>
            <GallerySection />
            <TestimonialsSection />
          </>
        )}
        
        {activeTab === "contacto" && (
          <>
            <ContactSection />
            <FaqSection />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  )
}