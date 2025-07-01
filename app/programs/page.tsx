import {
  FaMoneyBillWave,
  FaUserFriends,
  FaComments,
  FaBriefcase,
  FaTrophy,
  FaLaptopCode,
  FaPiggyBank,
  FaStar,
} from 'react-icons/fa';
import Link from 'next/link';

const programs = [
  {
    title: 'Bursary Program',
    slug: 'bursary',
    description: 'Removing financial barriers and enabling access to education for vulnerable students.',
    icon: FaMoneyBillWave,
  },
  {
    title: 'Mentorship Program',
    slug: 'mentorship',
    description: 'Guiding students through academic, career, and personal challenges.',
    icon: FaUserFriends,
  },
  {
    title: 'Counselling Program',
    slug: 'counselling',
    description: 'Providing safe spaces and emotional support for student well-being.',
    icon: FaComments,
  },
  {
    title: 'Career Program',
    slug: 'career',
    description: 'Helping students plan and prepare for successful career paths.',
    icon: FaBriefcase,
  },
  {
    title: 'Gifted & Competitions Program',
    slug: 'gifted',
    description: 'Celebrating and developing student talents through competitions and showcases.',
    icon: FaTrophy,
  },
  {
    title: 'Digital Literacy & Innovation Hub',
    slug: 'digital',
    description: 'Equipping students with digital skills for the future.',
    icon: FaLaptopCode,
  },
  {
    title: 'Life Skills & Financial Literacy',
    slug: 'life-skills',
    description: 'Empowering students with essential life and money skills.',
    icon: FaPiggyBank,
  },
  {
    title: 'My Story of Success',
    slug: 'my-story',
    description: 'Real stories of impact and transformation through MASSU support.',
    icon: FaStar,
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="text-blue-800 font-medium hover:underline">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900">Programs</li>
          </ol>
        </div>
      </nav>

      {/* Page Content */}
      <main
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/abouts-staff.jpg')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* Content container */}
        <div className="relative p-8 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">Our Programs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="block p-6 bg-white rounded shadow hover:shadow-md transition"
              >
                <div className="text-yellow-600 text-3xl mb-3">
                  <program.icon />
                </div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{program.title}</h2>
                <p className="text-gray-700">{program.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
