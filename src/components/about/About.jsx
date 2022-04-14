import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import Java from '../assets/java.png';
import Tailwind from '../assets/tailwind.png'

const About = () => {
  const {ref, inView} = useInView({threshold: 0.3});
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
    
    <div ref={ref} name='about' id='about' className='w-full relative z-10 sm:h-screen pt-32 sm:pt-0 bg-gradient-one bg-[#0f0e13] bg-gradient-four text-gray-300 sm:snap-start overflow-hidden'>
      <div id="wave2">
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
         <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
         </svg>
        </div>

        <div  className='flex flex-col relative justify-center  items-center w-full h-screen z-10' >
      <motion.div animate={animation} className='max-w-[1000px] w-full gap-8 pb-2 sm:pb-4'>
        <div className='sm:text-center sm:pb-14'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#b33b3b]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#b33b3b]'></div>
           About Me 
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#b33b3b]'></div>
          </h1>
          </div>
        </motion.div>

        <motion.div animate={animation} className='max-w-[800px] w-full grid sm:grid-cols gap-8 px-4 pb-4 sm:pb-14 '>
          <div >
            <p className='text-2xl'>Hello, I am a student searching for development opportunites, exploring a variety of tech stacks, and starting a Masters in Computer Science through the University of Illinois.</p>  
          </div >
          <div className='sm:text-left sm:pt-6 flex flex-col'>
            <p className='text-2xl font-bold text-[#b33b3b]'> Education: </p>
            <p>Masters in Computer Science (in progress) </p>
            <p>B.S. Computer Science</p> 
            <p>B.A. Cognitive Science and Political Science</p>
          </div>
          

          <div  className='  md:pt-10  sm:pb-0 text-text-gray-300 w-full'>
    <div className='max-w-[1000px] mx-auto  flex flex-col justify-center w-full'>
      <h1 className='text-2xl text-left font-bold relative rounded-md text-[#b33b3b]'>Skills: </h1>
      <p>I have experience with the following technologies:</p>
      <div  className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='  hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              
              <div className='  hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
               <div className='hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-6 md:w-12 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
          </div>
        </div>
        </div>
            
        </motion.div>
    </div>

    
  </div>
);
}

export default About