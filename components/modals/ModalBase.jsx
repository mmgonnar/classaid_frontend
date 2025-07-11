'use client';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { cn } from '@/utils/functions';
import { useEffect, useState } from 'react';
import CloseButton from '../buttons/CloseButton';
import { useEscapeKeyClose } from '@/hooks/useEscapeKeyClose';

function ModalBase({ children, toggleModal, modalOpen, showButton = 'show' }) {
  useEscapeKeyClose(modalOpen, toggleModal);

  if (!modalOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleModal}
        className={cn(
          'fixed inset-0 z-6 bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-in-out',
          modalOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      ></div>
      {/* Modal */}
      <div
        className={cn(
          'fixed inset-0 z-7 flex items-center justify-center p-4',
          modalOpen ? 'pointer-events-none opacity-100' : 'opacity-0',
        )}
      >
        <div
          className={`relative h-auto w-auto max-w-4xl rounded-lg bg-white shadow-xl ${showButton}`}
        >
          <div>{children}</div>
          <CloseButton
            onClick={toggleModal}
            className="top-4 right-4 bg-none shadow-none hover:bg-none hover:text-neutral-300"
          />
        </div>
      </div>
    </>
  );
}

export default ModalBase;
