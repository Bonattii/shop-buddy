'use client';

import AboutSection from '../../Sections/AboutSection';
import Header from '../../Header';
import HomeHero from '../../Sections/HomeHero';
import ContactSection from '../../Sections/ContactSection';

const HomeContent = () => (
  <div className="content-container mx-8 md:mx-12 xl:mx-24 pt-12 min-h-screen">
    <Header />

    <HomeHero />

    <AboutSection />

    <ContactSection />
  </div>
);

export default HomeContent;
