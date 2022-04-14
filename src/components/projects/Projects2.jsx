import React from 'react'
import inventory from '../assets/inventory-app.png'
import portfolio from '../assets/portfolio-picture.png'
import {FaGithub} from 'react-icons/fa'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import dashboard from '../assets/dashboard-app.png'
import {GoLinkExternal} from 'react-icons/go'


const Projects2 = () => {

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
    <div ref={ref} className='w-full sm:h-screen relative bg-[#0f0e13] text-gray-300 bg-gradient-one z-10'>
        
      <motion.div animate={animation} name='projects' id='projects' className='max-w-[1000px] mx-auto p-4 sm:snap-start' >
        <div className='sm:text-center pt-36 pb-6 sm:pb-10'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#FFFF]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#B33B3B] rounded-md'></div>
          Continued
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#B33B3B] rounded-md'></div>
          </h1>
        </div>
        </motion.div>

        <motion.section animate={animation} className='max-w-[1000px] sm:h-1/3 m-auto flex align-center rounded-md justify-center'>
          <div style={{backgroundImage: `url(${dashboard})`}} className='sm:w-1/2 h-full bg-cover rounded-md brightness-90' > </div>

          <div className='w-1/2 flex-col align-even justify-center ml-[-60px] flex z-10'>
             <div className='text-[#B33B3B] pb-4'>
               <div className='text-left sm:text-right text-[#B33B3B]'>Featured Project</div>
               <h1 className='text-xl text-left sm:text-right text-gray-300'>Crypto Dashboard</h1>
             </div>
             
             <div className='w-full  glass rounded-md  flex justify-center items-center p-4'>
               <p className='text-left sm:text-right'>Web application that displays cryptocurrency information from the following APIs: CoinRanking, Bing News, Fear Greed Index.  
               <br /> <br/>Built with JavaScript, React, HTML, Tailwind, and Redux Toolkit </p> 
             </div>
             <div className='flex flex-row justify-end gap-4'> 
             <a href='https://funny-beignet-43fc25.netlify.app/' className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#B33B3B]' > <GoLinkExternal color='#B33B3B' size={25} /> </a>
             <a href = "https://github.com/emkling/crypto-dashboard" target="_blank" className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
          </div>
        </motion.section>
        <motion.section animate={animation} className='max-w-[1000px] pt-6 pb-52 sm:pb-0 h-1/3 m-auto flex align-center rounded-md justify-center'>
           <div className='w-1/2 flex-col align-even justify-center mr-[-40px] flex z-10'>
             <div className='text-[#B33B3B] pb-4'>
               <div className='text-left  text-[#B33B3B]'>Featured Project</div>
               <h1 className='text-xl text-left text-gray-300'>Portfolio Site</h1>
             </div>
             
             <div className='w-full  glass rounded-md  flex justify-center items-center p-4'>
               <p className='text-left '>Built with JavaScript, HTML, CSS, React, and Tailwind. </p> 
             </div>
             <div className='flex flex-row justify-end gap-4'> 
             <a href='https://elliott-k.com' className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#B33B3B]' > <GoLinkExternal color='#B33B3B' size={25} /> </a>
             <a href = "https://github.com/emkling/portfolio" target="_blank" className='flex justify-end pr-16 pt-4 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
          </div>
          <div style={{backgroundImage: `url(${portfolio})`}} className='sm:w-1/2 h-full bg-cover rounded-md bg-[#FFFFFF] brightness-75' > </div>

        </motion.section>
    </div>
  )
}

export default Projects2