import { playfair_display } from '../styles/fonts';

const featuredTestimonial = {
  body: 'This app is your ever-present list-organization companion. Ive created lists effortlessly plus I can add my parents to help me not forget an item when Im shopping.',
  author: {
    name: 'Benjamin Collins',
    handle: 'benjamincollins',
    imageUrl:
      'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
};
const testimonials = [
  [
    [
      {
        body: 'It stands out in a unique way. Effortless utility when making my shopping list.',
        author: {
          name: 'Emily Johnson',
          handle: 'emilyjohnson',
          imageUrl:
            'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80',
        },
      },
    ],
    [
      {
        body: 'This shopping list empowers with ease, making shopping delightful. Effortless organization, inclusive collaboration.',
        author: {
          name: 'Olivia Parker',
          handle: 'oliviaparker',
          imageUrl:
            'https://images.unsplash.com/photo-1560057303-32ab46595f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'ShopBuddy streamlines my shopping, enabling shared experiences seamlessly. I create lists, invite friends, enhancing retail camaraderie gracefully.',
        author: {
          name: 'James Anderson',
          handle: 'jamesanderson',
          imageUrl:
            'https://images.unsplash.com/photo-1562087926-662f8573327b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
        },
      },
    ],
    [
      {
        body: 'This app transforms shopping, fostering shared enjoyment effortlessly. Crafting lists, inviting friends—elevating experiences beautifully.',
        author: {
          name: 'Sophia Williams',
          handle: 'sophiawilliams',
          imageUrl:
            'https://images.unsplash.com/photo-1587677171791-8b93c752999b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80',
        },
      },
    ],
  ],
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonial() {
  return (
    <section id="testimonial" className="relative isolate   mt-32 sm:mt-52">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true">
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#4a4684] to-[#535099]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true">
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#535099] to-[#4a4684] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto text-center sm:text-left">
          <p
            className={`${playfair_display.className} text-center sm:text-left text-4xl font-bold tracking-tight text-white sm:text-6xl`}>
            Trusted by Thousands of Happy Customer
          </p>
        </div>
        <div className="mx-4 sm:mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-white sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className=" col-span-2 hidden sm:block sm:rounded-2xl bg-gradient-to-r from-indigo-950 to-black sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-white">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-white">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}>
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-gradient-to-r from-neutral-900  p-6 shadow-lg ring-1 ring-gray-900/5">
                      <blockquote className="text-white">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-white">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
