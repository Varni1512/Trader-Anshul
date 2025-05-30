import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Evolution from './components/Evolution';
import Resources from './components/Resources';
import What from './components/What';
import Recap from './components/Recap';
import Blog from './components/Blog';
import Success from './components/Success';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

import TradingBlog from './components/pages/BlogPage';
import TradingArticlePage from './components/pages/TradingArticlePage';
import TradingResources from './components/pages/ResoucesPage';
import TradingRecaps from './components/pages/RecapsPage';

// HomePage component containing the full homepage layout
function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogpage" element={<TradingBlog />} />
          <Route path="/resourcespage" element={<TradingResources />} />
          <Route path="/recapspage" element={<TradingRecaps />} />
          <Route path='/TradingArticlePage' element={<TradingArticlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
