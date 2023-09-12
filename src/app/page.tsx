"use client"

import SectionOne from '../../components/sectionOne';
import SectionTwo from '../../components/sectionTwo';
import ContactSection from '../../components/contactSection';
import AboutAsbestos from '../../components/aboutAsbestos';
import OurCommitment from '../../components/ourCommitment';
import Footer from '../../components/footer';

// main component
const Home: React.FC = () => {
  return (
    <div className="bg-backgroundTwo">    
          <SectionOne />
          <SectionTwo />
          <OurCommitment />
          <AboutAsbestos />
          <ContactSection />
          <Footer />
    </div>
  );
};

export default Home;
