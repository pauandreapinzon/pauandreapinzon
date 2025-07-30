import Header from "./components/Header"
import AIServices from "./components/AIServices"
import AboutMe from "./components/AboutMe"
import CallToAction from "./components/CallToAction"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B0B2B] text-white">
      <Header />
      <AIServices />
      <AboutMe />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  )
}
