import Image from 'next/image';
import Link from 'next/link';
import { exhibitionsData } from '../data/exhibitions';

export default function Home() {
  const latestExhibition = exhibitionsData.upcoming[0]; // Get the first upcoming exhibition

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Visual Section */}
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/main-visual.jpg"
          alt="Main Visual"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          className="z-0"
        />
        <div className="relative z-10 text-white text-center p-8 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Asai Masahiro</h1>
          <p className="text-xl md:text-2xl font-light">Contemporary Artist</p>
        </div>
      </section>

      {/* Artist Statement Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 font-serif">Artist Statement</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          <p className="mb-4">実在と不在という概念を軸に、写真をベースとした様々な表現を試みています。一本の糸が実在するかのように見える「thread area」や、実物大で印刷した写真を空間に再配置する「fake existence」など、思い込みや錯覚による曖昧な存在感を創出し、見た目と事実の間に矛盾を生じさせる作品を制作しています。</p>
          <Link href="/cv" className="mt-8 inline-block text-blue-600 hover:underline text-lg">Read Full CV &rarr;</Link>
        </div>
      </section>

      {/* Latest Exhibitions Section */}
      <section className="container mx-auto px-4 py-16 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 font-serif">Latest Exhibitions</h2>
        {latestExhibition ? (
          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold mb-2">{latestExhibition.title} ({latestExhibition.type})</h3>
            <p className="text-gray-600 mb-1">{latestExhibition.date}</p>
            <p className="text-gray-600">{latestExhibition.venue}, {latestExhibition.location}</p>
            {latestExhibition.description && (
              <p className="mt-4">{latestExhibition.description[0]}</p>
            )}
            <Link href="/exhibitions" className="mt-8 inline-block text-blue-600 hover:underline text-lg">View All Exhibitions &rarr;</Link>
          </div>
        ) : (
          <p className="text-lg text-gray-700">No upcoming exhibitions at this time.</p>
        )}
      </section>
    </div>
  );
}