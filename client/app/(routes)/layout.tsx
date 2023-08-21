import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { inter } from '@/app/styles/fonts';
import ClientOnly from '@/app/components/ClientOnly';
import Footer from '@/app/components/Sections/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}`}>
        <ClientOnly>{children}</ClientOnly>
        <Footer />
      </body>
    </html>
  );
}
