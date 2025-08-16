"use client"

import { motion } from "framer-motion"
import { Code, Server, Brain, Blocks, Database, Settings } from "lucide-react"
import { useState } from "react"

// Add state and enhanced functionality at the top of the component
const SkillsComponent = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Enhanced skill categories with priority tags, descriptions, and experience years
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "cyan",
      skills: [
        {
          name: "React (v19+)",
          priority: "🔥",
          years: 4,
          description: "Go-to for UI speed and flexibility",
          favorite: true,
        },
        {
          name: "Next.js (v15+)",
          priority: "🚀",
          years: 3,
          description: "Full-stack React framework powerhouse",
          favorite: true,
        },
        { name: "Remix", priority: "", years: 2, description: "Modern web standards focused", favorite: false },
        { name: "TailwindCSS", priority: "⚙️", years: 4, description: "Utility-first CSS framework", favorite: true },
        { name: "Astro", priority: "", years: 1, description: "Static site generation excellence", favorite: false },
        { name: "Vite", priority: "", years: 3, description: "Lightning fast build tool", favorite: false },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "green",
      skills: [
        { name: "Node.js", priority: "🔥", years: 4, description: "JavaScript runtime for everything", favorite: true },
        { name: "NestJS", priority: "🚀", years: 3, description: "Enterprise-grade Node.js framework", favorite: true },
        {
          name: "FastAPI",
          priority: "⚙️",
          years: 2,
          description: "Python API development at light speed",
          favorite: true,
        },
        { name: "Django", priority: "", years: 2, description: "Python web framework with batteries", favorite: false },
        { name: "Express", priority: "", years: 4, description: "Minimalist Node.js web framework", favorite: false },
      ],
    },
    {
      title: "AI/Automation",
      icon: Brain,
      color: "purple",
      skills: [
        { name: "LangChain", priority: "🔥", years: 2, description: "AI agent orchestration platform", favorite: true },
        {
          name: "OpenAI API",
          priority: "🚀",
          years: 2,
          description: "GPT integration and fine-tuning",
          favorite: true,
        },
        { name: "Retell AI", priority: "", years: 1, description: "Voice AI conversation platform", favorite: false },
        {
          name: "AI agent tooling",
          priority: "⚙️",
          years: 2,
          description: "Custom AI workflow automation",
          favorite: true,
        },
      ],
    },
    {
      title: "Web3",
      icon: Blocks,
      color: "orange",
      skills: [
        {
          name: "Solidity",
          priority: "🔥",
          years: 2,
          description: "Smart contract development language",
          favorite: true,
        },
        { name: "Hardhat", priority: "🚀", years: 2, description: "Ethereum development environment", favorite: true },
        { name: "ZetaChain", priority: "", years: 1, description: "Omnichain smart contracts", favorite: false },
        {
          name: "WalletConnect",
          priority: "",
          years: 2,
          description: "Web3 wallet integration protocol",
          favorite: false,
        },
        { name: "RainbowKit", priority: "", years: 1, description: "React wallet connection library", favorite: false },
        { name: "tRPC", priority: "⚙️", years: 2, description: "End-to-end typesafe APIs", favorite: true },
      ],
    },
    {
      title: "Infrastructure",
      icon: Database,
      color: "blue",
      skills: [
        { name: "PostgreSQL", priority: "🔥", years: 4, description: "Reliable relational database", favorite: true },
        { name: "MongoDB", priority: "🚀", years: 3, description: "Flexible document database", favorite: true },
        { name: "Kafka", priority: "", years: 2, description: "Distributed streaming platform", favorite: false },
        { name: "Docker", priority: "⚙️", years: 3, description: "Containerization made simple", favorite: true },
        {
          name: "AWS (S3, Lambda)",
          priority: "🚀",
          years: 3,
          description: "Cloud infrastructure services",
          favorite: true,
        },
        { name: "Supabase", priority: "", years: 2, description: "Open source Firebase alternative", favorite: false },
      ],
    },
    {
      title: "Dev Practices",
      icon: Settings,
      color: "pink",
      skills: [
        { name: "Agile", priority: "", years: 4, description: "Iterative development methodology", favorite: false },
        {
          name: "UX/UI design",
          priority: "⚙️",
          years: 3,
          description: "User-centered design principles",
          favorite: true,
        },
        {
          name: "Microservices",
          priority: "🚀",
          years: 3,
          description: "Distributed system architecture",
          favorite: true,
        },
        { name: "tRPC", priority: "", years: 2, description: "Type-safe API development", favorite: false },
        { name: "GraphQL", priority: "", years: 2, description: "Query language for APIs", favorite: false },
      ],
    },
  ]

  const colorClasses = {
    cyan: "from-cyan-500 to-cyan-600 border-cyan-500/30 hover:border-cyan-400",
    green: "from-green-500 to-green-600 border-green-500/30 hover:border-green-400",
    purple: "from-purple-500 to-purple-600 border-purple-500/30 hover:border-purple-400",
    orange: "from-orange-500 to-orange-600 border-orange-500/30 hover:border-orange-400",
    blue: "from-blue-500 to-blue-600 border-blue-500/30 hover:border-blue-400",
    pink: "from-pink-500 to-pink-600 border-pink-500/30 hover:border-pink-400",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 relative">
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
            Habilidades
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
          Mi conjunto de herramientas completas para crear proyectos modernos y escalables.
          </motion.p>
        </motion.div>

        {/* Add matrix background animation */}
        <div className="absolute inset-0 overflow-hidden opacity-5"></div>

        {/* Enhanced grid with new animations and interactions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-card p-6 rounded-2xl border transition-all duration-500 hover:shadow-lg relative overflow-hidden group ${colorClasses[category.color as keyof typeof colorClasses]}`}
            >
              {/* Animated gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[category.color as keyof typeof colorClasses].split(" ")[1]} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              {/* Typing animation for title */}
              <div className="flex items-center mb-4 relative z-10">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[category.color as keyof typeof colorClasses].split(" ")[1]} mr-3`}
                >
                  <category.icon size={24} className="text-white" />
                </div>
                <motion.h3
                  className="text-xl font-semibold text-white font-mono"
                  initial={{ width: 0 }}
                  whileInView={{ width: "auto" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                >
                  {category.title}_
                </motion.h3>
              </div>

              <div className="space-y-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="relative group/skill"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={`flex items-center justify-between p-2 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-${category.color}-500/50 transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[category.color as keyof typeof colorClasses].split(" ")[1]}`}
                        ></div>
                        <span className="text-gray-300 text-sm flex items-center">
                          {skill.priority && <span className="mr-2 text-xs">{skill.priority}</span>}
                          {skill.name}
                          {skill.favorite && <span className="ml-1 text-yellow-400">⭐</span>}
                        </span>
                      </div>

                      {/* Experience counter */}
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs text-gray-500 font-mono"
                      >
                        {skill.years}y
                      </motion.span>
                    </motion.div>

                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-0 mb-2 p-2 bg-gray-900/95 backdrop-blur-sm border border-gray-600 rounded-lg text-xs text-gray-300 whitespace-nowrap z-20 shadow-lg"
                      >
                        {skill.description}
                        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsComponent
