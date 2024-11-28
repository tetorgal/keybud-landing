'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Mail, MessageSquare, Phone } from 'lucide-react'
import { Button, Card, Input, Textarea } from '@nextui-org/react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
        
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-indigo-950/50 pointer-events-none" />
      <div
          className="absolute -top-36 right-0 translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold   text-white mb-4">Contactanos</h2>
            <p className="text-gray-400 text-lg">
              Listo para transformar tu negocio? Contáctanos hoy para obtener una consulta.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-900/50 rounded-lg">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">Correo electrónico</p>
                    <p className="text-sm text-gray-400">contacto@keybud.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-900/50 rounded-lg">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">Teléfono</p>
                    <p className="text-sm text-gray-400">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-900/50 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">Chat en vivo</p>
                    <p className="text-sm text-gray-400">Disponible 24/7</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    
                    <Input
                      id="firstName"
                      label={<span className="text-gray-200">Nombre</span>}
                      placeholder="Enter your first name"
                      variant='bordered'
                      required
                      className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="lastName"
                      label={<span className="text-gray-200">Apellido</span>}
                      placeholder="Enter your last name"
                      required
                      variant='bordered'
                      className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                 
                  <Input
                    id="email"
                    type="email"
                    label={<span className="text-gray-200">Email</span>}
                    placeholder="Enter your email"
                    variant='bordered'
                    required
                    className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
               
                  <Textarea
                    id="message"
                    label={<span className="text-gray-200">Mensaje</span>}
                    placeholder="Enter your message"
                    variant='bordered'
                    required
                    className=" bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
     
      </div>
    </section>
  )
}

