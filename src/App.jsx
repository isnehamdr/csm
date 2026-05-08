import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import About from './components/About'
import Solutions from './components/Solutions'
import Services from './components/Services'
import Faq from './components/Faq'
import BacktoTop from './components/BacktoTop'
import Footer from './components/Footer'
import HRMS from './components/HRMS'
import Testimonial from './components/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
      <BacktoTop/>
     <About/>
     <Solutions/>
     <Services/>
     <HRMS/>
     <Faq/>
     <Testimonial/>
     <Footer/>
    

    </>
  )
}

export default App
