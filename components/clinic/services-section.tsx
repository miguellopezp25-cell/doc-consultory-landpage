"use client"

import { Heart, Stethoscope, Activity, Pill, FileHeart, Syringe, Thermometer, ClipboardList } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Evaluación integral de tu estado de salud con diagnóstico y tratamiento personalizado.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Cardiología Preventiva",
    description: "Chequeos cardiovasculares, electrocardiograma y evaluación de factores de riesgo.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Activity,
    title: "Control de Enfermedades Crónicas",
    description: "Seguimiento especializado de diabetes, hipertensión y otras condiciones crónicas.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: FileHeart,
    title: "Check-up Ejecutivo",
    description: "Paquete completo de estudios para evaluar tu salud de manera integral.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Pill,
    title: "Medicina Preventiva",
    description: "Programas de prevención, vacunación y detección temprana de enfermedades.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Syringe,
    title: "Procedimientos Menores",
    description: "Suturas, curaciones, aplicación de medicamentos y procedimientos ambulatorios.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Thermometer,
    title: "Urgencias Médicas",
    description: "Atención de padecimientos agudos que requieren valoración inmediata.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ClipboardList,
    title: "Certificados Médicos",
    description: "Certificados de salud, aptitud física y documentación médica oficial.",
    color: "bg-accent/20 text-accent",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Atención médica especializada para cada necesidad
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ofrecemos una amplia gama de servicios médicos con la más alta calidad profesional 
            y tecnología de vanguardia para cuidar de tu salud.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 rounded-3xl p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl font-bold text-primary mb-2">$800</p>
              <p className="text-muted-foreground">Consulta General</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-primary mb-2">45 min</p>
              <p className="text-muted-foreground">Tiempo de consulta</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-primary mb-2">24 hrs</p>
              <p className="text-muted-foreground">Resultados de estudios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
