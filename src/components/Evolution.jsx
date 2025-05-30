import React from 'react';
// import { AlertCircle, CheckCircle } from 'lucide-react';
import { XCircle, AlertCircle ,CheckCircle } from 'lucide-react';

function Evolution() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Evolution of a Trader
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
        Understanding the fundamental differences between novice and profitable traders is the first step toward consistent success in the markets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div style={{ fontFamily: "'Inria Sans', sans-serif"}} className="bg-[#FEF2F2] p-6 rounded-lg border border-red-200 font-bold">
          <h3 className="text-xl font-bold text-black-600 mb-4 flex items-center">
            <AlertCircle className="text-red-600 mr-2" size={20} />
              Novice Trader Mindset
          </h3>
          <div className="space-y-4 text-gray-800">
            <div className="flex items-start gap-2">
              <XCircle className="text-red-600 mt-1 " size={16} />
              <span>A novice trader believes he knows the outcome before even placing the trade.</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="text-red-600 mt-1" size={13} />
              <span>He sees a chart pattern and assumes it will behave a certain way.</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="text-red-600 mt-1" size={18} />
              <span>His focus is entirely on the potential reward, with little or no attention to the risk involved.</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="text-red-600 mt-1" size={20} />
              <span>
              Scenario A (Winning Trade):<br />
                  If the trade goes in his favor, he thinks, “I knew this would happen.”<br />
                  This creates a false sense of certainty, reinforcing the dangerous belief that outcomes can be predicted.
              </span>
            </div>
          </div>

        </div> 
        

        <div style={{ fontFamily: "'Inria Sans', sans-serif"}} className="bg-[#F0FDF4] p-6 rounded-lg border border-green-200 font-bold">
          <h3 className="text-xl font-semibold text-black-600 mb-4 flex items-center">
          <CheckCircle className="text-green-600 mr-2" size={20} /> Profitable Trader Mindset
          </h3>
        <div className="space-y-4 text-gray-800">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1" size={18} />
            <span>A profitable trader starts with the awareness that every trade has an uncertain outcome.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1" size={18} />
            <span>He accepts that the market is unpredictable in the short term and focuses instead on preparation.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1" size={18} />
            <span>His first priority is not the potential gain, but managing risk in light of that uncertain outcome.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1" size={30} />
              <span>
                His position sizing stays consistent, his focus remains on long-term performance, and his edge is built around accepting the uncertainty of every single trade.
              </span>
          </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default Evolution;
