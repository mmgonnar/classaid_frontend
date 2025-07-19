'use client';
import { cn } from '@/utils/functions';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function CloseButton({ className = '', onClick = () => {} }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={cn(
        'absolute z-50 flex cursor-pointer items-center justify-center rounded-full bg-white p-1 shadow-md hover:bg-neutral-200',
        className,
        // !open && 'hidden',
        //! worked in modal<<<<<<<<<
      )}
    >
      <CloseOutlinedIcon sx={{ fontSize: '1.3rem' }} className="text-primary" />
    </button>
  );
}

export default CloseButton;
