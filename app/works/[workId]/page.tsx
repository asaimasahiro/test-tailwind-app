import { works } from '../../../data/works';
import { notFound } from 'next/navigation';
import ImageCarousel from '../../../components/ImageCarousel';
import type { PageProps } from 'next';

export async function generateStaticParams() {
  return works.map((work) => ({
    workId: work.id,
  }));
}

interface WorkDetailPageProps extends PageProps {
  params: { workId: string };
}

const WorkDetailPage = ({ params }: WorkDetailPageProps) => {
  const work = works.find((w) => w.id === params.workId);

  if (!work) {
    notFound();
  }

  const carouselImages = work.media.filter(item => item.type === 'image').map(item => ({ src: item.src, alt: work.title }));
  const youtubeVideos = work.media.filter(item => item.type === 'youtube');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{work.year}</p>

      {carouselImages.length > 0 && (
        <div className="mb-8">
          <ImageCarousel images={carouselImages} />
        </div>
      )}

      {youtubeVideos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.src}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">{work.description}</p>
        {work.descriptionEn && <p className="text-gray-600 text-base mt-4">{work.descriptionEn}</p>}
      </div>
    </div>
  );
};

export default WorkDetailPage;
