import React from 'react';
import logo from '../assets/logo.svg';
import { Youtube, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate(); // ✅ added
  const location = useLocation(); // ✅ added

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    if (id === 'blog') {
      navigate('/blogpage');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer style={{ fontFamily: "'IBM Plex Sans', sans-serif"}} className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Side */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">Trader</span>
          </div>
          <p className="text-sm text-gray-300 pt-6">
            Transforming engineers and analytical<br />
            minds into consistent, profitable<br />
            traders.
          </p>
        </div>

        {/* Center - Quick Links and Resources */}
        <div className="md:col-span-4 flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300 cursor-pointer">
              <li><span onClick={() => handleNavClick('home')} className='hover:text-white'>Home</span></li>
              <li><span onClick={() => handleNavClick('resources')} className='hover:text-white'>Resources</span></li>
              <li><span onClick={() => handleNavClick('trading-recap')} className='hover:text-white'>Trading Recap</span></li>
              <li><span onClick={() => handleNavClick('blog')} className='hover:text-white'>Blog</span></li>
              <li><span onClick={() => handleNavClick('contact')} className='hover:text-white'>Contact</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side - Socials */}
        <div className="md:col-span-4 flex flex-col text-center md:text-right items-center md:items-end">
          <div className="w-full flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-3">Stay connected and keep learning!</h4>
            <div className="flex justify-center pl-24 md:justify-center space-x-4 mt-2 w-full">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 px-4">
        Copyright©2025 Spanish Learning Hub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
