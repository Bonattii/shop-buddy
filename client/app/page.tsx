import Image from 'next/image';
import homePage from './img/homePage.png';
import { montserrat } from './fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      <div className="flex justify-between ml-20 pt-20 mr-20">
        <div className="flex items-center">
          <a className=" text-xl font-manrope font-bold tracking-wide text-white">
            ShopBuddy
          </a>
        </div>
        <nav className="hidden md:flex text-lg">
          <a
            href="#"
            className={`${montserrat.className} text-white hover:bg-indigo-950 rounded-xl py-3 px-6 mx-5`}>
            Home
          </a>
          <a
            href="#"
            className={`${montserrat.className} text-white hover:bg-indigo-950 rounded-xl py-3 px-6 mx-5`}>
            About
          </a>
          <Link
            href="/Signup"
            className={`${montserrat.className} text-white hover:bg-indigo-950 rounded-xl py-3 px-6 mx-5`}>
            Sign Up
          </Link>
          <Link
            href="/login"
            className={`${montserrat.className} bg-black border-solid border border-indigo-700 hover:bg-indigo-950 rounded-lg uppercase text-white ml-14 py-3 px-10`}>
            Go
          </Link>
        </nav>
      </div>
      <div className="flex justify-between ml-20 mt-20">
        <div className=" pt-5 w-2/3">
          <a className=" leading-snug text-left font-bold text-white text-8xl overflow-hidden">
            Organize your Shopping List with whoever you want
          </a>
          <a className="text-white block mt-16">Already Registered? </a>
          <button
            type="button"
            className="font-semibold mt-3 rounded-xl px-16 py-4 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white ...">
            Start
          </button>
        </div>
        <div className=" mr-5 pt-56">
          <Image
            src={homePage}
            alt="Main page image"
            width={550}
            height={562}
          />
        </div>
      </div>
    </div>
  );
}
