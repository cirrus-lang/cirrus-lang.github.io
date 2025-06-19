import { Header } from './components/Header';
import { Hero } from './components/LandingPage/Hero';
import { Features } from './components/LandingPage/Features';
import { GetStarted } from './components/LandingPage/GetStarted';
import { FAQ } from './components/LandingPage/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <GetStarted />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App