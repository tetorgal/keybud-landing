'use client'

import React from 'react'
import Image from 'next/image'
import Spotlight, { SpotlightCard } from './ui/SpotlightCard'
import { Cloud, Code2, Database, GitBranch, LineChart, Shield } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    title: "Consultoría en TI",
    description: "Consultoría estratégica en tecnología para alinear tu infraestructura de TI con los objetivos empresariales y fomentar la transformación digital.",
    icon: <LineChart className="w-12 h-12 text-white" />
  },
  {
    title: "Soluciones en la Nube",
    description: "Servicios completos en la nube, incluyendo migración, optimización y gestión de infraestructuras en AWS, Azure y GCP.",
    icon: <Cloud className="w-12 h-12 text-white" />
  },
  {
    title: "Desarrollo de Software Personalizado",
    description: "Soluciones de software a medida construidas con tecnologías de vanguardia para abordar los desafíos únicos de tu negocio.",
    icon: <Code2 className="w-12 h-12 text-white" />
  },
  {
    title: "Servicios DevOps",
    description: "Optimiza tu flujo de desarrollo con nuestra experiencia en DevOps, garantizando entregas de software más rápidas y confiables.",
    icon: <GitBranch className="w-12 h-12 text-white" />
  },
  {
    title: "Análisis de Datos",
    description: "Transforma tus datos en información accionable con nuestras soluciones avanzadas de análisis y de inteligencia empresarial.",
    icon: <Database className="w-12 h-12 text-white" />
  },
  {
    title: "Ciberseguridad",
    description: "Protege tus activos digitales con nuestras evaluaciones de seguridad, implementaciones y servicios de seguridad gestionados.",
    icon: <Shield className="w-12 h-12 text-white" />
  }
];


const ServiceCards = (): JSX.Element => {
  return (
    <section className='mx-36 flex items-center justify-center  bg-gradient-to-b '>
      <Spotlight className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start lg:max-w-none group'>
        {services.map((service, index) => (
          <SpotlightCard key={index}>
            <div className="relative h-full bg-gray-800 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div 
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" 
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-indigo-900 rounded-full blur-[100px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-4">
                  <div 
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" 
                    aria-hidden="true"
                  ></div>
                  <div className="bg-gray-900 p-4 rounded-2xl">
                    {service.icon}
                  </div>
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-400">
                    {service.description}
                  </p>
                </div>
                {/* Hover effect gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </Spotlight>
    </section>
  )
}

export default ServiceCards

