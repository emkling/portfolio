import React from 'react'
import './projects.css'
import portfolio from '../assets/portfolio-picture.png'
import {FaGithub} from 'react-icons/fa'
import inventory from '../assets/inventory-app.png'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';


const Projects = () => {

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
    <div ref={ref}  className='w-full sm:h-screen relative text-gray-300 bg-[#0a192f] z-10'>
      <div className = 'max-w-[1000px] mx-auto p-4 snap-start' >
        <div className='sm:text-center pt-36 pb-6 sm:pb-10'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#D8A31A]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#D8A31A] rounded-md'></div>
          Continued
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#D8A31A] rounded-md'></div>
          </h1>
        </div>
        </div>

        <motion.section animate={animation} className='max-w-[1000px] h-1/3 m-auto flex align-center rounded-md justify-center'>
          <div style={{backgroundImage: `url(${inventory})`}} className='sm:w-1/2 h-full bg-cover rounded-md brightness-90' > </div>

          <div className='w-1/2 flex-col align-even justify-center ml-[-60px] flex z-10'>
             <div className='text-[#D8A31A] pb-4'>
               <div className='text-left sm:text-right text-[#D8A31A]'>Featured Project</div>
               <h1 className='text-xl text-left sm:text-right text-gray-300'>Inventory Program</h1>
             </div>
             
             <div className='w-full  bg-[#102649] rounded-md  flex justify-center items-center p-4'>
             <p className='text-left '>JavaFX application that simulates the functions and interface of an inventory management system  
               <br /> <br/> Features: data manipulation, search functions, auto-ID generators, warning prompts, and deletion parameters </p> 
             </div>
             <a href = "https://github.com/emkling/inventory-management-application" target="_blank" className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#D8A31A]' ><FaGithub color='#D8A31A' size={25}/></a>
          </div>
        </motion.section>

        <motion.section animate={animation} className='max-w-[1000px] pt-6 pb-52 sm:pb-0 h-1/3 m-auto flex align-center rounded-md justify-center'>
           <div className='w-1/2 flex-col align-even justify-center mr-[-40px] flex z-10'>
             <div className='text-[#D8A31A] pb-4'>
               <div className='text-left  text-[#D8A31A]'>Featured Project</div>
               <h1 className='text-xl text-left text-gray-300'>Portfolio Site</h1>
             </div>
             
             <div className='w-full  bg-[#102649] rounded-md  flex justify-center items-center py-4'>
               <p className='text-left '>Built with JavaScript, HTML, CSS, React, and Tailwind </p> 
             </div>
             <a href = "https://github.com" target="_blank" className='flex justify-end pr-16 pt-4 text-gray-300 hover:text-[#D8A31A]' ><FaGithub color='#D8A31A' size={25}/></a>
          </div>
          <div style={{backgroundImage: `url(${portfolio})`}} className='sm:w-1/2 h-full bg-cover rounded-md bg-[#FFFFFF] brightness-75' > </div>

          
        </motion.section>

        <div id="wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
    </div>
  )
}

export default Projects