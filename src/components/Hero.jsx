import React, { useState } from 'react';
import manpic from '../assets/man.jpg';
import background from '../assets/background.png';


function Hero() {
  const books = [
    {
      quote: `We could post our trading rules on the front page of the Wall Street Journal, and still people would not be able to make money from them.`,
      author: 'Richard Dennis',
    },
    {
      quote: `We could post our trading rules on the front page of the Wall Street Journal, and still people would not be able to make money from them.`,
      author: 'Paul Tudor Jones',
    },
    {
      quote: `It’s not whether you’re right or wrong that’s important, but how much money you make when you’re right and how much you lose when you’re wrong.`,
      author: 'George Soros',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? books.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === books.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative py-10 pl-12 px-4 md:py-16 md:px-10"
    >


      <div className="flex flex-col-reverse pt-24 md:flex-row items-center justify-center md:gap-0">
        {/* Left Card (Quotes) */}
        <div className="w-full md:w-[640px] flex flex-col items-center md:items-start px-4 md:px-10 mt-10 md:mt-0">
          <div className="relative bg-white rounded-[10px] border border-[#D5CECE] shadow-md p-6 md:p-10 w-full h-[300px] md:h-[300px]">

            <p className="text-green-700 italic text-3xl md:text-2xl">
              "{books[currentIndex].quote}"
            </p>


            <p className="text-right text-base text-green-700 mt-4">- {books[currentIndex].author}</p>

            {/* Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-[-28px] top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md bg-green-700 cursor-pointer"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-[-28px] top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md bg-green-700 cursor-pointer"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="w-full flex justify-center mt-4">
            <div className="flex space-x-2">
              {books.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card (Image) */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-10">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg relative w-full max-w-xs h-96">
            <img src={manpic} alt="Expert" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">Expert Trading Guidance</h3>
              <p className="text-white text-sm">Simplify your trading journey with our proven strategies</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
