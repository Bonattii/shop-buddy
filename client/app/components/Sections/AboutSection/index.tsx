import { lora, playfair_display } from '@/app/styles/fonts';
import { FreeHomeIcon } from '../../icons/FreeHomeIcon';
import { ManyUsersHomeIcon } from '../../icons/ManyUsersHomeIcon';
import { CreateHomeIcon } from '../../icons/CreateHomeIcon';
import { DinamicallyHomeIcon } from '../../icons/DinamicallyHomeIcon';

const stats = [
  {
    name: 'Create in your way',
    value: 'Lists',
    icon: <CreateHomeIcon />,
  },
  {
    name: 'Simultaneous Users',
    value: '300+',
    icon: <ManyUsersHomeIcon />,
  },
  {
    name: 'Add dinamically',
    value: 'Shopping Items',
    icon: <DinamicallyHomeIcon />,
  },
  {
    name: 'Totally free',
    value: 'Unlimited',
    icon: <FreeHomeIcon />,
  },
];

const AboutSection = () => (
  <section
    id="about"
    className="relative isolate overflow-hidden mt-12 sm:mt-0 pt-28 ">
    <div className="mx-auto max-w-7xl px-0 sm:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          className={`${playfair_display.className} text-center sm:text-left text-4xl font-bold tracking-tight text-white sm:text-6xl`}>
          About Our Platform
        </h2>
        <p
          className={`${lora.className} text-center sm:text-left mt-6 text-lg leading-8 text-gray-300`}>
          We are one web application focused on deliver the best shopping lists
          for our users. You will get the best shopping lists to share with your
          friends and family!
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none  ">
        <dl className="text-left mt-16 grid grid-cols-1 sm:gap-14 sm:mt-24 sm:grid-cols-2 lg:grid-cols-2  ">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex items-center justify-center md:items-start md:justify-start md:-ml-6">
              <div className="flex  justify-center items-center ">
                {stat.icon}
              </div>
              <div className="flex-col -ml-6">
                <dd
                  className={`${playfair_display.className} text-2xl font-bold leading-9 tracking-tight text-white`}>
                  {stat.value}
                </dd>
                <dt
                  className={`${lora.className} file:text-base leading-7 text-gray-300`}>
                  {stat.name}
                </dt>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default AboutSection;
