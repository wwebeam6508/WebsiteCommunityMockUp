import React from 'react';
import { CategoryTag } from '../layout/TwoGrid.layout';

interface CategoryProps {
  categories: CategoryTag[];
  className: string;
}

const Category: React.FC<CategoryProps> = ({ categories, className }) => {
  return (
    <div className={`border-t-2 bg-white text-gray-800 w-64 p-5 ${className}`}>
      <h3 className="font-bold text-lg mb-4">Most Tags</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={`py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-colors duration-150 cursor-pointer rounded-md`}>
            {category.name}
          </li>
        ))}
        <li className="bg-white-500 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <a href="#" className="flex justify-center">More</a>
        </li>
      </ul>
    </div>
  );
};

export default Category;