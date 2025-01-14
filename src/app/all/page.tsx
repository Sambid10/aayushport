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
          className="flex justify-center  items-center sticky top-0 pt-3 z-50 py-1"
        >
          <TabsList className="grid w-[50%] h-[4.2rem] grid-cols-2 mb-10  border border-gray-800 bg-gray-900 text-[#fff] rounded-full">
            <motion.div

              className="flex justify-center gap-2 items-center h-full"
            >
              <button
                  onClick={handleBack} 
                className='px-4 hover:bg-gray-800 rounded-full h-[100%] transition-colors ease-in duration-200 flex justify-center items-center'
              >
                <BiChevronLeft className='h-7 w-7 '/>
              </button>
              <TabsTrigger
                className="text-xl font-medium h-[85%]  rounded-full w-full hover:bg-gray-700 ease-in duration-200 transition-colors"
                value="Poster"
              >
                Poster Designs
              </TabsTrigger>
            </motion.div>

            <motion.div

              className="flex justify-center items-center h-full"
            >
              <TabsTrigger
                className="text-xl font-medium h-[85%]  w-full rounded-full  hover:bg-gray-700 ease-in duration-200 transition-colors"
                value="tee-designs"
              >
                Tee Designs
              </TabsTrigger>
            </motion.div>
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
