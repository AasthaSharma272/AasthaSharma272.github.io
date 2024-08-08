import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import resume from '../assets/Resume_Aastha_Sharma_S2025.pdf';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_kh5o48b', 
      'template_rksd6lv', 
      {
        from_name: form.name,
        to_name: 'Aastha',
        from_email: form.email,
        to_email: 'sharmaaastha272@gmail.com',
        message: form.message
      },
      'Ve7zvVsGSZIbwNKDY'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.')
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden bg-[rgba(51,51,51,0)]'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl bg-[rgba(51,51,51,0)]'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Links Section */}
        <div className='mt-8 flex flex-col gap-4'>
          <p className={styles.sectionSubText}>Connect with me:</p>
          <div className='flex gap-6'>
            <a href={resume} target='_blank' rel='noopener noreferrer' className='flex items-center bg-[rgba(51,51,51,0.4)] py-2 px-4 rounded-lg text-[#c5c1c4] hover:bg-[rgba(51,51,51,0.6)] transition duration-300'>
              <FontAwesomeIcon icon={faFileAlt} className='mr-2' />
              Resume
            </a>
            <a href='https://www.linkedin.com/in/aasthasharma272/' target='_blank' rel='noopener noreferrer' className='flex items-center bg-[rgba(51,51,51,0.4)] py-2 px-4 rounded-lg text-[#c5c1c4] hover:bg-[rgba(51,51,51,0.6)] transition duration-300'>
              <FontAwesomeIcon icon={faLinkedin} className='mr-2' />
              LinkedIn
            </a>
            <a href='https://github.com/AasthaSharma272' target='_blank' rel='noopener noreferrer' className='flex items-center bg-[rgba(51,51,51,0.4)] py-2 px-4 rounded-lg text-[#c5c1c4] hover:bg-[rgba(51,51,51,0.6)] transition duration-300'>
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              GitHub
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
        <p className={styles.sectionSubText}>Send a Message:</p>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Enter your Name' className='bg-[rgba(51,51,51,0.4)] py-4 px-6 placeholder:text-[#c5c1c4] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Enter your Email' className='bg-[rgba(51,51,51,0.4)] py-4 px-6 placeholder:text-[#c5c1c4] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder='Enter your Message' className='bg-[rgba(51,51,51,0.4)] py-4 px-6 placeholder:text-[#c5c1c4] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <button type='submit' className='bg-[rgba(51,51,51,0.4)] py-3 px-8 outline-none w-fit text-[#c5c1c4] font-bold shadow-md shadow-lg rounded-xl hover:bg-[rgba(51,51,51,0.6)] transition duration-300'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")