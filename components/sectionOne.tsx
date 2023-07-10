"use client"
import Image from 'next/image'
import Button from '../components/button'
import Link from 'next/link'

export default function SectionOne() {
  return (
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
        < Button />
        <p 
        className=' text-xl text-gray-600 px-2'>We take pride in being the first point of contact when it comes to asbestos.</p>
        <p className=' text-xl text-gray-600 px-2'>Our goal is to provide our clients with the peace of mind that comes with knowing their property is complying with regulations or free from asbestos-containing material.</p>
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