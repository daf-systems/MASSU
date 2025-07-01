import { FaUsers, FaHandsHelping, FaSchool, FaGlobeAfrica } from 'react-icons/fa';
import Link from 'next/link';

export default function ImpactPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb (Yellow Bar) */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="text-blue-800 font-medium hover:underline">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900">Impact</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-24 px-8"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        <div className="max-w-4xl mx-auto text-center bg-blue-900/60 p-6 rounded shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-white">
            Changing lives — one student at a time. Discover how MASSU is making a difference across Malawi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="p-8 max-w-6xl mx-auto space-y-12">
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
          Our programs have already reached hundreds of students across Malawi, helping them stay in school, build
          confidence, grow in leadership, and prepare for their future.
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded p-6 text-center space-y-2">
            <FaUsers className="text-yellow-500 text-3xl mx-auto" />
            <h2 className="text-3xl text-blue-700 font-bold">250+</h2>
            <p className="text-gray-600">Students receiving bursaries</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center space-y-2">
            <FaHandsHelping className="text-yellow-500 text-3xl mx-auto" />
            <h2 className="text-3xl text-blue-700 font-bold">80+</h2>
            <p className="text-gray-600">Active mentors & volunteers</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center space-y-2">
            <FaSchool className="text-yellow-500 text-3xl mx-auto" />
            <h2 className="text-3xl text-blue-700 font-bold">10+</h2>
            <p className="text-gray-600">Partner schools & communities</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center space-y-2">
            <FaGlobeAfrica className="text-yellow-500 text-3xl mx-auto" />
            <h2 className="text-3xl text-blue-700 font-bold">1000+</h2>
            <p className="text-gray-600">Students impacted through outreach</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Real Stories, Real Change</h2>
          <p className="text-gray-700 text-lg">
            Behind every number is a student who has been supported, mentored, and empowered.{' '}
            <Link href="/programs/my-story" className="text-blue-600 underline hover:text-blue-800">
              Visit My Story
            </Link>{' '}
            to read inspiring journeys of transformation.
          </p>
        </section>
      </div>
    </main>
  );
}
