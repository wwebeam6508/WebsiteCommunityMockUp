import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { VisibilityContext, publicApiType } from 'react-horizontal-scrolling-menu';
import { SecondbarMenu, classNames } from './Layout';

const MenuItem: FC<{ onClick: (visibility: publicApiType) => void; item: SecondbarMenu }> = ({ onClick, item }) => {
  const visibility = useContext(VisibilityContext);
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
      onClick={() => onClick(visibility)}
    >
      {item.icon}
      <span>{item.name}</span>
    </a>
  );
};


const Secondbar: FC<{ secondbarMenu: SecondbarMenu[] }> = ({ secondbarMenu }) => {
  const [showArrows, setShowArrows] = useState<boolean>(false);
   const getItems = secondbarMenu.map((item, index) => ({ ...item, id: String(index) }));
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState<string[]>([]);

  const isItemSelected = (id: string): boolean => selected.includes(id);
  const handleClick = (id: string) => {
    const itemSelected = isItemSelected(id);

    setSelected(currentSelected =>
      itemSelected ? currentSelected.filter(el => el !== id) : [...currentSelected, id],
    );
  };
  // Placeholder for your menu items ref
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // This is a simplified example. You'd need to implement logic to calculate if
    // the items exceed the available width of their container.
    const checkIfScrollNeeded = () => {
      if (menuRef.current) {
        const menuWidth = menuRef.current.offsetWidth;
        const totalItemsWidth = menuRef.current.scrollWidth;
        setShowArrows(totalItemsWidth > menuWidth);
      }
    };

    // Check on mount and window resize
    checkIfScrollNeeded();
    window.addEventListener('resize', checkIfScrollNeeded);

    return () => {
      window.removeEventListener('resize', checkIfScrollNeeded);
    };
  }, [secondbarMenu]); // Dependency array can include any prop/state affecting item count or width

  return (
    <>
      <div className="hidden sm:flex justify-center space-x-4 py-2 border-t border-gray-300 w-full mt-3">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} onClick={visibility => handleClick(item.id)} />
        ))}
      </div>
      <div className="sm:hidden relative w-full">
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={
                classNames(
                  item.current ? 'bg-white-800 text-black font-bold' : 'text-gray-500 hover:bg-gray-300 hover:text-gray-700',
                  'min-w-max inline-block px-3 py-2 text-sm',
                ) + ' ' + (isItemSelected(item.id) ? 'bg-white-800 text-black font-bold' : '')
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