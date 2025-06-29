"use client";

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation'; // notFoundはサーバーサイドで使うべきだが、ここではWorkClientPagePropsでworkを必須にするため、便宜上残す

interface MediaItem {
  type: 'image' | 'youtube';
  src: string;
  alt?: string;
}

interface Work {
  id: string;
  title: string;
  year: number;
  media: MediaItem[];
  description: string;
  descriptionEn: string;
  material?: string;
  size?: string;
}

interface WorkClientPageProps {
  work: Work;
}

const WorkClientPage = ({ work }: WorkClientPageProps) => {
  const carouselImages = work.media.filter(item => item.type === 'image').map(item => ({ src: item.src, alt: work.title }));
  const youtubeVideos = work.media.filter(item => item.type === 'youtube');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (src: string) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{work.year}</p>

      {carouselImages.length > 0 && (
        <div className="mb-8">
          {/* Main Image */}
          <div className="relative w-full aspect-w-3 aspect-h-2 mb-4 cursor-pointer" onClick={() => openLightbox(carouselImages[0].src)}>
            <Image
              src={carouselImages[0].src}
              alt={carouselImages[0].alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Thumbnail Grid for remaining images */}
          {carouselImages.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {carouselImages.slice(1).map((image, index) => (
                <div key={index} className="relative w-full h-20 aspect-square cursor-pointer" onClick={() => openLightbox(image.src)}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          )}
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

      {/* New section for Material and Size */}
      {(work.material || work.size) && (
        <div className="max-w-2xl mx-auto mt-8 p-4 border-t border-b border-gray-200 text-gray-700 text-sm">
          {work.material && <p className="mb-1">{work.material}</p>}
          {work.size && <p>{work.size}</p>}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-screen-lg max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="拡大画像" className="max-w-full max-h-full object-contain" />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkClientPage;
