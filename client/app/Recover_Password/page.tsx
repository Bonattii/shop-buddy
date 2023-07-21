import Link from 'next/link';
import { noto_sans } from '../fonts';
import { manrope } from '../fonts';

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-gray-900 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      <div className="pt-14 pb-14 ml-20">
        <a className={`${manrope.className} text-white text-xl`}>ShopBuddy</a>
      </div>
      <div className="justify-center flex flex-col items-center max-w-xl mx-auto rounded-2xl shadow-[00px_0px_80px_0px_rgba(0,0,0,0.56)] shadow-indigo-950 drop-shadow-2xl bg-black">
        <a className={`${noto_sans.className} pt-14 text-white text-4xl `}>
          Forgot Password ?
        </a>
        <a className="text-white pt-2">Please enter you’re email</a>
        <div className="mt-20 w-80">
          <a
            className={`${noto_sans.className} text-left text-white text-lg pl-1`}>
            E-mail
          </a>
        </div>
        <div className="mt-1">
          <input
            className="w-80 py-2 px-3 border border-white bg-black rounded-md text-gray 700"
            type="text"
            placeholder="example@mail.com"
          />
        </div>
        <a className="text-white pt-3 break-norma w-80 text-center">
          We will send you an email to reset your password
        </a>
        <button
          type="button"
          className=" font-semibold mt-32 rounded-xl px-36 py-2.5 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white ...">
          Reset Password
        </button>
        <div className="text-white pt-3 pb-20 text-sm">
          <Link href="/Signup">Don’t have an account ? Click here</Link>
        </div>
      </div>
    </div>
  );
}
