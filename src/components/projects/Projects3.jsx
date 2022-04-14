import React from 'react'
import portfolio from '../assets/portfolio-picture.png'
import {FaGithub} from 'react-icons/fa'
import inventory from '../assets/inventory-app.png'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import delivery from '../assets/delivery-app.png'


const Projects3 = () => {

  const {ref, inView} = useInView({threshold: 0.2});
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
    <div ref={ref} className='w-full sm:h-screen relative bg-[#0f0e13] snap-start text-gray-300  bg-gradient-three z-10'>

      <div className = 'max-w-[1000px] mx-auto ' >
        <div className='sm:text-center pt-36 pb-6 sm:pb-10'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#FFFF]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#B33B3B] rounded-md'></div>
          Extras
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#B33B3B] rounded-md'></div>
          </h1>
        </div>
        </div>

        <motion.section animate={animation} className='max-w-[1000px] h-1/5 m-auto flex align-center rounded-md justify-center'>
          <div className='sm:w-1/2 h-full rounded-md ' > </div>

          <div className='w-1/2 flex-col align-even justify-center ml-[-60px] flex z-10'>
             <div className='text-[#B33B3B] pb-2'>
               <div className='hidden sm:block sm:text-right text-[#B33B3B]'>Extra Project</div>
               <h1 className='text-xl text-left sm:text-right text-gray-300'>Heart Disease Tool</h1>
             </div>
             
             <div className='w-full  glass rounded-md  flex justify-center items-center p-4'>
             <p className='text-left '>Predicts the presence of heart disease through a linear regression machine learning model. Training data consists of 13 attributes taken from medical studies.</p> 
             </div>
             <a href = "https://github.com/emkling/heart-disease-tool" target="_blank" className='flex justify-end pr-2 pt-4 pb-8 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
        </motion.section>

        <motion.section animate={animation} className='max-w-[1000px]  sm:pb-0 sm:h-1/5 m-auto flex align-center rounded-md justify-center'>
           <div className='w-1/2 flex-col align-even justify-center mr-[-40px] flex z-10'>
             <div className='text-[#B33B3B] pb-2'>
               <div className='hidden sm:block text-[#B33B3B]'>Extra Project</div>
               <h1 className='text-xl text-left text-gray-300'>Delivery Routing Program</h1>
             </div>
             
             <div className='w-full  bg-[#102649] glass rounded-md  flex justify-center items-center p-4'>
             <p className='text-left'>Python program that solves a variation of the "Traveling Salesman Problem" through the implementation of a greedy algorithm.</p> 
               
             </div>
             <a href = "https://github.com/emkling/delivery-routing-program" target="_blank" className='flex justify-end pr-16 pt-4 pb-8 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
          <div className='sm:w-1/2 h-full rounded-md ' > </div>
        </motion.section>

        <motion.section animate={animation} className='max-w-[1000px] h-1/5 m-auto flex align-center rounded-md justify-center'>
          <div className='sm:w-1/2 h-full rounded-md ' > </div>

          <div className='w-1/2 flex-col align-even justify-center ml-[-60px] flex z-10 mb-24 sm:mb-0'>
             <div className='text-[#B33B3B] pb-2'>
               <div className='hidden sm:block sm:text-right text-[#B33B3B]'>Extra Project</div>
               <h1 className='text-xl text-left sm:text-right text-gray-300'>Inventory Application</h1>
             </div>
             
             <div className='w-full  glass rounded-md  flex justify-center items-center p-4'>
             <p className='text-left '>JavaFX application that simulates the functions and interface of an inventory management system   </p> 
             </div>
             <a href = "https://github.com/emkling/inventory-management-application" target="_blank" className='flex justify-end pr-2 pb-8 pt-4 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
        </motion.section>


        

        <div id="wave" className=''>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
    </div>
  )
}

export default Projects3