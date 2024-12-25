'use client'
import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Objectives from '../components/Objectives'
import Services from '../components/Services'
import Speaker from '../components/Speaker'

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Objectives/>
      <Events/>
      <Speaker/>
      <Testimonials/>
      <Contact/>
    </main>
  )
}

export default Home
