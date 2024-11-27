import { Card, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Code2 } from 'lucide-react'

export default function CompanySection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Company Description */}
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-6 sm:text-4xl">
            Transforming Ideas into Digital Reality
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            KeyBud is a forward-thinking software consulting company dedicated to helping businesses 
            navigate the digital landscape with innovative solutions and strategic guidance.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={fadeInUp}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300">
                  To empower businesses through innovative software solutions that drive growth, 
                  efficiency, and digital transformation. We strive to deliver excellence in every 
                  project while maintaining the highest standards of quality and client satisfaction.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={fadeInUp}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300">
                  To be the leading force in software consulting, recognized globally for our 
                  innovative solutions, technical expertise, and commitment to creating lasting 
                  positive impact for our clients and the technology community.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-white mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Code2 className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
                  <p className="text-gray-300 text-sm">
                    Delivering outstanding quality in every line of code and every consultation.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Collaboration</h4>
                  <p className="text-gray-300 text-sm">
                    Working together with clients to achieve extraordinary results.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Lightbulb className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-300 text-sm">
                    Pushing boundaries and embracing new technologies.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Target className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Integrity</h4>
                  <p className="text-gray-300 text-sm">
                    Maintaining the highest standards of professional ethics.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={fadeInUp}
        >
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">100+</p>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">50+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">15+</p>
            <p className="text-gray-300">Team Members</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">5+</p>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

