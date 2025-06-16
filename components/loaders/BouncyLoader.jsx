import React from 'react';

function BouncyLoader({ className = '' }) {
  return (
    <div className={`bouncy__container m-10 ${className} `}>
      <div className="cube">
        <div className="cube__inner"></div>
      </div>
      <div className="cube">
        <div className="cube__inner"></div>
      </div>
      <div className="cube">
        <div className="cube__inner"></div>
      </div>
    </div>
  );
}

export default BouncyLoader;
