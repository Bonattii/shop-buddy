'use client';

import AboutSection from '@/app/components/Sections/AboutSection';
import Header from '@/app/components/Header';
import HomeHero from '@/app/components/Sections/HomeHero';
import ContactSection from '@/app/components/Sections/ContactSection';

const HomeContent = () => (
  <div
    className="bg-gradient-to-br from-indigo-950 from-% via-black 3xl:via-40% via-30% to-black to-90% sm:bg-black
  pb-10 sm:pb-0  h-screen w-screen bg-fixed content-container mx-8 md:mx-12 xl:mx-24 pt-12 min-h-screen">
    <Header />

    <HomeHero />

    <AboutSection />

    <ContactSection />
  </div>
);

export default HomeContent;
