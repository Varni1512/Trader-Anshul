import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResourceCard from './resources/ResourceCard';
import R1 from '../assets/r1.jpg';
import R2 from '../assets/r2.jpg';
import R3 from '../assets/r3.jpg';
import R4 from '../assets/r4.jpg';
import R5 from '../assets/r5.jpg';
import R6 from '../assets/r6.jpg';

function Resources() {
  const navigate = useNavigate();
  const cards = [
    {
      title: "The IDEAL Trading Mindset",
      description: "Discover the psychological framework that separates consistent winners from the rest.",
      image: R1
    },
    {
      title: "Emotional Intelligence in Trading",
      description: "Learn how to recognize and manage emotions that impact your trading decisions.",
      image: R2
    },
    {
      title: "Engineering Approach to Market Analysis",
      description: "Apply systematic engineering principles to develop robust trading strategies.",
      image: R3
    },
    {
      title: "Weekly Market Recap - May 2025",
      description: "Analysis of recent market movements and preparation for the week ahead.",
      image: R4
    },
    {
      title: "Risk Management Masterclass",
      description: "Essential techniques to protect your capital and maximize returns.",
      image: R5
    },
    {
      title: "From Engineer to Trader: My Journey",
      description: "Personal insights on transitioning from engineering to full-time trading.",
      image: R6
    }
  ];

  return (
    <section id="resources" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="bg-white py-12 px-4 sm:px-6 lg:px-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C5530] mb-3">Resources</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Access insights, strategies, and analysis to help you develop a consistent trading approach and navigate market challenges.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-12 pr-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full max-w-sm mx-auto bg-[#F9FAFB] rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <div className="h-52 w-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a href="#" className="text-green-700 font-semibold hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate('/resourcespage')}
          className="bg-[#2C5530] text-white px-6 py-2 rounded hover:bg-green-800 cursor-pointer">
          More Resources
        </button>
      </div>
    </section>
  );
}

export default Resources;
