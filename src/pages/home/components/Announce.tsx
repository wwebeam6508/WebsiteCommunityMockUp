import React from 'react';

interface Announce {
  type: string;
  text: string;
}

const announceList:Announce[] = [ {
    type: "Highlight",
    text: "Panbop Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 6 มีนาคม 📊",
  },
  {
    type: "Activity",
    text: "3 สิ่งที่มาร์คซักเคอร์เบิร์กไม่เคยบอกใคร! เฉลยแล้วที่ 6 ทุ่มนี้",
  },
  {
    type: "Announce",
    text: "Panbop Point ดีๆ กำลังรอคุณ...จะเป็นอย่างไรไปชมกัน!",
  },
];

const Announce: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-4 w-full sm:w-3/5 mx-auto rounded-lg divide-y divide-gray-300">
      <h1 className="text-xl font-bold mb-4">Announce</h1> {/* Add bottom margin to the header */}
      {announceList.map((announce, index) => (
          <div key={index} className={`py-4 ${index === 0 ? 'pt-4' : 'border-t border-gray-300'}`}> {/* Adjust padding and conditional border */}
              <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {announce.type === "Highlight" && (
                        <span className="bg-yellow-300 px-2 py-1 rounded-full text-xs text-black">Highlight</span>
                    )}
                    {announce.type === "Activity" && (
                        <span className="bg-blue-400 px-2 py-1 rounded-full text-xs text-black">Activity</span>
                    )}
                    {announce.type === "Announce" && (
                        <span className="bg-green-500 px-2 py-1 rounded-full text-xs text-white">Announce</span>
                    )}
                    <span className="text-xs font-bold">{announce.text}</span>
                  </div>
              </div>
          </div>
      ))}
    </div>
  );
};

export default Announce;