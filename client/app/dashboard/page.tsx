'use client';
import { noto_sans } from '../fonts';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { CreateListModal } from '../components/Modal/CreateListModal';
import { api } from '../server/api';
import { getTokenFromLocalStorage } from '../utils/storage';
import { AvatarImageByName } from '../components/AvatarImageByName';
import { AVATAR_COLORS } from '../utils/avatarColors';

interface List {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  users: [
    {
      id: string;
      name: string;
    }
  ];
}

const navigation = [
  {
    name: 'Setting',
    href: '/',
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
  },
  { name: 'Account', href: '/about', icon: <UserIcon className="w-6 h-6" /> },
  {
    name: 'Exit',
    href: '/Contact Us',
    icon: <ArrowRightOnRectangleIcon className="w-6 h-6" />,
  },
];

interface ImageAccountProps {
  imageUrl: string;
}

const ImageAccount: React.FC<ImageAccountProps> = ({ imageUrl }) => {
  return (
    <div className="flex justify-center pt-8">
      <div className="h-24 w-24 rounded-full overflow-hidden">
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lists, setLists] = useState<List[]>([]);
  const dummyImageUrl =
    'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80';

  useEffect(() => {
    api
      .get('/lists', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      .then((response) => setLists(response.data));
  }, []);

  return (
    <div className="pt-10  w-100% h-screen">
      <div className="flex justify-between pb-14 ">
        <CreateListModal />
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}>
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-col items-center">
            <ImageAccount imageUrl={dummyImageUrl} />
            <div className="flex justify-center">
              <p className="pt-1 text-md text-black"> Name</p>
            </div>
          </div>
          <div className="pl-5 mt-14 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-8 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${noto_sans.className} flex gap-3 -mx-3 rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-300`}>
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <h1
        className={`${noto_sans.className} flex justify-center items-center text-white text-4xl pb-8`}>
        Lists
      </h1>
      <div className="pb-20 justify-center flex flex-col items-center  rounded-2xl w-100% bg-zinc-900">
        <ul role="list" className=" divide-y divide-slate-200 space-y-8">
          {lists.map((list, index) => (
            <li
              key={index}
              className={`  ${index === 0 ? 'first:pt-0' : ''} ${
                index === lists.length - 1 ? 'last:pb-0' : ''
              }`}>
              <div className=" pt-8 overflow-hidden ">
                <p className={`${noto_sans.className} text-2xl text-white`}>
                  {list.title}
                </p>
              </div>
              <div className="pt-2 relative flex w-full ">
                {list.users.map((user, index) => (
                  <AvatarImageByName
                    key={user.id}
                    name={user.name}
                    color={AVATAR_COLORS[index]}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
