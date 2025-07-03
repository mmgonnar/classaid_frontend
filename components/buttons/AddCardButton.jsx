import React from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import BaseCard from '../cards/BaseCard';

function AddCardButton({
  className = '',
  onClick = () => {},
  onAlgo = () => {},
  toggleModal,
  handleOpenModal,
}) {
  // const handleClick = () => {
  //   // console.log(onClick.toString(), 'bbbbbbbbbbb');
  //   // onClick();
  //   handleOpenModal();
  // };

  return (
    <BaseCard
      border="lightGrey"
      className={`m-auto h-40 w-full cursor-pointer bg-white ${className} hover:bg-gray-50`}
      // handleOpenModal={handleOpenModal}
      toggleModal={toggleModal}
    >
      <div className="m-auto flex flex-col items-center justify-center gap-4">
        <AddCircleIcon sx={{ fontSize: '3em' }} className="text-neutral-200" />
        <p className="text-neutral-400">Add New</p>
      </div>
    </BaseCard>
  );
}

export default AddCardButton;
