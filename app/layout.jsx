import './globals.css';
import { Poppins } from 'next/font/google';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>{children}</body>
    </html>
    
  );
}
