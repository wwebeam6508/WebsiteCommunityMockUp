
import Recommend from '../components/Recommend';
import Category from '../components/Catagory';
import Group from '../components/Group';
import Popular from '../components/Popular';
import Bloggang from '../components/Bloggang';
import Market from '../components/Market';
import FamilyGrid from '../components/FamilyGrid';
import AppDownload from '../components/AppDownload';
export interface Post {
  id: number;
  user: string;
  excerpt: string;
  time: string;
  votes: number;
  comments: number;
  image?: string; // Optional, some posts might not have images
}


export interface CategoryTag {
  id: number;
  name: string;
}

export interface GroupTag {
  id: number;
  name: string;
}

export interface BloggangPost {
  id: number;
  title: string;
  thumnail?: string;
  signature: "แวดวงสมาชิก";
}

export interface MarketPost {
  id: number;
  title: string;
  thumnail?: string;
  signature: string;
}

export interface FamilyList {
  id: number;
  thumnail?: string;
}

export const posts: Post[] = [
  // Populate this array with your post objects
  { id: 1, user: 'พี่แป้งแบ่งปัน', excerpt: 'พี่แป้งชวนรีวิว “ครีมกันแดดตัวเด็ด“ ภาค 4 ลุ้นรับตุ๊กตาน้องเพี้ยนไซส์ใหญ่ ครีมกันแดด และพันทิปพอยท์ 🌤️', time: '6 น.ที่แล้ว', votes: 24, comments: 5, image: 'https://via.placeholder.com/800x600' },
  { id: 2, user: 'เพี้ยน จัง แก', excerpt: ' เช็คลิสต์ศิลปิน ‘เดบิวต์ | คัมแบค’ เดือน ‘มีนาคม’ 2024 ♫ ♬', time: '1 hour ago', votes: 10, comments: 2, image: 'https://via.placeholder.com/800x600' },
  { id: 5, user: 'สมาชิกหมายเลข 5505312', excerpt: 'พาเพื่อนๆเดินเที่ยว First Avenue Tokyo Station ที่รวมแหล่งช้อปปิ้ง ทั้งร้านอาหาร ของกิน ของฝาก อยู่ได้ทั้งวัน', time: '3 hours ago', votes: 12, comments: 4, image: 'https://via.placeholder.com/800x600' },
  { id: 6, user: 'สมาชิกหมายเลข 7861040', excerpt: '[ okinawa 2024 ] 3 วัน 4 คืน ฉบับเที่ยวคนเดียว/ไม่เช่ารถ/ง้อทัวร์นิดนึง <3 [1/4]', time: '4 hours ago', votes: 8, comments: 2, image: 'https://via.placeholder.com/800x600' },
  { id: 7, user: 'Eve', excerpt: 'รวมประโยคเด็ดในละครไทย ที่เพื่อนๆ แสนตราตรึงใจจนถึงทุกวันนี้', time: '5 hours ago', votes: 6, comments: 3, image: 'https://via.placeholder.com/800x600' },
  { id: 8, user: 'Charlie', excerpt: 'เงินเปลี่ยนนิสัยได้จริงมั้ยคะ', time: '6 hours ago', votes: 10, comments: 1, image: 'https://via.placeholder.com/800x600' },
  { id: 9, user: 'David', excerpt: 'ลูกไม่มีเพื่อนที่โรงเรียน ช่วยลูกยังไงดี', time: '7 hours ago', votes: 14, comments: 5, image: 'https://via.placeholder.com/800x600' },
  { id: 10, user: 'Grace', excerpt: '... ต้มจืดวุ้นเส้น เมนูอร่อยทำง่าย ซดน้ำร้อนๆ กลิ่นหอมๆค่ะ 💛🧡💚', time: '8 hours ago', votes: 9, comments: 2, image: 'https://via.placeholder.com/800x600' },
  // Add more posts as needed
];

export const popularPost: Post[] = [
  { id: 11, user: 'John', excerpt: '< < < + + This Is Anfield [07/03/2024] เชียร์สดเกมรอบยูโรปา ลีก(16 ทีมนัดแรก) สปาร์ต้า - ลิเวอร์พูล 00.45 น.+ + > > >', time: '9 hours ago', votes: 15, comments: 3, image: 'https://via.placeholder.com/800x600' },
  { id: 12, user: 'Jane', excerpt: 'สามีหารทุกอย่าง ควรไปต่อหรือแยกย้ายดี', time: '10 hours ago', votes: 7, comments: 2, image: 'https://via.placeholder.com/800x600' },
  { id: 13, user: 'Alice', excerpt: 'เจน4มีฐานแฟนเพลงมากกว่าแฟนคลับหรือเปล่า', time: '11 hours ago', votes: 9, comments: 4, image: 'https://via.placeholder.com/800x600' },
  { id: 14, user: 'Bob', excerpt: 'ทำไม? อยากใช้บัตรเครดิต แต่ไม่อยากจ่ายค่าธรรมเนียม พอเวฟไม่ได้ก็ไม่พอใจ ฟาดงวงฟาดงา', time: '12 hours ago', votes: 11, comments: 1, image: 'https://via.placeholder.com/800x600' },
  { id: 15, user: 'Sarah', excerpt: 'My Saving (KKP) ใน true money wallet ใช้ไม่ได้ ปิดปรับปรุงเพราะอะไรเหรอคะ?', time: '13 hours ago', votes: 6, comments: 3, image: 'https://via.placeholder.com/800x600' },
  { id: 16, user: 'Michael', excerpt: 'ตั้งแต่แข่งรายการu14ที่ผ่านมา ยาสก็ไม่วางทรศ.มัวแต่ดูคลิปสาวๆแต่ละคน รุ่นนี้แหละจะสานต่อทุบๆญี่ปุ่น&จีน', time: '14 hours ago', votes: 13, comments: 5, image: 'https://via.placeholder.com/800x600' },
  { id: 17, user: 'Emily', excerpt: 'วอนบินผมบลอนด์?', time: '15 hours ago', votes: 8, comments: 2, image: 'https://via.placeholder.com/800x600' },
  { id: 18, user: 'Alex', excerpt: 'ห้ามพลาด!!! QUADLIPS มา T-Pop Stage สัปดาห์หน้า', time: '16 hours ago', votes: 10, comments: 4, image: 'https://via.placeholder.com/800x600' },
  { id: 19, user: 'Oliver', excerpt: 'ทำไมถึงรอไม่ได้', time: '17 hours ago', votes: 12, comments: 1, image: 'https://via.placeholder.com/800x600' },
  { id: 20, user: 'Emma', excerpt: 'คุณพี่ลอนกลับมาอัพไอจีล่าสุด พร้อมกับลูกชายตัวน้อย', time: '18 hours ago', votes: 9, comments: 3, image: 'https://via.placeholder.com/800x600' },
];

