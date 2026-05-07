import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import About from './components/About'
import Solutions from './components/Solutions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Solutions/>

    </>
  )
}

export default App
