'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Register = () => {
    return (
        <section className='bg-black h-full flex flex-col items-center justify-center'>
            <motion.div
            initial={{x: '-420px'}}
            transition={{
                type: "spring",  
                stiffness: 80,  
                damping: 10,
                duration: 2.2  
              }}
            animate={{x: '0px'}}
            className='absolute h-36 w-full bg-yellow-400 rounded-br-[70px] top-0 '></motion.div>
            <motion.h1
             initial={{x: '420px'}}
             transition={{
                type: "spring",  
                stiffness: 80,  
                damping: 10,
                duration: 2.2  
              }}
             animate={{x: '0px'}}
            className='text-yelow-100 font-extrabold text-3xl z-2 absolute top-16'>Registra tu cuenta</motion.h1>
            <form className='flex mt-20 flex-col gap-10'>
                <label className='flex flex-col gap-5  '>
                    <p className='text-white'>Nombre</p>
                    <input className='bg-black border text-white pl-2 rounded-lg h-8' type="text" />
                </label>
                <label className='flex flex-col gap-5'>
                    <p className='text-white'>Correo Electrónico</p>
                    <input className='bg-black border rounded-lg h-8' type="text" />
                </label>
                <label className='flex flex-col gap-5'>
                    <p className='text-white'>Constraseña</p>
                    <input className='bg-black border rounded-lg h-8' type="password" />
                </label>
                <label className='flex flex-col gap-5'>
                    <p className='text-white'>Confirma tu Constraseña</p>
                    <input className='bg-black border rounded-lg h-8' type="password" />
                </label>
            <button className='border-2  rounded-xl bg-yellow-500 mt-10 text-black font-bold text-xl p-2 tracking-wider'>Registrarse</button>
            </form>
        </section>
    )
}

export default Register