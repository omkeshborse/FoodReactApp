import React from 'react'
import heroBannerBg from '../../assets/hero-banner-bg.png'
import heroBanner from '../../assets/hero-banner.png'
const Hero = () => {
  return (
    <>
    <div>
        <section className="hero" id="home"  >
        <div className="container">

          <div className="hero-content">

            <p className="hero-subtitle">Eat Sleep And</p>

            <h2 className="h1 hero-title">Supper delicious Burger in town!</h2>

            <p className="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>

            <button className="btn">Book A Table</button>

          </div>

          <figure className="hero-banner">
            <img src={heroBannerBg} width="820" height="716" alt="" aria-hidden="true"
              className="w-100 hero-img-bg" />

            <img src={heroBanner} width="700" height="637" loading="lazy" alt="Burger"
              className="w-100 hero-img" />
          </figure>

        </div>
      </section >
    </div>
    </>
  )
}

export default Hero
