"use client"


import SectionOne from '../../components/sectionOne'
import SectionTwo from '../../components/sectionTwo'
import ContactSection from '../../components/contactSection'
import AboutAsbestos from '../../components/aboutAsbestos'
import OurCommitment from '../../components/ourCommitment'
import Footer from '../../components/footer'

export default function Home() {
  return(
    <div className='bg-white'>
      < SectionOne />
      < SectionTwo />
      < OurCommitment />
      < AboutAsbestos />
      < ContactSection />
      < Footer />
    </div>
  )
}
