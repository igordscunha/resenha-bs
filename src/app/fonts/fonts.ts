import { Geist, Geist_Mono, Henny_Penny, Major_Mono_Display, Chakra_Petch, Diplomata } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const hennypenny = Henny_Penny({
  weight: ['400'],
  subsets: ['latin'],
});

export const major_mono_display = Major_Mono_Display({
  weight: ['400'],
  subsets: ['latin']
});

export const chakra_petch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});

export const diplomata = Diplomata({
  weight: ['400'],
  subsets: ['latin']
});