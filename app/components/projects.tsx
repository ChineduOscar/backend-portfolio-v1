'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projects } from '@/app/data';

const Projects = () => {
  return (
    <section id='projects' className='py-8 md:py-18 text-white'>
      <div className='container max-w-6xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>
            My <span className='text-blue-400'>Projects</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6'></div>
          <p className='text-gray-300 max-w-2xl mx-auto text-lg'>
            Here are some of my recent projects. Each one was built to solve a
            specific problem and demonstrates different aspects of my skills and
            expertise.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-10'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='bg-[#1a1f40] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full'
            >
              <div className='relative h-64 w-full overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 hover:scale-110'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>
                <p className='text-gray-300 mb-6 flex-grow'>
                  {project.description}
                </p>
                <div className='mb-6'>
                  <h4 className='text-sm text-gray-400 mb-2'>
                    Technologies Used:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-[#282f5a] text-sm rounded-full text-gray-200 hover:bg-[#3a4172] transition-colors duration-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex space-x-4'>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center px-4 py-2 bg-[#282f5a] hover:bg-[#323a6b] rounded-lg transition-colors duration-300'
                  >
                    <FaGithub className='mr-2' /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-colors duration-300'
                  >
                    <FaExternalLinkAlt className='mr-2' /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <a
            href='https://github.com/ChineduOscar'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group'
          >
            See More Projects
            <FaArrowRight className='ml-2 group-hover:translate-x-1 transition-transform duration-300' />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
