'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { lora, montserrat } from '@/app/fonts';
import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import { ContactIcon } from './icons/ContactIcon';
import { IdentificationIcon } from './icons/IdentificationIcon';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIcon />,
  },
  { name: 'About', href: '/about', icon: <IdentificationIcon /> },
  { name: 'Contact Us', href: '/Contact Us', icon: <ContactIcon /> },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex items-center justify-between"
        aria-label="Global">
        <div className="flex items-center">
          <h2 className=" text-xl font-manrope font-bold tracking-wide text-white">
            ShopBuddy
          </h2>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden gap-x-2 xl:gap-x-8 lg:flex lg:flex-1 lg:justify-end">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${lora.className} text-white hover:bg-indigo-950 rounded-xl text-lg py-3 px-6`}>
              {item.name}
            </Link>
          ))}

          <Link
            href="/login"
            className={`${montserrat.className} bg-black border-solid font-bold border border-indigo-700 hover:bg-indigo-950 rounded-lg uppercase text-white  py-3 px-10`}>
            Go
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${montserrat.className} flex gap-3 -mx-3 rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-950`}>
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
