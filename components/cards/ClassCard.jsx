'use client';

import { useContext, useState } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import Loading from '../small components/Loading';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Favorite from '../small components/Favorite';
import { usePathname } from 'next/navigation';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import api from '@/utils/Api/ApiClass';
import { apiCallToast } from '@/utils/functions';

const getInitials = (name) => {
  let initials = '';

  if (name) {
    initials += name.trim()[0] || '';
    return (name.trim()[0]?.toUpperCase() || '') + (name.trim()[1]?.toUpperCase() || '');
  }
};

function ClassCard({ showOnlyFavorites = false }) {
  const { classData, favoritesData, loading, setClassData, setFavoritesData, handleUpdateClass } =
    useContext(ClassContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [removedCards, setRemovedCards] = useState([]);
  const [updates, setUpdates] = useState({});
  const pathname = usePathname();
  // const [parent] = useAutoAnimate();
  // const [classCardsContainerRef] = useAutoAnimate();

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

  // const

  //*INTENTO 4
  // if (isUpdating) return;
  // setIsUpdating(classId);
  // setRemovedCards((prev) => [...prev, classId]);
  // const newFavoriteStatus = !favoriteStatus;
  //await new Promise((resolve) => setTimeout(resolve, 300));
  // try {
  //   const response = await api.updateClass(classId, { favorite: newFavoriteStatus });
  //   if (response.success) {
  //     setClassData(
  //       (prev) =>
  //         prev?.map((item) =>
  //           item._id === classId ? { ...item, favorite: newFavoriteStatus } : item,
  //         ) || [],
  //     );
  //     setFavoritesData((prev) => {
  //       if (newFavoriteStatus) {
  //         const updatedClass = classData?.find((c) => c._id === classId);
  //         return updatedClass ? [...(prev || []), updatedClass] : prev || [];
  //       } else {
  //         return prev?.filter((item) => item._id !== classId) || [];
  //       }
  //     });
  //   }
  // } catch (error) {
  //   console.error('Error updating favorite:', error);
  //   setRemovedCards((prev) => prev.filter((id) => id !== classId));
  // } finally {
  //   setIsUpdating(null);
  // }
  //*INENTO 3
  // try {
  //   setClassData((prev) =>
  //     prev.map((item) => (item._id === classId ? { ...item, favorite: favoriteStatus } : item)),
  //   );
  //   setFavoritesData();
  // } catch (error) {
  //   console.error('');
  // } finally {
  //   setIsUpdating(null);
  // }
  //*INTENTO 2
  // setIsFavorite(true);
  // try {
  //   const newFavoriteStatus = !favoriteStatus;
  //   const response = await api.updateSubjectFavorite(classId, newFavoriteStatus);
  //   if (success) {
  //     setClassData((prev) =>
  //       prev.map((item) =>
  //         item._id === classId ? { ...item, favorite: newFavoriteStatus } : item,
  //       ),
  //     );
  //     setClassData((prev) =>
  //       [...prev].sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1)),
  //     );
  //   }
  // } catch (error) {
  //   console.error('');
  // } finally {
  //   setIsFavorite(true);
  // }
  //*INTENTO 1
  // try {
  //   //const currentClass = classData.find((card) => card._id === classId);
  //   //const favoriteStatus = currentClass.favorite; //? lógica?
  //   const response = await api.updateClass(classId, { favorite: favoriteStatus });
  //   if (response.success) {
  //     //? if it doe break
  //     setClassData(); //? aqui se sobrescribe?
  //     const updatedClasses = card.map(); // Aqui se va el array reorganizado
  //     const favorites = updatedClasses.filter();
  //     const nonFavorites = updatedClasses.filter();
  //     //return [...favorites, ...nonFavorites]
  //   }
  //   return response;
  // } catch (error) {
  //   console.error('', error);
  // }
  // };

  // if (!classData || classData.length === 0) {
  //   return <div className="p-4 text-center text-neutral-500">No classes available</div>;
  // }

  //const classItems = pathname === '/dashboard/classes' ? classData : classData.slice(0, 3);
  const newData =
    (showOnlyFavorites ? favoritesData : classData)?.map((item) => ({
      ...item,
      ...(updates[item._id] || {}),
    })) || [];

  const sortedData = [...newData].sort((a, b) =>
    a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1,
  );

  // const filteredData = (showOnlyFavorites ? favoritesData : classData)
  //   ?.filter((item) => !removedCards.includes(item._id))
  //   ?.sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1));

  const dataToShow = pathname === '/dashboard/classes' ? sortedData : sortedData?.slice(0, 3);
  // const dataToShow = showOnlyFavorites
  //   ? favoritesData
  //   : pathname === '/dashboard/classes'
  //     ? classData
  //     : classData?.slice(0, 3);

  if (loading) return <Loading />;
  if (!dataToShow || dataToShow.length === 0) {
    return (
      <div className="p-4 text-center text-neutral-500">
        {showOnlyFavorites ? 'No favorite classes' : 'No classes available'}
      </div>
    );
  }

  // const sortedData = filteredData?.sort((a, b) =>
  //   a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1,
  // );

  return (
    <>
      {dataToShow.map((item) => (
        <BaseCard
          key={`${item._id}-${item.favorite}`}
          className={`relative m-auto h-40 w-full cursor-pointer justify-center bg-white ${isAnimated === item._id ? 'opacity-0' : 'opacity-100'}`}
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
    </>
  );
}

export default ClassCard;
