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
    {
        title: "Contact",
        href: "/contact"
    }
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
                        y: "-85%"
                    },
                    open: {
                        y: "0%"
                    },

                }}
                transition={{ duration: 0.2 }}
                className='flex justify-between relative items-center rounded-md bg-gray-900 border border-gray-700 pl-8 h-16 py-1'>
                <motion.div 
                  whileHover="open"
                 className='h-[1rem] absolute -top-3 z-[90] w-full bg-transparent'/>
                <h1 className='text-2xl mr-8'>LOGO</h1>
                {links.map((link, i) => (
                    <div key={i} className='h-16  '>
                        <Link
                            className={twMerge(`hover:bg-gray-800 hover: border-y border-gray-700 px-8 ${pathname === link.href && "bg-gray-950 border-y border-gray-700 hover:bg-gray-950"} font-medium flex justify-between items-center text-base  transition-colors ease-in duration-200  h-16`)}
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    </div>

                ))}
            </motion.nav>
        </motion.div>
    )
}
