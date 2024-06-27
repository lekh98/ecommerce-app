import React, { useState } from 'react'
import './Home.css'
import Hero from './../../Components/Hero/Hero';
import ExploreCategory from './../../Components/ExploreCategory/ExploreCategory';
import ProductDisplay from './../../Components/ProductDisplay/ProductDisplay';

import AppDownload from './../../Components/AppDownload/AppDownload';

const Home = () => {
    const [category,setCategory] = useState("all")
  return (
   
    <div>
        <Hero />
        <ExploreCategory category={category} setCategory={setCategory} />
        <ProductDisplay category={category}/>
        <AppDownload />

      
    </div>
  )
}

export default Home
