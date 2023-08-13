"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SectionTwoProps {
  // Add any props if needed
}

// Main component
const SectionTwo: React.FC<SectionTwoProps> = () => {
  const [firstParagraphContent, setFirstParagraphContent] = useState(false);
  const [secondParagraphContent, setSecondParagraphContent] = useState(false);
  const [thirdParagraphContent, setThirdParagraphContent] = useState(false);

  // Toggles the first paragraph content
  const toggleFirstParagraphContent = () => {
    setFirstParagraphContent((prev) => !prev);
  };

  // Toggles the second paragraph content
  const toggleSecondParagraphContent = () => {
    setSecondParagraphContent((prev) => !prev);
  };

  // Toggles the third paragraph content
  const toggleThirdParagraphContent = () => {
    setThirdParagraphContent((prev) => !prev);
  };

  const firstParagraph = (
    <>
      <p className="paragraph">
        {" "}
        Our surveyors are trained to the highest level, with expertise spanning
        a variety of environments, including airports, rail and docks,
        commercial office spaces, redevelopment sites, residential properties,
        educational establishments, healthcare facilities, industrial premises,
        Ministry of Defence establishments, National Heritage sites, and secure
        establishments.
      </p>
    </>
  );

  const restOfContent = (
    <>
      <p className="paragraph">
        This includes comprehensive asbestos and hazardous material surveys,
        re-inspections, sampling surveys, and management of asbestos registers,
        development of robust management plans, formulating risk management
        strategies, preparing policy and procedure documents, managing
        procurement and overseeing remedial works, carrying out audits,
        conducting exposure assessments, and risk assessment and remedial
        strategies for asbestos in soils.
      </p>
    </>
  );

  const secondParagraph = (
    <>
      <p className="paragraph">
        {" "}
        Whilst our speciality lies in non-licensed asbestos removal, we
        acknowledge that some situations demand licensed removal.
      </p>
      <p className="paragraph">
        {" "}
        For such scenarios, we have established affiliations with fully licensed
        removal companies that share our commitment to safety and
        professionalism.
      </p>
    </>
  );

  const secondContent = (
    <>
      <p className="paragraph">
        {" "}
        In choosing our services, you benefit from our extensive network and the
        simplicity of a single liaison point.
      </p>
      <p className="paragraph">
        Rest assured that we coordinate the optimal solution for all your
        asbestos-related requirements.
      </p>
    </>
  );

  const content = firstParagraphContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {firstParagraph}
      {restOfContent}
      <button className="text-blue-500 md:text-2xl lg:text-lg" onClick={toggleFirstParagraphContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {firstParagraph}
      <button className="text-blue-500 md:text-2xl lg:text-lg" onClick={toggleFirstParagraphContent}>
        Read more
      </button>
    </div>
  );

  const contentTwo = secondParagraphContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {secondParagraph}
      {secondContent}
      <button className="text-blue-500 md:text-2xl lg:text-lg" onClick={toggleSecondParagraphContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {secondParagraph}
      <button className="text-blue-500 md:text-2xl lg:text-lg" onClick={toggleSecondParagraphContent}>
        Read more
      </button>
    </div>
  );

  const thirdContent = (
    <>
      <p className="paragraph">
        {" "}
        Soft strip services play a vital role in the process of asbestos
        management.
      </p>
      <p className="paragraph">
        {" "}
        Prior to refurbishment or demolition, non-structural elements are
        carefully removed from buildings.
      </p>
      <p className="paragraph">
        {" "}
        Our expert team handles everything from internal fixtures and fittings
        to finishes down to the structural elements.
      </p>
    </>
  );

  const contentThee = (
    <>
      <p className="paragraph">
        {" "}
        This not only prepares the building for refurbishment or demolition but
        also allows for the identification and removal of any hidden hazardous
        material, such as asbestos.
      </p>
      <p className="paragraph">
        {" "}
        The soft strip process goes hand in hand with our asbestos surveying and
        removal services, providing a comprehensive approach to maintaining a
        safe environment.
      </p>
      <p className="paragraph">
        {" "}
        Trust us to carry out these operations meticulously and safely,
        minimizing risk and disruption.
      </p>
    </>
  );

  const contentThree = thirdParagraphContent ? (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {thirdContent}
      {contentThee}
      <button className="text-blue-500 md:text-2xl lg:text-lg" onClick={toggleThirdParagraphContent}>
        Read less
      </button>
    </div>
  ) : (
    <div className="content-transition overflow-hidden transition-max-height duration-200">
      {thirdContent}
      <button className="text-blue-500 md:text-2xl lg:text-lg" onClick={toggleThirdParagraphContent}>
        Read more
      </button>
    </div>
  );

  return (
    <section className="m-auto text-center">
      <h1
        className="subtitles">
        Our Services
      </h1>
      <div className="flex flex-col gap-1 p-4 md:flex-row md:flex-wrap m-auto w-full tex-center md:p-2 lg:p-0">
        <div className="card">
          <h2 className="contentTitle">Asbestos Surveying</h2>
          {content}
        </div>
        <div className="card">
          <h2 className="contentTitle">Associated Licensed Asbestos Removal</h2>
          {contentTwo}
        </div>
        <div className="card">
          <h2 className="contentTitle">Air Monitoring</h2>
          <p className="paragraph">
            {" "}
            In partnership with UKAS accredited organizations, we provide air
            monitoring services to ensure the ongoing safety of your environment
            following asbestos disturbance or removal.
          </p>
          <p className="paragraph">
            {" "}
            Our partners are fully certified with ISO 9001, ISO 45001, ISO
            14001, and ISO/IEC 17025:2017.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">Soft Strip Works</h2>
          {contentThree}
        </div>
        <div className="card">
          <h2 className="contentTitle">Lead Testing</h2>
          <p className="paragraph">
            {" "}
            We provide accurate testing for lead within properties to help you
            manage any potential risks effectively.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">Anthrax Testing</h2>
          <p className="paragraph">
            {" "}
            Our anthrax testing services help ensure that your environment is
            safe from this harmful bacterium, often found in animal products
            used in older buildings.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">Assessment of Asbestos in Soils</h2>
          <p className="paragraph">
            {" "}
            Our team also assesses the presence of asbestos in soils, helping in
            the identification and management of potential risks during
            construction or landscaping projects.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">WAC Samples in Soil</h2>
          <p className="paragraph">
            {" "}
            We perform Waste Acceptance Criteria (WAC) testing on soil samples
            to determine whether the soil meets the acceptance criteria for
            landfill disposal.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">Non-Licensed Asbestos Removal</h2>
          <p className="paragraph">
            {" "}
            We specialise in the secure and efficient removal of non-licensed
            asbestos, adhering strictly to health and safety regulations while
            causing minimal disruption.
          </p>
        </div>
      </div>
      <Image
        className=" 
            m-auto
            mt-6
            mb-6
            md:w-[70%]
            lg:w-[50%]
            md:pt-12
            "
        src="/asbestos4.svg"
        alt="asbestos"
        width="300"
        height="300"
      />
    </section>
  );
};

export default SectionTwo;
