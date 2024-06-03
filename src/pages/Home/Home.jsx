import React from 'react'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/Services'
import Testimonials from '../../components/testimonials/Testimonials'
import Guide from '../../components/guide/Guide'
import CtaIndex from '../../components/cta/CtaIndex'
import Features from '../../components/features/Features'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Testimonials/>
    <Guide/>
    <CtaIndex/>
    <Features/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Home