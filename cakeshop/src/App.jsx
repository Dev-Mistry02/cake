import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCakes from './components/FeaturedCakes'
import SignatureCollection from './components/SignatureCollection'
import OurStory from './components/OurStory'
import BehindTheScenes from './components/BehindTheScenes'
import CustomCakeBuilder from './components/CustomCakeBuilder'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-hidden selection:bg-accent/30">
        <Navbar />
        <main>
          <Hero />
          <FeaturedCakes />
          <SignatureCollection />
          <OurStory />
          <BehindTheScenes />
          <CustomCakeBuilder />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
