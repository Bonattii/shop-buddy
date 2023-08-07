'use client';

import Link from 'next/link';
import { manrope } from '../../../fonts';

import useAuthContent from './controller';
import Input from '../../Input';

const AuthContent = () => {
  const { authVariation, toggleVariation, formik } = useAuthContent();

  return (
    <div className="w-100% h-screen">
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
              {authVariation === 'login' ? 'Sign in' : 'Register'}
            </h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-4">
                {authVariation === 'register' && (
                  <>
                    <Input
                      label="Name"
                      name="name"
                      inputId="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && formik.errors.name}
                    />

                    <Input
                      label="Phone"
                      name="phone"
                      inputId="phone"
                      type="tel"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && formik.errors.phone}
                    />
                  </>
                )}

                <Input
                  label="Email"
                  name="email"
                  inputId="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                />

                <Input
                  label="Password"
                  name="password"
                  inputId="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && formik.errors.password}
                />

                {authVariation === 'register' && (
                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    inputId="confirmPassword"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                )}
              </div>

              <button
                type="submit"
                className="font-semibold mt-10 rounded-md w-full py-3 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-indigo-950 text-white transition"
              >
                {authVariation === 'login' ? 'Login' : 'Sign Up'}
              </button>

              <p className="text-neutral-300 mt-12">
                {authVariation === 'login'
                  ? 'First time here?'
                  : 'Already have an account?'}

                <span
                  onClick={toggleVariation}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {authVariation === 'login' ? 'Create an account' : 'Login'}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
