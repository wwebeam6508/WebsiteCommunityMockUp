import { ChatBubbleBottomCenterIcon, ChatBubbleOvalLeftIcon, HandThumbUpIcon } from '@heroicons/react/16/solid';
import React from 'react';


interface Post {
  user: string;
  content: string;
  time: string;
  votes: number;
  comments: number;
  image?: string; // Optional, some posts might not have images
}
const posts = [
  { user: 'Pantip Happy Prize', content: 'ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล', time: '6 น.ที่แล้ว', votes: 117, comments: 3, image: 'https://via.placeholder.com/800x600' },
  { user: 'เที่ยวสบายสบาย', content: 'มิจฉาชีพ มีรูปแบบใหม่มาอีกแล้ว?', time: '5 น.ที่แล้ว', votes: 150, comments: 4, image: 'https://via.placeholder.com/800x600' },
  { user: 'สมาชิกหมายเลข 1049607', content: 'พี่สาวลาออกจากเงินเดือน 13,500 มารับเงินเดือน 6,500 บอกเพื่อความมั่นคงในอนาคต', time: '4 น.ที่แล้ว', votes: 200, comments: 5, image: 'https://via.placeholder.com/800x600' },
  { user: 'สมาชิกหมายเลข 7535362', content: 'การกลับมาของเธอ พาทีมชาติให้ได้ไปโอลิมปิก 2024 จากบราซิลสู่ไทยแลนด์', time: '3 น.ที่แล้ว', votes: 250, comments: 6, image: 'https://via.placeholder.com/800x600' },
  { user: 'สมาชิกหมายเลข 8019174', content: 'ลูก30ปีกับ15ปีผมของไม่ยอมเรียนไม่ยอมทำงาน ผมเตรียมทรัพย์32ล้านให้จะพอไหมครับ', time: '2 น.ที่แล้ว', votes: 300, comments: 7, image: 'https://via.placeholder.com/800x600' },
  { user: 'สมาชิกหมายเลข 7993281', content: 'ทำงานส่งประกันสังคม 20 ปี+ ได้บำเหน็จประมาณเท่าไหร่ครับผม', time: '1 น.ที่แล้ว', votes: 380, comments: 8, image: 'https://via.placeholder.com/800x600' },
  { user: 'The Storm on the Sea', content: 'ลิซ่าโบกมือลา Celine คิดว่าแบรนด์นี้จะยังปังอยู่อีกมั้ย?', time: '1 น.ที่แล้ว', votes: 390, comments: 12, image: 'https://via.placeholder.com/800x600' },
  { user: 'Josephbb', content: '[Spoil] JUJUTSU KAISEN : 253 ศึกชี้ชะตาแดนอสุราชินจุกุ (25)', time: '1 น.ที่แล้ว', votes: 340, comments: 15, image: 'https://via.placeholder.com/800x600' },
];

interface CardProps extends Post { }

const Card: React.FC<CardProps> = ({ user, content, time, votes, comments, image }) => (
  <div className="max-w-md bg-white rounded-lg shadow-sm flex p-4 space-x-4">
    {image && (
      <img src={image} alt={user} className="w-20 h-20 rounded-lg object-cover" /> // Adjust size as necessary
    )}
    <div className="w-3/4 space-y-2">
      <h2 className="text-md font-semibold">{user}</h2>
      <p className="text-sm">{content}</p>
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

const RealtimePost = () => (
  <div className="border-t-2 border-gray-200 p-8">
    <div className="mx-auto">
      <h1 className="text-2xl font-semibold">Most Recent</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-6">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </div>
  </div>
);

export default RealtimePost;