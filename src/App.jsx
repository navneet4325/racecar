import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Garage from './components/Garage';
import Performance from './components/Performance';
import FeatureHighlight from './components/FeatureHighlight';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';
import './index.css';

function App() {
  // Initialise Lenis smooth-scroll + GSAP ScrollTrigger bridge (no JSX changes)
  useLenis();

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Garage />
      <Performance />
      <FeatureHighlight />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
