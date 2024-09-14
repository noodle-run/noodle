import dynamic from 'next/dynamic';

const PlateEditor = dynamic(
  () => import('@/editor').then((res) => res.PlateEditor),
  { ssr: false },
);

export default function NotebookPage() {
  return (
    <div className="mx-auto max-w-3xl py-12">
      <PlateEditor />
    </div>
  );
}
