import { noto_sans, montserrat } from '../fonts';
import React from 'react';
import Image from 'next/image';

const people = [
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&usqp=CAU',
    name: 'Home shopping',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&usqp=CAU',
    name: 'Supermarket',
  },
];

const ListComponent = () => {
  return (
    <ul role="list" className="p-6 divide-y divide-slate-200">
      {people.map((person, index) => (
        <li
          key={index}
          className={`flex py-4 ${index === 0 ? 'first:pt-0' : ''} ${
            index === people.length - 1 ? 'last:pb-0' : ''
          }`}>
          <img
            src={person.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-3 overflow-hidden">
            <p className={`${montserrat.className} text-lg text-white`}>
              {person.name}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default function Page() {
  const people = [];

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-900 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      <div className="justify-center flex flex-col items-center max-w-lg mx-auto rounded-2xl shadow-[20px_0px_80px_0px_rgba(0,0,0,0.56)] shadow-indigo-950 drop-shadow-2xl bg-black">
        <h1 className={`${noto_sans.className} pt-14 text-white text-4xl `}>
          Lists
        </h1>
        {}
        <ListComponent />
      </div>
    </div>
  );
}
