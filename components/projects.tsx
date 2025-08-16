"use client"

import { motion, useAnimation, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { ExternalLink, Github, Users, QrCode, Video, TrendingUp, Palette, ArrowRight, Instagram } from "lucide-react"

const projects = [
  {
    title: "Liga Participando",
    description:
      "Plataforma web para la gestión de torneos de fútbol amateur con administración de fixtures, zonas y posiciones en tiempo real.",
    tech: [
      { name: "React", description: "Frontend UI library" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "Supabase", description: "Backend as a Service" },
      { name: "Node.js", description: "Backend runtime" },
      { name: "Real-time", description: "Updates en tiempo real" },
    ],
    primaryTech: ["React", "MongoDB", "Supabase"],
    color: "green",
    icon: Users,
    demo: "https://www.tuligalp.com/",
    github: "#",
    animationType: "chain",
  },
  {
    title: "Generador de QR & NFC",
    description: "Sistema para crear y administrar códigos QR dinámicos y soluciones basadas en NFC con integración a Telegram.",
    tech: [
      { name: "Node.js", description: "Backend runtime" },
      { name: "React", description: "Frontend UI library" },
      { name: "Telegraf", description: "Telegram bot framework" },
      { name: "Playwright", description: "Web automation" },
      { name: "QR Codes", description: "Generación dinámica" },
      { name: "NFC", description: "Near Field Communication" },
    ],
    primaryTech: ["Node.js", "React", "Telegraf"],
    color: "cyan",
    icon: QrCode,
    demo: "https://nfc-2-v14z.vercel.app/",
    github: "#",
    animationType: "matrix",
  },
  {
    title: "Videos - Deco",
    description: "Producción audiovisual para empresa de decoración incluyendo reels, videos promocionales y animaciones gráficas.",
    tech: [
      { name: "After Effects", description: "Video compositing" },
      { name: "Illustrator", description: "Vector graphics" },
      { name: "Photoshop", description: "Image editing" },
      { name: "Motion Graphics", description: "Animaciones gráficas" },
      { name: "Video Production", description: "Producción audiovisual" },
    ],
    primaryTech: ["After Effects", "Illustrator", "Motion Graphics"],
    color: "purple",
    icon: Video,
    demo: [
      {
        title: "Reel 1 - Decoración",
        url: "https://www.instagram.com/reel/DBbfC6Axecl/?utm_source=ig_web_copy_link&igsh=MXkwcmJ6bnQ0cjRscg=="
      },
      {
        title: "Reel 2 - Promocional", 
        url: "https://www.instagram.com/reel/DBMNYlsvIDp/?utm_source=ig_web_copy_link&igsh=MW1lZmd2Z2dscG9scA=="
      },
      {
        title: "Reel 3 - Animación",
        url: "https://www.instagram.com/reel/DBBsGMPvtc_/?utm_source=ig_web_copy_link&igsh=MzQ1b3FzOWVpcWY="
      }
    ],
    github: "#",
    animationType: "pulse",
  },
  {
    title: "Campañas Digitales - Deco",
    description:
      "Ejecución de estrategias de marketing en redes sociales con alcance de hasta 7,600 visitas en un día en campañas pagas.",
    tech: [
      { name: "Meta Ads", description: "Facebook advertising platform" },
      { name: "Adobe Illustrator", description: "Vector graphics design" },
      { name: "Photoshop", description: "Image editing" },
      { name: "Social Media", description: "Gestión de redes sociales" },
      { name: "Analytics", description: "Análisis de métricas" },
    ],
    primaryTech: ["Meta Ads", "Illustrator", "Analytics"],
    color: "orange",
    icon: TrendingUp,
    demo: "#",
    github: "#",
    animationType: "terminal",
  },
  {
    title: "Diseño de Logos",
    description: "Creación de identidades visuales y material gráfico incluyendo logos, banners y piezas para redes sociales.",
    tech: [
      { name: "Photoshop", description: "Image editing and design" },
      { name: "Brand Identity", description: "Identidad de marca" },
      { name: "Logo Design", description: "Diseño de logotipos" },
      { name: "Social Media", description: "Contenido para redes" },
      { name: "Visual Design", description: "Diseño visual" },
    ],
    primaryTech: ["Photoshop", "Brand Identity", "Logo Design"],
    color: "blue",
    icon: Palette,
    demo: "#",
    github: "#",
    animationType: "code",
  },
]

const colorClasses = {
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/70",
    bg: "from-cyan-500/20 to-blue-600/20",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/30",
    button: "border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400",
    icon: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  green: {
    border: "border-green-500/30 hover:border-green-400/70",
    bg: "from-green-500/20 to-teal-600/20",
    text: "text-green-400",
    glow: "shadow-green-500/30",
    button: "border-green-500/30 hover:border-green-400 hover:bg-green-500/10 text-green-400",
    icon: "bg-gradient-to-r from-green-500 to-teal-500",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400/70",
    bg: "from-purple-500/20 to-pink-600/20",
    text: "text-purple-400",
    glow: "shadow-purple-500/30",
    button: "border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-400",
    icon: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-400/70",
    bg: "from-orange-500/20 to-red-600/20",
    text: "text-orange-400",
    glow: "shadow-orange-500/30",
    button: "border-orange-500/30 hover:border-orange-400 hover:bg-orange-500/10 text-orange-400",
    icon: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  blue: {
    border: "border-blue-500/30 hover:border-blue-400/70",
    bg: "from-blue-500/20 to-indigo-600/20",
    text: "text-blue-400",
    glow: "shadow-blue-500/30",
    button: "border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 text-blue-400",
    icon: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
}

// Custom animations for each project type
const MatrixBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="matrix-animation">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`matrix-column ${colorClasses[color as keyof typeof colorClasses].text}`}
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0, 1, 0], y: 20 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: j * 0.2 + i * 0.1,
                }}
                className="text-xs font-mono block"
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const ChainBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="chain-animation">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          >
            <div className="flex items-center">
              {Array.from({ length: 8 }).map((_, j) => (
                <motion.div
                  key={j}
                  className={`w-8 h-8 mx-1 rounded-full border-2 ${colorClasses[color as keyof typeof colorClasses].border}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: j * 0.1 + i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const TerminalBackground = ({ color }: { color: string }) => {
  const lines = [
    "> iniciando campaña...",
    "> configurando Meta Ads...",
    "> analizando audiencia...",
    "> optimizando creativos...",
    "> campaña activa",
    "> 7,600 visitas alcanzadas",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
      <div className="terminal-animation p-4 font-mono text-xs">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`${colorClasses[color as keyof typeof colorClasses].text}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.4 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const CodeBackground = ({ color }: { color: string }) => {
  const codeLines = [
    "// Diseñando identidad visual",
    "const logo = createLogo({",
    "  style: 'modern',",
    "  colors: ['primary', 'accent'],",
    "  typography: 'clean'",
    "});",
    "",
    "export { brandIdentity };",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
      <div className="code-animation p-4 font-mono text-xs">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className={`${colorClasses[color as keyof typeof colorClasses].text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const PulseBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="pulse-animation">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${colorClasses[color as keyof typeof colorClasses].bg}`}
            style={{
              top: "50%",
              left: "50%",
              width: "50%",
              height: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: [1, 2, 3],
              opacity: [0.2, 0.1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [showMenu, setShowMenu] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: index % 2 === 0 ? -2 : 2,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  }

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -20 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3 + index * 0.2,
      },
    },
  }

  const renderBackgroundAnimation = () => {
    switch (project.animationType) {
      case "matrix":
        return <MatrixBackground color={project.color} />
      case "chain":
        return <ChainBackground color={project.color} />
      case "terminal":
        return <TerminalBackground color={project.color} />
      case "code":
        return <CodeBackground color={project.color} />
      case "pulse":
        return <PulseBackground color={project.color} />
      default:
        return null
    }
  }

  const renderCustomButton = () => {
    const buttonClass = `flex-1 border ${colorClasses[project.color as keyof typeof colorClasses].button}`
    const hasMultipleLinks = Array.isArray(project.demo)
    const isInstagram = !hasMultipleLinks && project.demo.includes && project.demo.includes('instagram.com')

    if (hasMultipleLinks) {
      return (
        <div className="flex-1 relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className={`w-full px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center text-sm ${buttonClass}`}
          >
            <Instagram size={16} className="mr-2" />
            Ver Videos ({project.demo.length})
          </button>
          
          {showMenu && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-900 border border-gray-600 rounded-lg shadow-xl z-50">
              {project.demo.map((link: any, linkIndex: number) => (
                <button
                  key={linkIndex}
                  onClick={() => {
                    window.open(link.url, '_blank')
                    setShowMenu(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-all duration-200 ${linkIndex === 0 ? 'rounded-t-lg' : ''} ${linkIndex === project.demo.length - 1 ? 'rounded-b-lg' : 'border-b border-gray-700'}`}
                >
                  <div className="flex items-center">
                    <Instagram size={14} className="mr-2" />
                    {link.title}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <motion.div className="flex-1" whileHover={{ scale: 1.05 }}>
        <button 
          onClick={() => window.open(project.demo, '_blank')}
          className={`w-full px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center text-sm ${buttonClass}`}
        >
          {isInstagram ? (
            <Instagram size={16} className="mr-2" />
          ) : (
            <ExternalLink size={16} className="mr-2" />
          )}
          {isInstagram ? 'Ver en Instagram' : 'Demo'}
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`glass-card rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-lg group relative ${colorClasses[project.color as keyof typeof colorClasses].border} ${colorClasses[project.color as keyof typeof colorClasses].glow}`}
      style={{
        background: 'rgba(17, 25, 40, 0.75)',
        backdropFilter: 'blur(16px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
    >
      {renderBackgroundAnimation()}

      <div className={`h-1 bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses].icon}`}></div>

      <div className="p-6 relative z-10">
        <div className="flex items-start mb-4">
          <motion.div
            variants={iconVariants}
            className={`p-3 rounded-lg ${colorClasses[project.color as keyof typeof colorClasses].icon} mr-4 mt-1`}
          >
            <project.icon size={24} className="text-white" />
          </motion.div>

          <div>
            <h3
              className={`text-xl font-semibold mb-1 group-hover:text-white transition-colors ${colorClasses[project.color as keyof typeof colorClasses].text}`}
            >
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: any) => (
            <div
              key={tech.name}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.span
                whileHover={{ y: -2, scale: 1.05 }}
                className={`px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-${project.color}-500/50 transition-all duration-300`}
              >
                {tech.name}
              </motion.span>

              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-0 mb-2 p-2 bg-gray-900/95 backdrop-blur-sm border border-gray-600 rounded-lg text-xs text-gray-300 whitespace-nowrap z-20 shadow-lg"
                >
                  {tech.description}
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700/50 pt-4 mb-4">
          <p className="text-xs text-gray-500 mb-2">Tecnologías principales:</p>
          <div className="flex flex-wrap gap-2">
            {project.primaryTech.map((tech: string) => (
              <span
                key={tech}
                className={`text-sm font-semibold ${colorClasses[project.color as keyof typeof colorClasses].text}`}
              >
                {tech}
                {project.primaryTech.indexOf(tech) < project.primaryTech.length - 1 ? " + " : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          {renderCustomButton()}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Proyectos
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una selección de proyectos donde combino desarrollo web, creatividad y estrategia. Desde sistemas a medida hasta campañas de marketing y diseño.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className="px-6 py-3 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 rounded-lg transition-all duration-300 flex items-center mx-auto"
          >
            Ver Todos los Proyectos
            <ArrowRight size={20} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}