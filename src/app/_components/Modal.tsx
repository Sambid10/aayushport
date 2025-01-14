"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  selected: boolean;
  setSelected: (selected: boolean) => void;
  img: string;
  index: number | undefined;
}

export default function Modal({ selected, setSelected, img, index }: Props) {
  if (!selected) return null;

  const [imageSize, setImageSize] = useState({
    width: 1,
    height: 1,
  });

  return (
    <div
      onClick={() => setSelected(false)} // Close modal on clicking outside
      className="fixed inset-0 bg-black/30 w-full z-[100] overflow-y-auto flex items-center justify-center"
    >
      <motion.div
        className="w-full max-w-[700px] mx-auto px-8 cursor-default"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <div onClick={(e) => e.stopPropagation()} className="relative">
          <Image
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
              maxHeight: '90vh',
              width: 'auto',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
