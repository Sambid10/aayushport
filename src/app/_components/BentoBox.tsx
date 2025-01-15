import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
const reveal = ["Poster Design.", "Tee Design.", "3D & Motion Graphics.", "Digital Assets."]
import { FlipWords } from "./RevealSentences";
import { BiChevronLeft } from "react-icons/bi";
const items = [
  { name: 'Figma', src: "/fig.png" },
  { name: 'Blender', src: '/blender.svg' },
  { name: 'Adobe_Photoshop', src: '/ad.png' },
  { name: 'Adobe_Premiere_Pro', src: '/vod.png' },
  { name: 'Unreal_Engine', src: '/unreal.png' },
];
const repeatedItems = [...items, ...items];
export const RevealBento = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center  py-12 text-zinc-50">

      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className=" grid max-w-5xl mx-auto  grid-flow-dense grid-cols-12 gap-4"
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
  <Block className="col-span-12 row-span-2 md:col-span-6 ">

    <img
      src="/log.jpg"
      alt="avatar"
      className="mb-4 size-14 rounded-full border border-gray-800"
    />
    <h1 className="mb-8 text-4xl font-medium leading-tight">
      I'm Aayush.<br />
      <span className="text-zinc-400">
        A graphic designer specializing in poster designs, tee designs and immersive visuals. Let's bring your ideas to life.
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
      className="col-span-6 bg-blue-400 h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 md:col-span-3"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=61572001973988&mibextid=ZbWKwL"
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
      className="col-span-6  full  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:col-span-3"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/thresh_.vue"
        className="grid h-full place-content-center text-3xl text-[#ffff]"
      >
        <SiInstagram />
      </a>
    </Block>

  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <span className="mt-2">
      <ul className="list-disc pl-6 text-zinc-400">
        <li>
          <span className="text-blue-400">Poster Designs : </span> <span className="inline">Bold, creative visuals for events, campaigns, or personal projects.</span>
        </li>
        <li>
          <span className="text-blue-400 ">Tee Designs : </span> <span className="inline">Custom designs that stand out in fashion and streetwear.</span>
        </li>
        <li>
          <span className="text-blue-400 ">3D & Motion Graphics : </span> <span className="inline">Realistic renders and animations with Blender and Unreal Engine.</span>
        </li>
        <li>
          <span className="text-blue-400 ">Digital Assets : </span> <span className="inline">Logos, branding, and promotional graphics.</span>
        </li>
      </ul>

    </span>


  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-6 justify-center">
    <FiMapPin className="text-3xl" />
    <h1 className="text-zinc-200">Based in :</h1>
    <p className="text-center text-lg ">Kathmandu, Nepal</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12  text-zinc-200 relative overflow-hidden fadeout flex h-full items-center">
    <div className="flex items-center gap-12 text-4xl  anim-text ">
      {repeatedItems.map((item, index) => (
        <span key={index} className=" flex items-center  gap-4 pl-12 pr-24 py-4 w-full border rounded-full border-blue-200">

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



