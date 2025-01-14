"use client"
import React, { useState } from 'react'
import Modal from './Modal'
import List from './List'
import ReactLenis from 'lenis/react'
export default function AllImages() {
    const [selected,setSelected]=useState(false)
  return (
    <div className='pb-4'>
    <List selected={selected} setSelected={setSelected}/>
    </div>
  
  )
}
