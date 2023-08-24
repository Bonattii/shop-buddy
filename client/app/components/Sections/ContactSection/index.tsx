import Image from 'next/image';
import { lora, playfair_display } from '@/app/styles/fonts';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

import contactFormSquareDots from '@/app/img/contactFormSquareDots.svg';
import contactFormVerticalDots from '@/app/img/contactFormVerticalDots.svg';
import contactFormQuarterCircle from '@/app/img/contactFormQuarterCircle.svg';
import ContactForm from '../../Forms/ContactForm';

const waysOfContact = [
  { name: 'Phone Number', content: '(604) 123-4567' },
  {
    name: 'Email Address',
    content: 'contact@shopbuddy.com'
  }
];

const ContactSection = () => (
  <section
    id="contact"
    className="relative z-10 overflow-hidden bg-primary-500 py-24 sm:py-32 p-6 px-0 sm:px-8"
  >
    <div className=" flex flex-wrap lg:justify-between">
      <div className="w-full lg:w-1/2 xl:w-6/12">
        <div className="mb-12 max-w-[570px] lg:mb-0">
          <span
            className={`${lora.className} text-white mb-4 block text-base font-semibold`}
          >
            Contact Us
          </span>
          <h2
            className={`${playfair_display.className} text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]`}
          >
            GET IN TOUCH WITH US
          </h2>
          <p
            className={`${lora.className} text-white mb-9 text-base leading-relaxed`}
          >
            We care a lot about your opinion about how we can improve the
            application. And we care even more about your experience using it,
            so feel free to talk with us about your concerns.
          </p>

          {waysOfContact.map(wayOfContact => (
            <div
              key={wayOfContact.name}
              className="mb-8 flex w-full max-w-[370px] items-center"
            >
              <div className="bg-primary text-white mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                {wayOfContact.name === 'Phone Number' ? (
                  <PhoneIcon className="block h-12 w-12" />
                ) : (
                  <EnvelopeIcon className="block h-12 w-12" />
                )}
              </div>
              <div className="w-full">
                <h4
                  className={`${playfair_display.className} text-white mb-1 text-xl font-bold`}
                >
                  {wayOfContact.name}
                </h4>
                <p className={`${lora.className} text-white text-base`}>
                  {wayOfContact.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 lg:w-1/2 xl:w-5/12 mt-12">
        <div className="relative rounded-lg bg-zinc-950 shadow-lg p-6 space-y-4 md:space-y-6 sm:p-8">
          <ContactForm />

          <div>
            <span className="absolute -top-10 -right-9 z-[-1]">
              <Image src={contactFormQuarterCircle} alt="" />
            </span>
            <span className="absolute -right-10 top-[90px] z-[-1]">
              <Image src={contactFormVerticalDots} alt="" />
            </span>
            <span className="absolute -left-7 -bottom-7 z-[-1]">
              <Image src={contactFormSquareDots} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
