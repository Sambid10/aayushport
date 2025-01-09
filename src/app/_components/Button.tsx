"use client"
import React from 'react'
import {motion} from "framer-motion" 
export default function Button({maintitle,subtitle,contactstate,  setContactstate}:{
  maintitle:string,
  subtitle:string,
  contactstate:boolean,
  setContactstate:()=>void
}) {
  return (
    <div 
    className='h-[40px] w-[120px]  absolute top-0 right-0 overflow-hidden'>
      <motion.div 
      animate={{top:contactstate ? "-100%" : ""}}
      transition={{ease:[0.76,0,0.24,1],duration:0.5}}
      className='relative h-[100%] w-[100%] text-xl'>
      <div 
      onClick={()=>setContactstate()}
      className='h-[100%] w-[100%] text-[#fff] bg-[#121212] border border-gray-300 quick flex justify-center  items-center cursor-pointer' >
          {maintitle}
        </div>
        <div 
         onClick={()=>setContactstate()}
        className='h-[100%] w-[100%] bg-[#F95738] text-[#ffffff] quick  flex justify-center  items-center cursor-pointer'>
          {subtitle}
        </div>
      </motion.div>
      </div>
  )
}