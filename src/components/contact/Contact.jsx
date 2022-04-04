import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';

const Contact = () => {

  const {ref, inView} = useInView({threshold: 0.5});
  const animation = useAnimation();
  
  useEffect(() => {
    if(inView){
      animation.start({
        opacity: 1,
        transition: {duration:1} 
      })
    }
    if(!inView){
      animation.start({
        opacity: 0
      })
    }
  }, [inView]);

  return (
      <div ref={ref} mame='contact' id='contact' className='w-full h-screen flex justify-center relative items-center p-4 snap-start bg-[#0a192f] sm:bg-inherit'>
        <div id="wave2" className='z-10'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>

        
        <motion.form animate={animation}  initial={{opacity:0}} method='POST' action="https://getform.io/f/2888b511-058f-4531-a538-670f3123b09c" className='relative z-10 flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-center rounded-md text-[#D8A31A]'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 b rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#D8A31A] hover:border-[#D8A31A] px-4 py-3 my-8 mx-auto rounded-lg flex items-center'>Let's Collaborate</button>
        </motion.form>
    </div>
  )
}

export default Contact