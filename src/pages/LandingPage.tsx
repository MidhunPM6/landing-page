import React from 'react'
import HeroSection from '../components/landing-page/HeroSection'
import NavBar from '../components/ui/NavBar'

const LandingPage = () => {
  return (
    <div className='container mx-auto px-4 p-10'>
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default LandingPage
