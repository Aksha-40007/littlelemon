import React from 'react'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Specials from '../components/Specials'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
    </>
  )
}

export default HomePage
