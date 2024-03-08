
const appLists = [
  {
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.facebook.katana&hl=th&gl=US',
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png",
  },
  {
    name: 'App Store',
    url: 'https://apps.apple.com/th/app/facebook/id284882215',
    thumbnail: 'https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg',
  },
  {
    name: 'Huawei AppGallery',
    url: 'https://appgallery.huawei.com/#/app/C100000101',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/220px-Huawei_AppGallery.svg.png',
  },
];

const AppDownload = () => {
  // Implement your component logic here

  return (
    <div className={`border-t-2 bg-white text-gray-800 w-64 p-5`}>
      <h3 className="font-bold text-lg mb-4">ดาวน์โหลดได้แล้ววันนี้</h3>
      <div className='grid grid-cols-2 gap-1'>
        {appLists.map((list, index) => (
          <a href="#"
            key={index}
            className='flex  items-center space-x-2'
          >
            <img src={list.thumbnail} className="w-10 h-10 rounded-lg object-cover" />
          </a>
        ))}
      </div>
      <a href="#" className="hover:bg-gray-300 flex m-3 justify-center">ติดต่อลงโฆษณา</a>
    </div>
  );
};

export default AppDownload;