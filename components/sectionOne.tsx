"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ImMobile } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';

interface SectionOneProps {
  // Add any props if needed
}

const SectionOne: React.FC<SectionOneProps> = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  const firstParagraph = (
    <>
    <p className='paragraph'>
      We take pride in being the first point of contact when it comes to asbestos.
    </p>
    <p className='paragraph'>
        Our goal is to provide our clients with the peace of mind that comes with knowing their property is complying with regulations or free from asbestos-containing material.
      </p>
    </>
  );

  const restOfContent = (
    <>
      <p className='paragraph'>
        From initial inspection to final removal, we apply meticulous attention to detail and advanced techniques.
      </p>
      <p className='paragraph'>
        Trust us as your strategic partner, dedicated to the safety of your property and its occupants, a commitment underpinned by our pursuit of excellence.
      </p>
    </>
  );

  const content = showFullContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200 m-auto lg:text-2xl lg:max-w-3xl">
      {firstParagraph}
      {restOfContent}
      <button className='text-blue-500 ml-2 md:ml-8 mt-2 md:text-2xl lg:text-lg' onClick={toggleContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200 m-auto lg:text-2xl lg:max-w-3xl">
      {firstParagraph}
      <button className='text-blue-500 ml-2 md:ml-8 mt-2 md:text-2xl lg:text-lg' onClick={toggleContent}>
        Read more
      </button>
    </div>
  );

  return (
    <div className='flex m-auto pt-2 px-1 text-center'>
      <section className='m-auto'>
        <div className='flex justify-around lg:justify-between lg:px-10'>
          <Image
            className='md:w-1/4 md:pt-10'
            src="/logo.svg"
            alt="logo"
            width="180"
            height="150"
          />
          <div className='flex flex-col text-right w-[30%] pt-3 md:flex-row md:justify-end md:w-[50%] md:pt-6 lg:w-[40%]'>
            <p className='m-auto text-sm text-gray-600 flex gap-5 pb-2 md:text-xl lg:text-xl md:gap-2'>
              <BsFillTelephoneFill /><a href='tel: 02036330991'>02036330991</a>
            </p>
            <p className='m-auto text-sm text-gray-600 flex gap-4 pb-4 md:text-xl lg:text-xl md:gap-2'>
              <ImMobile /><a href='tel: 07340111814'>07340111814</a>
            </p>
          </div>
        </div>
        <h3 className='text-3xl text-blue-900 font-medium text-center pt-6 pb-6 md:text-5xl md:pt-12 md:pb-12 lg:px-12'>
          We take asbestos seriously, so you don&apos;t have to.
        </h3>
        {content}
        <Image
          className='m-auto mt-6 md:pt-12 md:w-[70%] lg:w-[50%]'
          src="/asbestos1.svg"
          alt="asbestos"
          width="300"
          height="300"
        />
      </section>
    </div>
  );
};

export default SectionOne;
