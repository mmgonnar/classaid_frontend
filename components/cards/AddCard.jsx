import React from 'react';
import BaseCard from './BaseCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddComponent({ className = '', onClick = () => {} }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <BaseCard
      border="lightGrey"
      className={`m-auto h-40 w-full cursor-pointer bg-white ${className} hover:bg-gray-50`}
    >
      <div onClick={handleClick} className="m-auto flex flex-col items-center justify-center gap-4">
        <AddCircleIcon sx={{ fontSize: '3em' }} className="text-neutral-200" />
        <p className="text-neutral-400">Add New</p>
      </div>
    </BaseCard>
  );
}

export default AddComponent;
