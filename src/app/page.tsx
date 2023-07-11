"use client"


import SectionOne from '../../components/sectionOne'
import SectionTwo from '../../components/sectionTwo'
import ContactSection from '../../components/contactSection'
import Footer from '../../components/footer'

export default function Home() {
  return(
    <div className='bg-orange-100/90'>
      < SectionOne />
      < SectionTwo />
      < ContactSection />
      < Footer />
    </div>
  )
}
