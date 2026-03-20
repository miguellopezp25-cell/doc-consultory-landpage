"use client"

import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const schedule = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 7:00 PM" },
  { day: "Sábado", hours: "9:00 AM - 2:00 PM" },
  { day: "Domingo", hours: "Cerrado" },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "55 5555 5555",
    action: "tel:+525555555555",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "55 1234 5678",
    action: "https://wa.me/5215512345678",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Mail,
    title: "Correo",
    value: "contacto@farmaciaspinto.com",
    action: "mailto:contacto@farmaciaspinto.com",
    color: "bg-secondary text-secondary-foreground",
  },
]

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Agenda tu cita hoy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estamos para atenderte. Elige el método de contacto que prefieras 
            y agenda tu consulta de manera rápida y sencilla.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <Card className="hover:shadow-md transition-all duration-300 border-border hover:border-primary/30">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{method.title}</p>
                        <p className="font-semibold text-foreground">{method.value}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Contactar
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Schedule */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horarios de Atención</h3>
                    <p className="text-sm text-muted-foreground">Agenda tu cita dentro de nuestro horario</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className={`text-sm ${item.hours === "Cerrado" ? "text-destructive" : "text-muted-foreground"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground bg-muted rounded-lg p-3">
                  * Las citas fuera de horario están sujetas a disponibilidad. Para urgencias, favor de llamar directamente.
                </p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Av. Insurgentes Sur 1234, Piso 5, Consultorio 502<br />
                      Col. Del Valle, Benito Juárez<br />
                      Ciudad de México, C.P. 03100
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="text-primary font-medium">Referencias:</span> A 2 cuadras del Metro Insurgentes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/3] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.429751847037!2d-99.17496832394858!3d19.384795681871787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff72c4fd4a9f%3A0x2c79f0b3c3ee3bbe!2sAv.%20Insurgentes%20Sur%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1709654321234!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
                className="absolute inset-0"
              />
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-accent text-accent-foreground border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-serif text-xl font-bold mb-2">¿Prefieres WhatsApp?</h3>
                <p className="text-accent-foreground/80 text-sm mb-4">
                  Agenda tu cita de forma rápida y sencilla por mensaje. Te respondemos en minutos.
                </p>
                <Button 
                  asChild
                  className="w-full rounded-full bg-card text-foreground hover:bg-card/90"
                >
                  <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer">
                    Enviar Mensaje
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
