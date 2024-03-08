import React, { useEffect, useState } from 'react';
import Flickity, { FlickityOptions } from 'react-flickity-component';
import 'flickity/css/flickity.css';
interface HighlightItem {
  thumbnail: string;
  title: string;
}

const highlightItems: HighlightItem[] = [
  {
    thumbnail: 'https://via.placeholder.com/800x600',
    title: '[Panbop Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม',
  },
  {
    title: 'ชวนร่วมสนุก ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา 💚',
    thumbnail: 'https://via.placeholder.com/800x600',
  },
  {
    title: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำ',
    thumbnail: 'https://via.placeholder.com/800x600',
  },
  {
    title: '📌☀️ พี่แป้งชวนรีวิว “ครีมกันแดดตัวเด็ด“ ภาค 4 ลุ้นรับ',
    thumbnail: 'https://via.placeholder.com/800x600',
  }
]

const flickityOptions: FlickityOptions = {
  groupCells: true,
  contain: true,
  pageDots: false,
  wrapAround: true,
  draggable: true,
  adaptiveHeight: true,// Set true if you want the carousel height to adapt to each slide
  cellAlign: 'center',
  prevNextButtons: false,
};
const Highlight = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updatedFlickityOptions = {
    ...flickityOptions,
    draggable: isMobile,
  };
  return (
    <div className="w-full flex justify-center">
      <div className='w-full sm:w-1/2'>
        <Flickity
          className='carousel w-full'
          elementType={'div'}
          options={updatedFlickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {highlightItems.map((item, index) => (
            <div key={index} className="carousel-cell h-96 w-1/2 sm:w-1/4 flex justify-center">
              <a href="#" className="w-full flex flex-col items-center">
                <img src={item.thumbnail} alt={item.title} width={"640px"} height={"640px"} className="object-cover" />
                <div className="p-4 w-full h-96">
                  <h1 className="text-xl font-bold text-black text-center">{item.title}</h1>
                </div>
              </a>
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default Highlight;