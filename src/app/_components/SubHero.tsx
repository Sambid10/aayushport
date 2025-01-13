"use client"
import React, { useRef } from 'react'
import Pic1 from "../../../public/14.webp"; //center
import Pic2 from "../../../public/17.webp";
import Pic3 from "../../../public/5.webp";
import Pic4 from "../../../public/16.webp";
import Pic5 from "../../../public/11.webp";
import Pic6 from "../../../public/6.webp";
import Pic7 from "../../../public/15.webp";
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from "framer-motion"
import { picture } from 'framer-motion/client';
export default function SubHero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']

    })
    const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pic = [{
        src: Pic1,
        scale: scale1
    },
    {
        src: Pic2,
        scale: scale5
    },
    {
        src: Pic3,
        scale: scale6
    },
    {
        src: Pic4,
        scale: scale7
    },
    {
        src: Pic5,
        scale: scale8
    }, {
        src: Pic6,
        scale: scale9
    },
        , {
        src: Pic7,
        scale: scale9
    }
    ]
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1])
    return (
        <div ref={ref} className='container'>
            <div className='stick'>
                {
                    pic.map( (pic, index) => {
                        return <motion.div key={index} style={{scale:pic?.scale,opacity:opacity}}  className='el'>
                            <div className='imageContainer'>
                                <Image
                                    src={pic!.src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
