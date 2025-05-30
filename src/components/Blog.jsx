import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog1 from '../assets/blog1.jpg';
import Blog2 from '../assets/blog2.jpg';
import Blog3 from '../assets/blog3.jpg';

export default function TradingBlogPage() {
  const navigate = useNavigate();

  const [blogs] = useState([
    {
      id: 1,
      title: "The Engineering Approach to Market Analysis: A Systematic Trading Framework",
      description: "Learn how to apply engineering principles to develop a robust trading system that removes emotional decision-making and focuses on data-driven results.",
      date: "May 8, 2023",
      readTime: "10 min read",
      author: "Michael Chen",
      role: "Lead Trading Strategist",
      featured: true,
      image: Blog1,
    },
    {
      id: 2,
      title: "Risk Management: The Foundation of Consistent Trading",
      description: "Essential risk management principles every trader needs to master for long-term success.",
      date: "May 7, 2023",
      readTime: "5 min read",
      image: Blog2,
    },
    {
      id: 3,
      title: "Trading Psychology: Managing Emotions in Volatile Markets",
      description: "Practical techniques to maintain emotional discipline during challenging market conditions.",
      date: "May 6, 2023",
      readTime: "7 min read",
      image: Blog3,
    },
  ]);

  return (
    <div id="blog" style={{ fontFamily: "'IBM Plex Sans', sans-serif"}} className="bg-white min-h-screen scroll-mt-24">
      <div className="max-w-8xl mx-auto px-4 py-16 pt-2">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C5530] mb-4">Blog's</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore in-depth articles on trading strategies, market analysis, and psychological insights to
            enhance your trading journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {/* Featured Blog (2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col lg:pl-24">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 h-[700px] w-full relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
                  alt="Trading monitors"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-500">May 8, 2025 • 10 min read</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  The Engineering Approach to Market Analysis: A Systematic Trading Framework
                </h2>
                <p className="text-gray-600">
                  Learn how to apply engineering principles to develop a robust trading system that removes emotional
                  decision-making and focuses on data-driven results.
                </p>
                <div className="flex items-center pt-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Michael Chen</p>
                    <p className="text-xs text-gray-500">Lead Trading Strategist</p>
                  </div>
                  <a
                    href="#"
                    className="absolute right-4 bg-white px-3 py-1 text-green-600 font-semibold"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop: Button below featured blog only (visible only in lg) */}
            <div className="hidden lg:flex justify-end mt-4">
              <button
                onClick={() => navigate('/blogpage')}
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md cursor-pointer"
              >
                More Blog's
              </button>
            </div>
          </div>

          {/* Side Blogs */}
          <div className="space-y-8 lg:pr-24">
            {/* Blog 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tRrIj7TmRV_2MpWPTLi5eMt3ryTr3OZ-Ug&s"
                alt="Graph"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">May 7, 2025 • 5 min read</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Risk Management: The Foundation of Consistent Trading
                </h3>
                <p className="text-gray-600 text-sm">
                  Essential risk management principles every trader needs to master for long-term success.
                </p>
                <a href="#" className="text-green-600 font-semibold inline-block pt-3">
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
                alt="Chess and charts"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">May 6, 2025 • 7 min read</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Trading Psychology: Managing Emotions in Volatile Markets
                </h3>
                <p className="text-gray-600 text-sm">
                  Practical techniques to maintain emotional discipline during challenging market conditions.
                </p>
                <a href="#" className="text-green-600 font-semibold inline-block pt-3">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Button at bottom below all 3 blogs (visible only on small screens) */}
        <div className="flex justify-center mt-6 lg:hidden">
          <button
            onClick={() => navigate('/blogpage')}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md cursor-pointer"
          >
            More Blog's
          </button>
        </div>
      </div>
    </div>
  );
}
