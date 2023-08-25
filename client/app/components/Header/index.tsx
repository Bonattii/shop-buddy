'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { montserrat } from '@/app/styles/fonts';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  IdentificationIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Home',
    href: '#home',
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    name: 'About',
    href: '#about',
    icon: <IdentificationIcon className="h-6 w-6" />,
  },
  {
    name: 'Testimonials',
    href: '#testimonial',
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
  },
  {
    name: 'Contact Us',
    href: '#contact',
    icon: <EnvelopeIcon className="h-6 w-6" />,
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between mb-0 sm:mb-6"
        aria-label="Global">
        <div className="flex items-center">
          <h2 className=" text-lg font-manrope font-bold tracking-wide text-white">
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

        <div className="hidden gap-x-2 xl:gap-x-6 lg:flex lg:flex-1 lg:justify-end lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" text-white hover:bg-indigo-900 font-medium rounded-xl text-md py-3 px-4">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex  items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5
text-white"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-8">
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
};

export default Header;
