'use client';

import { useContext } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import Loading from '../small components/Loading';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Favorite from '../small components/Favorite';
import { usePathname } from 'next/navigation';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const getInitials = (name) => {
  let initials = '';

  if (name) {
    initials += name.trim()[0] || '';
    return (name.trim()[0]?.toUpperCase() || '') + (name.trim()[1]?.toUpperCase() || '');
  }
};

function ClassCard() {
  const { classData, loading } = useContext(ClassContext);
  const pathname = usePathname();

  const [parent] = useAutoAnimate();

  if (loading) return <Loading />;
  if (!classData || classData.length === 0) {
    return <div className="p-4 text-center text-neutral-500">No classes available</div>;
  }

  const classItems = pathname === '/dashboard/classes' ? classData : classData.slice(0, 3);

  const toggleFavorite = () => {
    //filtro de favorito primero
  };
  //filtro de las tarjetas que no tienen fav

  // if son iguales no hay favs funcion fav === classData
  //entonces aqui hacer el prepend
  // [...array, ...array2]

// .filter((card) => card && card.owner)

  return (
    <>
      {classItems.map((item) => (
        <BaseCard
          key={item._id}
          className="relative m-auto h-40 w-full cursor-pointer justify-center bg-white"
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
            <Favorite className="absolute right-2 bottom-2" />
          </div>
        </BaseCard>
      ))}
    </>
  );
}

export default ClassCard;
