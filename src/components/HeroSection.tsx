import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";



export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-950">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Libera Tu</span>
                <span className="block text-indigo-400">Capacidad Tecnológica</span>
              </h1>
              <p className="mt-4 max-w-md text-xl text-gray-300 hover:cursor-pointer z-10">
                En KeyBud ayudamos a empresas a alcanzar el éxito con soluciones tecnológicas innovadoras y servicios de consultoría expertos.
              </p>
            </motion.div>
            <div className="mt-8 z-20">
           <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Comienza ahora</Button>
            </div>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0}}

              transition={{ duration: 1.3, delay: 0.4 }}
            >
              <Image src="/Graphs.png" alt="Hero Image" width={500} height={500} className="absolute z-20 rounded-xl transform rotate-12 translate-x-32 transalate-y-1/3 shadow-lg shadow-indigo-950/50" />
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image src="/Checkout.png" alt="Hero Image" width={500} height={500} className="rounded-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-gray-800">
          <path 
            fill="currentColor" 
            fillOpacity="0.1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
