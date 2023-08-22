'use client';

import Link from 'next/link';
import FormButton from '@/app/components/Buttons/FormButton';
import Image from 'next/image';
import userProfile from '@/app/img/userProfile.png';
import Input from '@/app/components/Forms/Input';
import useAccount from './controller';
import { ChevronLeftIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { manrope } from '@/app/styles/fonts';

const AccountContent = () => {
  const { formattedUserName, formik, submitted } = useAccount();

  return (
    <div className="content-container mx-0 md:mx-36 lg:mx-48 xl:mx-72 2xl:mx-80  min-h-screen flex flex-col items-center justify-center gap-3 ">
      <nav className="self-start pl-4 pb-4">
        <Link
          href="/dashboard"
          className={`${manrope.className} text-white text-xl flex items-center gap-3`}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </Link>
      </nav>

      <div className="bg-zinc-900 rounded-lg px-8 lg:px-14 2xl:px-18 pt-12 min-h-[720px] sm:min-h-[530px] max-h-[400px] w-[380px] sm:w-full overflow-auto flex flex-col gap-8">
        <div className="flex justify-between  pb-3">
          <h1 className="text-white text-2xl capitalize leading-loose font-bold">
            Hello, {formattedUserName}
          </h1>
          <form className="flex justify-center ">
            <button
              type="submit"
              disabled={submitted}
              title={submitted ? 'Editing...' : 'Edit Profile'}
            >
              <PencilSquareIcon className="h-7 w-7 text-white" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-white text-lg font-semibold">
            Edit your information
          </h3>
          <div className=" flex gap-0 sm:gap-6 justify-between">
            <div className="flex flex-col gap-6">
              <form onSubmit={formik.handleSubmit} className="space-y-4 ">
                <Input
                  label="Name"
                  name="editName"
                  inputId="editName"
                  value={formik.values.editName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.editName && formik.errors.editName}
                  editForm
                />
                <Input
                  label="Phone"
                  name="editPhone"
                  inputId="editPhone"
                  value={formik.values.editPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.editPhone && formik.errors.editPhone}
                  editForm
                />
                <button
                  type="submit"
                  className="font-semibold rounded-md w-full py-3 bg-gradient-to-r from-indigo-950 to-indigo-900 hover:from-indigo-900 hover:to-indigo-950 text-white transition"
                >
                  {' '}
                  Confirm
                </button>
              </form>
            </div>
            <div className={`hidden sm:block `}>
              <Image
                src={userProfile}
                alt="Account page image"
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
        <div className={`block sm:hidden `}>
          <Image
            src={userProfile}
            alt="Account page image"
            width={230}
            height={210}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountContent;
