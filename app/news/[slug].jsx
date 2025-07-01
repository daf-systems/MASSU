import { useRouter } from 'next/router';
import newsData from '../../data/news.json';
import Link from 'next/link';

export default function NewsDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const newsItem = newsData.find(item => item.slug === slug);
  if (!newsItem) return <p>News item not found</p>;

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <nav className="bg-yellow-400/90 text-sm text-gray-800 py-4 px-6 shadow-sm rounded">
        <ol className="list-reset flex items-center">
          <li>
            <Link href="/" className="text-blue-800 font-medium hover:underline">Home</Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li>
            <Link href="/news" className="text-blue-800 font-medium hover:underline">News & Updates</Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="font-semibold text-gray-900">{newsItem.title}</li>
        </ol>
      </nav>

      <article>
        <h1 className="text-4xl font-bold text-blue-800">{newsItem.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{newsItem.date}</p>
        <p className="text-gray-700">{newsItem.description}</p>
        {/* Expand with full article content here */}
      </article>
    </main>
  );
}
