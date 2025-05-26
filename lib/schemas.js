import * as yup from 'yup';
import YupPassword from 'yup-password';
import { emailPattern } from '@/utils/constants';
YupPassword(yup);

const nameValidationSchema = {
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25).required(),
};

const lastNameValidationSchema = {
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(30, 'Last name cannot exceed 30 characters')
    .required('Last name is required'),
};

const activeSchema = {
  active: yup.boolean().default(true),
};

export const userSchema = yup.object().shape({
  ...nameValidationSchema,
  email: yup
    .string('Please include an "@" in the address')
    .email('Enter valid email')
    .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(4, 'Passwords must be four or more characters')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const studentValidation = yup.object().shape({
  ...nameValidationSchema,
  ...lastNameValidationSchema,
  studentNumber: yup.string().notRequired(),
});

export const classValidationSchema = yup.object().shape({
  ...nameValidationSchema,
  description: yup.string().max(200, 'Description cannot exceed 200 characters.').notRequired(),
});
