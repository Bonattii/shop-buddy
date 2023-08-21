'use client';

import AboutSection from '@/app/components/Sections/AboutSection';
import Header from '@/app/components/Header';
import HomeHero from '@/app/components/Sections/HomeHero';
import ContactSection from '@/app/components/Sections/ContactSection';

const HomeContent = () => (
  <div className="content-container mx-8 md:mx-12 xl:mx-24 pt-12 min-h-screen">
    <Header />

    <HomeHero />

    <AboutSection />

    <ContactSection />
  </div>
);

export default HomeContent;
