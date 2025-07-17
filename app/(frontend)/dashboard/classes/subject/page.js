import { Suspense } from 'react';
import SubjectDetailPage from './details';
import SpinnerLoader from '@/components/loaders/SpinnerLoader';

function page() {
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <SubjectDetailPage />
    </Suspense>
  );
}

export default page;
