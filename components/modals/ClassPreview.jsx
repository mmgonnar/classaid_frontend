'use client';

import { useEffect } from 'react';
import ModalBase from './ModalBase';
import { useEscapeKeyClose } from '@/hooks/useEscapeKeyClose';
import DashboardLayout from '../layouts/DashboardLayout';

function ClassPreview({ classId, onClose, isOpen }) {
  console.log(classId, 'adsasdasdawd');
  useEscapeKeyClose(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <DashboardLayout onClose={onClose}>
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-bold">Class Preview</h2>
        <div className="space-y-3">
          <p>
            <span className="font-semibold">ID:</span> {classId}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClassPreview;
