'use client';
import { cn } from '@/utils/functions';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { useActionState, useState } from 'react';

function Favorite({ className = '', isFavorite, size, toggleFavorite }) {
  const sizes = {
    sm: '1.2rem',
    md: '1.3rem',
    lg: '1.6rem',
  };
  return (
    <button onClick={toggleFavorite}>
      <StarRateRoundedIcon
        className={cn(
          'cursor-pointer text-neutral-200 hover:text-yellow-500',
          isFavorite ? 'text-yellow-500 hover:text-neutral-200' : '',

          className,
        )}
        sx={{ fontSize: sizes[size] || sizes.medium }}
      />
    </button>
  );
}

export default Favorite;
