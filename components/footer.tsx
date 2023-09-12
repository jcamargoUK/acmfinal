"use client"

import { BsInstagram } from 'react-icons/bs'
import { AiOutlineFacebook } from 'react-icons/ai'
import { LuTwitter } from 'react-icons/lu'
import { BsTelephone } from 'react-icons/bs'
import Link from 'next/link'
export default function Footer() {
  return(
    <section
    className=' 
      bg-footer
      shadow-lg
      shadow-red-600/90
      flex 
      flex-col 
      m-auto 
      text-center
      mb-1
      py-4
      mt-2'
    >
     {/* <h1 className=' flex m-auto text-2xl text-gray '> Follow Us!</h1> */}
     {/* <div className=' flex m-auto text-2xl text-gray space-x-10 mt-6 '>
      < BsInstagram 
        className='w-10 h-10'
      />
      < AiOutlineFacebook 
        className='w-10 h-10'
      />
      < LuTwitter 
        className='w-10 h-10'
      />
     </div> */}
     <div className='text-xl text-gray mt-6 leading-9'>
      <p>ACMS Compliance</p>
      <p>3rd Floor 86-90 Paul Street</p>
      <p>London</p> 
      <p>EC2A 4NE</p>
      <p><a href='tel: 02036330991'>02036330991</a></p>
      <p><a href='tel: 07340111814'>07340111814</a></p>
     </div>
     <div>
      <p className='text-gray text-sm mt-8'>© 2023 ACMS Compliance</p>
      <div className='text-gray text-sm mt-6 mb-2'>Design and Developed by <span className='hover:text-blue'><Link href="https://julio-camargo.vercel.app"><p className='hover:cursor-pointer-events-auto focus:pointer-events-auto'>Julio Camargo</p></Link></span></div>
     </div>
    </section>
  )
}