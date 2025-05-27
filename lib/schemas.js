import * as yup from 'yup';
import YupPassword from 'yup-password';
import { emailPattern } from '@/utils/constants';
YupPassword(yup);

const nameValidationSchema = {
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25).required(),
};

const lastNameValidationSchema = {
  lastName: yup.string(),
  // .min(2, 'Last name must be at least 2 characters')
  // .max(30, 'Last name cannot exceed 30 characters'),
};

const activeSchema = {
  active: yup.boolean().default(true),
};

const confirmPassword = {
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
};

export const base = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25).required(),
  email: yup
    .string('Please include an "@" in the address')
    .email('Enter valid email')
    .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(4, 'Passwords must be four or more characters')
    .required('Password is a required field'),
});

export const baseBack = base;

export const validationFont = base.shape({
  ...lastNameValidationSchema,
  ...confirmPassword,
});

export const userValidationSchema = yup.object().shape({
  ...nameValidationSchema,
  ...lastNameValidationSchema,
  email: yup
    .string('Please include an "@" in the address')
    .email('Enter valid email')
    .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(4, 'Passwords must be four or more characters')
    .required('Password is a required field'),
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
//.when
