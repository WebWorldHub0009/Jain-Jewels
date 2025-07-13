import React from 'react'
import HeroSection from '../Components/HeroSection'
import PopularCategories from '../Components/PopularCategories'
import FeaturedSection from '../Components/FeaturedSection'
import WebsiteStats from '../Components/WebsiteStats'
import CollectionAbout from '../Components/CollectionAbout'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <HeroSection/>
      <PopularCategories/>
      <WebsiteStats/>
      <CollectionAbout/>
      <FeaturedSection/>
    </div>
  )
}

export default Home
