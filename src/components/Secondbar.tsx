import { FC } from 'react';
import { SecondbarMenu, classNames } from './Layout';

const MenuItem: FC<{  item: SecondbarMenu }> = ({ item }) => {
  return (
    <a
      href={item.href}
      className={classNames(
        item.current ? 'bg-white-800 text-black font-bold' : 'text-gray-500 hover:bg-gray-300 hover:text-gray-700',
        'rounded-md px-3 py-2 text-sm',
      )}
      // make each center icon above text below
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.icon}
      <span>{item.name}</span>
    </a>
  );
};


const Secondbar: FC<{ secondbarMenu: SecondbarMenu[] }> = ({ secondbarMenu }) => {


  return (
    <>
      <div className="hidden sm:flex justify-center space-x-4 py-2 border-t border-gray-300 w-full mt-3">
        {secondbarMenu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      <div className="sm:hidden relative w-full">
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 py-2">
          {secondbarMenu.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={
                classNames(
                  item.current ? 'bg-white-800 text-black font-bold' : 'text-gray-500 hover:bg-gray-300 hover:text-gray-700',
                  'min-w-max inline-block px-3 py-2 text-sm',
                )
              }
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};


export default Secondbar;