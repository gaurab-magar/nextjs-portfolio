import HeroFramerMotion from '@/Components/HeroFramerMotion';
import TypeWritter from '@/Components/TypeWritter';
import React from 'react';

const HeroSection = () => {
 
  return (
    <section
      className="relative w-full md:h-[80vh] h-[60vh] bg-cover bg-fixed bg-center bg-no-repeat z-10"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className="relative flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center text-center text-gray-200 p-3">
          <HeroFramerMotion />
          <TypeWritter />
        </div>
      </div>
    </section>
)
}

export default HeroSection