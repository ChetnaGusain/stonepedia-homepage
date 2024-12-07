import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Products />
      <Features/>
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
