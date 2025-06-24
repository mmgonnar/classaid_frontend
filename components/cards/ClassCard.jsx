'use client';

import { useContext } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import Loading from '../small components/Loading';

function ClassCard() {
  const { classData, loading } = useContext(ClassContext);
  console.log(classData, 'xxxxxxxxxx');

  const getInitials = (name) => {
    let initials = '';

    if (name) {
      initials += name.trim()[0] || '';
      return (name.trim()[0]?.toUpperCase() || '') + (name.trim()[1]?.toUpperCase() || '');
    }
  };

  if (loading || !classData) {
    return <Loading />;
  }

  // if (loading || classData) {
  //   return <Loading />;
  // } else {
  //   return <div>No class data available</div>;
  // }

  if (!classData) return <div>No class data available</div>;

  return (
    <BaseCard className="h-100% w-50 bg-white" border="lightGrey">
      <div className="">
        <div className="x flex flex-col">
          <div className="flex items-center gap-3">
            <div className="text-primary flex h-10 w-10 items-center justify-center rounded-full border-1 border-neutral-400 bg-neutral-100 font-medium">
              {getInitials(classData[0].name)}
            </div>
            <div className="text-sm text-neutral-900">
              <p>{classData[0].name}</p>
              <p>Group | {classData[0].group}</p>
              <p>{(classData[0].students = 0)}</p>
            </div>
          </div>
          {/* <p className="overflow-hidden text-sm">{classData[0].description}</p> */}
        </div>
      </div>
    </BaseCard>
  );
}

export default ClassCard;
