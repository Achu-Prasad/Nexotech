import React from 'react' 
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Floatingbackground from './components/FloatingBackground'
import PortfolioSection from './components/PortfolioSection'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioSection/>
      <Floatingbackground/>
    </>
  )
}

export default App