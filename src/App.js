import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
       <Footer />
    </>
  );
}

export default App;
