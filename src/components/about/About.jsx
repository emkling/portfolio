import React from 'react'
import Skills from '../skills/Skills';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';



const About = () => {
  const {ref, inView} = useInView({threshold: 0.5});
  const animation = useAnimation();
  
  useEffect(() => {
    if(inView){
      animation.start({
        opacity: 1,
        transition: {duration:2} 
      })
    }
    if(!inView){
      animation.start({
        opacity: 0
      })
    }
  }, [inView]);
  
  return (
    
    <motion.div ref={ref} name='about' id='about' className='w-full relative z-10 sm:h-screen pt-40  sm:pt-0 bg-[#0a192f]  text-gray-300 sm:snap-start overflow-hidden'>
       <div id="wave2">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
           </svg>
        </div>

    <motion.div animate={animation} className='flex flex-col relative justify-center items-center w-full h-screen z-10' >
      <div className='max-w-[1000px] w-full gap-8 pb-4'>
        <div className='sm:text-center sm:pb-14'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#D8A31A]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#D8A31A]'></div>
          About Me 
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#D8A31A]'></div>
          </h1>
        </div>
        </div>

        <div className='max-w-[800px] w-full grid sm:grid-cols gap-8 px-4 pb-12 sm:pb-14  shadow-sm'>
          <div>
            <p className='text-2xl'>Hello, I am a student searching for development opportunites, exploring a variety of tech stacks, and pursuing a part-time Masters in Computer Science through the University of Illinois.</p>  
          </div >
          <div className='sm:text-left sm:pt-6 flex flex-col'>
            <p className='text-2xl font-bold text-[#D8A31A]'> Education: </p>
            <p>Masters in Computer Science (in progress) </p>
            <p>B.S. Computer Science</p> 
            <p>B.A. Cognitive Science // Political Science</p>
          </div>
            <Skills />
        </div>
    </motion.div>

    <div id="wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
  </motion.div>
);
}

export default About