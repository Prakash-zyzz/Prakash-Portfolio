import React from 'react'
import {TypeAnimation} from "react-type-animation";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter ,
  FaLinkedinIn,
  
  
} from "react-icons/fa"

import { BsGithub } from "react-icons/bs"
import Back from "../assets/back.jpg"
import HeroVideo from "../assets/heroVideo2.mp4"


const Main = () => {
  return (
    <div id='main'>
       <video className='object-cover h-screen w-full  -z-10' src={HeroVideo} autoPlay loop muted />
    {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt='/' /> */}
    <div className='w-full h-screen absolute top-0 left-0 bg-white/10 '>
    <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
      <h1 className='sm:text-5xl text-4xl font-bold shadow-sm text-white'>I'm Prakash G</h1>
      <h2 className='sm:text-3xl text-2xl pt-4 shadow-sm text-white'>I'm a  <TypeAnimation
      sequence={[
        'Developer.', // Types 'One'
        2000, // Waits 1s
        'Coder.', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Tech Enthusiast.', // Types 'Three' without deleting 'Two'
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft:"5px" }}
    /></h2>
      <div className='flex max-w-[200px] justify-between pt-4 w-full '>
        <FaFacebookF className='hover:text-white cursor-pointer' size={20} />
        <FaInstagram className='hover:text-white cursor-pointer'size={20} />
        <a href='https://github.com/Prakash-zyzz' target='blank'>
        <BsGithub  className=' hover:text-white cursor-pointer' size={20} />
        </a>
        <a href='https://www.linkedin.com/in/prakash-g-499524282/' target='blank'>
        <FaLinkedinIn className='hover:text-white cursor-pointer' size={20} />
        </a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Main