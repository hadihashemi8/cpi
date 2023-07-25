import React from 'react'
import Categories from '../../Components/Categories/Categories'
import Articles from '../../Components/Articles/Articles'
import Questions from '../../Components/Questions/Questions'
import Properties from '../../Components/Properties/Properties'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import HomeMainSlider from '../../Components/HomeMainSlider/HomeMainSlider'

export default function Home() {



  return (
    <div className="pt-28" >
      <NavBar />
      <HomeMainSlider/>
      <Categories title="دسته بندی محصولات" />
      <Articles  title="مقالات "/>
      <Questions />
      <Properties />
      <Footer />
    </div>
  )
}
