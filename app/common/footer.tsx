'use client';
import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#0e1221] text-white py-10'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-xl font-semibold mb-4'>Contact</h3>
            <div className='flex items-center mb-3'>
              <FaPhone className='mr-2 text-blue-400' />
              <span>+234 812 255 1232</span>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='mr-2 text-blue-400' />
              <span>chinedunnadozieo@gmail.com</span>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold mb-2'>Chinedu Oscar</h2>
            <p className='text-gray-400 text-sm text-center'>
              Backend Developer specializing in building scalable, secure, and
              high-performance systems.
            </p>
          </div>

          <div className='flex flex-col items-center md:items-end'>
            <h3 className='text-xl font-semibold mb-4'>Connect</h3>
            <div className='flex space-x-4'>
              <a
                href='https://linkedin.com/in/nnadozie-chinedu-62448a19b'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-blue-400 transition-colors duration-300'
                aria-label='LinkedIn'
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href='https://github.com/chineduoscar'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-blue-400 transition-colors duration-300'
                aria-label='GitHub'
              >
                <FaGithub size={22} />
              </a>
              <a
                href='https://x.com/chinedudozie1/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-blue-400 transition-colors duration-300'
                aria-label='Twitter'
              >
                <RiTwitterXFill size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 my-6'></div>
        <div className='text-center text-gray-400 text-sm'>
          <p>© {currentYear} Chinedu Oscar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
