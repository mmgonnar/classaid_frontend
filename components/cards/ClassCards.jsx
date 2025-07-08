'use client';

import { useContext, useEffect, useState } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import Favorite from '../small components/Favorite';
import { usePathname, useSearchParams } from 'next/navigation';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { apiCallToast } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import { useEscapeKeyClose } from '@/hooks/useEscapeKeyClose';
import ClassPreview from '../modals/ClassPreview';

const getInitials = (name) => {
  let initials = '';

  if (name) {
    initials += name.trim()[0] || '';
    return (name.trim()[0]?.toUpperCase() || '') + (name.trim()[1]?.toUpperCase() || '');
  }
};

function ClassCards({ showOnlyFavorites = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { classData, favoritesData, handleUpdateClass } = useContext(ClassContext);
  const [updates, setUpdates] = useState({});
  const [parent] = useAutoAnimate({ duration: 300 });
  const [selectedClassId, setSelectedClassId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setSelectedClassId(params.get('classId'));
    }
  }, []);

  const toggleFavorite = async (classId, favoriteStatus, evt) => {
    evt.stopPropagation();
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
        const newClassState = { ...prev };
        delete newClassState[classId];
        return newClassState;
      });
    }
  };

  //! Unfinished
  const handleOpenClassDetails = (classId) => {
    const params = new URLSearchParams(searchParams);
    params.set('classId', classId);
    router.push(`/dashboard/classes/class?${params.toString()}`);

    console.log('click');
  };

  //! Unfinished
  // const handleCloseClassDetails = () => {
  //   const params = new URLSearchParams(searchParams);
  //   params.delete('classId');
  //   router.replace(`${pathname}?${params.toString()}`);
  // };
  // useEscapeKeyClose(isClassPreviewOpen, handleCloseClassDetails);

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
          toggleModal={() => {
            console.log('click en card?');
            handleOpenClassDetails(item._id);
            console.log(item._id, 'id');
          }}
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
              toggleFavorite={(evt) => toggleFavorite(item._id, item.favorite, evt)}
              className="absolute right-2 bottom-2"
              size="md"
            />
          </div>
        </BaseCard>
      ))}
      {/* {selectedClassId && (
        //! Unfinished
        <ClassPreview
          classId={selectedClassId}
          onClose={handleCloseClassDetailModal}
          isOpen={isClassPreviewOpen}
        />
      )} */}
    </div>
  );
}

export default ClassCards;
