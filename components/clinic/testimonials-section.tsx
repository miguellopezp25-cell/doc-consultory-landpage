"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María Fernández",
    role: "Paciente desde 2019",
    content: "El Dr. Pinto es un profesional excepcional. Me atendió con mucha paciencia y explicó cada detalle de mi tratamiento. Totalmente recomendado.",
    rating: 5,
    image: "MF",
  },
  {
    name: "Carlos Rodríguez",
    role: "Paciente desde 2021",
    content: "Después de años buscando un médico que realmente escuchara mis preocupaciones, encontré al Dr. Pinto. Su atención es impecable y las instalaciones son muy cómodas.",
    rating: 5,
    image: "CR",
  },
  {
    name: "Ana López",
    role: "Paciente desde 2020",
    content: "Mi familia y yo nos atendemos aquí. El trato siempre es amable, puntual y profesional. Las citas se respetan y nunca hay largas esperas.",
    rating: 5,
    image: "AL",
  },
  {
    name: "Roberto Sánchez",
    role: "Paciente desde 2022",
    content: "Excelente servicio médico. El doctor se toma el tiempo necesario para explicar todo y responder preguntas. El consultorio está muy bien equipado.",
    rating: 5,
    image: "RS",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa. 
            Conoce sus experiencias y opiniones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">{testimonial.image}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">4.9</p>
            <div className="flex justify-center gap-1 my-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Calificación Google</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground mt-2">Pacientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">+150</p>
            <p className="text-sm text-muted-foreground mt-2">Reseñas positivas</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">85%</p>
            <p className="text-sm text-muted-foreground mt-2">Pacientes recurrentes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
