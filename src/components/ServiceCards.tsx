'use client'

import React from 'react'

import Image from 'next/image'
import Spotlight, { SpotlightCard } from './ui/SpotlightCard'


const ServiceCards = (): JSX.Element => {
  return <section className='flex items-center justify-center py-24 bg-gradient-to-b from-indigo-950 to-gray-900'>
<Spotlight className='max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group'>
    <SpotlightCard>
    <div className="relative h-full bg-gray-800 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-indigo-900 rounded-full blur-[100px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <Image className="inline-flex" src={"/service-1.jpg"} width={200} height={200} alt="Card 02" />
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Amazing Integration</h2>
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
              
                  </div>
                </div>
    </SpotlightCard>
    <SpotlightCard>
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <Image className="inline-flex" src={'/service-2.jpg'} width={200} height={200} alt="Card 02" />
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Amazing Integration</h2>
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                    
                  </div>
                </div>
              </SpotlightCard>
    </Spotlight>
  </section>
}

export default ServiceCards
