"use client";

import Image from 'next/image';
import Slider from 'react-slick';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-96">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              className="bg-gray-100"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
