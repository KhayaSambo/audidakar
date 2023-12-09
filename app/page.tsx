"use client"
import Hero from './Components/HeroSection'
import TitleSection from './Components/TitleSection'
import RallyDetails from './Components/RallyDetails'
import CTASection from './Components/CTASection'
import './page.css'

function Home() {
  return (
    <>
    <main>
      <Hero />
      <TitleSection />
      <RallyDetails />
      {/* <CTASection /> */}
      </main>
    </>
  )
}

export default Home
