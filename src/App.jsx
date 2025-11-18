import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedBikes from './components/FeaturedBikes'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBikes />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
