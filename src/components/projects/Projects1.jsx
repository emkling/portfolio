import React from 'react'
import dashboard from '../assets/dashboard-app.png'
import appointment from '../assets/blockchain-app.png'
import portfolio from '../assets/portfolio-picture.png'
import {FaGithub} from 'react-icons/fa'
import delivery from '../assets/delivery-app.png'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import {GoLinkExternal} from 'react-icons/go'


const Projects1 = () => {

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
    <div ref={ref} className='w-full sm:h-screen relative text-gray-300 bg-[#0a192f] z-10'>
        <div id="wave2">
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
         <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
         </svg>
        </div>

      <motion.div animate={animation} name='projects' id='projects' className='max-w-[1000px] mx-auto p-4 sm:snap-start' >
        <div className='sm:text-center pt-36 pb-6 sm:pb-10'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#D8A31A]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#D8A31A] rounded-md'></div>
          Projects
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#D8A31A] rounded-md'></div>
          </h1>
        </div>
        </motion.div>

        <motion.section animate={animation} className='max-w-[1000px] sm:h-1/3 m-auto flex align-center rounded-md justify-center'>
          <div style={{backgroundImage: `url(${dashboard})`}} className='sm:w-1/2 h-full bg-cover rounded-md brightness-90' > </div>

          <div className='w-1/2 flex-col align-even justify-center ml-[-60px] flex z-10'>
             <div className='text-[#D8A31A] pb-4'>
               <div className='text-left sm:text-right text-[#D8A31A]'>Featured Project</div>
               <h1 className='text-xl text-left sm:text-right text-gray-300'>Crypto Dashboard</h1>
             </div>
             
             <div className='w-full  bg-[#102649] rounded-md  flex justify-center items-center p-4'>
               <p className='text-left sm:text-right'>Web application that displays crypto news, coins, and stats from APIs.  
               <br /> <br/> Built with JavaScript, React, HTML, CSS, Redux Toolkit, and Tailwind</p> 
             </div>
             <div className='flex flex-row justify-end gap-4'> 
             <a href='https://funny-beignet-43fc25.netlify.app/' className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#D8A31A]' > <GoLinkExternal color='#D8A31A' size={25} /> </a>
             <a href = "https://github.com/emkling/crypto-dashboard" target="_blank" className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#D8A31A]' ><FaGithub color='#D8A31A' size={25}/></a>
          </div>
          </div>
        </motion.section>

        <motion.section animate={animation} className='max-w-[1000px] pt-6 pb-52 sm:pb-0 sm:h-1/3 m-auto flex align-center rounded-md justify-center'>
           <div className='w-1/2 flex-col align-even justify-center mr-[-40px] flex z-10'>
             <div className='text-[#D8A31A] pb-4'>
               <div className='text-left  text-[#D8A31A]'>Featured Project</div>
               <h1 className='text-xl text-left text-gray-300'>Delivery Routing Program</h1>
             </div>
             
             <div className='w-full  bg-[#102649] rounded-md  flex justify-center items-center p-4'>
             <p className='text-left'>Python program that solves a variation of the "Traveling Salesman Problem." Finds an acceptable route for a package delivery service through the implementation of a greedy algorithm.
               <br /> <br/> Time is simulated to track the status of packages and a user interface provides various reports pertaining to the deliveries.</p> 
               
             </div>
             <a href = "https://github.com/emkling/delivery-routing-program" target="_blank" className='flex justify-end pr-16 pt-4 text-gray-300 hover:text-[#D8A31A]' ><FaGithub color='#D8A31A' size={25}/></a>
          </div>
          <div style={{backgroundImage: `url(${delivery})`}} className='sm:w-1/2 h-full bg-cover rounded-md bg-[#FFFFFF] brightness-75' > </div>
        </motion.section>
    </div>
  )
}

export default Projects1