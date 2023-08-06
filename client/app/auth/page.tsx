'use client';

import Link from 'next/link';
import { ChangeEvent } from 'react';
import { manrope } from '../fonts';

import useAuth from './controller';
import Input from '../components/Input';
import { AuthFormInputIds } from './types';

const Auth = () => {
  const {
    name,
    phone,
    email,
    password,
    confirmPassword,
    variant,
    toggleVariant,
    handleInputChange,
    handleLogin,
    handleRegister
  } = useAuth();

  return (
    <div className="bg-gradient-to-br from-gray-900 from-1% via-black via-40% to-black to-90% w-100% h-screen">
      {/* TODO: ADD LOGO */}
      <div className="bg-black md:bg-transparent w-full h-full">
        <nav className="px-12 py-5 mb-12">
          <Link href="/" className={`${manrope.className} text-white text-xl`}>
            ShopBuddy
          </Link>
        </nav>

        <div className="flex justify-center">
          <div className="mt-2 px-16 py-12 self-center w-full lg:w-2/5 md:max-w-md  bg-transparent rounded-lg">
            <h2 className={`text-white text-4xl font-semibold mb-8`}>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <>
                  <Input
                    label="Name"
                    inputId={AuthFormInputIds.Name}
                    name={AuthFormInputIds.Name}
                    value={name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event)
                    }
                  />

                  <Input
                    label="Phone"
                    inputId={AuthFormInputIds.Phone}
                    name={AuthFormInputIds.Phone}
                    value={phone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event)
                    }
                  />
                </>
              )}

              <Input
                label="Email"
                inputId={AuthFormInputIds.Email}
                name={AuthFormInputIds.Email}
                value={email}
                type="email"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(event)
                }
              />

              <Input
                label="Password"
                inputId={AuthFormInputIds.Password}
                name={AuthFormInputIds.Password}
                value={password}
                type="password"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(event)
                }
              />

              {variant === 'register' && (
                <Input
                  label="Confirm Password"
                  inputId={AuthFormInputIds.ConfirmPassword}
                  name={AuthFormInputIds.ConfirmPassword}
                  value={confirmPassword}
                  type="password"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(event)
                  }
                />
              )}
            </div>

            <button
              type="button"
              onClick={variant === 'login' ? handleLogin : handleRegister}
              className="font-semibold mt-10 rounded-md w-full py-3 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white transition"
            >
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>

            <p className="text-neutral-300 mt-12">
              {variant === 'login'
                ? 'First time here?'
                : 'Already have an account?'}

              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
