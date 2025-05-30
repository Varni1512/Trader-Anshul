import React, { useState } from 'react';

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const questions = [
    "What makes your trading approach different?",
    "How long does it take to become profitable?",
    "What markets do you trade?"
  ];

  return (
    <section style={{ fontFamily: "'IBM Plex Sans', sans-serif"}} className="py-10 px-4 sm:px-6 md:px-8 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2C5530]">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-900 mt-2 mb-8 text-sm sm:text-base">
        Find answers to common questions about my trading approach, coaching services, and how I <br className="hidden sm:block" /> can help you develop as a trader.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((q, index) => (
          <div
            key={index}
            className={`border-2 border-gray-500 rounded-full px-4 sm:px-6 py-2 cursor-pointer hover:bg-gray-100 font-semibold transition-all duration-200 ${
              active === index ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[16px] sm:text-[18px] font-medium text-left w-full">
                {q}
              </span>
              <span className="text-[20px] sm:text-[22px] ml-4">
                {active === index ? '−' : '+'}
              </span>
            </div>
            {active === index && (
              <p className="mt-2 text-sm text-gray-800 font-normal text-left px-2 sm:px-4">
                [Answer Placeholder]
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
