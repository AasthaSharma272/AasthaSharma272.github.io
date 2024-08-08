import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full bg-gradient-to-r from-[#EA9CDA] to-[#9B4688] p-[1px] rounded-[20px] shadow-lg transition-transform transform hover:scale-105'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-[#0d070c] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl'
        >
          <img src={icon} alt={title} className='w-20 h-20 object-contain' />
          <h3 className='text-[#FFFFFF] text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#c5c1c4] text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Computer Science student at the University of Toronto, specializing in full stack development. My passion lies in building innovative applications and utilizing data to drive insights. I am committed to continuous learning and aspire to contribute to impactful projects that make a difference.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
