'use client';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSearch,
} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col space-y-3">
        {/* Top: Logo and Navigation Links */}
        <div className="flex justify-between items-center flex-wrap">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            MASSU
          </Link>

          <div className="flex flex-wrap space-x-3 text-sm md:text-base mt-2 md:mt-0">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/programs', label: 'Programs' },
              { href: '/impact', label: 'Impact' },
              { href: '/get-involved', label: 'Get Involved' },
              { href: '/news', label: 'News' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="px-3 py-1 rounded-md hover:bg-white hover:text-blue-900 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom: Right-aligned Search + Social Icons */}
        <div className="flex justify-end items-center space-x-3 pt-2 text-lg">
          {[{ icon: <FaSearch />, title: 'Search' },
            { icon: <FaLinkedinIn />, href: 'https://linkedin.com', title: 'LinkedIn' },
            { icon: <FaFacebookF />, href: 'https://facebook.com', title: 'Facebook' },
            { icon: <FaInstagram />, href: 'https://instagram.com', title: 'Instagram' },
            { icon: <FaTwitter />, href: 'https://twitter.com', title: 'X (Twitter)' },
            { icon: <FaYoutube />, href: 'https://youtube.com', title: 'YouTube' }
          ].map(({ icon, href, title }, index) =>
            href ? (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="p-2 rounded-full hover:bg-white hover:text-blue-900 transition"
              >
                {icon}
              </a>
            ) : (
              <div
                key={title}
                title={title}
                className="p-2 rounded-full hover:bg-white hover:text-blue-900 cursor-pointer transition"
              >
                {icon}
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
