// app/contact/page.tsx
'use client'; // This directive is necessary for client-side interactivity in Next.js App Router

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
import FormField from '../components/FormField'; // Absolute import for cleaner paths
import { isValidEmail } from '@/app/functions/validation'; // Import the validation function

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' }); // State for field-specific errors
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [generalErrorMsg, setGeneralErrorMsg] = useState(''); // State for general form errors (e.g., API errors)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear the specific field's error when the user starts typing in it
    setErrors(prev => ({ ...prev, [name]: '' }));
    // Clear any general validation error messages if the user starts correcting the form
    if (generalErrorMsg === 'Please correct the errors in the form.' || generalErrorMsg === 'Please enter a valid email address.') {
        setGeneralErrorMsg('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle'); // Reset status
    setErrors({ name: '', email: '', message: '' }); // Clear all previous field errors
    setGeneralErrorMsg(''); // Clear any previous general error messages

    let formIsValid = true;
    const newErrors = { name: '', email: '', message: '' }; // Temporary object to collect errors

    // Perform validation for each field
    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!isValidEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    }

    setErrors(newErrors); // Update the errors state to display messages

    if (!formIsValid) {
      setGeneralErrorMsg('Please correct the errors in the form.');
      setStatus('error'); // Set status to error if form is not valid
      return; // Stop submission if validation fails
    }

    setStatus('submitting'); // Indicate that the form is being submitted

    try {
      // --- START: Actual API Call ---
      // IMPORTANT: Replace '/api/contact' with your actual backend endpoint URL
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers your API might require, e.g., 'Authorization': 'Bearer YOUR_TOKEN'
        },
        body: JSON.stringify(form), // Send the form data as JSON
      });

      if (!response.ok) {
        // If the server response is not in the 2xx range
        let errorData;
        try {
          // Attempt to parse a specific error message from the response body
          errorData = await response.json();
        } catch (parseError) {
          // Fallback if the response is not valid JSON
          console.error("Failed to parse error response:", parseError);
          errorData = { message: 'An unexpected error occurred on the server.' };
        }
        // Throw an error to be caught by the catch block below
        throw new Error(errorData.message || 'Failed to send message.');
      }

      // If the response is successful (status 2xx)
      // You can optionally read the success response data if your API returns any
      // const successData = await response.json();
      // console.log('Message sent successfully:', successData);

      setStatus('success'); // Indicate successful submission
      setForm({ name: '', email: '', message: '' }); // Clear the form fields
    } catch (apiError: any) { // Catch any errors during the fetch operation
      console.error("Submission error:", apiError); // Log the full error for debugging
      setGeneralErrorMsg(apiError.message || 'Failed to send message. Please try again later.');
      setStatus('error'); // Set status to error
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-900 py-4 px-6 shadow-sm">
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
        <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" aria-hidden="true" />

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
              <form onSubmit={handleSubmit} className="space-y-6 text-gray-900" noValidate>
                {/* Name Field */}
                <FormField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  icon={<FaUser />}
                  required
                  error={errors.name} // Pass the specific error for this field
                />

                {/* Email Field */}
                <FormField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  icon={<SiGmail className="text-red-600" />} // Retained icon color for Gmail
                  required
                  error={errors.email}
                />

                {/* Message Field */}
                <FormField
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  icon={<FaCommentDots />}
                  isTextArea // Indicate that this should be a textarea
                  required
                  error={errors.message}
                />

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
              {generalErrorMsg && ( // Display general errors (e.g., "Please correct errors" or API errors)
                <p className="mt-4 text-red-600 font-medium text-center">{generalErrorMsg}</p>
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