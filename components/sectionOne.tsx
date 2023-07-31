"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImMobile } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default function SectionOne() {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  const firstParagraph = (
    <>
      <p className='text-xl text-gray-600 px-2 md:text-3xl md:px-8 md:leading-10'>
        We take pride in being the first point of contact when it comes to asbestos.
      </p>
      <p className='text-xl text-gray-600 px-2 md:text-3xl md:px-8 md:leading-10'>
          Our goal is to provide our clients with the peace of mind that comes with knowing their property is complying with regulations or free from asbestos-containing material.
      </p>
    </>
  );

  const restOfContent = (
    <>
      <p className='text-xl text-gray-600 px-2 md:text-3xl md:px-8 md:leading-10'>
        From initial inspection to final removal, we apply meticulous attention to detail and advanced techniques.
      </p>
      <p className='text-xl text-gray-600 px-2 md:text-3xl md:px-8 md:leading-10'>
        Trust us as your strategic partner, dedicated to the safety of your property and its occupants, a commitment underpinned by our pursuit of excellence.
      </p>
    </>
  );

  const content =
    showFullContent ? (
      <>
        {firstParagraph}
        {restOfContent}
        <button className='text-blue-500' onClick={toggleContent}>
          Read less
        </button>
      </>
    ) : (
      <>
        {firstParagraph}
        <button className='text-blue-500' onClick={toggleContent}>
          Read more
        </button>
      </>
    );

  return (
    <div className='flex m-auto p-2'>
      <section>
        <Image
          className='m-auto md:w-1/3 md:pt-12'
          src="/logo.svg"
          alt="logo"
          width="200"
          height="200"
        />
        <h3 className='text-4xl text-blue-900 font-medium text-center pt-6 pb-6 md:text-6xl md:pt-12 md:pb-12'>
          We take asbestos seriously, so you don&apos;t have to.
        </h3>
        <div className='flex flex-col text-center w-[100%]'>
          <p className='m-auto text-xl text-gray-600 flex gap-5 pb-2'>
            <BsFillTelephoneFill /><a href='tel: 02036330991'>02036330991</a>
          </p>
          <p className='m-auto text-xl text-gray-600 flex gap-4 pb-4'>
            <ImMobile /><a href='tel: 07340111814'>07340111814</a>
          </p>
        </div>
        {content}
        <Image
          className='m-auto mt-6 md:w-1/2 md:pt-12'
          src="/asbestos1.svg"
          alt="asbestos"
          width="300"
          height="300"
        />
      </section>
    </div>
  );
}
