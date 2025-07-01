'use client';

import ModalBase from './ModalBase';
import { cn } from '@/utils/functions';
import MainButton from '../buttons/MainButton';
import ClassForm from '../forms/ClassForm';

function AddClassModal({ open, onClose }) {
  return (
    <>
      <ModalBase open={open} onClose={onClose}>
        <div className="p-6">
          <h2 className="text-primary mb-4 text-xl font-bold">Create a new class</h2>
          <p className="text-primary mb-4">Agregar clase</p>
          <div className="flex gap-2">
            <ClassForm />
            <MainButton text="ADASDSA" />
            <MainButton text="Cerrar" onClick={onClose} />
          </div>
        </div>
      </ModalBase>
    </>
  );
}

export default AddClassModal;
