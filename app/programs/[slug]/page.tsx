import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

const programContent: Record<
  string,
  { title: string; content: ReactNode; image: string }
> = {
  bursary: {
    title: 'Bursary Program',
    image: '/images/programs/bursary.avif',
    content: (
      <>
        <p className="text-gray-700">
          At MASSU, we believe that no student should drop out due to lack of funds...
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Tuition and Examination Fees</li>
          <li>Essential School Supplies (textbooks, stationery)</li>
          <li>School Uniforms</li>
          <li>Living Stipends for tertiary students</li>
          <li>Hygiene & Dignity Kits (especially for girls)</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Priority is given to orphans, vulnerable children, and those with disabilities.
        </p>
      </>
    ),
  },
  mentorship: {
    title: 'Mentorship Program',
    image: '/images/programs/mentorship.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU’s mentorship connects students with caring mentors...
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Mentors and mentees matched by goals and personality</li>
          <li>Support in academics, life skills, and career planning</li>
        </ul>
      </>
    ),
  },
  counselling: {
    title: 'Counselling Program',
    image: '/images/programs/counselling.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU provides emotional and psychological support...
        </p>
      </>
    ),
  },
  career: {
    title: 'Career Program',
    image: '/images/programs/career.avif',
    content: (
      <>
        <p className="text-gray-700">MASSU’s Career Program equips students...</p>
      </>
    ),
  },
  gifted: {
    title: 'Gifted & Competitions Program',
    image: '/images/programs/gifted.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU nurtures talents beyond the classroom...
        </p>
      </>
    ),
  },
  digital: {
    title: 'Digital Literacy & Innovation Hub',
    image: '/images/programs/digital.avif',
    content: (
      <>
        <p className="text-gray-700">
          MASSU bridges the digital divide by training students...
        </p>
      </>
    ),
  },
  'life-skills': {
    title: 'Life Skills & Financial Literacy',
    image: '/images/programs/life_skills.avif',
    content: (
      <>
        <p className="text-gray-700">
          MASSU’s Life Skills and Financial Literacy Program...
        </p>
      </>
    ),
  },
  'my-story': {
    title: 'My Story of Success',
    image: '/images/programs/my_story.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU shares inspiring stories of students...
        </p>
      </>
    ),
  },
};

// 🧪 Custom param type as Promise
type tParams = Promise<{ slug: string[] }>;

// 🧪 Must return array slugs for [...slug]
export async function generateStaticParams() {
  return Object.keys(programContent).map((slug) => ({
    slug, // ✅ a string
  }));
}


// 🧪 Custom Promise-style param destructuring

interface ProgramPageProps {
  params: {
    slug: string;
  };
}
export default async function ProgramPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const slugID = slug[0]; // /programs/bursary => bursary

  const program = programContent[slugID];

  if (!program) {
    notFound();
  }

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-blue-800">{program.title}</h1>
      {program.content}
      <div className="mt-8">
        <a href="/programs" className="text-blue-600 hover:underline">
          &larr; Back to Programs
        </a>
      </div>
    </main>
  );
}
