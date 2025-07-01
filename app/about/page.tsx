'use client';

import {
  HeartIcon,
  LightBulbIcon,
  TagIcon,
  UsersIcon,
  GlobeAltIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center">
            <li>
              <a href="/" className="text-blue-800 font-medium hover:underline">Home</a>
            </li>
            <li><span className="mx-2">/</span></li>
            <li className="font-semibold text-gray-900">About</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-24 px-8"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        <div className="max-w-4xl mx-auto text-center bg-blue-900/60 p-6 rounded shadow-lg">
          <h1 className="text-4xl font-bold mb-4">About MASSU</h1>
          <p className="text-lg text-white">
            Empowering students across Malawi through love, support, and holistic growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            MASSU (Malawi Student Support Unit) was born from the lived experiences of its founder, <strong>John Mahinya</strong>,
            who rose from the challenges of poverty to complete university against all odds. The pain of missing school
            to sell snacks, wearing torn uniforms, being chased for fees, and facing hunger formed the foundation of a vision
            that no student should go through such hardship alone.
          </p>
          <p className="text-gray-700">
            MASSU exists to walk with every student on their journey, breaking down barriers and offering hope through
            support, mentorship, and empowerment.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-center">
              <TagIcon className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Mission</h3>
              <p className="text-gray-700">
                To provide comprehensive support and resources to students, fostering their personal and academic
                growth and empowering them to achieve their full potential.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-center">
              <GlobeAltIcon className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Vision</h3>
              <p className="text-gray-700">
                To be a leading organisation transforming the educational landscape by equipping students with the
                necessary skills, opportunities, and support systems to excel academically and thrive in their future
                endeavours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HeartIcon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: 'Love and Care',
                desc: 'Everyone deserves love and care — we share even the little we have.',
              },
              {
                icon: <LightBulbIcon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: 'Impact & Transformation',
                desc: 'We bring measurable positive change to lives and communities.',
              },
              {
                icon: <MegaphoneIcon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: 'Purpose',
                desc: 'Every action is intentional and driven by our vision to empower Malawian youth.',
              },
              {
                icon: <UsersIcon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: 'Teamwork',
                desc: 'We collaborate with families, schools, and partners to support students holistically.',
              },
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center">
                {value.icon}
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Transparency */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Governance & Transparency</h2>
            <p className="text-gray-700 mb-4">
              MASSU is led by <strong>Founder and Director John Mahinya</strong>, supported by a passionate team of
              board members, staff, and volunteers.
            </p>
            <p className="text-gray-700">
              MASSU is a duly registered NGO in Malawi. We comply with all legal and regulatory frameworks, maintain
              financial transparency, and document every action to ensure accountability. Every donation and partnership
              contributes directly to student transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-800 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with Us to Make a Difference</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Join MASSU in our mission to uplift students across Malawi. Your support can transform lives and build brighter futures.
        </p>
        <a
          href="/get-involved"
          className="inline-block bg-white text-blue-800 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Get Involved
        </a>
      </section>
    </main>
  );
}
