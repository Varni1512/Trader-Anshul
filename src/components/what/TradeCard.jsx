import React from 'react';
import { Check } from 'lucide-react';

function TradeCard({ title, points, image }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      )}
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        <ul className="space-y-3 text-gray-700">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="flex items-center justify-center w-3 h-3 rounded-full"
                style={{ backgroundColor: '#2C5530' }}
              >
                <Check className="text-white relative top-[1px]" size={10} />
              </span>
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TradeCard;
