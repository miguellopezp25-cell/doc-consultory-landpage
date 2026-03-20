"use client"

import { GraduationCap, Award, FileCheck, Building } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    title: "Formación Académica",
    description: "Médico Cirujano egresado de la Facultad de Medicina, UNAM. Generación 2005-2011.",
  },
  {
    icon: Award,
    title: "Especialización",
    description: "Especialidad en Medicina Interna con subespecialidad en Cardiología, Hospital General de México.",
  },
  {
    icon: FileCheck,
    title: "Cédula Profesional",
    description: "Cédula SEP: 12345678 | Cédula Especialidad: 87654321",
  },
  {
    icon: Building,
    title: "Experiencia Hospitalaria",
    description: "Ex-médico adscrito Hospital ABC. Actualmente consulta privada y Hospital Ángeles.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto lg:max-w-none relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl" />
              <div className="absolute top-8 left-8 right-8 bottom-8 bg-secondary/30 rounded-2xl" />
              
              {/* Quote card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl p-8 shadow-xl border border-border max-w-sm">
                <blockquote className="font-serif text-xl text-foreground italic mb-4">
                  &ldquo;La medicina no es solo ciencia, es el arte de escuchar y entender a cada paciente como un ser único.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-serif font-bold">DG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dr. Pinto</p>
                    <p className="text-xs text-muted-foreground">Médico Especialista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Sobre el Doctor</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Compromiso con tu salud desde hace más de 15 años
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Soy el Dr. Pinto, médico especialista dedicado a brindar atención médica de calidad 
              con un enfoque humano y preventivo. Mi objetivo es acompañarte en cada etapa de tu 
              salud, desde la prevención hasta el tratamiento, siempre con la mejor tecnología 
              y un trato personalizado.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <credential.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{credential.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{credential.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
