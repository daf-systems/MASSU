'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMsg('');

    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    try {
      await new Promise((res) => setTimeout(res, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

        {/* Input field with icon */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
  type="email"
  placeholder="Your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-gray-900"
  required
/>

        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white rounded px-4 py-2 font-semibold hover:bg-blue-800 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Feedback Messages */}
      {status === 'success' && (
        <p className="mt-4 text-green-600 font-medium">
          Thank you for subscribing!
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 font-medium">{errorMsg}</p>
      )}
    </div>
  );
}
