'use client';

import Link from 'next/link';
import NewsletterSignup from '@/app/components/NewsletterSignup';

export default function NewsletterPage() {
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
            <li className="font-semibold text-gray-900">Newsletter</li>
          </ol>
        </div>
      </nav>

      {/* Page Background Section */}
      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h1>
          <p className="text-white mb-10 max-w-2xl mx-auto">
            Stay connected with MASSU news, updates, and impact stories delivered straight to your inbox.
          </p>

          <NewsletterSignup />
        </div>
      </main>
    </>
  );
}
