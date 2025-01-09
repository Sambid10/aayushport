"use client"
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';

export default function FloatingImg() {
    const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }
  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className='relative min-h-[120dvh] mx-auto max-w-[100vw] overflow-hidden'>
      <div ref={plane1} className='plane'>
        <Image 
          alt='img'
          src="/1.webp"
          width={150}
          height={250}
        />
        <Image 
          alt='img'
          src="/2.webp"
          width={160}
          height={200}
        />
        <Image 
          alt='img'
          src="/3.webp"
          width={250}
          height={300}
        />
      </div>

      <div ref={plane2} className='plane'>
        <Image 
          alt='img'
          src="/4.webp"
          width={190}
          height={190}
        />
        <Image 
          alt='img'
          src="/5.webp"
          width={210}
          height={200}
        />
        <Image 
          alt='img'
          src="/6.webp"
          width={200}
          height={130}
        />
      </div>

      <div ref={plane3} className='plane'>
        <Image 
          alt='img'
          src="/7.webp"
          width={170}
          height={180}
        />
        <Image 
          alt='img'
          src="/8.webp"
          width={140}
          height={190}
        />
     
      </div>
      <div className={"title flex flex-col items-center justify-center gap-3"}>
        <h1>Like my Work?</h1>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-600 text-gray-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Contact Me.
      </button>
      </div>

    </div>
  );
}
