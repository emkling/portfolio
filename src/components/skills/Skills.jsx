import React from 'react'
import './skills.css'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import Java from '../assets/java.png';
import Tailwind from '../assets/tailwind.png'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';


const Skills = () => {

    const {ref, inView} = useInView({threshold: 0.5});
    const animation = useAnimation();
    
    useEffect(() => {
      if(inView){
        animation.start({
          y:0,
          opacity: 1,
          transition: { type: 'easeOut', duration:2} 
        })
      }
      if(!inView){
        animation.start({
          opacity: 0,
          y: -40
        })
      }
    }, [inView]);
    
  return (
  <div ref={ref} className=' pt-6 md:pt-12  sm:pb-0 text-text-gray-300 w-full'>
    <motion.div animate={animation} className='max-w-[1000px] mx-auto  flex flex-col justify-center w-full'>

    <h1 className='text-2xl text-left font-bold relative rounded-md text-[#D8A31A]'>Skills: </h1>
    <p>I have experience with the following technologies:</p>
    <div  className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
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
        </motion.div>
  </div>);
}
  

export default Skills