'use client';

import { useContext, useState } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import Favorite from '../small components/Favorite';
import { usePathname } from 'next/navigation';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { apiCallToast } from '@/utils/functions';

const getInitials = (name) => {
  let initials = '';

  if (name) {
    initials += name.trim()[0] || '';
    return (name.trim()[0]?.toUpperCase() || '') + (name.trim()[1]?.toUpperCase() || '');
  }
};

function ClassCards({ showOnlyFavorites = false }) {
  const { classData, favoritesData, handleUpdateClass } = useContext(ClassContext);
  const [updates, setUpdates] = useState({});
  const pathname = usePathname();
  const [parent] = useAutoAnimate();

  const toggleFavorite = async (classId, favoriteStatus) => {
    const newFavoriteStatus = !favoriteStatus;

    setUpdates((prev) => ({
      ...prev,
      [classId]: { favorite: newFavoriteStatus },
    }));

    try {
      await apiCallToast(handleUpdateClass(classId, { favorite: newFavoriteStatus }), {
        loading: 'Updating favorite...',
        successMessage: newFavoriteStatus ? 'Added to favorites' : 'Removed from favorites',
        errorMessage: 'Error updating favorite status',
      });
    } finally {
      setUpdates((prev) => {
        const newState = { ...prev };
        delete newState[classId];
        return newState;
      });
    }
  };

  const newData =
    (showOnlyFavorites ? favoritesData : classData)?.map((item) => ({
      ...item,
      ...(updates[item._id] || {}),
    })) || [];

  const sortedData = [...newData].sort((a, b) =>
    a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1,
  );

  const dataToShow = pathname === '/dashboard/classes' ? sortedData : sortedData?.slice(0, 3);

  if (!dataToShow || dataToShow.length === 0) {
    return (
      <div className="p-4 text-center text-neutral-500">
        {showOnlyFavorites ? 'No favorite classes' : 'No classes available'}
      </div>
    );
  }

  return (
    <div className="contents" ref={parent}>
      {dataToShow.map((item) => (
        <BaseCard
          key={`${item._id}-${item.favorite}`}
          className={`relative m-auto h-40 w-full cursor-pointer justify-center bg-white`}
          border="lightGrey"
        >
          <div className="flex items-center justify-center">
            <div className="m-auto flex w-full flex-col items-center justify-center gap-2">
              <div className="text-primary flex h-10 w-10 flex-col items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 font-medium">
                {getInitials(item.name)}
              </div>

              <div className="flex flex-col items-center text-center text-xs">
                <p className="text-primary pb-1 text-sm font-medium">{item.name}</p>
                <p className="text-neutral-500">Group | {item.group}</p>
                <p className="text-primary">Students: {item.students?.length || 0}</p>
              </div>
            </div>
            <Favorite
              isFavorite={item.favorite}
              toggleFavorite={() => toggleFavorite(item._id, item.favorite)}
              className="absolute right-2 bottom-2"
            />
          </div>
        </BaseCard>
      ))}
    </div>
  );
}

export default ClassCards;
