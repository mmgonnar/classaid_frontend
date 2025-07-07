import { clsx } from 'clsx';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function handleError(error) {
  let errorMessage;
  if (!error || !error.message) {
    return 'An unexpected error occurred. Please try again.';
  }

  if (error.message.includes('duplicate key error collection')) {
    return 'Please use a different email address.';
  }
  switch (error.message) {
    case 'duplicate key error collection':
      errorMessage = 'Please use a different email address.';
      return errorMessage;
    case 'email_exist':
      errorMessage = 'Please use a different email address.';
      return errorMessage;
    default:
      errorMessage = 'Something wrong happened';
      return errorMessage;
  }
}

export function apiCallToast(fetch, { loading, redirectTo, successMessage, errorMessage, router }) {
  return toast.promise(fetch, {
    loading: loading,
    success: (response) => {
      if (!response.success) {
        throw new Error(response.message);
      }
      if (redirectTo && router) {
        router.push(redirectTo);
      }
      return successMessage;
    },
    error: (error) => error.message || errorMessage,
  });
}
