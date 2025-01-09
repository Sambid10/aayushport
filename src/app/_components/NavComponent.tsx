"use client"
import React from 'react'
import { motion } from "framer-motion"
export const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "My Work",
        href: "/all"
    },
    {
        title: "Contact",
        href: "/"
    }
]

export const footerLinks = [
    {
        title: "Facebook",
        href: "/"
    },
    {
        title: "LinkedIn",
        href: "/"
    },
    {
        title: "Instagram",
        href: "/"
    },
    {
        title: "Twitter",
        href: "/"
    }
]

const perspective={
    initial:{
        opacity:0,
        rotateX:90
    },
    open:(i:number)=>(
    {
        opacity:1,
        rotateX:0,
        transition:{
            duration:0.65,
            opacity:{duration:0.35},
            ease:[.215,.61,.355,1],
            delay:0.5 + (i*0.1)}
    }),
    exit:{opacity:0}
}
export default function NavComponent({ setSidebarOpen}:{
    setSidebarOpen:(open:boolean)=>void
}) {
    return (
        <div className='pt-14 px-4 h-[100%] relative'>
            <div>
                <div className='text-6xl  flex flex-col  gap-5'>
                    {
                        links.map((link, i) => {
                            const { title, href } = link;
                            return (
                                <div 
                               
                                key={`b_${i}`} >
                                    <motion.div

                                        variants={perspective}
                                        custom={i}
                                        initial="initial"
                                        animate="open"
                                        exit="exit"
                                    >
                                        <a 
                                        onClick={()=>setSidebarOpen(false)}
                                        href={href}>
                                            {title}
                                        </a>
                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </div>
                <motion.div className='absolute bottom-4 flex gap-4 flex-wrap px-2'>
                    {
                        footerLinks.map((link, i) => {
                            const { title, href } = link;
                            return (
                                <motion.a
                                    variants={perspective}
                                    custom={i}
                                    initial="initial"
                                    animate="open"
                                    exit="exit"
                                    key={`f_${i}`}
                                >
                                    {title}
                                </motion.a>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}