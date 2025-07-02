'use client';

import { classFormInput } from '@/utils/constants';
import { useForm } from 'react-hook-form';
import MainButton from '../buttons/MainButton';
import { CTA } from '@/utils/enums';
import { yupResolver } from '@hookform/resolvers/yup';
import { classValidationFront } from '@/schemas/classSchema';
import { useContext, useState } from 'react';
import { cn, toastApiCall } from '@/utils/functions';
import ClassContext from '@/context/ClassContext';

function ClassForm({ onClose }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { classData, loading, setClassData, handleCreateClass } = useContext(ClassContext);

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(classValidationFront),
  });

  const onSubmit = async (classData) => {
    setIsLoading(true);
    try {
      console.log('onSubmit', onSubmit);
      const result = await toastApiCall(handleCreateClass(classData), {
        loading: 'Creating class...',
        redirectTo: '',
        successMessage: 'Class created correctly',
        errorMessage: 'Error creating class',
        router: '',
      });

      if (result.success) {
        onClose();
      }
    } catch (error) {
      console.error('Something wrong happened, error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(formState.errors, 'xxxxxxxxxxx');
  return (
    <form
      action="submit"
      noValidate
      className="flex w-full flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {classFormInput.map((item) => (
        <div key={item.id} className="">
          <input
            type={item.type}
            name={item.name}
            id={item.id}
            placeholder={item.placeholder}
            className={cn(
              'flex w-90 max-w-90 items-center rounded-md border border-neutral-400 p-1 text-sm',
              item.name === 'description' && 'h-40',
            )}
            {...register(item.name)}
          />
          {formState.errors[item.name] && (
            <p className="text-xs text-red-500">{formState.errors[item.name].message}</p>
          )}
        </div>
      ))}
      {error && <p className="text-center text-xs text-red-500">{error}</p>}
      <MainButton
        type="submit"
        variant="primary"
        text={isLoading ? 'Creating' : CTA.CREATE}
        className="w-full"
      />
    </form>
  );
}

export default ClassForm;
