import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    if (id === 'blog') {
      navigate('/blogpage'); // ⬅️ Navigate to BlogPage route
      setMenuOpen(false);
      return;
    }
    if (id === 'resources') {
      navigate('/resourcespage'); // ⬅️ Navigate to BlogPage route
      setMenuOpen(false);
      return;
    }
    if (id === 'trading-recap') {
      navigate('/recapspage'); // ⬅️ Navigate to BlogPage route
      setMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span onClick={() => handleNavClick('home')}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '164px',
              height: '88px',
            }}
            className="cursor-pointer"
          />
        </span>

        {/* Center Nav Links (hidden on mobile) */}
        <ul className="hidden md:flex space-x-12 text-gray-600 font-medium mx-auto absolute left-1/2 transform -translate-x-1/2">
          <li><span onClick={() => handleNavClick('home')} className="hover:text-green-700 cursor-pointer">Home</span></li>
          <li><span onClick={() => handleNavClick('resources')} className="hover:text-green-700 cursor-pointer">Resources</span></li>
          <li><span onClick={() => handleNavClick('trading-recap')} className="hover:text-green-700 cursor-pointer">Trading Recap</span></li>
          <li><span onClick={() => handleNavClick('blog')} className="hover:text-green-700 cursor-pointer">Blog</span></li>
          <li><span onClick={() => handleNavClick('contact')} className="hover:text-green-700 cursor-pointer">Contact</span></li>
        </ul>

        {/* Book Button (hidden on mobile) */}
        <button
          className="hidden md:block bg-[#2C5530] text-white px-4 py-2 rounded-md hover:bg-green-800 cursor-pointer"
        >
          Schedule Your Free Consultation
        </button>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <ul className="flex flex-col gap-2 text-gray-600 font-medium">
            <li><span onClick={() => handleNavClick('home')} className="hover:text-green-700 cursor-pointer">Home</span></li>
            <li><span onClick={() => handleNavClick('resources')} className="hover:text-green-700 cursor-pointer">Resources</span></li>
            <li><span onClick={() => handleNavClick('trading-recap')} className="hover:text-green-700 cursor-pointer">Trading Recap</span></li>
            <li><span onClick={() => handleNavClick('blog')} className="hover:text-green-700 cursor-pointer">Blog</span></li>
            <li><span onClick={() => handleNavClick('contact')} className="hover:text-green-700 cursor-pointer">Contact</span></li>
          </ul>
          <button
            style={{ backgroundColor: '#2C5530' }}
            className="text-white w-full px-4 py-2 rounded-md hover:bg-green-900"
          >
            Book a Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
