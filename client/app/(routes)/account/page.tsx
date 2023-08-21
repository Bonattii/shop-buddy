'use client';

import Link from 'next/link';
import FormButton from '@/app/components/Buttons/FormButton';
import Input from '@/app/components/Forms/Input';
import useAccount from './controller';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { manrope } from '@/app/styles/fonts';

const AccountContent = () => {
  const { formattedUserName, formik, submitted } = useAccount();

  return (
    <div className="content-container mx-0 md:mx-36 lg:mx-48 xl:mx-72 2xl:mx-80 pt-12 min-h-screen flex flex-col items-center justify-center gap-3">
      <nav className="self-start pl-2 pb-4">
        <Link
          href="/dashboard"
          className={`${manrope.className} text-white text-xl flex items-center gap-3`}>
          Back to dashboard
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </nav>

      <div className="bg-zinc-900 rounded-lg px-8 lg:px-12 py-8 lg:py-12 min-h-[600px] max-h-[500px] w-full overflow-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 border-b-[1px] pb-3">
          <h1 className="text-white text-2xl capitalize leading-loose font-bold">
            Hello, {formattedUserName}
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold">
            Edit your information
          </h3>

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 md:space-y-6">
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

            <FormButton
              type="submit"
              disabled={submitted}
              title={submitted ? 'Editing...' : 'Edit Profile'}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountContent;
