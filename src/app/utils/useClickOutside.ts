import React, { useEffect } from "react"

interface Props{
    handler:(event:MouseEvent | TouchEvent)=>void,
    ref:React.RefObject<HTMLDivElement>
}
export const useClickOutside=(handler:(event:MouseEvent | TouchEvent)=>void,ref:any)=>{
    useEffect(()=>{
        const listener=(event:MouseEvent | TouchEvent)=>{
            if(!ref.current || ref.current.contains(event.target as  Node)){
                return
            }
            handler(event)
        }
        window.addEventListener("mousedown",listener)
        window.addEventListener("touchmove",listener)

        return(()=>{
            window.removeEventListener("mousedown",listener)
            window.removeEventListener("touchmove",listener)
    
        })
    },[handler,ref])
}