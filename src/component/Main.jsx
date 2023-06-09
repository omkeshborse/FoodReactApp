import React from "react"
import Hero from "./MainSub/Hero"
import Promo from "./MainSub/Promo"
import About from "./MainSub/About"
import FoodMenu from "./MainSub/FoodMenu"
import Cta from "./MainSub/Cta"
import Delivery from "./MainSub/Delivery"
import Testimonals from "./MainSub/Testimonals"
import Banner from "./MainSub/Banner"
import Blog from "./MainSub/Blog"
const Main = () => {
  return (
    <main>
    <Hero/>
    <Promo/>
    <About/>
    <FoodMenu/>
    <Cta/>
    <Delivery/>
    <Testimonals/>
    <Banner/>
    <Blog/>
    </main>
  )
}

export default Main
