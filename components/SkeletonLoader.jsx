import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Loader() {
  return (
    <div className="w-[200px]">
      <Skeleton count={2} />
    </div>
  );
}

export default Loader;
