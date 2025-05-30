import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import chopstickImg from '../../assets/chopstick.svg';
import doubleBottomImg from '../../assets/Double-ButtonSVG.svg';
import triangleImg from '../../assets/triangle.svg';


const BlogCard = ({ image, rate, title, description, index }) => {
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
                <div className="flex justify-between items-center text-sm mt-2 text-[#2C5530]">
                    <p className="font-normal text-gray-500">Success Rate: {rate}</p>
                    <a
                        href="/TradingArticlePage"
                        className="text-green-700 font-medium hover:underline hover:text-green-900 transition-colors"
                    >
                        Learn More →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function TradingRecaps() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top on component mount
    }, []);
    const blogPosts = [
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
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8"> {/* ✅ Added top padding */}
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trading Recap</h1>
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
                                title={post.title}
                                description={post.description}
                                rate={post.rate}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
