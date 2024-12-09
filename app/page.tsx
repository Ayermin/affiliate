import Header from './components/Header'
import Hero from './components/Hero'
import ProductFeatures from './components/ProductFeatures'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      <Header />
      <main>
        <Hero />
        <ProductFeatures />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

