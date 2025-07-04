'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-sm px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} MASSU. All Rights Reserved.</p>

        <div className="flex space-x-4 text-lg">
          {[
            { icon: <FaLinkedinIn />, href: 'https://linkedin.com', title: 'LinkedIn' },
            { icon: <FaFacebookF />, href: 'https://facebook.com', title: 'Facebook' },
            { icon: <FaInstagram />, href: 'https://instagram.com', title: 'Instagram' },
            { icon: <FaTwitter />, href: 'https://twitter.com', title: 'Twitter' },
            { icon: <FaYoutube />, href: 'https://youtube.com', title: 'YouTube' },
          ].map(({ icon, href, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${title}`}
              title={title}
              className="p-2 rounded-full hover:bg-white hover:text-blue-900 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
