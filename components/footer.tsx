"use client"

import { motion } from "framer-motion"
import { Music, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Now Playing Widget */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 glass-card px-4 py-2 rounded-full"
          >
            <Music size={16} className="text-green-400" />
            <span className="text-sm text-gray-400">Now Playing:</span>
            <span className="text-sm text-gray-300">Synthwave Vibes</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Copyright */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-400 mx-1" /> by Facu Aguirre
            </p>
            <p className="text-gray-500 text-xs mt-1">© 2025 All rights reserved</p>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Available for work</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
