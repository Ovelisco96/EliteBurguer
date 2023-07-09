import React from 'react'

const Login = () => {
  return (
    <section className='bg-black h-full flex flex-col items-center justify-center'>
            <div className='absolute h-48  w-full bg-yellow-100 rounded-b-3xl top-0 '></div>
            <h1 className='text-red-600 font-extrabold text-3xl z-2 absolute top-24'>Inicia Sesión</h1>
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
            <button className='border-2  rounded-xl bg-yellow-500 mt-10 text-white font-bold text-xl p-2 tracking-wider'>Ingresar</button>
            </form>
        </section>
  )
}

export default Login