'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com', title: 'LinkedIn', color: '#0A66C2' },
    { icon: <FaFacebookF />, href: 'https://facebook.com', title: 'Facebook', color: '#1877F2' },
    { icon: <FaInstagram />, href: 'https://instagram.com', title: 'Instagram', color: '#E4405F' },
    { icon: <FaTwitter />, href: 'https://twitter.com', title: 'Twitter', color: '#1DA1F2' },
    { icon: <FaYoutube />, href: 'https://youtube.com', title: 'YouTube', color: '#FF0000' },
  ];

  return (
    <footer className="bg-blue-900 text-white text-sm px-6 py-10">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="mb-2">&copy; {new Date().getFullYear()} MASSU. All Rights Reserved.</p>
          <p>Empowering students. Building the future.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ icon, href, title, color }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${title}`}
              title={title}
              className="p-2 rounded-full bg-white transition-all duration-300 hover:scale-105"
              style={{ color }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="hidden lg:flex flex-col items-end space-y-2">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
