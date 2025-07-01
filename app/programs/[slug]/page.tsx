import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JSX } from 'react';

<Image
  src="/images/programs/bursary.jpg"
  alt="Bursary"
  width={800}
  height={500}
  className="rounded-lg shadow-md"
/>


const programContent: Record<string, { title: string; content: JSX.Element; image: string }> = {
  'bursary': {
    title: 'Bursary Program',
    image: '/images/programs/bursary.avif',
    content: (
      <>
        <p className="text-gray-700">
          At MASSU, we believe that no student should drop out due to lack of funds. Our Bursary Program provides
          critical support to vulnerable and academically deserving Malawian students, enabling them to remain in
          school and pursue their dreams.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Tuition and Examination Fees</li>
          <li>Essential School Supplies (textbooks, stationery)</li>
          <li>School Uniforms</li>
          <li>Living Stipends for tertiary students</li>
          <li>Hygiene & Dignity Kits (especially for girls)</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Priority is given to orphans, vulnerable children, and those with disabilities. Applications are accepted
          annually and reviewed based on academic records, financial need, and commitment to education.
        </p>
      </>
    ),
  },

  'mentorship': {
    title: 'Mentorship Program',
     image: '/images/programs/mentorship.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU’s mentorship connects students with caring mentors who support them academically and personally. The
          program builds confidence, helps with life planning, and provides role models.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Mentors and mentees matched by goals and personality</li>
          <li>Support in academics, life skills, and career planning</li>
          <li>Improved academic performance and motivation</li>
          <li>Clearer direction and problem-solving ability</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Interested individuals can apply to become a mentor or mentee. MASSU provides training and support to all
          participants.
        </p>
      </>
    ),
  },

  'counselling': {
    title: 'Counselling Program',
     image: '/images/programs/counselling.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU provides emotional and psychological support through its confidential counselling services for students
          facing real-life challenges.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>One-on-one counselling for anxiety, depression, grief, and stress</li>
          <li>Group support for relationships, peer pressure, and academics</li>
          <li>Crisis intervention for urgent emotional needs</li>
          <li>Referrals to professional services if needed</li>
          <li>Life skills training in communication, resilience, and self-care</li>
        </ul>
        <p className="mt-4 text-gray-700">
          All sessions are confidential and based on student trust and ethical standards. Students may self-refer or be
          referred by teachers, guardians, or mentors.
        </p>
      </>
    ),
  },

  'career': {
    title: 'Career Program',
     image: '/images/programs/career.avif',
    content: (
      <>
        <p className="text-gray-700">
          MASSU’s Career Program equips students to make informed life and career choices through guidance, training,
          and exposure to real-world environments.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Career counselling and academic planning</li>
          <li>Workshops on CV writing, interviews, goal setting, and digital skills</li>
          <li>Speaker sessions with professionals</li>
          <li>Field visits, job shadowing, and exhibitions</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Whether a student dreams of becoming a teacher, nurse, engineer, or entrepreneur — MASSU is here to guide
          them from vision to action.
        </p>
      </>
    ),
  },

  'gifted': {
    title: 'Gifted & Competitions Program',
     image: '/images/programs/gifted.jpg',
    content: (
      <>
        <p className="text-gray-700">
          MASSU nurtures talents beyond the classroom — from public speaking and poetry to science and sports.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Talent identification through referrals and contests</li>
          <li>Academic: debates, quizzes, essay competitions</li>
          <li>Creative Arts: music, poetry, drama, painting</li>
          <li>Technology: science fairs and coding events</li>
          <li>Sports: MASSU games and school competitions</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Winners are celebrated and featured to inspire others. These platforms boost confidence and unlock
          opportunities.
        </p>
      </>
    ),
  },

  'digital': {
    title: 'Digital Literacy & Innovation Hub',
     image: '/images/programs/digital.avif',
    content: (
      <>
        <p className="text-gray-700">
          MASSU bridges the digital divide by training students in tech and innovation skills for the 21st century.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Basic computer skills and digital tools</li>
          <li>Internet safety and online communication</li>
          <li>Intro to coding and problem-solving</li>
          <li>Digital career skills and entrepreneurship</li>
          <li>Support for school labs, infrastructure, and teacher training</li>
        </ul>
        <p className="mt-4 text-gray-700">
          The Innovation Hub is more than a classroom — it’s a launchpad for Malawi’s tech-driven youth.
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
          MASSU’s Life Skills and Financial Literacy Program prepares students to live, lead, and thrive.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Personal hygiene, self-awareness, communication</li>
          <li>Time management, teamwork, civic responsibility</li>
          <li>Budgeting, saving, income and expense tracking</li>
          <li>Mobile money, banking, entrepreneurship basics</li>
        </ul>
        <p className="mt-4 text-gray-700">
          These practical skills build confidence, independence, and resilience — empowering students for real-world
          success.
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
          MASSU shares inspiring stories of students whose lives have been transformed through its programs.
        </p>
        <p className="mt-4 text-gray-700">
          These real-life testimonials ignite hope, show impact, and remind us why the mission matters. Students are
          encouraged to submit their stories to motivate others and celebrate progress.
        </p>
      </>
    ),
  },
};


export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programContent[params.slug];

  if (!program) return notFound();

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-blue-800">{program.title}</h1>
      {program.content}
      <div className="mt-8">
        <a href="/programs" className="text-blue-600 hover:underline">&larr; Back to Programs</a>
      </div>
    </main>
  );
}
