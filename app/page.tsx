import Hero from '@/components/Hero'
import Passion from '@/components/Passion'
import FreshEats from '@/components/FreshEats'
import ReservationForm from '@/components/ReservationForm'
import Gallery from '@/components/Gallery'
import PizzaParty from '@/components/PizzaParty'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Passion />
      <FreshEats />
      <ReservationForm />
      <Gallery />
      <PizzaParty />
      <Footer />
    </main>
  )
}

