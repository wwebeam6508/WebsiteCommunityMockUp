import React from 'react';
import { LowerPost } from '../layout/TwoGrid.layout';
import { ChatBubbleOvalLeftIcon, HandThumbUpIcon } from '@heroicons/react/16/solid';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/20/solid';

interface HealthPostProps {
  // Define the props for your component here
  posts: LowerPost[];
  className: string;
}

const Card = ({ user, excerpt, time, votes, comments, image, tags }: LowerPost) => (
  <div className="bg-white rounded-lg shadow-sm flex p-4 space-x-4">
    {image && (
      <img src={image} alt={user} className="w-20 h-20 rounded-lg object-cover" /> // Adjust size as necessary
    )}
    <div className="w-3/4 space-y-2">
      <h2 className="text-md font-semibold">{user}</h2>
      <p className="text-sm">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{time}</span>
        {
          tags && (
            <div className="hidden sm:flex flex items-center space-x-1">
              {tags.map((tag, index) => (
                <a href='#' key={index} className="text-xs bg-gray-200 rounded-full px-2 py-1">{tag}</a>
              ))}
            </div>
          )
        }
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

const HealthPost: React.FC<HealthPostProps> = ({ posts, className }) => {
  // Implement the component logic here
  return (
    <div className={`border-t-2 border-gray-200 p-8 ${className}`}>
      <div className="mx-auto">
        <div className='flex'>
          <EllipsisHorizontalCircleIcon className="h-8 w-8 mr-1" aria-hidden="true" />
          <h1 className="text-2xl font-semibold">Health</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2  gap-1">
          {posts.map((post, index) => (
            <Card key={index} {...post} />
          ))}
        </div>
        <a href="#" className="flex mt-5 justify-center text-gray-700 hover:bg-gray-300">ดูเพิ่ม</a>
      </div>
    </div>
  );
};

export default HealthPost;