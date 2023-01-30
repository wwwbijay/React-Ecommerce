import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (    
    <div>
      <Slider />
      <FeaturedProducts />
    </div>
  )
}

export default Home