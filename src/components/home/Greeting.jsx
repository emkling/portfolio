import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';

const Greeting = () => {

const {ref, inView} = useInView({threshold: 0.2});
const animation = useAnimation();

    useEffect(() => {
        if(inView){
          animation.start({
            x:0,
            opacity: 1,
            transition: {
              type: 'easeOut', duration:2, bounce: .2
            }
          })
        }
        if(!inView){
          animation.start({x: '-100vw', opacity:0 })
        }
      }, [inView]);
      
  return (
      <div ref={ref}>
    <motion.p  initial={{x:'-100vw'}} animate={animation} className='text-[#c85d5d] text-2xl ml-1 pb-2' >
        Hello, my name is</motion.p>
        </div>
  )
}

export default Greeting