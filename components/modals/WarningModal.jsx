'use client';

import MainButton from '../buttons/MainButton';
import ModalBase from './ModalBase';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
function WarningModal({ toggleModal, modalOpen, onConfirm, title, keyWord }) {
  const handleConfirm = () => {
    onConfirm();
    toggleModal();
  };
  return (
    <>
      <ModalBase modalOpen={modalOpen} toggleModal={toggleModal}>
        <div className="custom-sm:w-100 grid grid-cols-[auto_1fr] gap-3 p-4">
          <div className="xw flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <ReportGmailerrorredRoundedIcon
              className="text-lg text-red-600"
              sx={{ fontSize: '1.6rem' }}
            />
          </div>
          <div>
            <h2 className="mb-4text-base text- pb-2 font-semibold text-neutral-600">{title}</h2>
            <p className="w-full pb-8 text-xs text-neutral-500">
              Are you sure you want to delete this {keyWord}? All of your data will be permanently
              removed. This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <MainButton
                type=""
                text="Cancel"
                variant="secondary"
                onClick={toggleModal}
                className="font-normal"
                size="xs"
              />
              <MainButton
                text="Delete"
                variant="primary"
                onClick={handleConfirm}
                size="xs"
                className="bg-red-600 font-normal hover:bg-red-500"
              />
            </div>
          </div>
        </div>
      </ModalBase>
    </>
  );
}

export default WarningModal;
