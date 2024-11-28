import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Contenido principal del pie de p gina */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Informaci n de la empresa */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/keyabstract.png" 
                alt="Logotipo de KeyBud" 
                width={40} 
                height={40} 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">KeyBud</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Empoderando a las empresas a través de soluciones de software innovadoras y servicios de consultor a expertos.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Enlaces r pidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#About" className="text-gray-400 hover:text-white transition-colors">
                  Acerca de nosotros
                </Link>
              </li>
              <li>
                <Link href="#Services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#Contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
         
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/consultoria" className="text-gray-400 hover:text-white transition-colors">
                  Consultoría en TI
                </Link>
              </li>
              <li>
                <Link href="/servicios/nube" className="text-gray-400 hover:text-white transition-colors">
                  Soluciones en la nube
                </Link>
              </li>
              <li>
                <Link href="/servicios/desarrollo" className="text-gray-400 hover:text-white transition-colors">
                  Desarrollo a medida
                </Link>
              </li>
              <li>
                <Link href="/servicios/devops" className="text-gray-400 hover:text-white transition-colors">
                  Servicios de DevOps
                </Link>
              </li>
              <li>
                <Link href="/servicios/seguridad" className="text-gray-400 hover:text-white transition-colors">
                  Seguridad informática
                </Link>
              </li>
            </ul>
          </div>

          {/* Informaci n de contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 mt-0.5" />
                <span className="text-gray-400">
                  Av. Negocios 123<br />
                  Distrito Tecnológico, TX 75001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">contacto@keybud.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} KeyBud. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Pol tica de privacidad
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y condiciones
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


