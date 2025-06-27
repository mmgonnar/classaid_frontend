'use client';

import { useState } from 'react';
import ModalBase from './ModalBase';
import { cn } from '@/utils/functions';
import MainButton from '../buttons/MainButton';

function AddClassModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    console.log('Click');
    e.preventDefault();
  };

  return (
    <>
      <MainButton
        type=""
        text="asdasd"
        onClick={(e) => {
          handleOpen(e);
        }}
      ></MainButton>
      //! worked in popup flow
      <ModalBase open={open} onClose={handleClose}>
        <div className="p-6">
          <h2 className="text-primary mb-4 text-xl font-bold">Agregar Nueva Clase</h2>
          <p className="text-primary mb-4">Aquí puedes agregar una nueva clase</p>
        </div>
      </ModalBase>
    </>
  );
}

export default AddClassModal;
