"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/images/recepcion.jpg",
    alt: "Recepción del consultorio",
    title: "Recepción",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/clinic-exam-room.jpg",
    alt: "Sala de exploración",
    title: "Consultorio Principal",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/clinic-waiting.jpg",
    alt: "Sala de espera",
    title: "Sala de Espera",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/clinic-equipment.jpg",
    alt: "Equipo médico",
    title: "Equipo Moderno",
    span: "col-span-2 row-span-1",
  },
]

export function GallerySection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Nuestras Instalaciones</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Un espacio diseñado para tu comodidad
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Contamos con instalaciones modernas, cómodas y equipadas con la última tecnología 
            para brindarte la mejor atención médica.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative group rounded-2xl overflow-hidden bg-muted ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-card font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Ambiente Confortable</h3>
            <p className="text-sm text-muted-foreground">Espacios climatizados y diseñados para tu tranquilidad.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Equipo Medico</h3>
            <p className="text-sm text-muted-foreground">Equipo médico para diagnósticos precisos.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Accesibilidad</h3>
            <p className="text-sm text-muted-foreground">Instalaciones adaptadas para personas con movilidad reducida.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
