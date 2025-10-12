import React from 'react'
import HomeService from '../pages/HomeService'
import Slider from '../header/Slider'
import AtomSpinner from './Animation'
import HomePortfl from '../pages/HomePortfl'
import HomeAbout from '../pages/HomeAbout'
import ParticleBG from '../animations/ParticleBG'
import WireTorus from '../animations/ParticleBG'
import ScrollVelocity from '../animations/AnimationText'
import HomeWhy from '../pages/HomeWhy'

function Home() {
  return (
    <>

      <section id='slider'>
        <Slider />
      </section>
      {/* <ScrollVelocity/> */}
      <section>
        <HomeAbout />
      </section>
      <section id='whysecim'>
<HomeWhy/>
      </section>
      <section id='Homeservice' className='relative'>
        <WireTorus />
        <HomeService />
      </section>
      <section id='Homeportf'>
        <HomePortfl />
      </section>

    </>
  )
}

export default Home