'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';


export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`Searching for: ${query}`);
      // Optional: navigate(`/search?q=${query}`);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
       <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
  <Image
    src="/images/massu.jpeg"
    alt="MASSU Logo"
    width={40}
    height={40}
    className="rounded-full"
  />
  <span className="text-2xl font-bold tracking-tight">MASSU</span>
</Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`px-3 py-1 rounded-md transition font-medium ${
                pathname === href
                  ? 'bg-white text-blue-900'
                  : 'hover:bg-white hover:text-blue-900'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Search */}
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded-md bg-white text-gray-900 w-48 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Search"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-3 py-1 rounded-md transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 animate-slideDown">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium transition ${
                pathname === href
                  ? 'bg-white text-blue-900'
                  : 'hover:bg-white hover:text-blue-900'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex items-center space-x-2 mt-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-1 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-3 py-1 rounded-md transition"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
