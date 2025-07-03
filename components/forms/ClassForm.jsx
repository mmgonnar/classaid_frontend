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

function ClassForm({ toggleModal }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleCreateClass } = useContext(ClassContext);

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(classValidationFront),
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      console.log('onSubmit', onSubmit);
      const result = await toastApiCall(handleCreateClass(formData), {
        loading: 'Creating class...',
        successMessage: 'Class created correctly',
        errorMessage: 'Error creating class',
      });

      if (result.success) {
        toggleModal();
      }
    } catch (error) {
      console.error('Something wrong happened, error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      action="submit"
      noValidate
      className="flex w-full flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {classFormInput.map((item) => (
        <div key={item.id} className="pb-2">
          <label htmlFor={item.name} className="block pb-1 text-sm font-medium text-gray-700">
            {item.title}
          </label>
          {item.name === 'description' ? (
            <textarea
              name={item.name}
              id={item.id}
              placeholder={item.placeholder}
              className={cn(
                'flex w-full resize-none items-center rounded-md border border-neutral-400 p-1 text-sm placeholder:text-xs',
              )}
              {...register(item.name)}
            />
          ) : (
            <input
              type={item.type}
              name={item.name}
              id={item.id}
              placeholder={item.placeholder}
              className={cn(
                'flex w-full max-w-90 items-center rounded-md border border-neutral-400 p-1 text-sm placeholder:text-xs',
              )}
              {...register(item.name)}
            />
          )}

          {formState.errors[item.name] && (
            <p className="text-xs text-red-500">{formState.errors[item.name].message}</p>
          )}
        </div>
      ))}
      {error && <p className="text-center text-xs text-red-500">{error}</p>}
      <div className="m-auto flex gap-4">
        <MainButton
          type="submit"
          variant="primary"
          text={isLoading ? 'Creating' : CTA.CREATE}
          className=""
          size="sm"
        />
        <MainButton
          type="submit"
          variant="secondary"
          onClick={toggleModal}
          className=""
          text="Cancel"
          size="sm"
        />
      </div>
    </form>
  );
}

export default ClassForm;
