'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TicTacGrid from './ticTacGrid';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative py-20 flex items-center overflow-hidden text-white'
    >
      {/* Background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white blur-3xl'></div>
      </div>

      {/* Grid pattern overlay */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
          {/* Text content - aligned to the left/side */}
          <div className='md:w-1/2 md:pr-8 md:text-left text-center'>
            {/* Welcome text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-4 text-gray-300 tracking-wider uppercase text-sm md:text-base'
            >
              Welcome to My Online Home!
            </motion.div>

            {/* Main heading with name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'
            >
              I'm a{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'>
                Frontend Developer
              </span>
            </motion.h1>

            {/* Static text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-xl md:text-2xl mb-6 text-gray-300'
            >
              Building the Web of Tomorrow, Today.
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-gray-400 mb-10 text-base md:text-lg'
            >
              Crafting seamless, intuitive, and modern digital experiences that
              bridge creativity and innovation.
            </motion.p>

            {/* Animated button with only border animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='relative inline-block'
            >
              <a href='mailto:chinedunnadozieo@gmail.com' target='_blank'>
                <button className='relative cursor-pointer'>
                  {/* Animated border container */}
                  <div className='absolute -inset-[2px] rounded-lg overflow-hidden'>
                    <div className='absolute inset-0 rounded-lg animate-border-flow'></div>
                  </div>

                  {/* Button content */}
                  <span className='relative block rounded-md bg-[#15182e] px-8 py-4 text-white text-lg font-medium z-10'>
                    Hire Me
                    <svg
                      className='ml-2 w-5 h-5 inline'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      ></path>
                    </svg>
                  </span>
                </button>
              </a>
            </motion.div>
          </div>

          {/* Tic-tac-toe grid with moving line */}
          <TicTacGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
