import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import Coaches from './components/Coaches';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Offer />
        <Coaches />
        <Reviews />
        <Pricing />
        <Faq />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default App;
