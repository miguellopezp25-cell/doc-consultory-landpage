"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "instalaciones", label: "Instalaciones" },
  { id: "contacto", label: "Contacto" },
]

interface HeaderProps {
  activeTab: any
  onTabChange: (tab: string) => void
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl font-bold">DG</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold text-foreground">Dr. Pinto</p>
              <p className="text-xs text-muted-foreground">Consultorio Médico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+525555555555" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>55 5555 5555</span>
            </a>
            <Button 
              onClick={() => onTabChange("contacto")}
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Agendar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {tab.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onTabChange("contacto")
                  setMobileMenuOpen(false)
                }}
                className="mt-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Agendar Cita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
