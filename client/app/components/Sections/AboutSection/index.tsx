import { lora, playfair_display } from '@/app/fonts';

const stats = [
  { name: 'Create in your way', value: 'Lists' },
  { name: 'Simultaneous Users', value: '300+' },
  { name: 'Add dinamically', value: 'Shopping Items' },
  { name: 'Totally free', value: 'Unlimited' }
];

const AboutSection = () => (
  <section
    id="about"
    className="relative isolate overflow-hidden py-24 sm:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          className={`${playfair_display.className} text-4xl font-bold tracking-tight text-white sm:text-6xl`}
        >
          About Our Platform
        </h2>
        <p className={`${lora.className} mt-6 text-lg leading-8 text-gray-300`}>
          We are one web application focused on deliver the best shopping lists
          for our users. You will get the best shopping lists to share with your
          friends and family!
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(stat => (
            <div key={stat.name} className="flex flex-col-reverse">
              <dt
                className={`${lora.className} file:text-base leading-7 text-gray-300`}
              >
                {stat.name}
              </dt>
              <dd
                className={`${playfair_display.className} text-2xl font-bold leading-9 tracking-tight text-white`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default AboutSection;
