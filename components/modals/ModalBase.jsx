'use client';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { cn } from '@/utils/functions';
import { useState } from 'react';

function ModalBase({ children }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    console.log('Click');

    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClick}
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-all duration-300 ease-in-out',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      ></div>
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative z-60 h-100 w-100 max-w-2xl rounded-lg bg-white shadow-xl">
          <button
            onClick={handleClick}
            className={cn(
              'absolute -top-3 -right-3 z-50 flex cursor-pointer items-center justify-center rounded-full bg-white p-1 shadow-md hover:bg-neutral-200',
              // !open && 'hidden',
              //! worked in modal<<<<<<<<<
            )}
          >
            <CloseOutlinedIcon sx={{ fontSize: '1.3rem' }} className="text-primary" />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default ModalBase;
