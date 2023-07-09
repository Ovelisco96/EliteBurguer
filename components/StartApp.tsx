'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const StartApp = () => {
  const navigate = useRouter() 
  useEffect(() => {
   setTimeout(()=>{
    navigate.push('/createaccount')
   },2000)
  }, [])
  
  return (
    <section className='bg-black h-full flex items-center justify-center'>
        <h1 className='text-yellow-400 font-extrabold text-3xl '>Amazon Gourmet Experience</h1>
    </section>
  )
}

export default StartApp