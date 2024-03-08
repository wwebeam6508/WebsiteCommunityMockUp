import React from 'react';
import { FamilyList } from '../layout/TwoGrid.layout';

interface Props {
  className: string;
  lists: FamilyList[];

}

const FamilyGrid: React.FC<Props> = ({ lists, className }) => {
  // Implement your component logic here

  return (
    <div className={`border-t-2 bg-white text-gray-800 w-64 p-5 ${className}`}>
      <h3 className="font-bold text-lg mb-4">เว็บในเครือ</h3>
      <div className='grid grid-cols-2 gap-1'>
        {lists.map((list, index) => (
          <a href="#" key={index} className='flex  items-center space-x-2'>
            <img src={list.thumnail} className="w-10 h-10 rounded-lg object-cover" />
          </a>
        ))}
      </div>
      <a href="#" className="hover:bg-gray-300 flex m-3 justify-center">ติดต่อลงโฆษณา</a>
    </div>
  );
};

export default FamilyGrid;