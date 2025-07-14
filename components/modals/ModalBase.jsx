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
          'fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-in-out',
          modalOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {/* Modal */}
        <div
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          className={`z-11 h-auto w-auto max-w-4xl rounded-lg bg-white shadow-xl`}
        >
          <div className="relative">
            <div className="">{children}</div>
            <CloseButton
              onClick={toggleModal}
              className={`absolute top-4 right-4 z-80 cursor-pointer bg-none shadow-none hover:bg-none hover:text-neutral-300 ${showButton}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalBase;
