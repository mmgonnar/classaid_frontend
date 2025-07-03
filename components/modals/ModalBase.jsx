'use client';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { cn } from '@/utils/functions';
import { useEffect, useState } from 'react';
import CloseButton from '../buttons/CloseButton';
import MainButton from '../buttons/MainButton';

function ModalBase({ children, toggleModal, modalOpen }) {
  useEffect(() => {
    const handleKeyPress = (evt) => {
      if (evt.key === 'Escape' && modalOpen) {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleModal]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleModal}
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-all duration-300 ease-in-out',
          modalOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      ></div>
      {/* Modal */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center p-4',
          modalOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div
          className="relative z-60 h-auto w-auto max-w-2xl rounded-lg bg-white shadow-xl"
          // onClick={(e) => e.stopPropagation()}
        >
          <div>{children}</div>
          <CloseButton
            onClick={toggleModal}
            className="top-4 right-4 bg-none shadow-none hover:bg-none hover:text-neutral-300"
            // className="-top-8 -right-8" onClick={toggleModal}
          />
        </div>
      </div>
    </>
  );
}

export default ModalBase;
