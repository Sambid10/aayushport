import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
const reveal=["cool stuff.","stunning visuals.","eye-catching designs.","vibrant designs."]
import { FlipWords } from "./RevealSentences";
const items = [
  { name: 'Figma',src:"/fig.png" },
  { name: 'Blender',src:'/blender.svg' },
  { name: 'Adobe_Photoshop',src:'/ad.png' },
  { name: 'Adobe_Premiere_Pro',src:'/vod.png' },
];
const repeatedItems = [...items, ...items];
export const RevealBento = () => {
  return (
    <div className="min-h-[100vh]  flex justify-center items-center px-4 py-12 text-zinc-50">
     
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid  max-w-5xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
     
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-950 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Aayush.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="/all"
      className="flex items-center gap-1 text-blue-400 hover:underline"
    >
      Check out all my Work here.. <FiArrowRight />
    </a>
    
   
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-400 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600  md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-[#ffff]"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>  
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <div>
      My passion is building <FlipWords words={reveal}/><br/>
      <div className="h-[1vh]"/>
      <span className="text-zinc-400 tracking-wide">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Kathmandu, Nepal</p>
  </Block>
);

const EmailListBlock = () => (
<Block className="col-span-12 md:col-span-9 text-zinc-200 relative overflow-hidden fadeout flex h-full items-center">
  <div className="flex items-center gap-12 text-4xl  anim-text ">
    {repeatedItems.map((item, index) => (
      <span key={index} className=" flex items-center  gap-4 pl-12 pr-24 py-4 w-full border rounded-full border-green-100">
        
        <img
          src={item.src}
          className="h-10 w-10"
        />
        <span>{item.name}</span>
      </span>
    ))}
  </div>
</Block>



);



