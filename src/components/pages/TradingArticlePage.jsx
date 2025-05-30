import React,{ useEffect } from 'react';
import { Clock, User, Folder } from "lucide-react"; // Replace with Heroicons if you're using those
import Footer from '../Footer';
import Header from '../Header';

export default function TradingArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on component mount
  }, []);
  return (
    <>
      <Header />
      <div style={{ fontFamily: "'IBM Plex Sans', sans-serif"}} className=" bg-white ">
        {/* Header Image */}
        <div className="w-full h-128 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center"
            alt="Trading Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Meta Info */}
          <div className="flex items-center text-green-600 text-sm font-bold mb-4 space-x-4">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>May 16, 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <User size={16} />
              <span>By Trading Expert</span>
            </div>
            <div className="flex items-center space-x-1">
              <Folder size={16} />
              <span>Market Analysis</span>
            </div>
          </div>


          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
            The Engineering Approach to Market Analysis: A Systematic Trading Framework
          </h1>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The engineering approach to market analysis applies principles of systems engineering,
              data analysis, and algorithmic thinking to the financial markets, aiming to build a
              structured and repeatable trading framework. Unlike traditional discretionary trading,
              which often relies on subjective judgment and emotional decision-making, this approach
              emphasizes systematic analysis, quantitative models, and data-driven strategies. It begins
              with problem definition, where the trader identifies specific goals (e.g., outperforming a
              benchmark, managing risk exposure, or exploiting inefficiencies). This is followed by data
              acquisition and preprocessing, involving the collection of historical and real-time market
              data such as prices, volumes, and macroeconomic indicators, then cleaning and
              transforming it into a usable format.
            </p>

            <p>
              Next comes the model development phase, where predictive models are designed using
              statistical techniques, machine learning algorithms, or rule-based logic. These models aim
              to capture market patterns, trends, or anomalies and are often backtested on historical
              data to evaluate their predictive power and robustness. Engineers in this context focus on
              optimizing performance metrics like Sharpe ratio, drawdown, and hit rate, while ensuring
              the strategy avoids overfitting.
            </p>

            <p>
              The framework also includes risk management and portfolio construction, where tools like
              position sizing, stop-loss levels, and diversification techniques are applied to control
              exposure and maximize risk-adjusted returns. Importantly, the entire system is automated
              using programming languages (e.g., Python, R, or MATLAB) and integrated with APIs for
              live trading and data feeds. The system is continuously monitored, and feedback loops are
              implemented to retrain models or adjust parameters based on performance metrics.
            </p>

            <p>
              In summary, the engineering approach treats trading as a dynamic optimization problem
              within a controlled system, leveraging quantitative methods, automation, and robust
              testing to create consistent, scalable, and emotion-free trading strategies. This disciplined,
              iterative process reflects the core philosophy of engineering: build, test, refine, and
              optimize.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
