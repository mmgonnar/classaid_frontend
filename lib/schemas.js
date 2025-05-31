import * as yup from 'yup';
import YupPassword from 'yup-password';
import { emailPattern } from '@/utils/constants';
YupPassword(yup);

const nameValidationSchema = {
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(25)
    .required()
    .matches(/[a-zA-Z ]/, 'Name can only contain letters.'),
};

const lastNameValidationSchema = {
  lastName: yup
    .string()
    .default('')
    // .min(2, 'Last name must be at least 2 characters')
    // .max(30, 'Last name cannot exceed 30 characters')
    .notRequired(),
};

const emailValidation = {
  email: yup
    .string('Please include an "@" in the address')
    .email('Enter valid email')
    .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
    .required('Email is a required field'),
};

const activeSchema = {
  active: yup.boolean().default(true),
};

const passwordValidationSchema = {
  password: yup
    .string()
    .min(4, 'Passwords must be four or more characters')
    .required('Password is a required field'),
};
const confirmPasswordValidation = {
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
};

export const updateUser = yup.object({
  ...nameValidationSchema,
  ...lastNameValidationSchema,
  ...emailValidation,
});

export const baseValidationSchema = yup.object({
  ...nameValidationSchema,
  ...lastNameValidationSchema,
  ...emailValidation,
});

//validation backend
export const validationBack = baseValidationSchema;
//validation frontend
export const validationFront = baseValidationSchema.shape({
  ...confirmPasswordValidation,
  ...passwordValidationSchema,
});
// Validation UPDATE USER
export const validationUpdateUser = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(25)
    .notRequired()
    .matches(/[a-zA-Z ]/, 'Name can only contain letters.'),
  lastName: yup.string().default('').notRequired(),
  email: yup
    .string('Please include an "@" in the address')
    .email('Enter valid email')
    .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
    .notRequired(),
});

export const studentValidation = yup.object().shape({
  ...nameValidationSchema,
  ...lastNameValidationSchema,
  studentNumber: yup.string().notRequired(),
  ...lastNameValidationSchema,
});

export const classValidationSchema = yup.object().shape({
  ...nameValidationSchema,
  description: yup.string().max(200, 'Description cannot exceed 200 characters.').notRequired(),
});
