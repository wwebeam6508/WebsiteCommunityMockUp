import React from 'react';
import Recommend from '../components/Recommend';
import Category from '../components/Catagory';
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  time: string;
  votes: number;
  comments: number;
  image?: string; // Optional, some posts might not have images
}

export interface Category {
  id: number;
  name: string;
}
export const posts: Post[] = [
  // Populate this array with your post objects
  { id: 1, title: 'Example Title 1', excerpt: 'Example excerpt...', time: '6 น.ที่แล้ว', votes: 24, comments: 5, image: 'example1.jpg' },
  // Add more posts as needed
];

export const categories: Category[] = [
  // Populate this array with your category objects
  { id: 1, name: 'BNK48' },
  // Add more categories as needed
];


const RecommendCatagoryLayout = () => {
  // Implement your component logic here

  return (
    <div className="min-h-screen border-t-2 border-gray-200 p-8">
      <div className="w-full md:w-2/3 pr-4 mb-4 md:mb-0">
        <Recommend />
      </div>
      <aside className="w-full md:w-1/3">
        <div className="bg-white p-4 sticky top-0">
          <Category />
        </div>
      </aside>
    </div>
  );
};

export default RecommendCatagoryLayout;