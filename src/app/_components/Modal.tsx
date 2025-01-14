"use client"
import React from 'react'
interface Props {
  selected: boolean
  setSelected: (selected: boolean) => void,
  img: string
  index:number | undefined
}
import {motion} from "framer-motion"
import Image from 'next/image'
import { useState } from 'react'
export default function Modal({ selected, setSelected, img ,index}: Props) {
  if (!selected) {
    return <></>
  }
  const [imageSize, setImageSize] = useState({
    width: 1,
    height: 1,
  });

  return (
    <div
    onClick={() => setSelected(false)}
    className="fixed inset-0 bg-black/30 w-full z-[95] cursor-pointer overflow-y-auto"
  >
    <motion.div
     className="w-full max-w-[700px] mx-auto flex h-full justify-center items-center px-8 cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div >
      <Image
      layout={`card-${index}`}
          src={img}
          className="brightness-90 bg-stone-950 border border-gray-600"
          alt="alt"
          priority={true}
          onLoad={(event) => {
            const target = event.currentTarget as HTMLImageElement;
            setImageSize({
              width: target.naturalWidth,
              height: target.naturalHeight,
            });
          }}
          width={imageSize.width}
          height={imageSize.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: 'contain',
            maxHeight: '90vh', // Prevents image from exceeding the viewport height
            width: 'auto', // Ensures aspect ratio is maintained
          }}
        />
              </motion.div>
    </motion.div>

  </div>
  )
}
