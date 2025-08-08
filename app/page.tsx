'use client';

import { FaHandsHelping, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';
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
  className="bg-cover bg-center text-white py-24 px-8"
  style={{ backgroundImage: "url('/images/abouts_staff.jpeg')" }}
>
  <div className="max-w-4xl mx-auto text-center bg-blue-900/60 p-10 rounded shadow-lg">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MASSU</h1>
    <p className="text-lg md:text-2xl mb-6">
      Empowering students across Malawi through mentorship, support, and education.
    </p>
    <div className="flex justify-center flex-wrap gap-4">
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

      <TestimonialCarousel />
      <Partners />

    </main>
  );
}
