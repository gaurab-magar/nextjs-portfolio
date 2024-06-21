'use client'

import React from 'react'
import { FaHtml5, FaReact, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiJavascript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoCss3 } from "react-icons/io5"
import { FaNode } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";

import SkillMotion from '@/Components/SkillMotion'


const Skills = () => {
  return (
    <section id="skills" className="w-full py-6 md:py-10 ">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-bold tracking-[7px] md:tracking-[14px] text-lg uppercase">My Skills</h2>
            <p className="uppercase max-w-[900px] text-gray-500 text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Some of the technologies Im proficient in FrontEnd.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-5 gap-1 py-4 md:py-8  md:grid-cols-5 md:gap-12 lg:grid-cols-5">
          <SkillMotion icon={FaHtml5} label='HTML' text='text-red-700' />
          <SkillMotion icon={IoLogoCss3} label='CSS' text='text-blue-500' />
          <SkillMotion icon={SiJavascript} label='Javascript' text='text-yellow-400' />
          <SkillMotion icon={FaNode} label='Node.JS' text='text-green-700' />
          <SkillMotion icon={RiTailwindCssFill} label='Tailwind' text='text-red-500' />
          <SkillMotion icon={FaAngular} label='Angular' text='text-red-700' />
          <SkillMotion icon={FaReact} label='React' text='text-blue-700' />
          <SkillMotion icon={SiNextdotjs} label='Next.Js' text='text-black-500' />
          <SkillMotion icon={IoLogoFirebase} label='Firebase' text='text-yellow-500' />
          <SkillMotion icon={FaGitAlt} label='Git' text='text-red-800' />
        </div>
      </div>
    </section>
  )
}

export default Skills
