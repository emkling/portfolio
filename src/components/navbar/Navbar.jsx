import React, {useState} from 'react'
import Logo from '../assets/EK.png'
import {FaBars, FaTimes} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Socials from '../socials/Socials'
import {Link} from 'react-scroll'
import {homeLink} from '../home/Home'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-3 bg-[#0a192f] text-gray-300 z-20'>
      <motion.div
      initial={{ opacity : 0 }}
      animate={{opacity: 1}}
      transition={{ duration:7}}>
        <img src={Logo} alt='Logo' style={{width: '120px'}} />
      </motion.div>

        <ul className='hidden lg:flex gap-12'>
          <motion.li className=' hover:text-[#D8A31A]'
          initial={{ opacity : 0 }}
          animate={{opacity: 1}}
          transition={{ duration:2}}>
            <a href='#home'>Home </a>
            </motion.li>

          <motion.li className=' hover:text-[#D8A31A]'
          initial={{ opacity : 0 }}
          animate={{opacity: 1}}
          transition={{ duration:3}}>
            <a href='#about'>About </a>
          </motion.li>

          <motion.li className=' hover:text-[#D8A31A]'
          initial={{ opacity : 0 }}
          animate={{opacity: 1}}
          transition={{ duration:4}}>
            
            <a href='#projects'>Work </a></motion.li>

          <motion.li className=' hover:text-[#D8A31A]'
          initial={{ opacity : 0 }}
          animate={{opacity: 1}}
          transition={{ duration:5}}>
            <a href='#contact'>Contact </a>
          </motion.li>
          
        </ul>

      <div onClick={handleClick} className= 'lg:hidden z-10 pr-40'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>
        <motion.ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='hover:text-[#D8A31A] py-8 text-4xl'> 
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li className='hover:text-[#D8A31A] py-8 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='hover:text-[#D8A31A] py-8 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
          </li>
          <li className='hover:text-[#D8A31A] py-8 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </motion.ul>
        <Socials />
    </div>

  )
}

export default Navbar