import React from 'react' 
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Floatingbackground from './components/FloatingBackground'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Floatingbackground/>
    </>
  )
}

export default App