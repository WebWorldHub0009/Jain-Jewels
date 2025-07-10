import React from 'react'
import HeroAbout from '../Components/AboutHero'
import HeroSection from '../Components/HeroSection'
import CollectionAbout from '../Components/CollectionAbout'
import WhyChooseUs from '../Components/WhyChooseUs'
import AboutSection from '../Components/AboutSection'
import OwnerSection from '../Components/OwnerSection'
import OurTeam from '../Components/Team'

const About = () => {
  return (
    <div>
      <HeroAbout/>
      <AboutSection/>
      <WhyChooseUs/>
      <OwnerSection/>
      <OurTeam/>
    </div>
  )
}

export default About
