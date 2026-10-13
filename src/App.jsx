import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import MoreWork from './components/MoreWork.jsx'
import Approach from './components/Approach.jsx'
import Archive from './components/Archive.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-mustard focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Featured />
        <MoreWork />
        <Approach />
        <Archive />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
