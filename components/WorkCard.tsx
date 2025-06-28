import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  work: {
    id: string;
    title: string;
    year: number;
    imageUrl: string;
    description: string;
  };
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <Link href={`/works/${work.id}`} className="group block">
      <div className="relative w-full h-80 overflow-hidden bg-gray-100">
        <Image
          src={work.media[0].src}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium group-hover:underline">{work.title}</h3>
        <p className="text-gray-600">{work.year}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