export const categories: CategoryTag[] = [
  // Populate this array with your category objects
  { id: 1, name: 'BNK48' },
  { id: 2, name: 'BLACKPINK (นักร้องนักดนตรี)' },
  { id: 3, name: 'วันพีซ One piece' },
  { id: 4, name: 'เชียร์สด' },
  { id: 5, name: 'BABYMONSTER (นักร้องนักดนตรี)' },
  { id: 6, name: 'NewJeans (นักร้องนักดนตรี)' },
  { id: 7, name: 'ปัญหาความรัก' },
  { id: 8, name: 'BEC (ช่อง 3)' },
];

export const groups: GroupTag[] = [
  { id: 1, name: 'AF 12' },
  { id: 2, name: 'AF Fan Club' },
  { id: 3, name: 'BTS & ARMY in Pantip' },
  { id: 4, name: 'FASHIONISTA CLUB' },
]

export const marketPosts: MarketPost[] = [
  { id: 21, title: 'งานขัดพื้นไม้ไร้ฝุ่น พื้นไม้ทุกชนิด ทำสีทาโพลียูรีเทน สูตรน้ำและสูตร', signature: "งานช่าง", thumnail: "https://via.placeholder.com/800x600" },
  { id: 22, title: 'แห่งแรกในกรุงเทพ,บอกที่ส่งราคาสูงและแพงมากที่สุดพร้อมสเป็กใน', signature: "อบรม/สัมมนา", thumnail: "https://via.placeholder.com/800x600" },
  { id: 23, title: 'ขาย Home Office 3 ชั้น ตกแต่งพร้อมอยู่ ลาดพร้าว 101 แยก 42', signature: "ทาวน์เฮาส์", thumnail: "https://via.placeholder.com/800x600" },
]

export const gloggangPosts: BloggangPost[] = [
  { id: 21, title: 'my dreams were valid', signature: "แวดวงสมาชิก", thumnail: "https://via.placeholder.com/800x600" },
  { id: 22, title: 'มินิรีวิวที่รองแก้วน้องเพี้ยน', signature: "แวดวงสมาชิก", thumnail: "https://via.placeholder.com/800x600" },
  { id: 23, title: 'สารบัญ-barierleaf-namwarn 2023', signature: "แวดวงสมาชิก", thumnail: "https://via.placeholder.com/800x600" },
]

export const familyList: FamilyList[] = [
  {
    id: 1,
    thumnail: "https://via.placeholder.com/800x600"
  },
  {
    id: 2,
    thumnail: "https://via.placeholder.com/800x600"
  }, {
    id: 3,
    thumnail: "https://via.placeholder.com/800x600"
  }, {
    id: 4,
    thumnail: "https://via.placeholder.com/800x600"
  },
]

const TwoGrid = () => {
  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-12 gap-1'>
        <div className='md:col-span-10'>
          <Recommend posts={posts} className="" />
          <Popular posts={popularPost} className="" />
        </div>
        <div className='hidden sm:flex md:col-span-2 flex flex-col items-center'>
          <Category categories={categories} className="items-center" />
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/800x600" alt="thumbnail" className="w-50 h-50 object-cover" />
            <p className="text-sm text-gray-600 mt-4">ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตามหาน้องเพี้ยนกัน ! 🧐🔎</p>
          </div>
          <Group groups={groups} className="items-center" />
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/800x600" alt="thumbnail" className="w-50 h-50 object-cover" />
            <p className="text-sm text-gray-600 mt-4">ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน Pantip ได้แล้วนะ</p>
          </div>
          <Bloggang bloggang={gloggangPosts} className="items-center" />
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/800x600" alt="thumbnail" className="w-50 h-50 object-cover" />
            <p className="text-sm text-gray-600 mt-4">ตี๋ อ๊ะอาย เผยเรื่องราวความรักใน เรือนทาส เรือนที่เต็มไปด้วย ความรัก ความแค้น</p>
          </div>
          <Market marketPost={marketPosts} className="items-center" />
          <FamilyGrid lists={familyList} className="items-center" />
          <AppDownload />
          <div className="flex flex-col items-center">
            <a href="#" className="hover:bg-gray-300 flex m-3 justify-center">ข่าวประชาสัมพันธ์</a>
          </div>
          <div className="flex flex-col items-center">
            <div className='grid grid-cols-4 gap-1 '>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                กฎกติกา
              </a>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                ติดต่อทีมงาน
              </a>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                สมัครงาน
              </a>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                ลงโฆษณา
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoGrid;