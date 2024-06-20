'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SkillMotion = ({ icon: Icon, label, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }} 
    >
      <div className="flex flex-col items-center justify-center space-y-2 text-xs">
        <Icon className={`h-8 w-8 md:h-10 md:w-10 ${text}`} />
        <p className="text-gray-500 dark:text-gray-400">{label}</p>
      </div>
    </motion.div>
  )
}

export default SkillMotion
