import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Secondbar from './Secondbar';
import { BellAlertIcon, EnvelopeIcon, HandThumbUpIcon, HomeIcon, PlusCircleIcon, StarIcon, TvIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid';
import SearchBar from './SearchBar';

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
  { name: 'ตั้งกระทู้', icon : <PlusCircleIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: true , position: 'center'},
  { name: 'คอมมูนิตี้',icon : <UserGroupIcon className="block h-6 w-6" aria-hidden="true" /> , href: '#', current: false, position: 'center' },
  { name: '', icon : <EnvelopeIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false , position: 'right'},
  { name: '', icon : <BellAlertIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false , position: 'right'}
]

const secondbarMenu = [
  { name: 'หน้าแรก', icon : <HomeIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: true },
  { name: 'My Feed',icon : <TvIcon className="block h-6 w-6" aria-hidden="true" /> , href: '#', current: false },
  { name: 'Panbop Pick', icon : <HandThumbUpIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false},
  { name: 'Panbop Hitz', icon : <StarIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false},
  { name: 'Explore', icon : <MagnifyingGlassCircleIcon className="block h-6 w-6" aria-hidden="true" />, href: '#', current: false}
]

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <SearchBar />
      <Secondbar secondbarMenu={secondbarMenu} />
      <div style={{ display: 'flex' }}>
        <main style={{ flex: 1 }}>{children}</main>
      </div>
      <Footer navigation={navigation}/>
    </>
  );
};

export default Layout;