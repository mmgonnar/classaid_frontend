'use client';

import { useContext } from 'react';
import BaseCard from './BaseCard';
import ClassContext from '@/context/ClassContext';
import Loading from '../small components/Loading';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const getInitials = (name) => {
  let initials = '';

  if (name) {
    initials += name.trim()[0] || '';
    return (name.trim()[0]?.toUpperCase() || '') + (name.trim()[1]?.toUpperCase() || '');
  }
};

function ClassCard({ items }) {
  const { classData, loading } = useContext(ClassContext);

  if (loading) return <Loading />;
  if (!classData || classData.length === 0) {
    return <div className="p-4 text-center text-neutral-500">No classes available</div>;
  }

  const classItems = classData.slice(0, 3);

  return (
    <>
      {classItems.map((item) => (
        <BaseCard key={item._id} className="h-100% w-50 cursor-pointer bg-white" border="lightGrey">
          <div className="relative m-auto flex flex-col items-center gap-4">
            <div className="flex w-full max-w-xs flex-col items-center gap-2">
              <div className="text-primary flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 font-medium">
                {getInitials(item.name)}
              </div>

              <div className="flex flex-col items-center text-center text-xs">
                <p className="text-primary pb-1 text-sm font-medium">{item.name}</p>
                <p className="text-neutral-500">Group | {item.group}</p>
                <p className="text-primary">Students: {item.students?.length || 0}</p>
              </div>
            </div>
            <StarRateRoundedIcon
              className="absolute top-25 left-24 text-neutral-200 hover:text-yellow-500"
              sx={{ fontSize: '1.2em' }}
            />
          </div>
        </BaseCard>
      ))}
    </>
  );
}

export default ClassCard;
