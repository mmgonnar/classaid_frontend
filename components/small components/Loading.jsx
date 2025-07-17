'use client';

import BouncyLoader from '../loaders/BouncyLoader';

function Loading() {
  return (
    <div className="bg-opacity-75 fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300">
      <BouncyLoader className="h-20 w-20" />
    </div>
  );
}

export default Loading;
