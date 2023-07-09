"use client"

import Image from 'next/image'

export default function Home() {
  return(
    <div className=' flex m-auto p-2'>
      <section>
        <Image 
          src="/logo.svg" 
          alt="logo" 
          width="200" 
          height="200" 
          />
        <h3 className=' text-4xl font-bold text-center pt-6 pb-6 text-green-400'
        >We take asbestos seriously, so you don't have to.</h3>
        <p>We take pride in being the first point of contact when it comes to asbestos.</p>
        <p>Our goal is to provide our clients with the peace of mind that comes with knowing their property is complying with regulations or free from asbestos-containing material.</p>
      </section>
    </div>
  )
}
