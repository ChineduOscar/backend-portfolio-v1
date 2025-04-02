'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TicTacGrid from './ticTacGrid';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative py-24 flex items-center overflow-hidden text-white'
    >
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white blur-3xl'></div>
      </div>

      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-12'>
          <div className='md:w-1/2 md:pr-10 md:text-left text-center space-y-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
            >
              <h4 className='text-[28px] font-medium mb-2'>Hello, I&apos;m</h4>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400'>
                Chinedu Nnadozie Oscar
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-2xl md:text-3xl font-semibold text-gray-100'
            >
              Backend Developer
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-gray-300 text-base md:text-lg'
            >
              Engineering secure, scalable, and reliable backends that keep
              digital experiences smooth and seamless.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='relative inline-block'
            >
              <a
                href='mailto:chinedunnadozieo@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <button className='relative cursor-pointer'>
                  <div className='absolute -inset-[2px] rounded-lg overflow-hidden'>
                    <div className='absolute inset-0 rounded-lg animate-border-flow'></div>
                  </div>
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
          <TicTacGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
