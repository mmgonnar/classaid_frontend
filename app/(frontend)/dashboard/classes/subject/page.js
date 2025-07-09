'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import ClassContext from '@/context/ClassContext';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import MainButton from '@/components/buttons/MainButton';
import { CTA } from '@/utils/enums';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import AddButton from '@/components/buttons/AddButton';
import Favorite from '@/components/small components/Favorite';
import BaseCard from '@/components/cards/BaseCard';
import { apiCallToast } from '@/utils/functions';
import EditButton from '@/components/buttons/EditButton';
import EditClassModal from '@/components/modals/EditClassModal';

function ClassDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log('dddddddd');
  const { classData, handleUpdateClass, handleDeleteClass } = useContext(ClassContext);
  const [currentClass, setCurrentClass] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('aaaaaaa');

  const classId = searchParams.get('classId');
  useEffect(() => {
    console.log('bbbbbbb');
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
  console.log('ccccccc');

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
      const result = apiCallToast(handleUpdateClass(currentClass._id), {
        loading: 'Deleting class...',
        successMessage: "Class deleted successfully'",
        errorMessage: 'Error deleting class',
      });
      if (result.success) {
        toggleModal();
      }
    } catch (error) {
      console.error('Error deleting class:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
      <div className="">
        <div className="flex max-w-7xl justify-between">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text text-2xl font-bold text-neutral-500">
              {currentClass.name} | Group {currentClass.group}
            </h2>
            <Favorite
              toggleFavorite={handleToggleFavorite}
              isFavorite={currentClass.favorite}
              size="lg"
            />
          </div>
          <EditButton onClick={toggleModal} currentClass={currentClass} />
          <AddButton size="lg" />
        </div>

        <div className="">
          <h4 className="pb-2 text-sm text-neutral-400">Description</h4>
          <p className="max-w-4xl text-sm text-balance text-neutral-600">
            {currentClass.description}
          </p>
          <p>{currentClass.students?.length || 0}</p>
          <MainButton onClick={goBack} text="Back to Classes" />
        </div>
        <BaseCard border="lightGrey" align="center" className="max-w-300 bg-white">
          <div className="flex gap-6">
            <p>#</p>
            <p>Student's Name</p>
            <p>Evaluation</p>
            <p>Absences</p>
          </div>
        </BaseCard>
      </div>
      <EditClassModal modalOpen={modalOpen} toggleModal={toggleModal} currentClass={currentClass} />
    </DashboardLayout>
  );
}

export default ClassDetailPage;
