'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaLaptopCode,
  FaUserFriends,
  FaNewspaper,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import newsData from '../data/news.json';
import NewsletterSignup from '@/app/components/NewsletterSignup';

const iconMap: Record<string, IconType> = {
  'massu-digital-literacy': FaLaptopCode,
  'mentorship-impact-trip': FaUserFriends,
};

export default function NewsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="text-blue-800 font-medium hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900">News & Updates</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative p-8 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">News & Updates</h1>

          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsData.map(({ title, slug, date, description, imageUrl }) => {
              const Icon = iconMap[slug] ?? FaNewspaper;
              return (
                <Link
                  key={slug}
                  href={`/news/${slug}`}
                  className="block bg-white rounded overflow-hidden shadow hover:shadow-lg transition"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-yellow-600 text-2xl mb-2">
                      <Icon />
                    </div>
                    <h2 className="text-xl font-semibold text-blue-700 mb-1">{title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{date}</p>
                    <p className="text-gray-700 text-sm">{description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Social Media Icons */}
          <div className="text-center mt-20">
            <h3 className="text-xl font-semibold text-white mb-6">Follow MASSU</h3>
            <div className="flex justify-center gap-5">
              {/* YouTube */}
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition transform"
              >
                <FaYoutube className="text-red-600 text-2xl" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition transform"
              >
                <FaFacebook className="text-blue-600 text-2xl" />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition transform"
              >
                <FaTwitter className="text-sky-500 text-2xl" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center shadow-md hover:scale-110 transition transform"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Subscribe Button */}
          <div className="mt-12 text-center">
            <Link
  href="/newsletter"
  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md transition-all text-lg"
>
   Subscribe to our Newsletter
</Link>

          </div>
        </div>
      </main>
    </>
  );
}
