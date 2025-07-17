'use client';

import { useContext } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import ActionMenu from '../menus/ActionMenu';

function GroupCards() {
  const { classData } = useContext(ClassContext);
  if (!classData || classData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="contents">
      <BaseCard animation="none" border="lightGrey" className="!w-full bg-white" size="full">
        <div className="custom-md:grid-cols-1 grid w-full gap-4 p-3 md:p-6 lg:grid-cols-2">
          {classData?.slice(0, 4).map((classItem) => (
            <div
              key={classItem._id}
              className="justify-be flex w-full gap-2 rounded-lg p-2 outline-1 outline-neutral-200"
            >
              <div className="text-primary m-auto flex h-13 w-13 flex-col items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 p-3 text-xl font-medium">
                {' '}
                {classItem.group}
              </div>
              <div className="flex w-full items-center">
                <div className="">
                  <p className="line-clamp-2 text-sm text-neutral-500">{classItem.description}</p>
                </div>
                <ActionMenu />
              </div>
            </div>
          ))}
        </div>
      </BaseCard>
    </div>
  );
}

export default GroupCards;
