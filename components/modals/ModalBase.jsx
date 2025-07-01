'use client';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { cn } from '@/utils/functions';
import { useState } from 'react';
import CloseButton from '../buttons/CloseButton';
import MainButton from '../buttons/MainButton';

function ModalBase({ children, open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-all duration-300 ease-in-out',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      ></div>
      {/* Modal */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center p-4',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div
          className="relative z-60 h-150 w-150 max-w-2xl rounded-lg bg-white shadow-xl"
          // onClick={(e) => e.stopPropagation()}
        >
          <div>{children}</div>
          <CloseButton className="-top-8 -right-8" onClick={onClose} />
        </div>
      </div>
    </>
  );
}

export default ModalBase;
