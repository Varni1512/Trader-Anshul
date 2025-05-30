


import { useState, useEffect } from 'react';
import C1 from '../assets/c1.jpg';
import C2 from '../assets/c2.jpg';
import C3 from '../assets/c3.jpg';

export default function TraderSuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
 const testimonials = [
  {
    id: 1,
    name: "David Chen",
    image: C1,
    quote: "Michael's analytical approach to market psychology was exactly what I needed. I've reduced my emotional trading and increased my win rate by 35% in just three months."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: C2,
    quote: "The risk management strategies I learned completely transformed my trading. My portfolio has grown 42% since implementing these techniques, and I finally sleep well at night."
  },
  {
    id: 3,
    name: "Robert Williams",
    image: C3,
    quote: "After 5 years of inconsistent results, this program helped me develop a systematic approach that delivers predictable returns. My annual ROI has doubled to 28% year-over-year."
  }
];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif"}} className="bg-[#1b5e4d] w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Trader Success Stories
          </h2>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto">
            Hear from traders who have transformed their approach and results through our coaching and resources.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-[#5e8d7e] bg-opacity-50 rounded-lg p-8 md:p-10 mx-2 md:mx-0 mb-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`flex flex-col md:flex-row items-center transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black text-base md:text-lg italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-4' 
                    : 'bg-white bg-opacity-50'
                }`}
                
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}