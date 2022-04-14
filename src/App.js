import React from 'react'
import {About, Contact, Home, Navbar, Projects1, Projects2, Projects3} from './components'
import ParticleBackground from './components/background/ParticleBackground'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion'


const App = () => {

  const {ref, inView} = useInView({threshold: 0.2});
  const animation = useAnimation();

  useEffect(() => {
  if(inView){
    animation.start({
      opacity:1,
      y:0,
      transition: {
        duration: 1
      }
    })
  }
  if(!inView){
    animation.start({opacity: .3 })
  }
  }, [inView]);

  return (
    <div ref={ref} className='sm:snap-mandatory sm:snap-y sm:overflow-y-scroll scrollbar-width-none h-screen bg-[#0f0e13] bg-gradient-two'>
      <Navbar />
      <motion.div initial={{opacity:0}} className='-z-10' animate={animation}><ParticleBackground/></motion.div>
      <Home />
      <About />
      <Projects1 />
      <Projects2 />
      <Projects3 />
      <Contact />
    </div>
  )
}

export default App