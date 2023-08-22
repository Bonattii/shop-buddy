'use client';
import { noto_sans, inter, montserrat } from '@/app/styles/fonts';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
  ArrowDownIcon,
  UsersIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { DocIcon } from '@/app/components/icons/DocIcon';
import { CreateListModal } from '@/app/components/Modal/CreateListModal';
import { api } from '@/app/server/api';
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage
} from '@/app/utils/storage';
import { DropDown } from '@/app/components/DropDown';
import { AVATAR_COLORS } from '@/app/utils/avatarColors';
import { useRouter } from 'next/navigation';
import { UserToken } from '@/app/types/token';
import jwtDecode from 'jwt-decode';
import ProtectRoute from '@/app/components/ProtectRoute';

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
  { name: 'Account', href: '/account', icon: <UserIcon className="w-6 h-6" /> },
  {
    name: 'Logout',
    href: 'logout',
    icon: <ArrowRightOnRectangleIcon className="w-6 h-6" />
  }
];

interface ImageAccountProps {
  initial: string;
}

const ImageAccount: React.FC<ImageAccountProps> = ({ initial }) => {
  return (
    <div className="flex justify-center pt-8">
      <div
        className={`h-24 w-24 rounded-full overflow-hidden ${
          AVATAR_COLORS[Math.floor(Math.random() * 18)]
        } flex justify-center items-center`}
      >
        <p className="text-5xl">{initial}</p>
      </div>
    </div>
  );
};

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lists, setLists] = useState<List[]>([]);

  const router = useRouter();

  const userToken = getTokenFromLocalStorage();

  const getLists = () => {
    api
      .get('/lists', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      .then(response => setLists(response.data));
  };

  useEffect(() => {
    getLists();
  }, []);

  if (!userToken) {
    return <ProtectRoute />;
  }

  const userTokenDecoded: UserToken = jwtDecode(userToken as string);
  const userName = userTokenDecoded.name;

  return (
    <div className="pt-10  w-100% ">
      <div className="flex justify-between pb-10 ">
        <CreateListModal onUpdate={getLists} />
        <button
          type="button"
          className="pr-6 inline-flex items-center justify-center rounded-md text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-white">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
            </a>
            <button
              type="button"
              className=" rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-col items-center flex gap-3">
            <ImageAccount initial={userName.charAt(0).toUpperCase()} />
            <div className="flex justify-center">
              <p className="pt-1 text-md">
                {userName.charAt(0).toUpperCase() + userName.slice(1)}
              </p>
            </div>
          </div>
          <div className="pl-5 mt-14 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                {navigation.map(item => (
                  <>
                    {item.href === 'logout' ? (
                      <button
                        key={item.name}
                        className={`${noto_sans.className} flex gap-3 -mx-3 rounded-md px-3 py-2.5 text-base font-semibold leading-7  text-red-500 hover:text-red-600 w-full`}
                        onClick={() => {
                          removeTokenFromLocalStorage();
                          router.push('/');
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </div>
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`${noto_sans.className} flex gap-3 -mx-3 rounded-md px-3 py-2.5 text-base font-semibold leading-7 hover:bg-purple-300 text-white hover:text-black`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </div>
                      </Link>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className="pb-20 pl-10 ">
        <div className="text-gray-200 text-sm flex items-center gap-1 pl-5 py-10">
          <ArrowDownIcon className="w-4 h-4" />
          <h1 className={`${montserrat.className}`}>My Lists</h1>
        </div>
        <div className="mx-auto  rounded-2xl">
          <ul
            role="list"
            className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {lists.map(list => (
              <Link
                key={list.id}
                href={{
                  pathname: `/lists/[title]/[id]`,
                  query: {
                    title: list.title,
                    id: list.id
                  }
                }}
                as={`/lists/${list.title}/${list.id}`}
                className="text-white mb-6 mr-8 pb-12 px-4 pt-2 cursor-pointer rounded-lg bg-[#171616] hover:bg-neutral-800"
              >
                <div className="flex  justify-between">
                  <div className="flex items-center ">
                    <DocIcon />
                    <p className={`${inter.className} text-xl`}>{list.title}</p>
                  </div>
                  <div className="items-center justify-center flex">
                    <DropDown listId={list.id} />
                  </div>
                </div>

                <div className="pt-1 pl-2 flex text-sm gap-1">
                  <CalendarDaysIcon className="w-5 h-5" />
                  {new Date(list.createdAt).toLocaleDateString()}
                </div>

                <div className="pt-2 pl-2 text-sm flex gap-1">
                  <UsersIcon className="w-5 h-5" />
                  {list.users.length}
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
