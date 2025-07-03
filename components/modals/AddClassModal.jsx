'use client';

import ModalBase from './ModalBase';
import { cn } from '@/utils/functions';
import MainButton from '../buttons/MainButton';
import ClassForm from '../forms/ClassForm';

function AddClassModal({ open, onClose, toggleModal, modalOpen }) {
  return (
    <>
      <ModalBase
        modalOpen={modalOpen}
        // open={open}
        // onClose={onClose}
        toggleModal={toggleModal}
      >
        <div className="w-100 p-6">
          <h2 className="text-primary mb-4 text-xl font-bold">Create a new class</h2>
          <div className="flex">
            <ClassForm
              // onClose={onClose}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      </ModalBase>
    </>
  );
}

export default AddClassModal;
