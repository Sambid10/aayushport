"use client"
import React, { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useMotionValueEvent } from "framer-motion"
import { useRef } from 'react'
import AllImages from '../_components/AllImages'
import { useScroll } from 'framer-motion'
import { motion } from "framer-motion"
import TeeImages from '../_components/TeeImages'
import Link from 'next/link'
import Home from '../page'
import { BiChevronLeft, BiHome, BiHomeCircle } from 'react-icons/bi'

export default function Page() {
  const handleBack = () => {
    window.history.back();
  };

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
    <div className='max-w-7xl mx-auto'>
      <Tabs defaultValue="Poster" className="w-full relative">
        <motion.div
          whileHover={"open"}
          animate={ishidden ? "hidden" : "open"}
          variants={{
            hidden: { y: "-50%" },
            open: { y: "0%" }
          }}
          transition={{ duration: 0.2 }}
          className="flex justify-center   items-center sticky top-0 pt-3 z-50 py-1"
        >
          <TabsList className="w-fit h-[4.2rem]  px-2 flex items-center gap-2 mb-10  border border-gray-800 bg-gray-900 text-[#fff] rounded-full">
           
              <button
                  onClick={handleBack} 
                className='px-2 py-2 ml-2 text-[#ffff] hover:bg-gray-800 rounded-full  transition-colors ease-in duration-200 flex justify-center items-center'
              >
                <BiChevronLeft className='h-7 w-7 '/>
              </button>
              <TabsTrigger
                className="text-base px-4 text-[#ffff] font-medium h-[80%]  rounded-full w-fit hover:bg-gray-700 ease-in duration-200 transition-colors"
                value="Poster"
              >
                Poster Designs
              </TabsTrigger>
            

             
              <TabsTrigger
                className="text-base px-4 text-gray-200 font-medium h-[80%]  w-fit rounded-full  hover:bg-gray-700 ease-in duration-200 transition-colors"
                value="tee-designs"
              >
                Tee Designs
              </TabsTrigger>
           
          </TabsList>
        </motion.div>

        <TabsContent value="Poster">
          <AllImages />
        </TabsContent>
        <TabsContent value="tee-designs">
          <TeeImages />
        </TabsContent>
      </Tabs>
    </div>
  )
}
