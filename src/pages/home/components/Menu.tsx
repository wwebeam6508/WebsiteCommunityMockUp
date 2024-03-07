import React, { ReactNode } from 'react';

interface MenuItem {
  title: string;
  icon: ReactNode;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="flex items-center space-x-2"
          >
            {item.icon}
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;