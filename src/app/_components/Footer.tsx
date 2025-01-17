
import React from 'react'
import Link from 'next/link'
import FooterLinks from './HoverLinks'
export default function Footer() {
  return (
    <div className='relative h-[350px] w-full'
    style={{clipPath:"polygon(0% 0,100% 0%,100% 100%,0 100%)"}}
    >
        <div className='fixed bottom-0 h-[350px] w-full bg-gray-950'>
            <Content/>
        </div>
    </div>
  )
}

export function Content(){
    return(
        <div className='text-[#FCFCFCFC] h-full relative flex flex-col px-4 lg:px-20 py-2 mb-2'>
           <div className='h-[50%] flex justify-between items-center '>
            <div className='lg:text-6xl flex-col   text-3xl md:text-5xl font-semibold h-full flex justify-center'>
                <h1>SHAKYA</h1>
                <h1 className='text-xl text-gray-400 font-normal'>@2025</h1>
            </div>
            <div className='text-sm lg:text-xl font-light h-full flex items-center'>
                <div className='flex flex-col'>
                <h1>Email: aayushshk32@gmail.com</h1>
                <h1>Address: Kathmandu,Nepal</h1>
                </div>
               
                
            </div>
           </div>
           <div className=' h-[1px]  bg-stone-500 w-full'/>
            <div className='h-[50%]'>
            <FooterLinks/>
            </div>
           
            
        </div>
    )
}