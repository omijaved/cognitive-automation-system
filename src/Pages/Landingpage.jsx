import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonial'
import Calendar from '../components/Calender'
import Footer from '../components/Footer'

const Landingpage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Testimonials />
        <Calendar />
        <Footer />
    </div>
  )
}

export default Landingpage