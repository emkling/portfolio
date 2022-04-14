import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import{HiOutlineNewspaper} from 'react-icons/hi'
import {motion} from 'framer-motion'
import resume from '../assets/Elliott-Klingenberg-Resume.pdf'

const HeaderSocials = () => {
  return (
    <div className='hidden md:flex fixed flex-col items-center z-10 left-0 bottom-[7%]'>
      <ul>
      <motion.li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300'
        initial={{ y : '100vh' }}
        animate={{y: 0}}
        transition={{type: 'spring', duration:1.5, bounce: .3}}>
          <a href={resume} download="Elliott_Klingenberg_Resume" className='flex justify-between items-center w-full text-gray-300 hover:text-[#b33b3b]'>Resume<HiOutlineNewspaper color='#b33b3b' size={25}/></a>
        </motion.li>

        {/*<motion.li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] color duration-300'
        initial={{ y : '100vh' }}
        animate={{y: 0}}
        transition={{type: 'spring', duration:2, bounce: .3}}>
          <a href = "https://linkedin.com" target="_blank" className='flex justify-between items-center w-full text-gray-300 hover:text-[#b33b3b]'>Linkedin<BsLinkedin color='#b33b3b' size={25}/></a>
  </motion.li>*/}
        
        <motion.li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300'
        initial={{ y : '100vh' }}
        animate={{y: 0}}
        transition={{type: 'spring', duration:2.5, bounce: .3}}>
          <a href = "https://github.com/emkling" target="_blank" className='flex justify-between items-center w-full text-gray-300 hover:text-[#b33b3b]' >Github<FaGithub color='#b33b3b' size={25}/></a>
        </motion.li>

        <motion.li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300'
        initial={{ y : '100vh' }}
        animate={{y: 0}}
        transition={{type: 'spring', duration:3, bounce: .3}}>
          <a href = "#contact"  className='flex justify-between items-center w-full text-gray-300 hover:text-[#b33b3b]' >Email<MdOutlineEmail color = '#b33b3b' size={25}/></a>
        </motion.li>

        <motion.li className='w-[70px] h-[1.5px] bg-[#b33b3b] rounded-md rotate-90 mt-[50px] ml-[16px]'
        initial={{ y : '100vh' }}
        animate={{y: 0, rotate: 90}}
        transition={{type: 'spring', pause:2, duration:4, bounce: .1}} >
        </motion.li>
      </ul>
    </div>
  )
}

export default HeaderSocials