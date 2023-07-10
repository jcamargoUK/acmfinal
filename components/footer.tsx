"use client"

import { BsInstagram } from 'react-icons/bs'
import { AiOutlineFacebook } from 'react-icons/ai'
import { LuTwitter } from 'react-icons/lu'
import { BsTelephone } from 'react-icons/bs'
export default function Footer() {
  return(
    <section
    className=' 
      flex 
      flex-col 
      m-auto 
      text-center
      border-2
      mx-4
      rounded-xl
      py-4
      mt-9'
    >
     <h1 className=' flex m-auto text-2xl text-gray-600 '> Follow Us!</h1>
     <div className=' flex m-auto text-2xl text-gray-600 space-x-10 mt-6 '>
      < BsInstagram 
        className='w-10 h-10'
      />
      < AiOutlineFacebook 
        className='w-10 h-10'
      />
      < LuTwitter 
        className='w-10 h-10'
      />
     </div>
     <div className='text-xl text-gray-600 mt-6 leading-9'>
      <p>ACMS Compliance</p>
      <p>3rd Floor 86-90 Paul Street</p>
      <p>London</p> 
      <p>EC2A 4NE</p>
      <p>020 36330991</p>
      <p>07340111814</p>
     </div>
    </section>
  )
}