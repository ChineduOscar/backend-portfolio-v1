'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skills, services } from '../data';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id='about' className='py-24 text-white'>
      <div className='container max-w-7xl mx-auto lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>
            About <span className='text-blue-400'>Me</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center px-6'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='space-y-6'
          >
            <motion.h3
              variants={fadeInUp}
              className='text-2xl font-semibold text-blue-400 mb-4'
            >
              Backend Developer
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className='text-gray-300 text-base md:text-xl leading-relaxed'
            >
              Building the backbone of digital experiences is more than just
              writing code. It&apos;s about creating reliable, scalable, and
              secure systems that bring ideas to life. I specialize in backend
              development with technologies like NestJS, Express, PostgreSQL,
              and Prisma, ensuring everything runs smoothly behind the scenes.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className='text-gray-300 text-base md:text-xl leading-relaxed'
            >
              I see ideas as something worth bringing to life, and nothing
              excites me more than turning imagination into reality. Whether
              it&apos;s designing databases, optimizing APIs, or making systems
              more reliable, I focus on building backends that work seamlessly
              so users can enjoy great experiences without thinking about what
              powers them.
            </motion.p>

            <motion.div variants={fadeInUp} className='pt-4'>
              <a
                href='https://drive.google.com/file/d/1DI1oYTdVKp6lyefe6K981IKRhqrvZ_wH/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105'
              >
                My Resume
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='p-6 rounde'
          >
            <div className='space-y-6'>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className=' p-5 rounded-lg hover:bg-[#282f5a] transition-colors duration-300'
                >
                  <div className='flex items-center mb-3'>
                    <div className='p-3 bg-[#121629] rounded-lg mr-4'>
                      {service.icon}
                    </div>
                    <h4 className='text-xl font-medium'>{service.title}</h4>
                  </div>
                  <p className='text-gray-300 pl-14'>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className='p-8 rounded-xl'
        >
          <h3 className='text-2xl font-semibold mb-8 text-center text-blue-400'>
            Technical Skills
          </h3>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={staggerContainer}
            className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6'
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className='p-5 rounded-lg flex flex-col items-center text-center bg-[#1e2338]/80 backdrop-blur-sm hover:bg-[#282f5a] transition-all duration-300 hover:shadow-lg hover:border-blue-500/30'
              >
                <div className='mb-3'>{skill.icon}</div>
                <h4 className='text-sm md:text-base font-medium'>
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
