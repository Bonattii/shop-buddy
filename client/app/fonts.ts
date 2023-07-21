import { Inter, Montserrat, Noto_Sans, Manrope } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

export const noto_sans = Noto_Sans({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export const manrope = Manrope({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});
