'use client';

import { useContext } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import ActionMenu from '../menus/ActionMenu';

function GroupCards() {
  const { classData, favoritesData, handleUpdateClass } = useContext(ClassContext);

  console.log(classData);
  return (
    <div className="contents">
      <BaseCard border="lightGrey" className="h-60 bg-white" size="full">
        <div className="custom-md:grid-cols-1 grid gap-4 p-6 lg:grid-cols-2">
          <div className="flex h-15 flex-col items-center border-b-1 border-neutral-300 pb-2 md:flex-row">
            <div className="text-primary m-auto flex h-13 w-13 flex-col items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 p-3 text-xl font-medium">
              {classData[1]?.group}
            </div>
            <div>
              <div className="w-[80%]">
                <p className="line-clamp-3 overflow-hidden text-sm text-neutral-500">
                  {classData[1]?.description}
                </p>
              </div>
              <ActionMenu />
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  );
}

export default GroupCards;
