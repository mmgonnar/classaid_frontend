'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import ClassContext from '@/context/ClassContext';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Loading from '@/components/small components/Loading';
import MainButton from '@/components/buttons/MainButton';
import { CTA } from '@/utils/enums';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import AddButton from '@/components/buttons/AddButton';
import Favorite from '@/components/small components/Favorite';
import BaseCard from '@/components/cards/BaseCard';
import { apiCallToast } from '@/utils/functions';

function ClassDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { classData, handleUpdateClass } = useContext(ClassContext);
  const [currentClass, setCurrentClass] = useState(null);
  const [loading, setLoading] = useState(true);

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
    }
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
    </DashboardLayout>
  );
}

export default ClassDetailPage;
