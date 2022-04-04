import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import Greeting from './Greeting';
import resume from '../assets/testResume.pdf'

const Home = () => {

const {ref, inView} = useInView({threshold: 0.2});
const animation = useAnimation();

useEffect(() => {
  if(inView){
    animation.start({
      opacity:1,
      y:0,
      scale: 1,
      transition: {
        duration: 2.5
      }
    })
  }
  if(!inView){
    animation.start({y: '-10', opacity: 0 })
  }
}, [inView]);


  return (
    <div ref={ref}  className=' w-full relative h-screen '>
      
      <div name='home' id='home' className='max-w-[1000px] relative z-10 mx-auto px-12 pb-60 flex flex-col justify-center h-screen snap-start'>
        <Greeting />

        <motion.h1 className='text-4xl sm:text-7xl font-bold text-[#E3F0FF] Z-10'
        initial={{ scale: .8, opacity : 0 }}
        animate={animation}>
        Elliott Klingenberg</motion.h1>

        <motion.p className='text-3xl sm:text-7xl font-bold pb-4 text-[#8892b0]' 
        initial={{ x : '100vw' }}
        animate={{x: 0}}
        transition={{type: 'easeout', duration:2.5, bounce: .2}}
        >I'm a CS grad student</motion.p>
        <div>
          <div className='flex flex-row flex-start gap-12'>

            <motion.a initial={{ opacity:0 }}
            animate={animation} href={resume} download="Elliott_K_Resume" className="text-white border-2 px-3 md:px-5 py-3 group my-2 flex items-center hover:border-[#D8A31A] rounded-lg hover:bg-[#D8A31A]">Resume <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
            </span> </motion.a>
            
            <motion.a initial={{ opacity:0 }}
            animate={animation} href='#projects' className="bg-[#D8A31A] text-white border-2 px-2 md:px-4 py-3 my-2 flex items-center group border-[#D8A31A] rounded-lg hover:bg-[#0a192f]">View Work  <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
            </span> </motion.a>
        </div>
      </div>
      
    </div>
      <motion.div id='wave'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
        </motion.div>
    </div>
     

  )
}

export default Home