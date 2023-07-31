"use client"

import React, { useState } from 'react';
import Image from 'next/image'

interface SectionTwoProps {
  // Add any props if needed
}

const SectionTwo: React.FC<SectionTwoProps> = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  const firstParagraph = (
    <>
      <p className='text-xl text-gray-600 px-4 text-left 
            md:text-3xl
            md:px-8
            md:leading-10
            '> Our surveyors are trained to the highest level, with expertise spanning a variety of environments, including airports, rail and docks, commercial office spaces, redevelopment sites, residential properties, educational establishments, healthcare facilities, industrial premises, Ministry of Defence establishments, National Heritage sites, and secure establishments.
      </p>
    </>
  );

  const restOfContent = (
    <>
      <p className='text-xl text-gray-600 px-4 text-left 
            md:text-3xl
            md:px-8
            md:leading-10
            '> Our surveyors are trained to the highest level, with expertise spanning a variety of environments, including airports, rail and docks, commercial office spaces, redevelopment sites, residential properties, educational establishments, healthcare facilities, industrial premises, Ministry of Defence establishments, National Heritage sites, and secure establishments.
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> This includes comprehensive asbestos and hazardous material surveys, re-inspections, sampling surveys, and management of asbestos registers, development of robust management plans, formulating risk management strategies, preparing policy and procedure documents, managing procurement and overseeing remedial works, carrying out audits, conducting exposure assessments, and risk assessment and remedial strategies for asbestos in soils.
            </p>
    </>
  );

  const secondParagraph = (
    <>
       <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Whilst our speciality lies in non-licensed asbestos removal, we acknowledge that some situations demand licensed removal.
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> For such scenarios, we have established affiliations with fully licensed removal companies that share our commitment to safety and professionalism. 
        </p>
    </>
  );

  const secondContent = (
    <>
      <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> In choosing our services, you benefit from our extensive network and the simplicity of a single liaison point.  
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10'>
              Rest assured that we coordinate the optimal solution for all your asbestos-related requirements.
       </p>
    </>
  )

  const content = showFullContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {firstParagraph}
      {restOfContent}
      <button className='text-blue-500' onClick={toggleContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {firstParagraph}
      <button className='text-blue-500' onClick={toggleContent}>
        Read more
      </button>
    </div>
  );

  const contentTwo = showFullContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {secondParagraph}
      {secondContent}
      <button className='text-blue-500' onClick={toggleContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {secondParagraph}
      <button className='text-blue-500' onClick={toggleContent}>
        Read more
      </button>
    </div>
  );

  const thirdContent = (
    <>
      <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Soft strip services play a vital role in the process of asbestos management. 
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Prior to refurbishment or demolition, non-structural elements are carefully removed from buildings. 
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Our expert team handles everything from internal fixtures and fittings to finishes down to the structural elements.
            </p>
    </>
  )

  const contentThee = (
    <>
      <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> This not only prepares the building for refurbishment or demolition but also allows for the identification and removal of any hidden hazardous material, such as asbestos. 
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> The soft strip process goes hand in hand with our asbestos surveying and removal services, providing a comprehensive approach to maintaining a safe environment. 
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Trust us to carry out these operations meticulously and safely, minimizing risk and disruption. 
            </p>
    </>
  )

  const contentThree = showFullContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {thirdContent}
      {contentThee}
      <button className='text-blue-500' onClick={toggleContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {thirdContent}
      <button className='text-blue-500' onClick={toggleContent}>
        Read more
      </button>
    </div>
  );




  return (
    <section className='m-auto text-center'>
      <h1 className=' 
          text-4xl 
        text-blue-900
          font-medium 
          text-center 
          pt-6 
          pb-6 
          md:text-6xl
          md:pt-12
          md:pb-12
          '>Our Services</h1>
        <div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Asbestos Surveying</h2>
            {content}
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Non-Licensed Asbestos Removal</h2>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> We specialise in the secure and efficient removal of non-licensed asbestos, adhering strictly to health and safety regulations while causing minimal disruption.
            </p>
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Associated Licensed Asbestos Removal</h2>
            {contentTwo}
            
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Air Monitoring</h2>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> In partnership with UKAS accredited organizations, we provide air monitoring services to ensure the ongoing safety of your environment following asbestos disturbance or removal. 
            </p>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Our partners are fully certified with ISO 9001, ISO 45001, ISO 14001, and ISO/IEC 17025:2017.
            </p>
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Soft Strip Works</h2>
            {contentThree}
            
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Lead Testing</h2>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> We provide accurate testing for lead within properties to help you manage any potential risks effectively.
            </p>
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Anthrax Testing</h2>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Our anthrax testing services help ensure that your environment is safe from this harmful bacterium, often found in animal products used in older buildings.
            </p>
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>Assessment of Asbestos in Soils</h2>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> Our team also assesses the presence of asbestos in soils, helping in the identification and management of potential risks during construction or landscaping projects.
            </p>
          </div>
          <div>
            <h2 className='text-gray-600 text-3xl pb-4 pt-6'>WAC Samples in Soil</h2>
            <p className='text-xl text-gray-600 px-4 text-left
            md:text-3xl
            md:px-8
            md:leading-10
            '> We perform Waste Acceptance Criteria (WAC) testing on soil samples to determine whether the soil meets the acceptance criteria for landfill disposal.
            </p>
          </div>
        </div>
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

export default SectionTwo