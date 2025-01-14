"use client"
import React from 'react'
import { teedata } from '../utils/data';
import { useState } from 'react';
import {motion,easeIn} from "framer-motion"
import Image from 'next/image';
import Modal from './Modal';
export default function TeeImages() {
    const [selected,setSelected]=useState(false)
    const imagesPerLoad = 10; // Number of images to load per click
    const [visibleCount, setVisibleCount] = useState(imagesPerLoad);
    const [index, setIndex] = useState<number>()
    const [imgUrl, setImageUrl] = useState("");
    const [imageSize, setImageSize] = useState({
      width: 1,
      height: 1,
    });
  
    const handleLoadMore = () => {
      setVisibleCount((prevCount) => prevCount + imagesPerLoad);
    };
  
    // Get only the visible images
    const visibleImages = teedata.slice(0, visibleCount);
    const handleClick = (url: string, id: number) => {
      setImageUrl(url)
      setIndex(id)
    }
    return (
      <div>
        <div className="columns-2 md:columns-4 space-y-6 gap-6 py-4">
          {visibleImages.map((img, i) => (
            <motion.div
  
              key={i}>
              <motion.div
                className="w-full shadow-xl cursor-pointer relative aspect-auto brightness-90  overflow-hidden"
                onClick={() => setSelected(true)}
                whileHover={{
                  scale: 1.015,
                  transition: {
                    duration: 0.1,
                    ease:easeIn
                  },
                }}
              
              >
                <motion.div
                >
                  <Image
                    src={img.src}
                    className="brightness-90 "
                    onClick={() => handleClick(img.src.src, img.id)}
                    alt="alt"
                    placeholder="blur"
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
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
  
  
              </motion.div>
              {selected && <Modal selected={selected} setSelected={setSelected} img={imgUrl} index={index} />}
            </motion.div>
          ))}
        </div>
  
        {/* Load More Button */}
        {visibleCount < teedata.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 border rounded bg-gray-50 hover:bg-gray-200"
            >
              Load More
            </button>
          </div>
        )}
  
      </div>
    );
}
