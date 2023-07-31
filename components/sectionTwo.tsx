"use client"

import Image from 'next/image'


export default function SectionTwo() {
  return (
    <section className='m-auto text-center'>
      <h1 className=' text-5xl pt-6 pb-6 font-semibold text-blue-900 md:text-6xl'>Our Services</h1>
      <p className='text-xl text-gray-600 px-2 text-left
      md:text-3xl
      md:px-8
      md:leading-10

      '>Our business specialises in asbestos surveying and non-licensed asbestos removals.
      </p>
      <p className='text-xl text-gray-600 px-2 text-left
      md:text-3xl
      md:px-8
      md:leading-10
      '> We understand that asbestos can pose a serious health risk and it is important to ensure that it is properly managed or removed from any property.
      </p>
      
      < Image 
          className=' 
            m-auto
            mt-6
            mb-6
            md:w-1/2
            md:pt-12
            '
          src="/asbestos4.svg"
          alt="asbestos"
          width="300"
          height="300"
          />
    </section>
  )
}