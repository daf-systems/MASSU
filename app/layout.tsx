import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MASSU - Malawi Student Support Unit',
  description: 'Brightening the Future of Malawi Students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-blue-900 text-white text-sm text-center p-4">
          &copy; {new Date().getFullYear()} MASSU. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
