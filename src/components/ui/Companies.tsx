import Image from 'next/image'
import Android from '@/assets/Android.svg'
import TypeScript from '@/assets/TypeScript.svg'
import Next from '@/assets/Next.svg'
import React from '@/assets/React.svg'
import ReactNative from '@/assets/ReactNative.svg'
import Tailwind from '@/assets/Tailwind.svg'
import Node from '@/assets/Node.svg'
import Express from '@/assets/Express.svg'
import PostgreSQL from '@/assets/PostgreSQL.svg'
import MongoDb from '@/assets/MongoDb.svg'
export default function LogoCarousel() {

  const logos = [
    { src: Android, alt: 'Android' },
    { src: React, alt: 'React' },
    { src: TypeScript, alt: 'TypeScript' },
    { src: Next, alt: 'Next.js' },
    { src: ReactNative, alt: 'React Native' },
    { src: Tailwind, alt: 'Tailwind CSS' },
    { src: Node, alt: 'Node.js' },
    { src: Express, alt: 'Express.js' },
    { src: PostgreSQL, alt: 'PostgreSQL' },
    { src: MongoDb, alt: 'MongoDB' },
  ]

  return (
    <div className="
    items-center justify-center
    bg-indigo-950
    w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center  [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </li>
        ))}
      </ul>
   
    </div>
  )
}