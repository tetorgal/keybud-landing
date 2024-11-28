import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Code2 } from "lucide-react";
import CountUp from "react-countup";

export default function CompanySection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Company Description */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={fadeInUp}
        >
          <h2 className="text-3xl font-extrabold text-gray-300 mb-6 sm:text-5xl">
            Transformando <span className="text-indigo-400">Tus Ideas</span> en
            Realidad Digital
          </h2>
          <p className="text-gray-300 max-w-4xl text-bold mx-auto text-lg">
            Somos una compañía de consultoría de software visionaria, dedicada a
            guiar a las empresas en el paisaje digital con soluciones
            innovadoras y estrategias efectivas.
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
                  <h3 className="text-xl font-semibold text-gray-300">
                    Nuestra Misión
                  </h3>
                </div>
                <p className="text-gray-300  gap-1">
                  <span className="font-bold text-indigo-500">
                    Empoderar a las empresas{" "}
                  </span>
                  a través de soluciones de software innovadoras que impulsen el
                  crecimiento, la eficiencia y la transformación digital.
                  Nuestro objetivo es entregar excelencia en cada proyecto,
                  manteniendo los más altos estándares de calidad y satisfacción
                  del cliente.
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
                  <h3 className="text-xl font-semibold text-gray-300">
                    Nuestra Visión
                  </h3>
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-indigo-500">
                    Ser un referente global{" "}
                  </span>{" "}
                  en consultoría de software, reconocido por nuestras soluciones
                  innovadoras, experiencia técnica y compromiso con generar un
                  impacto positivo duradero para nuestros clientes y la
                  comunidad tecnológica.
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
          <h3 className="text-2xl font-bold text-gray-300 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Code2 className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">
                    Excelencia
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Entregando calidad destacada en cada linea de código y cada
                    consulta.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">
                    Colaboración
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Trabajando juntos con los clientes para lograr resultados
                    extraordinarios.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Lightbulb className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">
                    Innovación
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Impulsando limites y abrazando nuevas tecnologías.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardBody className="p-6">
                <div className="flex flex-col items-center">
                  <Target className="h-10 w-10 text-indigo-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">
                    Integridad
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Manteniendo los más altos estándares de ética profesional.
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
          {/* Cada elemento con animación de CountUp */}
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">
              <CountUp delay={2} start={0} end={3} duration={2} suffix="+" />
            </p>
            <p className="text-gray-300">Proyectos Completados</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">
              <CountUp delay={2} start={0} end={50} duration={2} suffix="+" />
            </p>
            <p className="text-gray-300">Clientes Felices</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">
              <CountUp delay={2} start={0} end={4} duration={2} suffix="+" />
            </p>
            <p className="text-gray-300">Miembros</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-indigo-400 mb-2">
              <CountUp delay={2} start={0} end={1} duration={2} suffix="+" />
            </p>
            <p className="text-gray-300">Años de experiencia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
