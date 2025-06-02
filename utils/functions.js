import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function handleError(error) {
  let errorMessage;
  if (!error || !error.message) {
    return 'An unexpected error occurred. Please try again.';
  }

  switch (error.message) {
    case 'duplicate key error collection':
      errorMessage = 'The provided data is already registered.';
      return errorMessage;
    case 'email_exist':
      errorMessage = 'Please use a different email address.';
      return errorMessage;

    default:
      errorMessage = 'Something wrong happened';
      return errorMessage;
  }
}

// export const generalErrorMessage = (er) => {
//   handleErrorMessage(error);
// };
