'use client';

import EditClassForm from '../forms/EditClassForm';
import ModalBase from './ModalBase';
function EditClassModal({ toggleModal, modalOpen, currentClass }) {
  return (
    <>
      <ModalBase modalOpen={modalOpen} toggleModal={toggleModal}>
        <div className="w-100 p-6">
          <h2 className="text-primary mb-4 text-xl font-bold">Edit class</h2>
          <div className="flex">
            <EditClassForm toggleModal={toggleModal} currentClass={currentClass} />
          </div>
        </div>
      </ModalBase>
    </>
  );
}

export default EditClassModal;
