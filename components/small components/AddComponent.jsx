import React from 'react';
import BaseCard from '../cards/BaseCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddComponent({ className = '' }) {
  return (
    <BaseCard border="lightGrey" className="h-40 w-50 cursor-pointer bg-white">
      <div className="m-auto flex flex-col items-center gap-4">
        <AddCircleIcon sx={{ fontSize: '3em' }} className="text-neutral-200" />
        <p className="text-neutral-400">Add New</p>
      </div>
    </BaseCard>
  );
}

export default AddComponent;
