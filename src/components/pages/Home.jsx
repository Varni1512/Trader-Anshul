import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Evolution from '../components/Evolution';
import Resources from '../components/Resources';
import What from '../components/What';
import Recap from '../components/Recap';
import Blog from '../components/Blog';
import Success from '../components/Success';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Evolution />
      <Resources />
      <Recap />
      <What />
      <Blog />
      <Success />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
