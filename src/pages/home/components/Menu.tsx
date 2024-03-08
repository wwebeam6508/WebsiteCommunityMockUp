import { UserGroupIcon, TvIcon, CameraIcon, MusicalNoteIcon, CalendarIcon, BookOpenIcon, HandRaisedIcon, GlobeAltIcon, PhoneIcon, PhotoIcon, DocumentTextIcon, BriefcaseIcon, ShoppingCartIcon, ClockIcon, FireIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'; // Import more as needed

import React, { ReactNode, useState } from 'react';
import { Button, CustomFlowbiteTheme, Modal } from 'flowbite-react';
interface MenuItem {
  title: string;
  icon: ReactNode;
}

const items: MenuItem[] = [
  { title: 'ครอบครัว', icon: <UserGroupIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'วิทยาศาสตร์', icon: <TvIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'งาน', icon: <BriefcaseIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'เทคโนโลยี', icon: <AdjustmentsHorizontalIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'วิศวกรรมโยธา', icon: <ShieldCheckIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ศิลปะ', icon: <CameraIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ดนตรี', icon: <MusicalNoteIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'กีฬา', icon: <HandRaisedIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ภาษา', icon: <GlobeAltIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'โทรศัพท์', icon: <PhoneIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ภาพถ่าย', icon: <PhotoIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'เอกสาร', icon: <DocumentTextIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ร้านค้า', icon: <ShoppingCartIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'เวลา', icon: <ClockIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ไฟ', icon: <FireIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'ปฏิทิน', icon: <CalendarIcon className="block h-6 w-6" aria-hidden="true" /> },
  { title: 'หนังสือ', icon: <BookOpenIcon className="block h-6 w-6" aria-hidden="true" /> },
];

const Menu: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex justify-center mb-8">
        <Button color={"gray"} onClick={() => setOpenModal(true)}>เลือกห้อง</Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>เลือกห้อง</Modal.Header>
        <Modal.Body>
          <nav className="grid grid-cols-2 ot sm:grid-cols-3 md:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <a key={index} href={'#'} className="flex flex-col items-center justify-center p-2">
                <span className="text-sm mt-2 text-center">{item.title}</span>
                {item.icon}
              </a>
            ))}
          </nav>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default Menu;
