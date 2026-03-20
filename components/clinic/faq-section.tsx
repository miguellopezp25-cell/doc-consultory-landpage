"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuesta la consulta?",
    answer: "La consulta general tiene un costo de $800 MXN. Este precio incluye la evaluación completa, diagnóstico y prescripción médica. Para procedimientos adicionales o estudios especiales, se proporcionará un presupuesto previo.",
  },
  {
    question: "¿Necesito hacer cita previa?",
    answer: "Sí, trabajamos únicamente con cita previa para garantizar una atención puntual y de calidad. Puedes agendar tu cita por teléfono, WhatsApp o directamente en el consultorio. En caso de urgencias, contáctanos y haremos lo posible por atenderte.",
  },
  {
    question: "¿Aceptan seguros de gastos médicos?",
    answer: "Sí, trabajamos con las principales aseguradoras: GNP, AXA, Metlife, Seguros Monterrey, BUPA, entre otras. Te recomendamos verificar tu cobertura antes de la consulta y traer tu póliza vigente.",
  },
  {
    question: "¿Cuánto dura la consulta?",
    answer: "Cada consulta tiene una duración aproximada de 45 minutos, lo que nos permite realizar una evaluación completa y responder todas tus preguntas. Para revisiones de seguimiento, el tiempo puede ser menor.",
  },
  {
    question: "¿Atienden urgencias?",
    answer: "Atendemos urgencias médicas durante nuestro horario de consulta. Si tienes una emergencia fuera de horario, te recomendamos acudir a urgencias hospitalarias. En caso de dudas, puedes contactarnos por WhatsApp.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, tarjetas de débito y crédito (Visa, Mastercard, American Express), transferencia bancaria y pagos por aplicación (Mercado Pago). No manejamos pagos diferidos ni crédito directo.",
  },
  {
    question: "¿Puedo obtener mis recetas y estudios de forma digital?",
    answer: "Sí, todas las recetas médicas y resultados de estudios pueden enviarse en formato digital por correo electrónico o WhatsApp. También proporcionamos documentos físicos si lo prefieres.",
  },
  {
    question: "¿El consultorio cuenta con estacionamiento?",
    answer: "El edificio cuenta con estacionamiento subterráneo con servicio de valet parking. El costo es de $30 por hora. También hay estacionamiento público a una cuadra del consultorio.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Resolvemos las dudas más comunes de nuestros pacientes. 
            Si no encuentras tu respuesta, no dudes en contactarnos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border">
          <h3 className="font-semibold text-foreground mb-2">¿Tienes más preguntas?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="tel:+525555555555"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Llamar Ahora
            </a>
            <a 
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
