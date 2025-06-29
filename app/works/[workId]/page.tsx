import { works } from '../../../data/works';
import { notFound } from 'next/navigation';
import WorkClientPage from './WorkClientPage'; // Import the new client component

export async function generateStaticParams() {
  return works.map((work) => ({
    workId: work.id,
  }));
}

interface WorkDetailPageProps {
  params: { workId: string };
}

const WorkDetailPage = ({ params }: WorkDetailPageProps) => {
  const work = works.find((w) => w.id === params.workId);

  if (!work) {
    notFound();
  }

  return <WorkClientPage work={work} />;
};

export default WorkDetailPage;