'use client';
import { cn } from '@/utils/functions';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { useActionState, useState } from 'react';

function Favorite({ className = '' }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    console.log('click');
  };
  return (
    <div onClick={toggleFavorite}>
      <StarRateRoundedIcon
        className={cn('text-neutral-200 hover:text-yellow-500', className)}
        sx={{ fontSize: '1.2em' }}
      />
    </div>
  );
}

export default Favorite;
