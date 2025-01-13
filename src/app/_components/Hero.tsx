"use client"
import ReactLenis from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "./Navbar";
import { useRef } from "react";
import { RevealBento } from "./BentoBox";
import FloatingImg from "./FloatingImg";
import Footer from "./Footer";
import SubHero from "./SubHero";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-[#000] w-full  ">
     
       <div className="w-full">
       <SubHero/>
       </div>
        
        <div className=" w-full  dark:bg-black bg-white  dark:bg-dot-white/[0.25] bg-dot-black/[0.1] relative flex items-center justify-center">
        <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center transition-colors ease-in dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
  
        <Schedule />
        </div>
        <FloatingImg/>
        <Footer/>
      
    </div>
  );
};



const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />
     

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-[#000]" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
  className="sticky top-0 h-screen w-full"
  style={{
    clipPath,
    backgroundSize,
    opacity,
    backgroundImage: 'url("/3.webp")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>

  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/4.webp"
        alt="pic1"
        start={-200}
        end={200}
        className="w-1/3 h-[50vh] object-contain brightness-90"
      />
      <ParallaxImg
        src="/6.webp"
        alt="pic2"
        start={200}
        end={-250}
        className="mx-auto w-2/3 h-[45vh] object-contain"
      />
      <ParallaxImg
        src="/10.webp"
        alt="pic3"
        start={-200}
        end={200}
        className="ml-auto w-1/3 h-[50vh] object-contain"
      />
      <ParallaxImg
        src="/17.webp"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12 h-[45vh] object-contain brightness-60"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 relative z-10 py-48 text-white"
    >
        <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
     
    >
        <RevealBento/>
       
    </motion.div>
        
    </section>
  );
};

