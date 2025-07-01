'use client';

import { useState } from 'react';
import { SiGmail } from 'react-icons/si';

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMsg('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    if (!isValidEmail(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      await new Promise((res) => setTimeout(res, 1500)); // simulate API call
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setErrorMsg('Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <a href="/" className="text-blue-800 font-medium hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900">Contact Us</li>
          </ol>
        </div>
      </nav>

      {/* Main content */}
      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat py-12"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        {/* Blue overlay with blur */}
        <div
          className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto p-8 space-y-10 text-gray-900">
          <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-sm">Contact Us</h1>

          <p className="max-w-3xl leading-relaxed text-lg text-black/90">
            We’d love to hear from you. Reach out with any questions, support offers, partnership ideas, or feedback.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Info */}
            <section className="bg-gray-100 rounded-xl p-8 shadow-lg transition hover:shadow-2xl hover:scale-[1.03] duration-300">
              <h2 className="text-blue-800 text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" /> Reach Us At
              </h2>
              <ul className="list-disc pl-6 text-gray-900 space-y-4 text-lg leading-relaxed">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-yellow-400" /> info@massu.org.mw
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-yellow-400" /> +265 999 123 456
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-400" /> Blantyre, Malawi
                </li>
              </ul>
            </section>

            {/* Social Media */}
            <section className="bg-gray-100 rounded-xl p-8 shadow-lg transition hover:shadow-2xl hover:scale-[1.03] duration-300">
              <h2 className="text-blue-800 text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaFacebook className="text-blue-600" /> Social Media
              </h2>
              <ul className="list-disc pl-6 text-gray-900 space-y-4 text-lg leading-relaxed">
                <li className="flex items-center gap-2">
                  <FaFacebook className="text-blue-600" />{' '}
                  <a
                    className="text-blue-600 underline hover:text-blue-800"
                    href="https://facebook.com/massu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /massu
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTwitter className="text-sky-500" />{' '}
                  <a
                    className="text-blue-600 underline hover:text-blue-800"
                    href="https://twitter.com/massu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @massu
                  </a>
                </li>
              </ul>
            </section>

            {/* Contact Form */}
            <section className="bg-white rounded-xl p-8 shadow-lg transition hover:shadow-2xl hover:scale-[1.03] duration-300 max-w-md mx-auto">
              <h2 className="text-blue-800 text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaCommentDots className="text-yellow-400" /> Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 text-gray-900">
                {/* Name Field */}
                <div className="relative flex items-center">
                  <FaUser className="absolute left-3 text-gray-400 text-lg" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative flex items-center">
                  <SiGmail className="absolute left-3 text-red-600 text-xl" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 h-32 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send'}
                </button>
              </form>

              {/* Status Messages */}
              {status === 'error' && (
                <p className="mt-4 text-red-600 font-medium text-center">{errorMsg}</p>
              )}
              {status === 'success' && (
                <p className="mt-4 text-green-600 font-medium text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
