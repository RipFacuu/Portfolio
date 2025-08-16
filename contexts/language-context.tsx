"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    home: "Inicio",
    about: "Acerca",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",

    // Hero Section
    heroTitle: "Desarrollador Full Stack | Marketing Digital | Diseño gráfico",
    heroSubtitle: "Construyendo en la intersección de Web3, IA e Infraestructura",
    heroButton: "Ver mis proyectos",

    // About Section
    aboutTitle: "Sobre Mí",
    helloWorld: "¡Hola, Mundo!",
    aboutDescription1:
  "Soy un programador Full Stack y creativo digital de Argentina. Me gusta combinar desarrollo web, marketing digital y diseño gráfico para dar vida a proyectos completos.",
aboutDescription2:
  "He trabajado en sistemas de gestión con React, Node y MongoDB, campañas de marketing con miles de visualizaciones, creación de logos y piezas gráficas en Adobe, renders 3D con Blender y edición de video en After Effects.",
    availableForWork: "Disponible para trabajar",
    funFacts: "Datos Curiosos",
    eucRider: "Conductor de EUC",
    nomadLife: "Soy autodidacta",
    cuttingEdgeTech: "Siempre explorando tecnologías actuales",
    coffeeAndCuriosity: "Impulsado por café y curiosidad",
    languages: "Idiomas",
    spanish: "Español",
    english: "Inglés",
    portuguese: "Portugués",
    german: "Alemán",
    native: "Nativo",
    currentLocation: "Ubicación Actual",
    localTime: "hora local",
    openToOpportunities: "Abierto a oportunidades:",
    remote: "Remoto",
    hybrid: "Híbrido",
    relocation: "Presencial",

    // Language selector
    language: "Idioma",
    spanishArg: "Español (Argentina)",
    englishLang: "English",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",

    // Hero Section
    heroTitle: "Full Stack Developer | Digital Marketing | Graphic design",
    heroSubtitle: "Building at the intersection of Web3, AI and Infrastructure",
    heroButton: "See my projects",

    // About Section
    aboutTitle: "About Me",
    helloWorld: "Hello, World!",
    aboutDescription1:
      "I am a Full Stack programmer and digital creative from Argentina. I like to combine web development, digital marketing and graphic design to bring entire projects to life.",
    aboutDescription2:
      "I have worked on management systems with React, Node and MongoDB, marketing campaigns with thousands of views, creation of logos and graphic pieces in Adobe, 3D renders with Blender and video editing in After Effects.",
    availableForWork: "Available for work",
    funFacts: "Fun Facts",
    eucRider: "EUC rider",
    nomadLife: "I'm self-taught",
    cuttingEdgeTech: "Always exploring current technologies",
    coffeeAndCuriosity: "Powered by coffee and curiosity",
    languages: "Languages",
    spanish: "Spanish",
    english: "English",
    portuguese: "Portuguese",
    german: "German",
    native: "Native",
    currentLocation: "Current Location",
    localTime: "local time",
    openToOpportunities: "Open to opportunities:",
    remote: "Remote",
    hybrid: "Hybrid",
    relocation: "in person",

    // Language selector
    language: "Language",
    spanishArg: "Español (Argentina)",
    englishLang: "English",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
