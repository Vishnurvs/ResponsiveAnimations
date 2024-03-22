import React from 'react'
import Header from '../common/Header'
import Home from '../home/Home'
import About from './About'
import Services from './Services'
import Portfoloi from './Portfoloi'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from '../common/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const Page = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfoloi/>}/>
          <Route path='/skills' element={<Testimonials/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default Page
