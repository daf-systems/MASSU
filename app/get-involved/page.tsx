import Link from "next/link";
import {
  FaMoneyBillWave,
  FaHandsHelping,
  FaHandshake,
} from "react-icons/fa";

export default function GetInvolvedPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center">
            <li>
              <Link
                href="/"
                className="text-blue-800 font-medium hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="font-semibold text-gray-900">Get Involved</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        aria-labelledby="get-involved-hero"
        className="bg-cover bg-center text-white py-24 px-8"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        <div className="max-w-4xl mx-auto text-center bg-blue-900/60 p-6 rounded shadow-lg">
          <h1
            id="get-involved-hero"
            className="text-4xl font-bold mb-4 tracking-tight"
          >
            Get Involved
          </h1>
          <p className="text-lg">
            Join hands with MASSU in shaping the future of Malawi’s youth
            through support, mentorship, and partnership.
          </p>
        </div>
      </section>

      {/* Intro Paragraph */}
      <div className="p-8 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Your support fuels our mission. Whether you're an individual,
          organization, or business — there’s a way for you to make a real
          difference in a student's life.
        </p>
      </div>

      {/* Main Sections Grid */}
      <section className="px-8 pb-16 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Donate */}
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2 mb-3">
            <FaMoneyBillWave className="text-yellow-500" /> Donate
          </h2>
          <p className="text-gray-700 mb-4">
            Every donation goes directly to support students — school fees,
            food, materials, and mentorship.
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
            <li>Mobile Money (TNM & Airtel)</li>
            <li>Bank Transfers (details on request)</li>
            <li>In-kind: books, laptops, food, uniforms</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            Contact us for details or to request a receipt.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-medium bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Donate Now →
          </Link>
        </div>

        {/* Volunteer */}
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2 mb-3">
            <FaHandsHelping className="text-yellow-500" /> Volunteer
          </h2>
          <p className="text-gray-700 mb-4">
            Join our incredible team of volunteers making a hands-on impact in
            students’ lives. You can serve:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
            <li>As a Mentor</li>
            <li>As a Guest Speaker</li>
            <li>At school events and visits</li>
            <li>In logistics or outreach</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            Training and orientation provided.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-medium bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Become a Volunteer →
          </Link>
        </div>

        {/* Partner */}
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2 mb-3">
            <FaHandshake className="text-yellow-500" /> Partner With Us
          </h2>
          <p className="text-gray-700 mb-4">
            We welcome partnerships with NGOs, schools, companies, and churches
            to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
            <li>Reach more students</li>
            <li>Co-run outreach programs</li>
            <li>Share resources (venues, tools)</li>
            <li>Offer scholarships & internships</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            Let’s explore meaningful collaboration.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-medium bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Partner With Us →
          </Link>
        </div>
      </section>

      {/* Final Contact Prompt */}
      <div className="text-center pb-16">
        <Link
          href="/contact"
          className="text-blue-600 underline hover:text-blue-800 text-base font-medium"
        >
          Contact us for any inquiries →
        </Link>
      </div>
    </main>
  );
}
