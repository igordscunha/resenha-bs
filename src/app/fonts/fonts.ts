import { Anton, Instrument_Serif, Manrope } from 'next/font/google';

export const anton = Anton({
  variable: '--font-anton',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
