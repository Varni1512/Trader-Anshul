import React,{ useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, readTime, title, description, index }) => {
  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif"}} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={`Trading chart ${index + 1}`}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
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

export default function TradingBlog() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on component mount
  }, []);
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center",
      date: "May 7, 2025",
      readTime: "5 min read",
      title: "Risk Management: The Foundation of Consistent Trading",
      description: "Essential risk management principles every trader needs to master for long-term success."
    },
    {
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop&crop=center",
      date: "May 7, 2025",
      readTime: "6 min read",
      title: "Technical Analysis: Chart Patterns That Work",
      description: "Learn to identify and trade the most reliable chart patterns used by professional traders."
    },
    {
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop&crop=center",
      date: "May 7, 2025",
      readTime: "7 min read",
      title: "Market Psychology: Understanding Trader Emotions",
      description: "How emotions drive market movements and how to use this knowledge to your advantage."
    },
    {
      image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=400&h=300&fit=crop&crop=center",
      date: "May 6, 2025",
      readTime: "4 min read",
      title: "Building Your Trading Strategy Framework",
      description: "A systematic approach to developing and testing profitable trading strategies."
    },
    {
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop&crop=center",
      date: "May 5, 2025",
      readTime: "8 min read",
      title: "Advanced Options Trading Techniques",
      description: "Complex options strategies for experienced traders looking to enhance returns."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      date: "May 4, 2025",
      readTime: "6 min read",
      title: "Cryptocurrency Trading: Digital Asset Strategies",
      description: "Navigate the volatile crypto markets with proven strategies and risk management."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8"> {/* ✅ Added top padding */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog's</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              # Smart trading, sharp management—mastering markets with clarity and control.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                index={index}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
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
