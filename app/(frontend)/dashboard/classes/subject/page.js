import { Suspense } from 'react';
import SubjectDetailPage from './details';

function page() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <SubjectDetailPage />
    </Suspense>
  );
}

export default page;
