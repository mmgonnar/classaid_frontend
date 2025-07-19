'use client';

import ClassContext from '@/context/ClassContext';
import { updateSubjectValidation } from '@/schemas/subjectSchema';
import { classFormInput } from '@/utils/constants';
import { CTA } from '@/utils/enums';
import { apiCallToast } from '@/utils/functions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MainButton from '../buttons/MainButton';

function EditClassForm({ toggleModal, currentClass }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleUpdateClass } = useContext(ClassContext);

  const { handleSubmit, register, formState, reset, setValue } = useForm({
    resolver: yupResolver(updateSubjectValidation),
    mode: 'onChange',
  });

  useEffect(() => {
    if (currentClass) {
      Object.keys(currentClass).forEach((key) => {
        setValue(key, currentClass[key]);
      });
    }
  }, [currentClass, setValue]);

  const onSubmit = async (formData) => {
    if (!currentClass) return;
    setLoading(true);
    try {
      const result = await apiCallToast(handleUpdateClass(currentClass._id, formData), {
        loading: 'Updating class...',
        successMessage: 'Class updated correctly',
        errorMessage: 'Error updating class',
      });

      if (result.success) {
        toggleModal();
        reset();
      }
    } catch (error) {
      console.error('Something wrong happened, error:', error);
    } finally {
      setLoading(false);
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
              className="flex w-full resize-none items-center rounded-md border border-neutral-400 p-1 text-sm placeholder:text-xs"
              {...register(item.name)}
            />
          ) : (
            <input
              type={item.type}
              name={item.name}
              id={item.id}
              placeholder={item.placeholder}
              className="placeholder:text-xs' flex w-full max-w-90 items-center rounded-md border border-neutral-400 p-1 text-sm"
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
          type="button"
          variant="secondary"
          onClick={toggleModal}
          className="border-neutral-200 text-neutral-200 hover:border-neutral-200"
          text="Cancel"
          size="sm"
        />
        <MainButton
          type="submit"
          variant="primary"
          text={loading ? 'Creating' : CTA.SUBMIT}
          className=""
          size="sm"
        />
      </div>
    </form>
  );
}

export default EditClassForm;
