import Image from 'next/image';
import { lora, playfair_display } from '@/app/styles/fonts';

import homePage from '@/app/img/homePage.png';
import LinkButton from '@/app/components/Buttons/LinkButton';

const HomeHero = () => (
  <section id="hero" className="p-6 px-0 sm:px-8">
    <div className="md:hidden flex justify-center pt-5">
      <Image src={homePage} alt="Main page image" width={350} height={360} />
    </div>

    <div className="flex md:block justify-center xl:justify-between mt-0 md:mt-20">
      <div className="pt-0 md:pt-5 ">
        <h1
          className={`${playfair_display.className} text-left text-white text-4xl sm:text-7xl`}
        >
          Create and Organize
        </h1>
        <h1
          className={`${playfair_display.className} text-left pt-2 text-white text-4xl sm:text-7xl`}
        >
          Shopping Lists
        </h1>
        <p className={`${lora.className} text-lg sm:text-xl text-white mt-6`}>
          With friends, family or whoever you want!
        </p>
      </div>
    </div>

    <div className="pb-36 md:pb-40 lg:pb-0 flex gap-x-2 md:gap-x-3 mt-10 justify-center lg:justify-start">
      <LinkButton authType="login" title="Sign in " />

      <LinkButton type="outlined" authType="register" title="Register" />
    </div>

    <div className="-mt-36 flex justify-center items-center lg:flex lg:justify-end">
      <div className="hidden md:block lg:mr-0 2xl:mr-5 md:pt-0">
        <Image src={homePage} alt="Main page image" width={450} height={460} />
      </div>
    </div>
  </section>
);

export default HomeHero;
