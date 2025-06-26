'use client';
import { cn } from '@/utils/functions';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

function Favorite({ className = '' }) {
  return (
    <div>
      <StarRateRoundedIcon
        className={`text-neutral-200 hover:text-yellow-500 ${className} `}
        sx={{ fontSize: '1.2em' }}
      />
    </div>
  );
}

export default Favorite;
