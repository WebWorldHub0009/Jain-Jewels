import React from 'react'
import HeroSection from '../Components/HeroSection'
import PopularCategories from '../Components/PopularCategories'
import FeaturedSection from '../Components/FeaturedSection'
import WebsiteStats from '../Components/WebsiteStats'
import CollectionAbout from '../Components/CollectionAbout'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <PopularCategories/>
      <WebsiteStats/>
      <CollectionAbout/>
      <FeaturedSection/>
    </div>
  )
}

export default Home
