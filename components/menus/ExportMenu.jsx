'use client';

import { cn } from '@/utils/functions';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import { useEffect, useRef, useState } from 'react';

function ExportButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (menuRef.current && !menuRef.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button onClick={toggleButton} className="cursor-pointer pb-3 text-neutral-500">
        <IosShareRoundedIcon />
      </button>
      {isOpen && (
        <button className="absolute right-0 z-6 flex w-15 flex-col items-center gap-1 divide-y divide-gray-100 rounded-md border-1 border-neutral-200 bg-white text-left shadow-lg ring-1 ring-black/5 focus:outline-hidden">
          <div
            className={cn(
              'hover:text-primary block w-full cursor-pointer px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-100',
            )}
          >
            <p>PDF</p>
          </div>
          <div
            className={cn(
              'hover:text-primary block w-full cursor-pointer px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-100',
            )}
          >
            <p>CVS</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default ExportButton;
