"use client"

import { useState } from 'react';
import SectionOne from '../../components/sectionOne';
import SectionTwo from '../../components/sectionTwo';
import ContactSection from '../../components/contactSection';
import AboutAsbestos from '../../components/aboutAsbestos';
import OurCommitment from '../../components/ourCommitment';
import Footer from '../../components/footer';
import LoadingComponent from '../../components/loadingComponent';

// main component
const Home: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // handle loading complete
  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };
  return (
    <div className="bg-backgroundTwo">
      {loadingComplete ? (
        <>
          <SectionOne />
          <SectionTwo />
          <OurCommitment />
          <AboutAsbestos />
          <ContactSection />
          <Footer />
        </>
      ) : (
        // loading component
        <LoadingComponent onComplete={handleLoadingComplete} />
      )}
    </div>
  );
};

export default Home;
