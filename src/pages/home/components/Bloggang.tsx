import React from 'react';
import { BloggangPost } from '../layout/TwoGrid.layout';

interface BloggangProps {
  bloggang: BloggangPost[];
  className: string;
}

const Bloggang: React.FC<BloggangProps> = ({ bloggang, className }) => {
  return (
    <div className={`border-t-2 bg-white text-gray-800 w-64 p-5 ${className}`}>
      <h3 className="font-bold text-lg mb-4">Bloggang</h3>
      <ul>
        {bloggang.map((blog, index) => (
          <li key={index} className={`py-2 max-w-md bg-white rounded-lg shadow-sm flex p-4 space-x-4 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-colors duration-150 cursor-pointer rounded-md`}>
            {blog.thumnail && (
              <img src={blog.thumnail} alt={blog.signature} className="w-10 h-10 rounded-lg object-cover" /> // Adjust size as necessary
            )}
            <div className="w-3/4 space-y-2">
              <h4 className="text-sm">{blog.title}</h4>
              <p className="text-md font-semibold">{blog.signature}</p>
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

export default Bloggang;