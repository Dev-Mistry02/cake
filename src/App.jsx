import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCakes from './components/FeaturedCakes'
import SignatureCollection from './components/SignatureCollection'
import OurStory from './components/OurStory'
// import BehindTheScenes from './components/BehindTheScenes'
import CustomCakeBuilder from './components/CustomCakeBuilder'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionMarquee from './components/SectionMarquee'

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative overflow-hidden selection:bg-accent/31">
        <Navbar />
        <main>
          <Hero />
          <SectionMarquee />
          <FeaturedCakes />
          <SectionMarquee />
          <SignatureCollection />
          <SectionMarquee />
          <OurStory />
          <SectionMarquee />
          <CustomCakeBuilder />
          <SectionMarquee />
          <Testimonials />
          <SectionMarquee />
          <Contact />
        </main>
        <SectionMarquee />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
