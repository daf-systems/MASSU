'use client';

import { FaHandsHelping, FaChalkboardTeacher, FaLaptopCode, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import TestimonialCarousel from './components/TestimonialCarousel';
import Partners from "./components/Partners";



export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center">
            <li className="font-semibold text-gray-900">Home</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-8"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-900/80 backdrop-blur-sm rounded-xl p-10 text-center shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MASSU</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Empowering students across Malawi through mentorship, support, and education.
            </p>
            <div className="mt-8 flex justify-center flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="bg-white text-blue-800 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
              >
                Get Involved
              </Link>
              <Link
                href="/programs"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition"
              >
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto text-center bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-4xl mb-4"><FaHandsHelping /></div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Bursaries & Financial Support</h3>
            <p className="text-gray-600">
              Helping students afford their education through scholarships and bursaries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-4xl mb-4"><FaChalkboardTeacher /></div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Mentorship & Guidance</h3>
            <p className="text-gray-600">
              One-on-one support to empower students in their academic and personal growth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-4xl mb-4"><FaLaptopCode /></div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Digital Literacy & Life Skills</h3>
            <p className="text-gray-600">
              Equipping youth with essential skills to thrive in today’s world.
            </p>
          </div>
        </div>
      </section>

            {/* Impact Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-blue-700">800+</p>
            <p className="text-gray-700">Students Sponsored</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">120+</p>
            <p className="text-gray-700">Mentors Trained</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">50+</p>
            <p className="text-gray-700">Schools Reached</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">3</p>
            <p className="text-gray-700">Regions of Malawi</p>
          </div>
        </div>
      </section>

      //.............................
      {/* Events Section */}
{/* Events Section */}
<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
    <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
      Discover inspiring events organized by MASSU to support leadership, digital skills, and community engagement.
    </p>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Event 1 - Leadership */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-3 mb-4 text-blue-800">
          <FaUsers className="text-2xl text-yellow-500" />
          <h3 className="text-xl font-semibold">Leadership Summit 2025</h3>
        </div>
        <p className="text-sm text-gray-500 mb-1">📅 July 15, 2025</p>
        <p className="text-sm text-gray-500 mb-3">📍 Mzuzu University Auditorium</p>
        <p className="text-gray-700 text-sm text-left">
          A national platform for student leaders to build leadership, strategy, and advocacy skills.
        </p>
      </div>

      {/* Event 2 - Tech */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-3 mb-4 text-blue-800">
          <FaLaptopCode className="text-2xl text-yellow-500" />
          <h3 className="text-xl font-semibold">Digital Skills Bootcamp</h3>
        </div>
        <p className="text-sm text-gray-500 mb-1">📅 August 5–7, 2025</p>
        <p className="text-sm text-gray-500 mb-3">📍 Chancellor College</p>
        <p className="text-gray-700 text-sm text-left">
          Learn coding, cybersecurity, and productivity tools in this 3-day interactive workshop.
        </p>
      </div>

      {/* Event 3 - Outreach */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-3 mb-4 text-blue-800">
          <FaHandsHelping className="text-2xl text-yellow-500" />
          <h3 className="text-xl font-semibold">Community Outreach Day</h3>
        </div>
        <p className="text-sm text-gray-500 mb-1">📅 September 2, 2025</p>
        <p className="text-sm text-gray-500 mb-3">📍 Nkhata Bay Secondary School</p>
        <p className="text-gray-700 text-sm text-left">
          MASSU volunteers will mentor, donate learning materials, and deliver motivational talks.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-12">
      <Link
        href="/events"
        className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        View All Events
      </Link>
    </div>
  </div>
</section>





      <TestimonialCarousel />
      <Partners />

    </main>
  );
}
