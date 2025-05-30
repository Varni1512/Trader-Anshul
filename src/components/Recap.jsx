import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecapCard from './recap/RecapCard';
import chopstickImg from '../assets/chopstick.svg';
import doubleBottomImg from '../assets/Double-ButtonSVG.svg';
import triangleImg from '../assets/triangle.svg';



function Recap() {
  const navigate = useNavigate();
  const patterns = [
    {
      title: "1-2-3 Chopstick Pattern",
      description: "A reliable reversal pattern consisting of three consecutive candlesticks, indicating a potential trend change.",
      rate: "78%",
      image: chopstickImg
    },
    {
      title: "Double Bottom Bull Flag",
      description: "A powerful continuation pattern that forms during an uptrend, suggesting further bullish momentum",
      rate: "82%",
      image: doubleBottomImg
    },
    {
      title: "Channel and Triangle Pattern",
      description: "A combination pattern showing price movement within parallel lines before breaking out through a triangle formation.",
      rate: "75%",
      image: triangleImg
    }
  ];


  return (
    <section id="trading-recap" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="bg-gray-50 pt-2 pb-1 py-16 px-4 md:px-20 scroll-mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C5530] mb-10">Trading Recap</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 ">
        {patterns.map((item, idx) => (
          <div key={idx} className="w-[380px] h-[420px] mx-auto">
            <RecapCard {...item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 pb-12">
        <button
          onClick={() => navigate('/recapspage')}
          className="bg-[#2C5530] text-white px-6 py-2 rounded hover:bg-green-800 cursor-pointer">
          More Recaps
        </button>
      </div>
    </section>
  );
}

export default Recap;
