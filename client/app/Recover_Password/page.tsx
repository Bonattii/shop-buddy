'use client';
import Link from 'next/link';
import { noto_sans } from '../fonts';
import { manrope } from '../fonts';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-gray-900 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      <div className="flex pt-14 pb-14  ml-5 sm:ml-20">
        <button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <div className="pl-3">
          <h2 className={`${manrope.className} text-white text-xl`}>
            ShopBuddy
          </h2>
        </div>
      </div>
      <div className="mt-0 sm:mt-5 justify-center flex flex-col items-center max-w-xl mx-auto rounded-2xl shadow-[20px_0px_80px_0px_rgba(0,0,0,0.56)] shadow-indigo-950 drop-shadow-2xl bg-black">
        <h1 className={`${noto_sans.className} pt-14 text-white text-4xl `}>
          Forgot Password ?
        </h1>
        <h4 className="text-white pt-2">Please enter you’re email</h4>
        <div className="mt-20 w-80">
          <h2
            className={`${noto_sans.className} text-left text-white text-lg pl-1`}>
            E-mail
          </h2>
        </div>
        <div className="mt-1">
          <input
            className="w-80 py-2 px-3 border border-white bg-black rounded-md text-gray 700"
            type="text"
            placeholder="example@mail.com"
          />
        </div>
        <h4 className="text-white pt-3 break-norma w-80 text-center">
          We will send you an email to reset your password
        </h4>
        <button
          type="button"
          className=" font-semibold mt-32 rounded-xl px-28 sm:px-36 py-2.5 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white ...">
          Reset Password
        </button>
        <div className="text-white pt-3 pb-20 text-sm">
          <Link href="/Signup">Don’t have an account ? Click here</Link>
        </div>
      </div>
    </div>
  );
}
