'use client';

import ModalBase from './ModalBase';
import { cn } from '@/utils/functions';
import MainButton from '../buttons/MainButton';
import AddClassForm from '../forms/AddClassForm';

function AddClassModal({ open, onClose, toggleModal, modalOpen }) {
  return (
    <>
      <ModalBase modalOpen={modalOpen} toggleModal={toggleModal}>
        <div className="w-100 p-6">
          <h2 className="text-primary mb-4 text-xl font-bold">Create a new class</h2>
          <div className="flex">
            <AddClassForm toggleModal={toggleModal} />
          </div>
        </div>
      </ModalBase>
    </>
  );
}

export default AddClassModal;
