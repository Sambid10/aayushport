"use client"
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Button from './Button'
import { useClickOutside } from '../utils/useClickOutside'
import NavComponent from './NavComponent'

const animvariants = {
  open: {
    height: "90vh",
    width: "60vw",  // Default for small screens
    top: "0.5rem",
    right: "1rem",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  close: {
    height: 40,
    width: 120,
    top: "0.5rem",
    right: "1rem",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
};

export default function ButtonComponent() {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const ref = useRef(null)
  useClickOutside(() => setsidebarOpen(false), ref)

  return (
    <div ref={ref} className='bg-black z-40'>
      <motion.div
        variants={animvariants}
        initial="close"
        animate={sidebarOpen ? "open" : "close"}
        className='bg-zinc-800 border border-stone-950 '
      >
        <AnimatePresence>
          {sidebarOpen && <NavComponent setSidebarOpen={setsidebarOpen} />}
        </AnimatePresence>
      </motion.div>
      <Button
        contactstate={sidebarOpen}
        setContactstate={() => { setsidebarOpen(!sidebarOpen) }}
        maintitle={'Menu'}
        subtitle={'Close'}
      />
    </div>
  )
}
