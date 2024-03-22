import React from 'react'
import Hero from './Hero'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfoloi from '../pages/Portfoloi'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/><br/><br/><br/><br/><br/><br/>
      <Portfoloi/>
      <Testimonials/><br/><br/><br/><br/><br/>
      <Contact/>
    </div>
  )
}


export default Home
