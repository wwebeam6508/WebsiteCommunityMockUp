
import Recommend from '../components/Recommend';
import Category from '../components/Catagory';
import Group from '../components/Group';
import Popular from '../components/Popular';
import Bloggang from '../components/Bloggang';
import Market from '../components/Market';
import FamilyGrid from '../components/FamilyGrid';
import AppDownload from '../components/AppDownload';
import FamilyPost from '../components/FamilyPost';
import HealthPost from '../components/HealthPost';
import TechnologyPost from '../components/TechnologyPost';
import LawPost from '../components/LawPost';
import InvestmentPost from '../components/InvestmentPost';
import TagPosts from '../components/TagPosts';
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

export interface LowerPost {
  id: number;
  user: string;
  excerpt: string;
  time: string;
  votes: number;
  comments: number;
  image?: string;
  tags: string[];
}

export interface TagPost {
  id: number;
  user: string;
  thumbnail?: string;
  time: string;
  title: string;
  comments: number;
  tag: string;
  tags: string[];
}

const posts: Post[] = [
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

const popularPost: Post[] = [
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

const categories: CategoryTag[] = [
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

const groups: GroupTag[] = [
  { id: 1, name: 'AF 12' },
  { id: 2, name: 'AF Fan Club' },
  { id: 3, name: 'BTS & ARMY in Pantip' },
  { id: 4, name: 'FASHIONISTA CLUB' },
]

const marketPosts: MarketPost[] = [
  { id: 21, title: 'งานขัดพื้นไม้ไร้ฝุ่น พื้นไม้ทุกชนิด ทำสีทาโพลียูรีเทน สูตรน้ำและสูตร', signature: "งานช่าง", thumnail: "https://via.placeholder.com/800x600" },
  { id: 22, title: 'แห่งแรกในกรุงเทพ,บอกที่ส่งราคาสูงและแพงมากที่สุดพร้อมสเป็กใน', signature: "อบรม/สัมมนา", thumnail: "https://via.placeholder.com/800x600" },
  { id: 23, title: 'ขาย Home Office 3 ชั้น ตกแต่งพร้อมอยู่ ลาดพร้าว 101 แยก 42', signature: "ทาวน์เฮาส์", thumnail: "https://via.placeholder.com/800x600" },
]

const gloggangPosts: BloggangPost[] = [
  { id: 21, title: 'my dreams were valid', signature: "แวดวงสมาชิก", thumnail: "https://via.placeholder.com/800x600" },
  { id: 22, title: 'มินิรีวิวที่รองแก้วน้องเพี้ยน', signature: "แวดวงสมาชิก", thumnail: "https://via.placeholder.com/800x600" },
  { id: 23, title: 'สารบัญ-barierleaf-namwarn 2023', signature: "แวดวงสมาชิก", thumnail: "https://via.placeholder.com/800x600" },
]

const familyList: FamilyList[] = [
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

const familyPosts: LowerPost[] = [
  { id: 1, user: 'John', excerpt: 'สามีอยากเติมเต็มให้กับลูกของตัวเองที่มีกับภรรยาเก่า', time: '1 hour ago', votes: 5, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['ครอบครัว', 'อย่าร้าง'] },
  { id: 2, user: 'Jane', excerpt: 'ลูกท้องเสีย ถ่ายวันละ4+ ต่อวัน', time: '2 hours ago', votes: 3, comments: 1, image: 'https://via.placeholder.com/800x600', tags: ['นมผง', 'ครอบครัว'] },
  { id: 3, user: 'Alice', excerpt: 'ลูก30ปีกับ15ปีผมของไม่ยอมเรียนไม่ยอมทำงาน ผมเตรียมทรัพย์32ล้านให้จะพอไหมครับ', time: '3 hours ago', votes: 7, comments: 4, image: 'https://via.placeholder.com/800x600', tags: ['ครอบครัว', 'อาชีพหลังเกษียณ'] },
  { id: 4, user: 'Bob', excerpt: 'ใครเคยเจอแม่ผัวแบบนี้มั้ง??', time: '4 hours ago', votes: 2, comments: 0, image: 'https://via.placeholder.com/800x600', tags: ['ประสบการณ์ชีวิตคู่', 'ครอบครัว'] },
  { id: 5, user: 'Sarah', excerpt: 'ผมควรเอาเรื่องเด็ก9ขวบลูกเพื่อนแม่ไหมครับ', time: '5 hours ago', votes: 9, comments: 3, image: 'https://via.placeholder.com/800x600', tags: ['ครอบครัว', 'การสอนลูก'] },
  { id: 21, user: 'David', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '1 hour ago', votes: 5, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['tag1', 'tag2'] },
];

const healthPost: LowerPost[] = [
  { id: 21, user: 'David', excerpt: 'ถ้าผมเริ่มเรียนหมอตอนอายุ 28-29 แล้ว เรียนต่อเฉพาะทาง เขาจะจำกัดอายุไหมครับ', time: '1 hour ago', votes: 5, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['งานโรงพยาบาล'] },
  { id: 22, user: 'Emma', excerpt: 'มีอาการแบบนี้ปกติมั้ยคะ หรือเป็นโรคอะไรมั้ย❓', time: '2 hours ago', votes: 3, comments: 1, image: 'https://via.placeholder.com/800x600', tags: ['แพทย์', 'คณะแพทยศาสตร์'] },
  { id: 23, user: 'Oliver', excerpt: 'ทำงานส่งประกันสังคม 20 ปี+ ได้บำเหน็จประมาณเท่าไหร่ครับผม', time: '3 hours ago', votes: 7, comments: 4, image: 'https://via.placeholder.com/800x600', tags: ['อาหารเสริม'] },
  { id: 24, user: 'Sophia', excerpt: 'ใครเคยทดลอง ไวอากร้ากับแฟน แล้ว รีวิวให้ดูหน่อยคะ', time: '4 hours ago', votes: 2, comments: 0, image: 'https://via.placeholder.com/800x600', tags: ['สุขภาพจิต'] },
  { id: 25, user: 'Liam', excerpt: 'มีใครนอนวันละ 5 ชั่วโมงบ้างไหมครับ', time: '5 hours ago', votes: 9, comments: 3, image: 'https://via.placeholder.com/800x600', tags: ['สุขภาพกาย'] },
  { id: 26, user: 'Ava', excerpt: 'Fusce euismod, nisl et mattis tincidunt, lectus neque ultricies risus, id aliquet.', time: '6 hours ago', votes: 4, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['สิทธิผู้สูงอายุ'] },
]

const technologyPost: LowerPost[] = [
  { id: 31, user: 'Michael', excerpt: 'สงครามสมัยใหม่ เทคโนโลยีทางทหารก้าวหน้าแค่ไหน สงครามก็ยังยืดเยื้อเหมือนเดิม', time: '1 hour ago', votes: 5, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['technology', 'programming'] },
  { id: 32, user: 'Sophia', excerpt: 'ยุคสงครามเวียดนาม อเมริกาจ่ายบำนาญให้ทหารผ่านศึกเดือนละ 3 แสนจริงไหมครับ', time: '2 hours ago', votes: 3, comments: 1, image: 'https://via.placeholder.com/800x600', tags: ['technology', 'gadgets'] },
  { id: 33, user: 'Liam', excerpt: 'บรรลัยวิทยา: โลหะบูชายัญ', time: '3 hours ago', votes: 7, comments: 4, image: 'https://via.placeholder.com/800x600', tags: ['technology', 'innovation'] },
  { id: 34, user: 'Ava', excerpt: 'ฮานอย ตอนเหนือของเวียดนาม ห่างจากเชียงใหม่ เชียงราย ไม่มาก แต่อากาศ แตกต่างมากเลยครับ ฮานอยยังหนาวอยู่เลย', time: '4 hours ago', votes: 2, comments: 0, image: 'https://via.placeholder.com/800x600', tags: ['technology', 'science'] },
  { id: 35, user: 'Oliver', excerpt: 'อุดรธานีเมืองใหญ่ได้น้ำจากไหนมาเลี้ยงตัวเมือง', time: '5 hours ago', votes: 9, comments: 3, image: 'https://via.placeholder.com/800x600', tags: ['technology', 'internet'] },
  { id: 36, user: 'Emma', excerpt: 'Suspendisse euismod, nisl et mattis tincidunt, lectus neque ultricies risus, id aliquet.', time: '6 hours ago', votes: 4, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['technology', 'software'] },
];

const lawPost: LowerPost[] = [
  { id: 41, user: 'Emily', excerpt: 'สอบทานความรู้กฎหมาย สำหรับนักศึกษาที่กำลังจะสอบประจำปี', time: '1 hour ago', votes: 5, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['กฎหมาย', 'การศึกษา'] },
  { id: 42, user: 'Alex', excerpt: 'การลงโทษผู้กระทำความผิดในกรณีฆ่าคน', time: '2 hours ago', votes: 3, comments: 1, image: 'https://via.placeholder.com/800x600', tags: ['กฎหมาย', 'อาชญากรรม'] },
  { id: 43, user: 'Olivia', excerpt: 'การเรียกร้องค่าเสียหายในกรณีที่เกิดอุบัติเหตุทางการจราจร', time: '3 hours ago', votes: 7, comments: 4, image: 'https://via.placeholder.com/800x600', tags: ['กฎหมาย', 'อุบัติเหตุ'] },
  { id: 44, user: 'William', excerpt: 'การดำเนินคดีทางแพ่งในกรณีที่เกิดความขัดแย้งในธุรกิจ', time: '4 hours ago', votes: 2, comments: 0, image: 'https://via.placeholder.com/800x600', tags: ['กฎหมาย', 'ธุรกิจ'] },
  { id: 45, user: 'Sophie', excerpt: 'การจัดการทรัพย์สินในกรณีที่เกิดการแต่งตั้งผู้จัดการทรัพย์สิน', time: '5 hours ago', votes: 9, comments: 3, image: 'https://via.placeholder.com/800x600', tags: ['กฎหมาย', 'ทรัพย์สิน'] },
  { id: 46, user: 'James', excerpt: 'Suspendisse euismod, nisl et mattis tincidunt, lectus neque ultricies risus, id aliquet.', time: '6 hours ago', votes: 4, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['กฎหมาย', 'คดี'] },
]

const investmentPost: LowerPost[] = [
  { id: 51, user: 'Emily', excerpt: 'การลงทุนในตลาดหลักทรัพย์ ควรเริ่มต้นอย่างไร', time: '1 hour ago', votes: 5, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['การลงทุน', 'หุ้น'] },
  { id: 52, user: 'Alex', excerpt: 'การลงทุนในตลาดอสังหาริมทรัพย์ ควรระวังอะไรบ้าง', time: '2 hours ago', votes: 3, comments: 1, image: 'https://via.placeholder.com/800x600', tags: ['การลงทุน', 'อสังหาริมทรัพย์'] },
  { id: 53, user: 'Olivia', excerpt: 'การลงทุนในตลาดเงิน ควรทำอย่างไรให้ได้ผลตอบแทนสูงสุด', time: '3 hours ago', votes: 7, comments: 4, image: 'https://via.placeholder.com/800x600', tags: ['การลงทุน', 'ตลาดเงิน'] },
  { id: 54, user: 'William', excerpt: 'การลงทุนในตลาดสินค้า ควรระวังอะไรบ้าง', time: '4 hours ago', votes: 2, comments: 0, image: 'https://via.placeholder.com/800x600', tags: ['การลงทุน', 'สินค้า'] },
  { id: 55, user: 'Sophie', excerpt: 'การลงทุนในตลาดเงินตราต่างประเทศ ควรระวังอะไรบ้าง', time: '5 hours ago', votes: 9, comments: 3, image: 'https://via.placeholder.com/800x600', tags: ['การลงทุน', 'ตลาดเงินต่างประเทศ'] },
  { id: 56, user: 'James', excerpt: 'Suspendisse euismod, nisl et mattis tincidunt, lectus neque ultricies risus, id aliquet.', time: '6 hours ago', votes: 4, comments: 2, image: 'https://via.placeholder.com/800x600', tags: ['การลงทุน', 'อื่นๆ'] },
];

const tagPosts: TagPost[] = [
  {
    id: 1,
    user: "Alice",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "Live, Laugh, Love",
    comments: 15,
    tag: "Blackpink",
    tags: ["Blackpink", "BNK48"],
    time: "1 hour ago"
  },
  {
    id: 2,
    user: "Bob",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "Every moment matters",
    comments: 5,
    tag: "BNK48",
    tags: ["Blackpink", "BNK48"],
    time: "2 hours ago"
  },
  // Repeat similar structure for other posts
  {
    id: 3,
    user: "Charlie",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "To code or not to code",
    comments: 22,
    tag: "Blackpink",
    tags: ["Blackpink", "BNK48"],
    time: "3 hours ago"
  },
  {
    id: 4,
    user: "Diana",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "The secret ingredient is always cheese",
    comments: 34,
    tag: "BNK48",
    tags: ["Blackpink", "BNK48"],
    time: "4 hours ago"
  },
  {
    id: 5,
    user: "Evan",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "One day, the mountains will move",
    comments: 8,
    tag: "Blackpink",
    tags: ["Blackpink", "BNK48"],
    time: "5 hours ago"
  },
  {
    id: 6,
    user: "Fiona",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "Exploring the unexplored",
    comments: 19,
    tag: "BNK48",
    tags: ["Blackpink", "BNK48"],
    time: "6 hours ago"
  },
  {
    id: 7,
    user: "George",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "A book a day keeps reality away",
    comments: 27,
    tag: "Blackpink",
    tags: ["Blackpink", "BNK48"],
    time: "7 hours ago"
  },
  {
    id: 8,
    user: "Hannah",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "A frame for every story",
    comments: 13,
    tag: "BNK48",
    tags: ["Blackpink", "BNK48"],
    time: "8 hours ago"
  },
  {
    id: 9,
    user: "Ian",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "Feel the music",
    comments: 41,
    tag: "Blackpink",
    tags: ["Blackpink", "BNK48"],
    time: "9 hours ago"
  },
  {
    id: 10,
    user: "Julia",
    thumbnail: 'https://via.placeholder.com/800x600',
    title: "Green thumb, happy heart",
    comments: 29,
    tag: "BNK48",
    tags: ["Blackpink", "BNK48"],
    time: "10 hours ago"
  }
];

const policyList = [
  "กฎ กติกาและมารยาท",
  "คำแนะนำการโพสต",
  "นโยบายเกี่ยวกับข้อมูลส่วนบุคคล",
  "สิทธิ์การใช้งานของสมาชิก",
  "ติดต่อทีมงาน Pantip",
  "ติดต่อลงโฆษณา",
  "ร่วมงานกับ Pantip",
  "Download App Pantip",
  "Pantip Certified Developer"]
const TwoGrid = () => {
  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-12 gap-1'>
        <div className='md:col-span-10'>
          <Recommend posts={posts} className="" />
          <Popular posts={popularPost} className="" />
          <FamilyPost posts={familyPosts} className="" />
          <HealthPost posts={healthPost} className="" />
          <TechnologyPost posts={technologyPost} className="" />
          <LawPost posts={lawPost} className="" />
          <InvestmentPost posts={investmentPost} className="" />
          <TagPosts tagPosts={tagPosts} className="" />
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
          <div className="flex flex-col items-center">
            <div className='grid grid-cols-4 gap-1 '>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                Facebook
              </a>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                Twitter
              </a>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                Instagram
              </a>
              <a href="#" className='flex hover:bg-gray-300 text-xs items-center space-x-2 justify-center'>
                Youtube
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center">
            {
              policyList && policyList.map((policy, index) => (
                <a href="#" key={index} className="text-sm hover:bg-gray-300 flex m-3 justify-center">{policy}</a>
              ))
            }
          </div>
          <div className="flex flex-col items-center">
            <p className="text-md text-gray-600 mt-4">© {new Date().getFullYear()} Kraivich</p>
          </div>
        </div>
      </div>

      <div className="bg-white mb-40 md:mb-0 rounded-lg p-4 max-w-lg mx-auto mt-8 text-center item-center justify-center">
        <h3 className="text-lg font-semibold text-black mb-2">อุ๊ย! หมดแล้วเหรอ?</h3>
        <button className="bg-gray-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">โหลดหน้านี้ใหม่</button>
      </div>
    </div>
  );
};

export default TwoGrid;