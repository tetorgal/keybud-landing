'use client'

import { motion } from 'framer-motion'

import { Star } from 'lucide-react'
import { Avatar, Card } from '@nextui-org/react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc",
    content: "KeyBud transformó completamente nuestra infraestructura de TI. Su estrategia de migración a la nube nos ahorró un 40% en costos operativos mientras mejoraba la fiabilidad de nuestro sistema.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, InnovatePro",
    content: "La solución de software personalizada desarrollada por KeyBud optimizó nuestros procesos comerciales más allá de las expectativas. La experiencia y profesionalismo de su equipo son incomparables.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Directora de Operaciones, DataFlow",
    content: "Trabajar con KeyBud en nuestra transformación DevOps fue un cambio radical. No solo implementaron herramientas; nos ayudaron a construir una cultura de desarrollo más eficiente.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-gray-900 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-300 mb-4">
            Lo que <span className="text-indigo-400">Nuestros Clientes</span> Dicen
          </h2>
          <p className="text-gray-400 text-lg">
            No solo tome nuestra palabra. Esto es lo que los líderes de la industria tienen que decir sobre trabajar con KeyBud.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-800/50 border-gray-700 h-full flex flex-col">
                {/* Rating */}
                <div className="flex mb-4" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="flex-grow">
                  <p className="text-gray-300 mb-6">{testimonial.content}</p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center mt-4">
                  <Avatar className="h-10 w-10 mr-4">
                    {/* <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback> */}
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  )
}

