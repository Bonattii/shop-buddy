import Image from 'next/image';
import homePage from './img/homePage.png';
import Header from './components/Header';
import { lora, playfair_display } from './fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 from-1% via-black via-40% to-black to-90% pb-10 sm:pb-0">
      <div className="content-container mx-8 md:mx-12 xl:mx-24 pt-20 min-h-screen">
        <Header />
        <div className=" md:hidden flex justify-center pt-5">
          <Image
            src={homePage}
            alt="Main page image"
            width={350}
            height={360}
          />
        </div>
        <div className="flex md:block justify-center xl:justify-between mt-0 md:mt-20 ">
          <div className=" pt-0 md:pt-5 ">
            <h1
              className={`${playfair_display.className} text-left  text-white text-5xl sm:text-6xl md:text-7xl`}>
              Create and Organize
            </h1>
            <h1
              className={`${playfair_display.className} text-left pt-2  text-white text-5xl sm:text-7xl`}>
              Shopping Lists
            </h1>
            <p
              className={`${lora.className} text-lg sm:text-xl text-white mt-6`}>
              With friends, family or whoever you want!
            </p>
          </div>
        </div>
        <div className="pb-0 md:pb-40 lg:pb-0 flex gap-x-2 md:gap-x-3 mt-10 justify-center lg:justify-start">
          <div className="xl:text-md font-semibold mt-2 xl:mt-3 rounded-xl px-6 sm:px-12 lg:px-10 xl:px-12 py-2 sm:py-3  bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white ...">
            <Link href="/login"> Start </Link>
          </div>
          <div className=" xl:text-md font-semibold mt-2 xl:mt-3 rounded-xl px-4 sm:px-10  lg:px-8 xl:px-10 py-2 sm:py-3 border-2 border-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white ...">
            <Link href="/Signup"> Sign Up </Link>
          </div>
        </div>
        <div className="-mt-36 flex justify-center items-center lg:flex lg:justify-end ">
          <div className=" hidden md:block lg:mr-0 2xl:mr-5 md:pt-0">
            <Image
              src={homePage}
              alt="Main page image"
              width={450}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
