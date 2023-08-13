"use client";

const AboutAsbestos = () => {
  return (
    <section className="m-auto text-center">
      <h1 className="subtitles">
        About Asbestos
      </h1>
      <section className="flex flex-col gap-1 p-4 md:flex-row md:flex-wrap m-auto w-full tex-center">
        <div className="card"> 
          <h2 className="contentTitle">
            What is Asbestos?
          </h2>
          <p className="paragraph">
            {" "}
            Asbestos is a group of six naturally occurring minerals made up of
            flexible, heat-resistant fibres.
          </p>
          <p className="paragraph">
            {" "}
            Historically, it was widely used in construction due to its
            insulating properties and resistance to chemical erosion.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">
            Why is Asbestos Dangerous?
          </h2>
          <p className="paragraph">
            {" "}
            When materials containing asbestos are disturbed, tiny fibres can be
            released into the air.
          </p>
          <p className="paragraph">
            {" "}
            These fibres, when inhaled, can cause serious health issues such as
            asbestosis, lung cancer, and mesothelioma.
          </p>
          <p className="paragraph">
            {" "}
            The risk is particularly high in buildings constructed or
            refurbished before the year 2000.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">Regulations</h2>
          <p className="paragraph">
            {" "}
            Asbestos is now banned in many countries, including the UK.
          </p>
          <p className="paragraph">
            {" "}
            However, due to its historical use, asbestos-containing materials
            (ACMs) are still present in many properties.
          </p>
          <p className="paragraph">
            {" "}
            Regulations require that ACMs are identified and managed properly to
            ensure safety.
          </p>
        </div>
        <div className="card">
          <h2 className="contentTitle">Our Role</h2>
          <p className="paragraph">
            {" "}
            As a specialised asbestos management company, we are committed to
            protecting people and properties from the hazards of asbestos.
          </p>
          <p className="paragraph">
            {" "}
            Through our comprehensive surveying and non-licensed removal
            services, we ensure regulatory compliance and, most importantly,
            peace of mind for our clients.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutAsbestos;
