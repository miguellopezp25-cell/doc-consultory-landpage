"use client"

import { Shield, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Más de 15 años de experiencia
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Cuidado integral para{" "}
              <span className="text-primary">tu bienestar</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Medicina general con enfoque preventivo y personalizado. 
              Tu salud es nuestra prioridad, con atención humana y tecnología de vanguardia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={onContactClick}
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full border-border hover:bg-muted"
              >
                Conocer Servicios
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Cédula Verificada</p>
                  <p className="text-xs text-muted-foreground">SEP 12345678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Certificación</p>
                  <p className="text-xs text-muted-foreground">UNAM / IMSS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Atención Puntual</p>
                  <p className="text-xs text-muted-foreground">Sin largas esperas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-secondary/30 rounded-3xl -rotate-3" />
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-3" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/5]">
                <Image
                  src="/images/doctor.jpg"
                  alt="Dr. Pinto - Médico General"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 sm:left-auto sm:-right-4 bg-card rounded-2xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-card" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">+2,500</p>
                    <p className="text-xs text-muted-foreground">Pacientes atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
