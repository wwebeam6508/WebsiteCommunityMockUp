import React from 'react';
import { Post } from '../layout/TwoGrid.layout';
import { ChatBubbleOvalLeftIcon, HandThumbUpIcon } from '@heroicons/react/16/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid';

interface PopularProps {
  // Define the props for your component here
  posts: Post[];
  className: string;
}

const Card = ({ user, excerpt, time, votes, comments, image }: Post) => (
  <div className="max-w-md bg-white rounded-lg shadow-sm flex p-4 space-x-4">
    {image && (
      <img src={image} alt={user} className="w-20 h-20 rounded-lg object-cover" /> // Adjust size as necessary
    )}
    <div className="w-3/4 space-y-2">
      <h2 className="text-md font-semibold">{user}</h2>
      <p className="text-sm">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{time}</span>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <HandThumbUpIcon className="h-5 w-5 mr-1" aria-hidden="true" />{votes}
          </span>
          <span className="flex items-center">
            <ChatBubbleOvalLeftIcon className="h-5 w-5 mr-1" aria-hidden="true" />{comments}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Popular: React.FC<PopularProps> = ({ posts, className }) => {
  // Implement the component logic here
  return (
    <div className={`border-t-2 border-gray-200 p-8 ${className}`}>
      <div className="mx-auto">
        <div className='flex'>
          <UserGroupIcon className="h-8 w-8 mr-1" aria-hidden="true" />
          <h1 className="text-2xl font-semibold">Most Popular</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-6">
          {posts.map((post, index) => (
            <Card key={index} {...post} />
          ))}
        </div>
        <a href="#" className="flex mt-5 justify-center text-gray-700 hover:bg-gray-300">ดูเพิ่ม</a>
      </div>
    </div>
  );
};

export default Popular;