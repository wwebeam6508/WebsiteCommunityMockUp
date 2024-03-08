import React from 'react';
import { TagPost } from '../layout/TwoGrid.layout';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/16/solid';

interface TagPostsProps {
  tagPosts: TagPost[];
  className: string;
}

interface EachPost {
  posts: TagPost[];
  followers?: number;
  postsCount?: number;
}

const Card = ({ user, title, time, comments, thumbnail, tags }: TagPost) => (
  <div className="bg-white rounded-lg shadow-sm flex p-4 space-x-4">
    {thumbnail && (
      <img src={thumbnail} alt={user} className="w-20 h-20 rounded-lg object-cover" /> // Adjust size as necessary
    )}
    <div className="w-3/4 space-y-2">
      <h2 className="text-md font-semibold">{user}</h2>
      <p className="text-sm">{title}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{time}</span>
        {
          tags && (
            <div className="flex hidden sm:flex items-center space-x-1">
              {tags.map((tag, index) => (
                <a href='#' key={index} className="text-xs bg-gray-200 rounded-full px-2 py-1">{tag}</a>
              ))}
            </div>
          )
        }
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <ChatBubbleOvalLeftIcon className="h-5 w-5 mr-1" aria-hidden="true" />{comments}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const TagPosts: React.FC<TagPostsProps> = ({ tagPosts, className }) => {
  // Implement your component logic here
  // saperate array with different tag 
  const eachPost: EachPost[] = [];
  tagPosts.forEach((post) => {
    if (eachPost.some((e) => e.posts[0].tag === post.tag)) {
      eachPost.forEach((e) => {
        if (e.posts[0].tag === post.tag) {
          e.posts.push(post);
        }
      });
    } else {
      const followers = Math.floor(Math.random() * 1000);
      const postsCount = Math.floor(Math.random() * 100);
      eachPost.push({ posts: [post], followers: followers, postsCount: postsCount });
    }
  });

  return (
    <div className={`${className}`}>
      {
        eachPost && eachPost.map((each, index) => (
          <div key={index} className={`border-t-2 border-gray-200 p-8 ${className}`}>
            <div className="mx-auto">
              <div className='flex'>
                <h1 className="text-2xl font-semibold">Tag</h1>
                &nbsp;
                <h3 className="text-2xl font-semibold">{each.posts[0].tag}</h3>
                &nbsp;
                <span className="text-gray-500 text-sm">({each.postsCount} โพสต์)</span>
                &nbsp;
                <span className="text-gray-500 text-sm">({each.followers} คนติดตาม)</span>
                &nbsp;
                <button className="text-sm bg-gray-200 rounded-full px-2 py-1">ติดตาม</button>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2  gap-1">
                {each.posts.map((post, index) => (
                  <Card key={index} {...post} />
                ))}
              </div>
              <a href="#" className="flex mt-5 justify-center text-gray-700 hover:bg-gray-300">ดูเพิ่ม</a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TagPosts;