'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
const StartApp = () => {
  const navigate = useRouter() 
  useEffect(() => {
   setTimeout(()=>{
    navigate.push('/createaccount')
   },2000)
  }, [])
  
  return (
    <section className='bg-black h-full flex items-center justify-center'>
        <motion.h1 
        initial={{opacity: 0}}
        transition={{duration: 1}}
        animate={{opacity: 1}}
        className='text-yellow-400 font-extrabold text-3xl '>Amazon Gourmet Experience</motion.h1>
    </section>
  )
}

export default StartApp