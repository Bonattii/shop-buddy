'use client';
import Link from 'next/link';
import { noto_sans } from '../fonts';
import { manrope } from '../fonts';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { api } from '../server/api';
import { saveTokenToLocalStorage } from '../utils/storage';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handeSubmit = () => {
    api
      .post('/users/login', {
        email,
        password,
      })
      .then((response) => {
        alert('Login realizado com sucesso!');
        console.log('Resposta do servidor:', response.data);
        saveTokenToLocalStorage(response.data.accessToken);
        router.push('/dashboard');
      })
      .catch((error) => {
        alert('Erro ao logar. Por favor, tente novamente.');
        console.error('Erro:', error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      <div className="flex pt-14 pb-14 ml-5 sm:ml-20">
        <button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
      <div className="mt-0 sm:mt-5 justify-center flex flex-col items-center max-w-lg mx-auto rounded-2xl shadow-[20px_0px_80px_0px_rgba(0,0,0,0.56)] shadow-indigo-950 drop-shadow-2xl bg-black">
        <h1 className={`${noto_sans.className} pt-10 text-white text-4xl `}>
          Login
        </h1>
        <h4 className="text-white ">Glad you’re back.!</h4>
        <div className="mt-20 w-80">
          <h3
            className={`${noto_sans.className} text-left text-white text-lg pl-1`}>
            Email
          </h3>
        </div>
        <div className="mt-1">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-80 py-2 text-slate-100 px-3 border border-white bg-black rounded-md text-gray 700"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mt-4 w-80">
          <h3
            className={`${noto_sans.className} text-left text-white text-lg pl-1`}>
            Password
          </h3>
        </div>
        <div className="mt-1">
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-80 py-2 text-slate-100 px-3 border border-white bg-black rounded-md text-gray 700"
            type="text"
            placeholder="Password"
          />
        </div>
        <button
          onClick={handeSubmit}
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
