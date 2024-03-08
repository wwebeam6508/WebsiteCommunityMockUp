import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Secondbar from './Secondbar';
import { BellAlertIcon, EnvelopeIcon, HandThumbUpIcon, HomeIcon, PlusCircleIcon, StarIcon, TvIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';
import { CalendarDaysIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid';
import SearchBar from './SearchBar';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/20/solid';

interface LayoutProps {
  children: ReactNode;
}

export interface Navigation {
  name: string;
  icon: ReactNode;
  href: string;
  current: boolean;
  position?: string;
}

export interface SecondbarMenu {
  name: string;
  icon: ReactNode;
  href: string;
  current: boolean;
}

const navigation = [
  { name: 'ตั้งกระทู้', icon: <PlusCircleIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: true, position: 'center' },
  { name: 'คอมมูนิตี้', icon: <UserGroupIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false, position: 'center' },
  { name: '', icon: <EnvelopeIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false, position: 'right' },
  { name: '', icon: <BellAlertIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false, position: 'right' }
]

const secondbarMenu = [
  { name: 'หน้าแรก', icon: <HomeIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: true },
  { name: 'My Feed', icon: <TvIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false },
  { name: 'Panbop Pick', icon: <HandThumbUpIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false },
  { name: 'Panbop Hitz', icon: <StarIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false },
  { name: 'Explore', icon: <MagnifyingGlassCircleIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false },
  { name: 'แลกพอยต์', icon: <ArrowLeftStartOnRectangleIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false },
  { name: 'กิจกรรม', icon: <CalendarDaysIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false }
]

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navbarStyle, setNavbarStyle] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) { // Scrolling down
        setNavbarStyle('navbar-hide');
      } else if (currentScrollY < 50) { // Near the top
        setNavbarStyle('');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 bg-white`}>
        <Navbar navigation={navigation} />
        <SearchBar />
        <div className={` transition-all ease-in-out duration-300 navbar-transition ${navbarStyle}`}>
          <Secondbar secondbarMenu={secondbarMenu} />
        </div>
      </div>
      <div style={{ paddingTop: '15rem' }}> {/* Adjust this padding based on your Navbar and Secondbar height */}
        {children}
      </div>
      <Footer navigation={navigation} />
    </>
  );
};

export default Layout;