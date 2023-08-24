import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { inter } from '@/app/styles/fonts';
import ClientOnly from '@/app/components/ClientOnly';
import Footer from '@/app/components/Sections/Footer';

export const metadata: Metadata = {
  title: 'ShoppBuddy',
  description: 'ShopBuddy application to make shopping lists'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          bg-gradient-to-br from-indigo-950 from-% via-black 3xl:via-40% via-20% to-black to-90% sm:bg-black
          pb-10 sm:pb-0 mx-auto max-w-2xl md:max-w-7xl h-screen bg-fixed
        `}
      >
        <ClientOnly>{children}</ClientOnly>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
