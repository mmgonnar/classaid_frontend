'use client';
import { actions } from '@/utils/constants';
import { cn } from '@/utils/functions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useRef, useState } from 'react';
import WarningModal from '../modals/WarningModal';

function ActionMenu({ onEdit, onAdd, onDuplicate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleActionClick = (actionHandler) => {
    actionHandler?.();
    setIsOpen(false);
  };

  const actionsFunctions = { onAdd, onDelete, onDuplicate, onEdit, toggleMenu };

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
      <button
        type="button"
        className={cn(
          'hover:text-primary cursor-pointer text-neutral-400',
          isOpen ? 'text-primary' : '',
        )}
        onClick={toggleMenu}
      >
        <MoreHorizIcon />
      </button>
      {isOpen && (
        <button className="absolute right-0 z-6 flex w-30 flex-col items-center gap-1 divide-y divide-gray-100 rounded-md border-1 border-neutral-200 bg-white text-left shadow-lg ring-1 ring-black/5 focus:outline-hidden">
          {actions.map((action) => (
            <div
              key={action.id}
              onClick={() => {
                actionsFunctions[action.onClick]?.();
              }}
              //
              className={cn(
                'hover:text-primary block w-full cursor-pointer px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-100',
                action.name === 'delete' && 'hover:text-red-500',
              )}
            >
              <p> {action.text}</p>
            </div>
          ))}
        </button>
      )}
    </div>
  );
}

export default ActionMenu;
