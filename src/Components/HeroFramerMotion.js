'use client'
import React from 'react';
import { motion } from 'framer-motion';
import DownloadCV from './DownloadCV';


const HeroFramerMotion = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center text-gray-200 p-3'>
        <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1,delay: 0.5 }}    
        >
            <h1 className="text-2xl md:text-4xl font-bold mb-4 font-mono  ">Hi I am Gaurab Magar</h1>
        </motion.div>
        <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        >
            <p className="text-xl md:text-2xl font-extralight md:w-8/12 mx-auto"> I m a passionate frontend developer with a keen eye for design.specialized in creating beautiful, responsive, and user-friendly web applications.</p>
        </motion.div>
        <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        className='pt-3 md:hidden'
        >
            <DownloadCV />
        </motion.div>
    </div>
  )
}

export default HeroFramerMotion