import React from 'react';
import { Navigation, classNames } from './Layout';

const Footer = (props: any) => {
  const navigation = props.navigation;
  return (
    <footer className="sm:hidden fixed inset-x-0 bottom-0 bg-white-700 text-gray-600 p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-20">
          {navigation.map((item: Navigation) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-white-800 text-black font-bold'  : 'text-gray-500 hover:bg-gray-300 hover:text-gray-700  font-medium',
                'rounded-md px-3 py-2 text-sm'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;