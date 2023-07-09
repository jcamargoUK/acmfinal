"use client"

import Image from 'next/image'

export default function Home() {
  return(
    <div className=' flex m-auto p-2'>
      <section >
        <Image 
          className=' m-auto'
          src="/logo.svg" 
          alt="logo" 
          width="200" 
          height="200" 
          />
        <h3 className=' 
          text-4xl 
        text-blue-900
          font-bold 
          text-center 
          pt-6 
          pb-6 
          '>
          We take asbestos seriously, so you don't have to.</h3>
        <button 
          className='
            text-4xl
            bg-blue-900
            text-white
            px-6
            py-2
            rounded-full
            m-auto
            flex
            justify-center
            mb-6
            hover:bg-blue-400
            border-2
            hover:transition hover:duration-700 hover:tracking-wide hover:text-5xl
            '>
            Get in Touch
        </button>
        <p className=' text-xl text-gray-600 px-4'>We take pride in being the first point of contact when it comes to asbestos.</p>
        <p className=' text-xl text-gray-600 px-4'>Our goal is to provide our clients with the peace of mind that comes with knowing their property is complying with regulations or free from asbestos-containing material.</p>
        < Image 
          className=' 
            m-auto
            mt-6
            '
          src="/asbestos1.svg"
          alt="asbestos"
          width="300"
          height="300"
          />
      </section>
    </div>
  )
}
