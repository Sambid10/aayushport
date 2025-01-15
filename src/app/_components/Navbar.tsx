"use client"
import React, { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { twMerge } from 'tailwind-merge'
export const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "My Work",
        href: "/all"
    },
   
]
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const [ishidden, setisHidden] = useState(false)
    const { scrollY } = useScroll()
    const yref = useRef(0)
    useMotionValueEvent(scrollY, 'change', (y) => {
        const diff = y - yref.current
        if (Math.abs(diff) > 100) {
            setisHidden(diff > 0)
            yref.current = y
        }

    })
    return (
        <motion.div

            className='sticky top-0 pt-3 z-[90] flex justify-center w-full'>
            
            <motion.nav
                animate={ishidden ? "hidden" : "open"}
                onFocusCapture={() => setisHidden(false)}
                whileHover="open"
                variants={{
                    hidden: {
                        y: "-95%"
                    },
                    open: {
                        y: "0%"
                    },

                }}
                transition={{ duration: 0.2 }}
                className='flex justify-between relative items-center rounded-full bg-gray-900 border border-gray-800 pl-8 h-[4.3rem] py-1'>
                <motion.div 
                  whileHover="open"
                 className='h-[1rem] absolute -top-3 z-[90] w-full bg-transparent '/>
                <img
                className='rounded-full  h-8 w-8 mr-5'
                src='/log.jpg'
                />
                {links.map((link, i) => (
                        <Link
                            key={i}
                            
                            prefetch={true}
                            href={link.href}
                            className={twMerge(
                                `px-6 py-2 font-medium mr-2 text-gray-200 transition-colors duration-300 rounded-full`,
                                pathname === link.href
                                    ? "bg-gray-950 text-[#ffff] shadow-lg py-3"
                                    : "hover:bg-gray-700 py-3"
                            )}
                        >
                            {link.title}
                        </Link>
                    ))}
            </motion.nav>
        </motion.div>
    )
}
