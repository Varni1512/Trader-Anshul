import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import R1 from '../../assets/r1.jpg';
import R2 from '../../assets/r2.jpg';
import R3 from '../../assets/r3.jpg';
import R4 from '../../assets/r4.jpg';
import R5 from '../../assets/r5.jpg';
import R6 from '../../assets/r6.jpg';

const BlogCard = ({ image, date, readTime, title, description, index }) => {
  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={`Trading chart ${index + 1}`}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <Link to="/TradingArticlePage">
          <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 cursor-pointer">
            Read More
            <ArrowRight size={16} className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function TradingResources() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on component mount
  }, []);
  const blogPosts = [
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
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8"> {/* ✅ Added top padding */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource's</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access insights, strategies, and analysis to help you develop a consistent trading approach and navigate market challenges.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                index={index}
                image={post.image}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
