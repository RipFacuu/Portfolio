"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    period: "2022 – 2023",
    company: "Renata Deco Home",
    role: "Diseñador & Vendedor",
    location: "Córdoba, Argentina",
    description:
      "Diseño de interiores y asesoramiento personalizado en productos de decoración. Gestión de ventas y coordinación de exhibiciones en showroom. Enfoque en la experiencia del cliente y presentación de propuestas creativas adaptadas a tendencias del mercado.",
    tech: ["Diseño de interiores", "Atención al cliente", "Decoración"],
    color: "orange",
  },
  {
    period: "Julio 2023 – Agosto 2024",
    company: "Quality Espacio",
    role: "Diseñador 3D y Renderista",
    location: "Córdoba, Argentina",
    description:
      "Creación de renders 3D profesionales para eventos corporativos y comerciales. Modelado y visualización de productos para marketing. Colaboración directa con clientes para materializar conceptos visuales. Manejo avanzado de software de renderizado y post-producción.",
    tech: ["3D Modeling", "Rendering", "Post-producción"],
    color: "purple",
  },
  {
    period: "Abril 2024 – Mayo 2025",
    company: "Skater Elephant",
    role: "Full-stack Developer",
    location: "Córdoba, Argentina",
    description:
      "Desarrollé dashboards administrativos con React y Redux, optimizando vistas de más de 10.000 registros y aplicando patrones de diseño reutilizables. Implementé soluciones full-stack que mejoraron la experiencia del usuario, la eficiencia operativa y el rendimiento de productos como Fotocasa e InfoJobs. Además, diseñé dashboards en DataDog y colaboré en equipos ágiles multidisciplinarios.",
    tech: ["React", "Redux", "Node.js", "DataDog", "Agile"],
    color: "cyan",
  },
  {
    period: "Noviembre 2024 – Febrero 2025",
    company: "Dámelo Siempre",
    role: "Vendedor Comercial (Part-time)",
    location: "Córdoba, Argentina",
    description:
      "Atención directa al cliente en tienda de ropa, gestión de ventas online y redes sociales. Experiencia en técnicas de venta consultiva, fidelización de clientes y análisis de tendencias de consumo.",
    tech: ["Ventas", "Atención al cliente", "Redes Sociales"],
    color: "green",
  },
]

const colorClasses = {
  cyan: "border-cyan-500/30 bg-cyan-500/10",
  green: "border-green-500/30 bg-green-500/10",
  purple: "border-purple-500/30 bg-purple-500/10",
  orange: "border-orange-500/30 bg-orange-500/10",
}

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
          >
            Experiencia
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mi recorrido profesional y tecnológico
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-green-500 to-purple-500"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full border-4 border-gray-950 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`glass-card p-6 rounded-2xl border transition-all duration-300 ${colorClasses[exp.color as keyof typeof colorClasses]} hover:shadow-lg hover:shadow-${exp.color}-500/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
                    <h4 className="text-lg text-cyan-400 mb-3">{exp.role}</h4>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}