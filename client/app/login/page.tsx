import Link from 'next/link';
import { noto_sans } from '../fonts';
import { manrope } from '../fonts';

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-gray-900 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      <div className="pt-14 pb-14 ml-20">
        <a className={`${manrope.className} text-white text-xl`}>ShopBuddy</a>
      </div>
      <div className="justify-center flex flex-col items-center max-w-md mx-auto rounded-2xl shadow-[00px_0px_80px_0px_rgba(0,0,0,0.56)] shadow-indigo-950 drop-shadow-2xl bg-black">
        <a className={`${noto_sans.className} pt-10 text-white text-4xl `}>
          Login
        </a>
        <a className="text-white ">Glad you’re back.!</a>
        <div className="mt-20 w-80">
          <a
            className={`${noto_sans.className} text-left text-white text-lg pl-1`}>
            Username
          </a>
        </div>
        <div className="mt-1">
          <input
            className="w-80 py-2 px-3 border border-white bg-black rounded-md text-gray 700"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mt-4 w-80">
          <a
            className={`${noto_sans.className} text-left text-white text-lg pl-1`}>
            Password
          </a>
        </div>
        <div className="mt-1">
          <input
            className="w-80 py-2 px-3 border border-white bg-black rounded-md text-gray 700"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="w-80 mt-8">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4  bg-gray-100 border-gray-300 rounded-xl focus:ring-indigo-900 dark:focus:ring-indigo-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="link-checkbox"
            className="ml-2 text-sm font-medium text-white">
            Remember me
          </label>
        </div>
        <button
          type="button"
          className=" font-semibold mt-32 rounded-xl px-36 py-2.5 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white ...">
          Login
        </button>
        <div className="text-white pt-3 pb-20 text-sm">
          <Link href="/Recover_Password">Forgot password ? Click here</Link>
        </div>
      </div>
    </div>
  );
}
