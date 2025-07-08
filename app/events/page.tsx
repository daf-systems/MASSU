'use client';

import { FaUsers, FaLaptopCode, FaHandsHelping, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';

export default function EventsPage() {
  const events = [
    {
      title: 'Leadership Summit 2025',
      date: 'July 15, 2025',
      location: 'Mzuzu University Auditorium',
      icon: <FaUsers className="text-yellow-500 text-xl" />,
      description:
        'A national platform for student leaders to build leadership, strategy, and advocacy skills.',
    },
    {
      title: 'Digital Skills Bootcamp',
      date: 'August 5–7, 2025',
      location: 'Chancellor College',
      icon: <FaLaptopCode className="text-yellow-500 text-xl" />,
      description:
        'Learn coding, cybersecurity, and productivity tools in this 3-day interactive workshop.',
    },
    {
      title: 'Community Outreach Day',
      date: 'September 2, 2025',
      location: 'Nkhata Bay Secondary School',
      icon: <FaHandsHelping className="text-yellow-500 text-xl" />,
      description:
        'MASSU volunteers will mentor, donate learning materials, and deliver motivational talks.',
    },
  ];

  const announcements = [
    {
      title: 'Nomination for MASSU Elections 2025 Open',
      date: 'July 1, 2025',
      summary: 'Students interested in contesting for various positions can now pick nomination forms from the Dean of Students Office.',
    },
    {
      title: 'New Bursary Application Deadline',
      date: 'June 28, 2025',
      summary: 'The deadline to apply for the 2025/26 financial aid and bursaries has been extended by one week.',
    },
    {
      title: 'Campus WiFi Upgrade Scheduled',
      date: 'June 20, 2025',
      summary: 'Expect brief service interruptions as IT services improve WiFi performance and coverage across halls of residence.',
    },
  ];

  return (
    <>
      {/* Breadcrumb - full width with no margin-bottom */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm rounded-b">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center gap-2">
            <li>
              <Link href="/" className="font-semibold text-gray-900 hover:underline">
                Home
              </Link>
              <span className="mx-2 text-gray-600">/</span>
            </li>
            <li className="font-semibold text-gray-900">Events</li>
          </ol>
        </div>
      </nav>

      <main className="bg-white min-h-screen px-6 pt-6">
        <div className="max-w-6xl mx-auto">
          {/* Events Header */}
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">All MASSU Events</h1>

          {/* Events Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-yellow-100 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-900">
                  {event.icon}
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>
                <p className="text-sm text-gray-500 mb-3">📍 {event.location}</p>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            ))}
          </div>

          {/* calendar Section */}

          

          {/* Announcements Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Latest Announcements</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-400 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 text-yellow-500 mb-2">
                    <FaBullhorn className="text-xl" />
                    <p className="text-sm text-gray-500">{announcement.date}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800">{announcement.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{announcement.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* YouTube Video Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Watch Our Stories</h2>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100 max-w-4xl mx-auto">
              <div className="w-full mb-6 aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="MASSU YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Catch highlights from our events, student success stories, and leadership talks.
                </p>
                <a
                  href="https://www.youtube.com/@YOUR_CHANNEL_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Visit YouTube Channel
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
