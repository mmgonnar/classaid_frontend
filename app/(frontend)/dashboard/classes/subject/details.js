'use client';

import ExportButton from '@/components/menus/ExportMenu';
import MainButton from '@/components/buttons/MainButton';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import ActionMenu from '@/components/menus/ActionMenu';
import EditClassModal from '@/components/modals/EditClassModal';
import WarningModal from '@/components/modals/WarningModal';
import Favorite from '@/components/small components/Favorite';
import Table from '@/components/Table';
import ClassContext from '@/context/ClassContext';
import { apiCallToast } from '@/utils/functions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

function SubjectDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { classData, handleUpdateClass, handleDeleteClass } = useContext(ClassContext);
  const [currentClass, setCurrentClass] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const classId = searchParams.get('classId');
  useEffect(() => {
    if (!classId) {
      router.push('/dashboard/classes');
      return;
    }
    setLoading(true);

    if (classData && classData.length > 0) {
      const foundClass = classData.find((c) => c._id === classId);

      if (foundClass) {
        setCurrentClass(foundClass);
      } else {
        router.push('/dashboard/classes');
      }
      setLoading(false);
    }
  }, [classId, classData, router]);

  const handleToggleFavorite = async (evt) => {
    evt.stopPropagation();
    if (!currentClass) return;
    setLoading(true);
    try {
      const newFavoriteStatus = !currentClass.favorite;
      setCurrentClass((prev) => ({ ...prev, favorite: newFavoriteStatus }));
      await apiCallToast(handleUpdateClass(currentClass._id, { favorite: newFavoriteStatus }), {
        loading: 'Updating favorite...',
        successMessage: newFavoriteStatus ? 'Added to favorites' : 'Removed from favorites',
        errorMessage: 'Error updating favorite status',
      });
    } catch (error) {
      setCurrentClass((prev) => ({ ...prev, favorite: !prev.favorite }));
      console.error('Error updating favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteClass = async () => {
    if (!currentClass) return;
    setLoading(true);
    try {
      const result = await apiCallToast(handleDeleteClass(currentClass._id), {
        loading: 'Deleting class...',
        successMessage: "Class deleted successfully'",
        errorMessage: 'Error deleting class',
      });
      console.log(result, 'xxxxx');
      if (result && result.success) {
        toggleWarningModal(false);
        router.push('/dashboard/classes');
      }
    } catch (error) {
      console.error('Error deleting class:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };
  const toggleWarningModal = () => {
    console.log('click');
    setWarningModalOpen(!warningModalOpen);
  };

  if (loading) {
    return (
      <div className="bg-opacity-75 fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300">
        <BouncyLoader className="h-20 w-20" />
      </div>
    );
  }

  if (!currentClass) {
    return null;
  }

  const goBack = () => {
    router.back();
  };
  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text font-bold text-neutral-500 md:text-2xl">{currentClass.name}</h2>
            <h2 className="font-bold text-neutral-500 md:text-2xl">{currentClass.group}</h2>
            <div>
              <Favorite
                toggleFavorite={handleToggleFavorite}
                isFavorite={currentClass.favorite}
                size="md"
              />
            </div>
          </div>
          <ActionMenu onEdit={toggleEditModal} onDelete={toggleWarningModal} />
        </div>

        <div className="w-full pb-1">
          <h4 className="pb-2 text-sm text-neutral-400">Description</h4>
          <p className="max-w-4xl pb-6 text-sm text-balance text-neutral-600">
            {currentClass.description}
          </p>
          <p>{currentClass.students?.length || 0}</p>
        </div>
        {/* Table */}
        <div className="flex w-full flex-col items-end pb-8">
          <ExportButton />
          <div className="flex w-full flex-col justify-end">
            <Table />
          </div>
        </div>
        <MainButton onClick={goBack} text="Back to Classes" />
      </div>
      <EditClassModal
        modalOpen={editModalOpen}
        toggleModal={toggleEditModal}
        currentClass={currentClass}
      />
      <WarningModal
        modalOpen={warningModalOpen}
        toggleModal={toggleWarningModal}
        onConfirm={onDeleteClass}
        title="Delete subject"
        keyWord="subject"
      />
    </DashboardLayout>
  );
}

export default SubjectDetailPage;
