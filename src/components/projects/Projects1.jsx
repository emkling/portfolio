import React from 'react'
import dashboard from '../assets/dashboard-app.png'
import portfolio from '../assets/portfolio-picture.png'
import appointment from '../assets/appointment-app.png'
import {FaGithub} from 'react-icons/fa'
import delivery from '../assets/delivery-app.png'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import {GoLinkExternal} from 'react-icons/go'


const Projects1 = () => {

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
    <div ref={ref} className='w-full sm:h-screen relative text-gray-300 bg-[#0f0e13] bg-gradient-three z-10'>
        

      <motion.div animate={animation} name='projects' id='projects' className='max-w-[1000px] mx-auto p-4 sm:snap-start' >
        <div className='sm:text-center pt-36 pb-6 sm:pb-10'>
          <h1 className='text-4xl pl-4 sm:pl-0 font-bold relative rounded-md text-[#FFFFF]'>
          <div className='hidden w-2/6 md:inline-block left-0 absolute h-[1.5px] top-1/2 bg-[#B33B3B] rounded-md'></div>
          Projects
          <div className='hidden w-2/6 md:inline-block right-0 absolute h-[1.5px] top-1/2 bg-[#B33B3B] rounded-md'></div>
          </h1>
        </div>
        </motion.div>

        <motion.section animate={animation} className='max-w-[1000px] sm:h-1/3 m-auto flex align-center rounded-md justify-center'>
          <div style={{backgroundImage: `url(${dashboard})`}} className='sm:w-1/2 h-full bg-cover rounded-md brightness-75' > </div>

          <div className='w-1/2 flex-col align-even justify-center ml-[-60px] flex z-10'>
             <div className='text-[#B33B3B] pb-4'>
               <div className='text-left sm:text-right text-[#B33B3B]'>Featured Project</div>
               <h1 className='text-xl text-left sm:text-right text-gray-300'>News Aggregator</h1>
             </div>
             
             <div className='w-full  bg-[#102649] glass rounded-md  flex justify-center items-center p-4'>
               <p className='text-left sm:text-right'>Research tool that allows for concurrent searching and comparing of news articles from the following APIs: Google News, Bing News, NewsAPI, NewsCatcher, WebSearch.
               <br /><br/>Built with JavaScript, React, HTML, Tailwind, and Redux Toolkit</p> 
             </div>
             <div className='flex flex-row justify-end gap-4'> 
             <a href='https://funny-beignet-43fc25.netlify.app/' className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#B33B3B]' > <GoLinkExternal color='#B33B3B' size={25} /> </a>
             <a href = "https://github.com/emkling/news-aggregator" target="_blank" className='flex justify-end pr-2 pt-4 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
          </div>
        </motion.section>

        <motion.section animate={animation} className='max-w-[1000px] pt-6 pb-52 sm:pb-0 sm:h-1/3 m-auto flex align-center rounded-md justify-center'>
           <div className='w-1/2 flex-col align-even justify-center mr-[-40px] flex z-10'>
             <div className='text-[#B33B3B] pb-4'>
               <div className='text-left  text-[#B33B3B]'>Featured Project</div>
               <h1 className='text-xl text-left text-gray-300'>Appointment Desktop Application</h1>
             </div>
             
             <div className='w-full glass rounded-md  flex justify-center items-center p-4'>
             <p className='text-left'>Standalone JavaFX app that schedules appointments for a fictional company and directly manipulates customer/scheduling data stored within a remote relational database.  
               <br /> <br/> Features: GUI, SQL data access objects, appointment validations, data reports, reminders, time conversions, user error preventions, logging functions, login screen</p> 
               
             </div>
             <a href = "https://github.com/emkling/delivery-routing-program" target="_blank" className='flex justify-end pr-16 pt-4 text-gray-300 hover:text-[#B33B3B]' ><FaGithub color='#B33B3B' size={25}/></a>
          </div>
          <div style={{backgroundImage: `url(${appointment})`}} className='sm:w-1/2 h-full bg-cover rounded-md bg-[#FFFFFF] brightness-75' > </div>
        </motion.section>
    </div>
  )
}

export default Projects1