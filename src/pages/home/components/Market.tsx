import React from 'react';
import { MarketPost } from '../layout/TwoGrid.layout';

interface MarketProps {
  marketPost: MarketPost[];
  className: string;
}

const Market: React.FC<MarketProps> = ({ marketPost, className }) => {
  return (
    <div className={`border-t-2 bg-white text-gray-800 w-64 p-5 ${className}`}>
      <h3 className="font-bold text-lg mb-4">Market</h3>
      <ul>
        {marketPost.map((market, index) => (
          <li key={index} className={`py-2 max-w-md bg-white rounded-lg shadow-sm flex p-4 space-x-4 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-colors duration-150 cursor-pointer rounded-md`}>
            {market.thumnail && (
              <img src={market.thumnail} alt={market.signature} className="w-10 h-10 rounded-lg object-cover" /> // Adjust size as necessary
            )}
            <div className="w-3/4 space-y-2">
              <h2 className="text-md font-semibold">{market.signature}</h2>
              <p className="text-sm">{market.title}</p>
            </div>
          </li>
        ))}
        <li className="bg-white-500 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <a href="#" className="flex justify-center">More</a>
        </li>
      </ul>

    </div>
  );
};

export default Market;