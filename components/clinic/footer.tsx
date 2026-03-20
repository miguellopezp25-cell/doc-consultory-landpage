"use client"

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">DG</span>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold">Dr. Pinto</p>
                <p className="text-sm text-background/70">Consultorio Médico</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm mb-6">
              Más de 15 años dedicados a cuidar la salud de nuestros pacientes 
              con profesionalismo, calidez humana y tecnología de vanguardia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Inicio</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Servicios</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Instalaciones</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contacto</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Aviso de Privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-background/70">55 5555 5555</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-background/70">contacto@farmaciaspinto.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-background/70">Av. Insurgentes Sur 1234, CDMX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Dr. Pinto - Consultorio Médico. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/50">
            Cédula Profesional SEP: 12345678
          </p>
        </div>
      </div>
    </footer>
  )
}
